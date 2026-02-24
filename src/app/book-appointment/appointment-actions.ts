
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
  const validatedFields = appointmentSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid form data.",
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

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  
    await transporter.sendMail({
      from: `"AmeeShree Jewels Website" <${process.env.EMAIL_USER}>`,
      to: "ameeshree.jewels@gmail.com",
      subject: subject,
      text: body,
    });
  
    return {
      success: true,
      message:
        "Your appointment request has been sent successfully. Our team will contact you shortly.",
    };
  } catch (error) {
    console.error("Email sending failed:", error);
    return {
      success: false,
      message: "There was a problem sending your request. Please try again later.",
    };
  }
}
