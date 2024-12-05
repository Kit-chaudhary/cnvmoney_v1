export const EmailVerifyTemplate = async (userId: any) => `
<!DOCTYPE html>
<html>
  <head>
    <title>Thank You</title>
    <style>
      body {
        font-family: Arial, sans-serif;
      }

      .main-container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
      }

      .div-logo {
        width: 100%;
        text-align: center;
      }

      .logo {
        width: 200px;
      }

      h1 {
        color: #333;
        width: 100%;
        text-align: center;
      }

      .f-para {
        color: #3f3f3f;
        text-align: center;
        padding: 0px 15px 0px 15px;
      }

      .s-para {
        color: #3f3f3f;
        text-align: center;
      }

      .f-btn {
        text-align: center;
        padding: 0px 15px 0px 15px;
      }

      p {
        color: #666;
        width: 100%;
        text-align: center;
      }

      .button {
        display: inline-block;
        padding: 10px 20px;
        background-color: #007bff;
        color: #fff;
        text-decoration: none;
        border-radius: 5px;
        text-align: center;
      }

      .button span {
        color: #fff;
        font-size: 20px;
        font-weight: bold;
      }

      .social-icons {
        margin-top: 20px;
        text-align: center;
      }

      .social-icon {
        margin: 0 5px;
      }

      .social-icon img {
        width: 30px;
        height: 30px;
        gap: 10px;
      }
    </style>
  </head>

  <body>
    <div class="main-container">
      <!-- First Div: Company Logo -->
      <div class="div-logo">
        <img class="logo" src="cid:image1" alt="CNVMONEY Logo" />
      </div>

      <!-- Second Div: Title -->
      <div>
        <h1>Thank You!</h1>
      </div>

      <!-- Third Div: Paragraph -->
      <div class="f-para">
        <p>Dear <strong>${userId}</strong>,</p>
        <p>
          We've received your message. Someone from
          <strong>CNVMONEY</strong> team will contact you soon.
        </p>
        <p>Thank you for visiting <strong>CNVMONEY FinTech</strong> Website.</p>
      </div>

      <!-- Sixth Div: Social Media Icons -->
      <div class="social-icons">
        <a class="social-icon" href="https://www.youtube.com/@cnvmoney"
          ><img src="cid:image2" alt="Youtube"
        /></a>
        <a class="social-icon" href="https://www.instagram.com/cnvmoney"
          ><img src="cid:image3" alt="Instagram"
        /></a>
        <a class="social-icon" href="https://www.facebook.com/cnvmoney"
          ><img src="cid:image4" alt="Facebook"
        /></a>
        <a class="social-icon" href="https://www.linkedin.com/company/cnvmoney"
          ><img src="cid:image5" alt="Linkedin"
        /></a>
      </div>
    </div>
  </body>
</html>


`;

export default EmailVerifyTemplate;