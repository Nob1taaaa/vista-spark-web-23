
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
    console.log('Sending email via Supabase Edge Function:', data);

    const { data: response, error } = await supabase.functions.invoke('send-contact-email', {
      body: data
    });

    if (error) {
      console.error('Supabase function error:', error);
      return false;
    }

    console.log('Email sent successfully:', response);
    return response?.success || false;
  } catch (error) {
    console.error('Error sending email:', error);
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
