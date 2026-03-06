
"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

const appointmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  preferredDate: z.string().refine((val) => val, "Please select a valid date."),
  preferredTime: z.string().refine((val) => val, "Please select a time."),
  visitType: z.enum([
    "store-visit",
    "video-consultation",
    "custom-design-discussion",
  ]),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

export async function submitAppointment(data: AppointmentFormValues) {
  try {
    const validatedFields = appointmentSchema.safeParse(data);

    if (!validatedFields.success) {
      return {
        success: false,
        message: "Invalid form data. Please check the fields and try again.",
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { name, phone, email, preferredDate, preferredTime, visitType } = validatedFields.data;
    
    const visitTypeMap: { [key: string]: string } = {
      "store-visit": "Store Visit",
      "video-consultation": "Video Consultation",
      "custom-design-discussion": "Custom Design Discussion",
    };

    const subject = "New Appointment Request – AmeeShree Jewels";
    const body = `
New Appointment Request

Customer Details:
Name: ${name}
Phone: ${phone}
Email: ${email || 'N/A'}

Appointment Details:
Preferred Date: ${preferredDate}
Preferred Time: ${preferredTime}
Visit Type: ${visitTypeMap[visitType]}

Submitted from website: ameeshreejewels.com
    `.trim();

    // Defensive check for environment variables
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error("[CRITICAL] Missing EMAIL_USER or EMAIL_PASS environment variables.");
      // Fallback for production: Return success but log the failure internally 
      // so the user isn't stuck if it's just an email notification failure.
      // However, for strict requirements, we report a server error.
      throw new Error("SMTP Configuration missing");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });
  
    await transporter.sendMail({
      from: `"AmeeShree Jewels Website" <${emailUser}>`,
      to: "gohilsammy@gmail.com",
      subject: subject,
      text: body,
    });
  
    return {
      success: true,
      message:
        "Your appointment request has been sent successfully. Our team will contact you shortly.",
    };
  } catch (error: any) {
    // Log detailed server error for Firebase logs
    console.error("SERVER ACTION ERROR [submitAppointment]:", {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });

    return {
      success: false,
      message: "Our server is currently experiencing issues. Please try booking via WhatsApp or try again later.",
    };
  }
}
