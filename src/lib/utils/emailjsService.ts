import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_your_id'; // Replace with your actual service ID
const EMAILJS_TEMPLATE_ID = 'template_your_id'; // Replace with your actual template ID
const EMAILJS_PUBLIC_KEY = 'your_public_key'; // Replace with your actual public key

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  message?: string;
}

/**
 * Send contact form email using EmailJS
 */
export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: 'trutalenza.api@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Contact email sent successfully:', response);
    return response.status === 200;
  } catch (error) {
    console.error('Error sending contact email:', error);
    return false;
  }
};

/**
 * Send consultation booking email using EmailJS
 */
export const sendConsultationEmail = async (formData: ConsultationFormData): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: 'trutalenza.api@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: 'New Consultation Booking Request',
      message: `
        Consultation Booking Details:
        
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Preferred Date: ${formData.date}
        Preferred Time: ${formData.time}
        ${formData.message ? `Message: ${formData.message}` : ''}
      `,
      preferred_date: formData.date,
      preferred_time: formData.time,
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Consultation email sent successfully:', response);
    return response.status === 200;
  } catch (error) {
    console.error('Error sending consultation email:', error);
    return false;
  }
};

export default {
  sendContactEmail,
  sendConsultationEmail,
};