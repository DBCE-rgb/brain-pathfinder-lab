import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received contact form submission request");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, subject, message }: ContactFormRequest = await req.json();
    
    console.log("Processing inquiry from:", name, email);

    // Format the current date and time
    const now = new Date();
    const dateTime = now.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    // Send email notification to admin using Resend API
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "BrainDevelopEdu <onboarding@resend.dev>",
        to: ["braindevelopmenteducation360@gmail.com"],
        subject: "New Inquiry Received – BrainDevelopEdu Website",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">New Inquiry Received</h2>
            
            <p style="font-size: 16px; color: #374151;">New inquiry received from the website.</p>
            
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #6b7280; width: 120px;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #111827;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #6b7280;">Mobile:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #111827;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #6b7280;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #111827;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #6b7280;">Subject:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #111827;">${subject || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #6b7280; vertical-align: top;">Message:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #111827;">${message}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #6b7280;">Submitted On:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #111827;">${dateTime}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #6b7280;">Source:</td>
                <td style="padding: 10px; color: #111827;">Website Contact Form</td>
              </tr>
            </table>
            
            <p style="font-size: 12px; color: #9ca3af; margin-top: 20px;">This is an automated email from BrainDevelopEdu website.</p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Resend API error:", error);
      throw new Error(`Failed to send email: ${error}`);
    }

    const data = await res.json();
    console.log("Email sent successfully:", data);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
