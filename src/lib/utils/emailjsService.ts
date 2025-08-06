import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_CONFIG = {
  serviceId: 'service_4538wjk', // From your EmailJS dashboard
  templateId: 'template_w2kfhef', // From your EmailJS dashboard  
  publicKey: 'NRb6NdcFoO3WZsUNr' // Your public key
};

export interface EmailJSParams extends Record<string, unknown> {
  title: string;
  name: string;
  email: string;
  time?: string;
  message: string;
  subject?: string;
  phone?: string;
}

/**
 * Send email using EmailJS
 */
export const sendEmailJS = async (params: EmailJSParams): Promise<boolean> => {
  try {
    console.log('Sending email with EmailJS:', params);
    
    const result = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      params,
      EMAILJS_CONFIG.publicKey
    );
    
    console.log('EmailJS Success:', result);
    return result.status === 200;
  } catch (error) {
    console.error('EmailJS Error:', error);
    return false;
  }
};

/**
 * Send contact form email
 */
export const sendContactEmail = async (formData: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}): Promise<boolean> => {
  return sendEmailJS({
    title: 'Contact Form Submission',
    name: formData.name,
    email: formData.email,
    message: formData.message,
    subject: formData.subject,
    phone: formData.phone,
    time: new Date().toLocaleString()
  });
};

/**
 * Send consultation booking email
 */
export const sendConsultationEmail = async (bookingData: {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  message?: string;
}): Promise<boolean> => {
  return sendEmailJS({
    title: 'Consultation Booking',
    name: bookingData.name,
    email: bookingData.email,
    message: bookingData.message || 'No additional message',
    time: `${bookingData.date} at ${bookingData.time}`,
    phone: bookingData.phone
  });
};

export default {
  sendEmailJS,
  sendContactEmail,
  sendConsultationEmail
};