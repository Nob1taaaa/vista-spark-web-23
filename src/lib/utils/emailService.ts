
/**
 * Email Service Utility
 * 
 * This file provides functions for sending emails using your preferred email service.
 * To use this, you'll need to:
 * 1. Connect to Supabase or another backend service
 * 2. Configure an email provider (SendGrid, AWS SES, etc.)
 * 3. Replace the implementation details with actual API calls
 */

export interface EmailOptions {
  to: string | string[];
  subject: string;
  body: string;
  isHtml?: boolean;
  from?: string;
  replyTo?: string;
  attachments?: Array<{
    filename: string;
    content: string | Buffer;
  }>;
}

/**
 * Sends an email using the configured email service.
 * This is a placeholder implementation - replace with actual API calls.
 */
export async function sendEmail(options: EmailOptions): Promise<boolean> {
  try {
    console.log("Sending email with options:", options);
    // In a real implementation, you would call your email service API here
    // Example: await supabase.functions.invoke('send-email', { body: options });
    
    // This is just a placeholder that simulates success
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}

/**
 * Sends a contact form submission email.
 */
export async function sendContactFormEmail(formData: {
  name: string;
  email: string;
  message: string;
  subject?: string;
}): Promise<boolean> {
  const recipientEmail = "your-email@example.com"; // Replace with your email
  
  return sendEmail({
    to: recipientEmail,
    subject: `Contact Form Submission: ${formData.subject || "No Subject"}`,
    body: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Message:</strong></p>
      <p>${formData.message}</p>
    `,
    isHtml: true,
    replyTo: formData.email
  });
}

/**
 * Sends a consultation booking confirmation email to both admin and user.
 */
export async function sendConsultationConfirmation(bookingData: {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  message?: string;
}): Promise<boolean> {
  const adminEmail = "your-email@example.com"; // Replace with your email
  
  // Send email to admin
  const adminEmailSent = await sendEmail({
    to: adminEmail,
    subject: "New Consultation Booking",
    body: `
      <h3>New Consultation Booking</h3>
      <p><strong>Name:</strong> ${bookingData.name}</p>
      <p><strong>Email:</strong> ${bookingData.email}</p>
      <p><strong>Phone:</strong> ${bookingData.phone}</p>
      <p><strong>Date:</strong> ${bookingData.date}</p>
      <p><strong>Time:</strong> ${bookingData.time}</p>
      ${bookingData.message ? `<p><strong>Message:</strong> ${bookingData.message}</p>` : ''}
    `,
    isHtml: true,
    replyTo: bookingData.email
  });
  
  // Send confirmation email to user
  const userEmailSent = await sendEmail({
    to: bookingData.email,
    subject: "Your Consultation Booking Confirmation",
    body: `
      <h3>Booking Confirmation</h3>
      <p>Dear ${bookingData.name},</p>
      <p>Thank you for booking a consultation with us. Here are your booking details:</p>
      <p><strong>Date:</strong> ${bookingData.date}</p>
      <p><strong>Time:</strong> ${bookingData.time}</p>
      <p>We look forward to speaking with you!</p>
      <p>Best regards,<br>Your Company Name</p>
    `,
    isHtml: true
  });
  
  return adminEmailSent && userEmailSent;
}

export default {
  sendEmail,
  sendContactFormEmail,
  sendConsultationConfirmation
};
