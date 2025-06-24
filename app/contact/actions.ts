"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(formData: FormData) {
  try {
    const data = {
      fullName: formData.get("fullName") as string,
      companyName: formData.get("companyName") as string,
      workEmail: formData.get("workEmail") as string,
      contactNumber: formData.get("contactNumber") as string,
      location: formData.get("location") as string,
      role: formData.get("role") as string,
      message: formData.get("message") as string,
    }

    // Validate required fields
    if (!data.fullName || !data.companyName || !data.workEmail || !data.location || !data.role || !data.message) {
      return {
        success: false,
        message: "Please fill in all required fields.",
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.workEmail)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
      }
    }

    // Send email via Resend
    const emailResult = await resend.emails.send({
      from: "Saanre Contact <noreply@saanre.com>", // Replace with your verified domain
      to: ["info@saanre.com" , "imsoni28@gmail.com" , "creationspvt007@gmail.com"],
      replyTo: data.workEmail,
      subject: `New Business Inquiry from ${data.companyName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Business Inquiry - Saanre</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #374151 100%); padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 300; letter-spacing: 2px;">SAANRE</h1>
              <p style="color: #f59e0b; margin: 10px 0 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">New Business Inquiry</p>
            </div>

            <!-- Content -->
            <div style="padding: 40px 30px;">
              
              <!-- Priority Badge -->
              <div style="background: #fef3c7; border: 1px solid #f59e0b; border-radius: 6px; padding: 12px; margin-bottom: 30px; text-align: center;">
                <span style="color: #92400e; font-weight: 600; font-size: 14px;">🚨 HIGH PRIORITY INQUIRY</span>
              </div>

              <!-- Company Info -->
              <div style="background: #f8fafc; border-radius: 8px; padding: 25px; margin-bottom: 25px; border-left: 4px solid #f59e0b;">
                <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 20px; font-weight: 600;">Company Information</h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280; font-weight: 500; width: 120px;">Company:</td>
                    <td style="padding: 8px 0; color: #1f2937; font-weight: 600;">${data.companyName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Contact:</td>
                    <td style="padding: 8px 0; color: #1f2937;">${data.fullName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Role:</td>
                    <td style="padding: 8px 0; color: #1f2937;">${data.role.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Location:</td>
                    <td style="padding: 8px 0; color: #1f2937;">${data.location}</td>
                  </tr>
                </table>
              </div>

              <!-- Contact Details -->
              <div style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 25px; margin-bottom: 25px;">
                <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 16px; font-weight: 600;">Contact Details</h3>
                <p style="margin: 8px 0; color: #374151;">
                  <strong>Email:</strong> 
                  <a href="mailto:${data.workEmail}" style="color: #f59e0b; text-decoration: none;">${data.workEmail}</a>
                </p>
                ${
                  data.contactNumber
                    ? `
                <p style="margin: 8px 0; color: #374151;">
                  <strong>Phone:</strong> 
                  <a href="tel:${data.contactNumber}" style="color: #f59e0b; text-decoration: none;">${data.contactNumber}</a>
                </p>
                `
                    : ""
                }
              </div>

              <!-- Message -->
              <div style="background: #fefefe; border-left: 4px solid #10b981; border-radius: 8px; padding: 25px; margin-bottom: 30px;">
                <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 16px; font-weight: 600;">Inquiry Message</h3>
                <div style="color: #374151; line-height: 1.7; font-size: 15px; white-space: pre-wrap;">${data.message}</div>
              </div>

              <!-- Action Buttons -->
              <div style="text-align: center; margin: 30px 0;">
                <a href="mailto:${data.workEmail}?subject=Re: Your Saanre Inquiry" 
                   style="display: inline-block; background: #1f2937; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 0 10px;">
                  Reply to ${data.fullName}
                </a>
                <a href="tel:${data.contactNumber || ""}" 
                   style="display: inline-block; background: #f59e0b; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 0 10px;">
                  Call Now
                </a>
              </div>

            </div>

            <!-- Footer -->
            <div style="background: #f8fafc; padding: 20px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; margin: 0; font-size: 13px;">
                This inquiry was submitted through the Saanre website contact form on ${new Date().toLocaleDateString(
                  "en-US",
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  },
                )}
              </p>
              <p style="color: #9ca3af; margin: 10px 0 0 0; font-size: 12px;">
                Saanre - Bespoke Jewelry Manufacturing | Jaipur, India
              </p>
            </div>

          </div>
        </body>
        </html>
      `,
    })

    // Send auto-reply to customer
    await resend.emails.send({
      from: "Saanre Team <noreply@saanre.com>", // Replace with your verified domain
      to: [data.workEmail],
      subject: "Thank you for your inquiry - Saanre",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank you - Saanre</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #374151 100%); padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 300; letter-spacing: 2px;">SAANRE</h1>
              <p style="color: #f59e0b; margin: 10px 0 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Bespoke Jewelry Manufacturing</p>
            </div>

            <!-- Content -->
            <div style="padding: 40px 30px;">
              
              <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 24px; font-weight: 300;">Thank you, ${data.fullName}</h2>
              
              <p style="color: #374151; line-height: 1.7; margin-bottom: 25px;">
                We have received your inquiry regarding bespoke jewelry manufacturing for <strong>${data.companyName}</strong>. 
                Your message is important to us, and we appreciate you considering Saanre for your manufacturing needs.
              </p>

              <div style="background: #f0f9ff; border: 1px solid #0ea5e9; border-radius: 8px; padding: 20px; margin: 25px 0;">
                <h3 style="color: #0c4a6e; margin: 0 0 10px 0; font-size: 16px;">What happens next?</h3>
                <ul style="color: #374151; margin: 0; padding-left: 20px; line-height: 1.6;">
                  <li>Our team will review your inquiry within 2 business days</li>
                  <li>We'll prepare a confidential consultation proposal</li>
                  <li>A senior team member will contact you directly</li>
                  <li>We'll discuss your specific requirements and timeline</li>
                </ul>
              </div>

              <div style="background: #fefefe; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 20px; margin: 25px 0;">
                <h4 style="color: #1f2937; margin: 0 0 10px 0; font-size: 14px; font-weight: 600;">Your Inquiry Summary:</h4>
                <p style="color: #6b7280; margin: 0; font-size: 14px; line-height: 1.6;">${data.message.substring(0, 150)}${data.message.length > 150 ? "..." : ""}</p>
              </div>

              <p style="color: #374151; line-height: 1.7; margin: 25px 0;">
                At Saanre, we understand the importance of confidentiality in bespoke manufacturing. 
                Rest assured that your inquiry and any future discussions will be treated with the utmost discretion.
              </p>

              <div style="text-align: center; margin: 30px 0;">
                <p style="color: #6b7280; margin: 0; font-size: 14px;">Need immediate assistance?</p>
                <p style="color: #1f2937; margin: 5px 0 0 0; font-weight: 600;">
                  Email: <a href="mailto:business@saanre.in" style="color: #f59e0b; text-decoration: none;">business@saanre.in</a>
                </p>
              </div>

            </div>

            <!-- Footer -->
            <div style="background: #f8fafc; padding: 20px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; margin: 0; font-size: 13px; font-style: italic;">
                "We don't just make jewelry. We make the piece that completes your vision."
              </p>
              <p style="color: #9ca3af; margin: 10px 0 0 0; font-size: 12px;">
                Saanre Studio & Manufacturing Unit | Jaipur, India
              </p>
            </div>

          </div>
        </body>
        </html>
      `,
    })

    console.log("Email sent successfully:", emailResult)

    return {
      success: true,
      message:
        "Thank you for your inquiry! We've sent you a confirmation email and will respond within 2 business days.",
    }
  } catch (error) {
    console.error("Contact form error:", error)

    // More specific error handling
    if (error instanceof Error) {
      if (error.message.includes("API key")) {
        return {
          success: false,
          message: "Email service configuration error. Please contact us directly at business@saanre.in",
        }
      }
      if (error.message.includes("domain")) {
        return {
          success: false,
          message: "Email delivery issue. Please try again or contact us directly at business@saanre.in",
        }
      }
    }

    return {
      success: false,
      message:
        "Sorry, there was an error sending your message. Please try again or contact us directly at business@saanre.in",
    }
  }
}
