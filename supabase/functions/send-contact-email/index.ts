import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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

    let emailSubject = '';
    let emailContent = '';

    if (type === 'consultation') {
      emailSubject = 'New Consultation Booking Request';
      emailContent = `
        <div style="font-family: system-ui, sans-serif, Arial; font-size: 14px; line-height: 1.6;">
          <h2 style="color: #2c3e50;">New Consultation Booking</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Preferred Date:</strong> ${date}</p>
            <p><strong>Preferred Time:</strong> ${time}</p>
            <p><strong>Message:</strong> ${message || 'No additional message'}</p>
          </div>
          <p>Please respond to this consultation request as soon as possible.</p>
        </div>
      `;
    } else {
      emailSubject = subject || 'New Contact Form Submission';
      emailContent = `
        <div style="font-family: system-ui, sans-serif, Arial; font-size: 14px; line-height: 1.6;">
          <h2 style="color: #2c3e50;">New Contact Form Submission</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #007bff; margin-top: 10px;">
              ${message}
            </div>
          </div>
          <p>Please respond to this inquiry as soon as possible.</p>
        </div>
      `;
    }

    const emailResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["admin@example.com"], // Replace with your actual admin email
      subject: emailSubject,
      html: emailContent,
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