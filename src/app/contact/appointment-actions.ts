
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
    const data = Object.fromEntries(formData.entries());
    const parsed = appointmentSchema.parse({
      ...data,
      preferredDate: new Date(data.preferredDate as string).toISOString(),
    });

    console.log("New Appointment Request:", parsed);

    // Here you would typically send an email
    // For example, using a service like Resend or Nodemailer
    // e.g., await sendEmail({ to: 'admin@ameeshreejewels.com', ... });

    return { success: true, message: "Appointment request submitted successfully. We will contact you shortly." };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, message: "Validation failed", errors: error.flatten().fieldErrors };
    }
    return { success: false, message: "An unexpected error occurred. Please try again." };
  }
}
