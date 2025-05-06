import nodemailer from "nodemailer";
import type { NextRequest } from "next/server";

type TicketItem = {
  name: string;
  price: number;
  quantity: number;
};

// Handle the POST request
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, items } = body;
    console.log(email);
    console.log(items)
    if (!email || !items || !Array.isArray(items)) {
      return new Response(JSON.stringify({ error: "Invalid request data" }), {
        status: 400,
      });
    }

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g., 'smtp.gmail.com'
      port: parseInt(process.env.SMTP_PORT || "587"), // typically 587 for TLS
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Generate email content
    const ticketDetails = items
      .map(
        (item: TicketItem) =>
          `<p>${item.quantity} x ${item.name} (₹${item.price} each) - Total: ₹${
            item.quantity * item.price
          }</p>`
      )
      .join("");

      const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; padding: 20px; background-color: #f9f9f9;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h1 style="color: #ff5722;">Thank You for Booking!</h1>
        </div>
        <p style="font-size: 16px; line-height: 1.6; color: #333;">
          Dear Guest,
        </p>
        <p style="font-size: 16px; line-height: 1.6; color: #333;">
          We are thrilled to confirm your booking for our event. Below are your ticket details:
        </p>
        <div style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; margin: 20px 0; background-color: #fff;">
          ${ticketDetails}
          <p style="font-size: 16px; font-weight: bold; color: #333;">Total Amount Paid: ₹${items.reduce(
            (sum: number, item: TicketItem) => sum + item.quantity * item.price,
            0
          )}</p>
        </div>
        <p style="font-size: 16px; line-height: 1.6; color: #333;">
          We look forward to seeing you at the event! If you have any questions, feel free to reach out to us at <a href="mailto:support@invictakgr.in" style="color: #ff5722; text-decoration: none;">support@invicta.in</a>.
        </p>
        <div style="text-align: center; margin-top: 30px;">
          <a href="http://www.invictakgr.in" style="display: inline-block; padding: 10px 20px; background-color: #ff5722; color: #fff; text-decoration: none; border-radius: 5px; font-size: 16px;">
            Visit Our Website
          </a>
        </div>
        <div style="text-align: center; font-size: 14px; color: #777; margin-top: 20px;">
          <p>&copy; 2025 Invicta Events. All rights reserved.</p>
        </div>
      </div>
    `;
    

    // Send the email
    await transporter.sendMail({
      from: '"Invicta Team" <no-reply@yourdomain.com>', // sender address
      to: email, // recipient email
      subject: "Your Event Ticket(s)",
      html: emailContent, // email content
    });

    return new Response(
      JSON.stringify({ message: "Ticket sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email. Please try again." }),
      { status: 500 }
    );
  }
}
