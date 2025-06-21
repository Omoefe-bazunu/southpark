import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { toEmail, name = "Candidate" } = req.body;

  if (!toEmail) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    await resend.emails.send({
      from: "info@southparkuni.com",
      to: toEmail,
      subject:
        "Official Award Notice – South Park University Full-Ride International Scholarship",
      html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <img style="max-width: 150px; height: auto; display: block; margin: 0 auto 20px;" 
          src="https://firebasestorage.googleapis.com/v0/b/southpark-11f5d.firebasestorage.app/o/maillogo.png?alt=media&token=4ea7081d-2c98-4320-b653-c17eb5d50f47" 
          alt="SouthPark University Logo" 
        />
        <p style="color: #333; font-size: 16px;">Dear <strong>${name}</strong>,</p>
        <p style="color: #333; font-size: 16px;">Congratulations!</p>
        <p style="color: #333; font-size: 16px;">
          We are pleased to inform you that you have been awarded a <strong>Full-Ride International Scholarship</strong> to pursue your studies at South Park University for the Fall 2025 intake. This prestigious scholarship covers 100% of your tuition fees and includes comprehensive academic support throughout your program.
        </p>
        <p style="color: #333; font-size: 16px;">
          Your application has been thoroughly reviewed and officially approved by our scholarship committee, based on academic merit, leadership potential, and your expressed goals. Your scholarship status is valid, fully secured, and unconditional.
        </p>
        <h3 style="color: #2e7d32;">Next Step: Delivery of Your Sponsorship Award Certificate</h3>
        <p style="color: #333; font-size: 16px;">
          To initiate your visa process and formally create your student record, you are required to receive the hard copy of your official Sponsorship Award Certificate. This certificate includes a unique QR code that will be used during your U.S. visa interview for authentication and consular documentation.
        </p>
        <h4 style="color: #2e7d32;">Shipping Fee Details</h4>
        <p style="color: #333; font-size: 16px;">(Exchange Rate: $1 = ₦1,650)</p>
        <ul style="color: #333; font-size: 16px;">
          <li><strong>Standard Delivery</strong> – $45 (₦74,250) – Delivery within 5–7 business days</li>
          <li><strong>Express Delivery</strong> – $85 (₦140,250) – Delivery within 2–3 business days</li>
          <li><strong>Optional Insurance</strong> – $25 (₦41,250)* – Protects against loss or damage; insured certificates will be replaced free of charge</li>
        </ul>
        <h4 style="color: #2e7d32;">Payment Instructions</h4>
        <p style="color: #333; font-size: 16px;">
          Bank Name: Guaranty Trust Bank (G.T.B) Plc <br/>
          Account Name: Documents Logistics Services Limited <br/>
          Naira Account: 3001615195 <br/>
          Dollar Account: 3001615360
        </p>
        <p style="color: #333; font-size: 16px;">
          Please send proof of payment to: <a style="color: #2e7d32;" href="mailto:admissions@southparkuni.com">admissions@southparkuni.com</a>
        </p>
        <h3 style="color: #2e7d32;">Stage 2 – Submit Your Required Documents</h3>
        <p style="color: #333; font-size: 16px;">Log in to your student portal and complete Stage 2 by uploading:</p>
        <ol style="color: #333; font-size: 16px;">
          <li>A clear photo of yourself holding your Sponsorship Award Certificate</li>
          <li>Your academic documents:
            <ul>
              <li>High school certificate or diploma</li>
              <li>Academic transcripts</li>
              <li>Valid ID card or international passport</li>
            </ul>
          </li>
        </ol>
        <h4 style="color: #2e7d32;">Visa & Enrollment Timeline</h4>
        <p style="color: #333; font-size: 16px;">
          The Fall 2025 semester begins on <strong>September 28, 2025</strong>.<br/>
          Submit documents promptly to meet U.S. Consulate visa deadlines.
        </p>
        <p style="color: #333; font-size: 16px;">
          Need help? Contact our team at <a style="color: #2e7d32;" href="mailto:admissions@southparkuni.com">admissions@southparkuni.com</a>.
        </p>
        <p style="color: #333; font-size: 16px;">
          Warm regards,<br/>
          Admissions Team<br/>
          🌐 <a style="color: #2e7d32;" href="https://www.southparkuni.com">www.southparkuni.com</a>
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
