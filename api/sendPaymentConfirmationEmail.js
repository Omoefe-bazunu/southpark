import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { toEmail, name = "Applicant" } = req.body;

  if (!toEmail) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    await resend.emails.send({
      from: "info@southparkuni.com",
      to: toEmail,
      subject: "Payment Confirmation - South Park University",
      html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <img style="max-width: 150px; height: auto; display: block; margin: 0 auto 20px;" 
          src="https://firebasestorage.googleapis.com/v0/b/southpark-11f5d.firebasestorage.app/o/maillogo.png?alt=media&token=4ea7081d-2c98-4320-b653-c17eb5d50f47" 
          alt="SouthPark University Logo">
        <h2 style="color: #2e7d32; text-align: center;">Payment Confirmation</h2>
        <p style="color: #333; font-size: 16px;">Dear ${name},</p>
        <p style="color: #333; font-size: 16px;">
          We confirm receipt of your $100 USD payment and submitted documents for verification. Your evaluation is ongoing, and your portal has been updated to "Approved" status.
        </p>
        <p style="color: #333; font-size: 16px;">
          Please check your email and dashboard regularly for updates on your admission.
        </p>
        <p style="color: #333; font-size: 16px;">
          Best regards,<br/>
          South Park University Admissions Team
        </p>
        <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #777;">
          South Park University | RVXC+77, Jacksonville, AR 72076, United States
        </div>
      </div>`,
    });
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
