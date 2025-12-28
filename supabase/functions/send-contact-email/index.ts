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
    const adminEmailRes = await fetch("https://api.resend.com/emails", {
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

    if (!adminEmailRes.ok) {
      const error = await adminEmailRes.text();
      console.error("Resend API error (admin email):", error);
      throw new Error(`Failed to send admin email: ${error}`);
    }

    console.log("Admin email sent successfully");

    // Send confirmation email to the person who submitted the inquiry
    const confirmationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "BrainDevelopEdu <onboarding@resend.dev>",
        to: [email],
        subject: "Thank You for Contacting BrainDevelopEdu!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
            <div style="background-color: #ffffff; border-radius: 12px; padding: 30px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #2563eb; margin: 0; font-size: 24px;">Thank You, ${name}!</h1>
              </div>
              
              <p style="font-size: 16px; color: #374151; line-height: 1.6;">
                We have received your inquiry and appreciate you reaching out to us.
              </p>
              
              <p style="font-size: 16px; color: #374151; line-height: 1.6;">
                Our team will review your message and get back to you within <strong>24 hours</strong>.
              </p>
              
              <div style="background-color: #eff6ff; border-left: 4px solid #2563eb; padding: 15px; margin: 25px 0; border-radius: 0 8px 8px 0;">
                <p style="margin: 0; color: #1e40af; font-size: 14px;"><strong>Your Message Summary:</strong></p>
                <p style="margin: 10px 0 0 0; color: #374151; font-size: 14px;">${subject || "General Inquiry"}</p>
              </div>
              
              <p style="font-size: 16px; color: #374151; line-height: 1.6;">
                In the meantime, if you have any urgent questions, feel free to call us at:
              </p>
              
              <p style="text-align: center; margin: 20px 0;">
                <a href="tel:+919805500827" style="display: inline-block; background-color: #2563eb; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">
                  📞 +91 98055 00827
                </a>
              </p>
              
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 25px 0;">
              
              <p style="font-size: 14px; color: #6b7280; text-align: center; margin: 0;">
                Warm regards,<br>
                <strong style="color: #374151;">Team BrainDevelopEdu</strong><br>
                <span style="font-size: 12px;">Discover Your Innate Potential</span>
              </p>
              
              <p style="font-size: 12px; color: #9ca3af; text-align: center; margin-top: 20px;">
                2nd Floor, Thakur Complex, Kotlanala Chowk, Solan, HP – 173212<br>
                <a href="https://www.braindevelopedu.co.in" style="color: #2563eb;">www.braindevelopedu.co.in</a>
              </p>
            </div>
          </div>
        `,
      }),
    });

    if (!confirmationRes.ok) {
      const error = await confirmationRes.text();
      console.error("Resend API error (confirmation email):", error);
      // Don't throw here - admin email was sent, just log the error
    } else {
      console.log("Confirmation email sent successfully to:", email);
    }

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
