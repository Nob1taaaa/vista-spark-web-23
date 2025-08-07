
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend("re_F4y1NMq3_8Xw5SzTK7Dt1HMhRDpKwjKCB");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  type: 'contact' | 'consultation';
  date?: string;
  time?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, subject, message, type, date, time }: ContactEmailRequest = await req.json();

    console.log('Received email request:', { name, email, type, subject });

    let emailSubject = '';
    let emailContent = '';

    if (type === 'consultation') {
      emailSubject = '🗓️ New Consultation Booking Request - TruTalenza';
      emailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px;">
          <div style="background-color: #6B46C1; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">New Consultation Booking</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">TruTalenza Website</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px;">
            <h2 style="color: #6B46C1; margin-top: 0;">📋 Booking Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">👤 Name:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">📧 Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #6B46C1;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">📱 Phone:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">📅 Date:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong style="color: #6B46C1;">${date}</strong></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">⏰ Time:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong style="color: #6B46C1;">${time}</strong></td>
              </tr>
            </table>
            
            ${message && message.trim() ? `
              <div style="margin-top: 20px;">
                <h3 style="color: #6B46C1; margin-bottom: 10px;">💬 Additional Message:</h3>
                <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #6B46C1; border-radius: 4px;">
                  ${message}
                </div>
              </div>
            ` : ''}
            
            <div style="margin-top: 30px; padding: 20px; background-color: #f0f9ff; border-radius: 8px; border-left: 4px solid #3b82f6;">
              <h4 style="margin: 0 0 10px 0; color: #1e40af;">⚡ Action Required</h4>
              <p style="margin: 0; color: #1e40af;">Please respond to this consultation request as soon as possible to confirm the appointment.</p>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
            <p>This email was sent from your TruTalenza website contact form.</p>
          </div>
        </div>
      `;
    } else {
      emailSubject = subject ? `📩 ${subject} - TruTalenza Contact` : '📩 New Contact Form Submission - TruTalenza';
      emailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px;">
          <div style="background-color: #6B46C1; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">New Contact Message</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">TruTalenza Website</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px;">
            <h2 style="color: #6B46C1; margin-top: 0;">📋 Contact Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">👤 Name:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">📧 Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #6B46C1;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">📱 Phone:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">📝 Subject:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${subject || 'No subject provided'}</td>
              </tr>
            </table>
            
            <div style="margin-top: 20px;">
              <h3 style="color: #6B46C1; margin-bottom: 10px;">💬 Message:</h3>
              <div style="background-color: #f8f9fa; padding: 20px; border-left: 4px solid #6B46C1; border-radius: 4px; line-height: 1.6;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background-color: #f0f9ff; border-radius: 8px; border-left: 4px solid #3b82f6;">
              <h4 style="margin: 0 0 10px 0; color: #1e40af;">⚡ Action Required</h4>
              <p style="margin: 0; color: #1e40af;">Please respond to this inquiry as soon as possible.</p>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
            <p>This email was sent from your TruTalenza website contact form.</p>
          </div>
        </div>
      `;
    }

    console.log('Attempting to send email with subject:', emailSubject);

    const emailResponse = await resend.emails.send({
      from: "TruTalenza Website <trutalenza.api@gmail.com>",
      to: ["trutalenza.api@gmail.com"],
      subject: emailSubject,
      html: emailContent,
      replyTo: email
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
