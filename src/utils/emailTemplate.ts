interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
  }
  
  export function EmailTemplate(values: any): string {
    const { name, email, phone, message } = values;
  
    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>New Message from Mira Exteriors</title>
          <style>
            body {
              font-family: 'Helvetica Neue', 'Helvetica', Arial, 'Lucida Grande', sans-serif;
              background-color: #fafafa;
              margin: 0;
              padding: 0;
              color: #333333;
            }
            .email-container {
              width: 95%;
              height: 100%;
              padding: 20px;
              background: linear-gradient(to bottom right, rgba(0, 74, 173, 0.05), rgba(0, 93, 97, 0.05));
            }
            .email-content {
              border: 1px solid rgba(0, 74, 173, 0.1);
              background-color: #ffffff;
              border-radius: 16px;
              max-width: 600px;
              margin: 0 auto;
              padding: 30px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            }
            .email-header {
              text-align: center;
              margin-bottom: 30px;
              padding-bottom: 20px;
              border-bottom: 2px solid rgba(0, 74, 173, 0.1);
            }
            .email-header img {
              max-width: 200px;
              height: auto;
            }
            .email-footer {
              text-align: center;
              margin-top: 40px;
              padding-top: 20px;
              font-weight: 500;
              color: #666666;
              border-top: 2px solid rgba(0, 93, 97, 0.1);
            }
            .email-content h1 {
              font-size: 24px;
              color: #004aad;
              margin: 20px 0 30px 0;
              text-align: center;
            }
            .info-section {
              background: linear-gradient(to right, rgba(0, 74, 173, 0.02), rgba(0, 93, 97, 0.02));
              border-radius: 12px;
              padding: 20px;
              margin: 20px 0;
            }
            .info-item {
              margin: 15px 0;
            }
            .info-label {
              font-size: 14px;
              color: #666666;
              margin-bottom: 5px;
            }
            .info-value {
              font-size: 16px;
              color: #333333;
              font-weight: 500;
            }
            .message-box {
              background-color: #f8f9fa;
              border-radius: 12px;
              padding: 20px;
              margin-top: 20px;
            }
            .contact-info {
              text-align: center;
              margin-top: 30px;
              font-size: 14px;
              color: #666666;
            }
            .highlight {
              color: #004aad;
              font-weight: 600;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="email-content">
              <h1>New Contact Form Submission - Mira Exteriors</h1>
              <div class="info-section">
                <div class="info-item">
                  <div class="info-label">Name:</div>
                  <div class="info-value">${name}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Email:</div>
                  <div class="info-value">${email}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Phone Number:</div>
                  <div class="info-value">${phone}</div>
                </div>
              </div>
              <div class="message-box">
                <div class="info-label">Message:</div>
                <div class="info-value">${message}</div>
              </div>
              <div class="email-footer">
                © Mira Exteriors. All rights reserved.<br/>
                Professional Roofing & Exterior Services<br/>
                Saint Paul, MN | +1 612-756-8585 | miraexteriorsmn@gmail.com
              </div>
            </div>
          </div>
        </body>
      </html>
    `;
  }
  