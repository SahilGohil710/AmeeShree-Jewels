
"use server";

import { z } from "zod";

const appointmentSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  phone: z.string().min(10, "Invalid phone number"),
  email: z.string().email("Invalid email address"),
  preferredDate: z.string(),
  preferredTime: z.string(),
  visitType: z.enum(["store-visit", "video-consultation", "custom-design-discussion"]),
  message: z.string().optional(),
});

export async function submitAppointment(formData: FormData) {
  try {
    const rawData = Object.fromEntries(formData.entries());
    
    // Safety check before Date manipulation to prevent RangeError
    if (!rawData.preferredDate) {
      return { success: false, message: "Preferred date is required." };
    }

    const dateStr = rawData.preferredDate as string;
    const dateObj = new Date(dateStr);
    
    if (isNaN(dateObj.getTime())) {
      return { success: false, message: "Invalid date provided." };
    }

    const parsed = appointmentSchema.parse({
      ...rawData,
      preferredDate: dateObj.toISOString(),
    });

    console.log("Contact Page Appointment Request:", parsed);

    return { 
      success: true, 
      message: "Appointment request submitted successfully. We will contact you shortly." 
    };
  } catch (error: any) {
    console.error("SERVER ACTION ERROR [contact/submitAppointment]:", error);
    if (error instanceof z.ZodError) {
      return { success: false, message: "Validation failed", errors: error.flatten().fieldErrors };
    }
    return { success: false, message: "An unexpected error occurred. Please try again later." };
  }
}
