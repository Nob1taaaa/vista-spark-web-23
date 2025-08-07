
import { supabase } from '@/integrations/supabase/client';

interface EmailRequest {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  type: 'contact' | 'consultation';
  date?: string;
  time?: string;
}

export const sendEmail = async (data: EmailRequest): Promise<boolean> => {
  try {
    console.log('Email sending temporarily disabled. Would have sent:', data);
    // Email sending is temporarily disabled
    return true; // Return success without actually sending
  } catch (error) {
    console.error('Error in email service:', error);
    return false;
  }
};

export const sendContactFormEmail = async (formData: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}): Promise<boolean> => {
  return sendEmail({
    ...formData,
    type: 'contact'
  });
};

export const sendConsultationConfirmation = async (bookingData: {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  message?: string;
}): Promise<boolean> => {
  return sendEmail({
    ...bookingData,
    message: bookingData.message || 'No additional message',
    type: 'consultation'
  });
};

export default {
  sendEmail,
  sendContactFormEmail,
  sendConsultationConfirmation
};
