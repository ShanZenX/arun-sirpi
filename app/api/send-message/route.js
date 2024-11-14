import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const data = await req.json();  // Parse incoming JSON data

        // Configure Nodemailer using your credentials (App Password if using Gmail)
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,  // Your Gmail address
                pass: process.env.EMAIL_PASS,  // App password or regular password if testing
            },
        });

        const mailOptions = {
          from: data.email,
          to: process.env.RECEIVER_EMAIL,  // Recipient’s email address
          subject: `New message: ${data.subject}`,  // Using subject here for the email's subject line
          text: `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nSubject: ${data.subject}\n\nMessage:\n${data.message}`,
      };
      

        await transporter.sendMail(mailOptions);  // Send the email
        return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({ error: "Failed to send message" }), { status: 500 });
    }
}
