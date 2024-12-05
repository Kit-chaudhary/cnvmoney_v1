import nodemailer from "nodemailer";
import path from "path";
import EmailVerifyTemplate from "@/Templates/ContactVerify";

export const sendEmail = async ({
  email,
  userId,
}: {
  email: string;
  userId: string;
}) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USERMAIL,
        pass: process.env.PASSMAIL,
      },
    });

    const imagePaths = [
      path.join(process.cwd(), "public/Logo.png"),
      path.join(process.cwd(), "public/social/youtube.png"),
      path.join(process.cwd(), "public/social/instagram.png"),
      path.join(process.cwd(), "public/social/facebook.png"),
      path.join(process.cwd(), "public/social/linkedin.png"),
    ];

    const attachments = imagePaths.map((imagePath, index) => {
      const filename = path.basename(imagePath);
      const cid = `image${index + 1}`;

      return {
        filename,
        path: imagePath,
        cid,
      };
    });

    const htmlContent = await EmailVerifyTemplate(userId);

    const mailOptions = {
      from: process.env.USERMAIL,
      to: email,
      subject: "Thank you!",
      html: htmlContent,
      attachments,
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
