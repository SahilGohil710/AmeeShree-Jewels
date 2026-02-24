
'use server';

import * as z from 'zod';
// Nodemailer import removed

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  subject: z.string().min(5, {
    message: 'Subject must be at least 5 characters.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export async function sendContactEmail(data: ContactFormValues) {
  const validation = contactFormSchema.safeParse(data);

  if (!validation.success) {
    return { success: false, error: 'Invalid form data.' };
  }

  const { name, email, subject, message } = validation.data;

  // Log the form submission to the server console instead of sending an email
  console.log('Contact Form Submitted (Email Sending Disabled):');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Subject:', subject);
  console.log('Message:', message);

  // Simulate successful submission for the UI
  return { success: true, message: 'Your message has been received (email sending is currently disabled).' };
}
