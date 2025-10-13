'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'sonner';

function EmailTemplate(values: any): string {
  const { name, email, phone, message } = values;

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Message from Contact Us</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background-color: #f8f9fa;
            margin: 0;
            padding: 0;
            line-height: 1.6;
            color: #18181B;
          }
          .email-container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .email-content {
            background-color: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            padding: 32px;
            margin-top: 20px;
          }
          .email-header {
            text-align: center;
            padding-bottom: 24px;
            border-bottom: 1px solid #e5e7eb;
            margin-bottom: 32px;
          }
          .email-header .logo {
            font-size: 24px;
            font-weight: 700;
            color: #16a34a;
            text-decoration: none;
            margin-bottom: 8px;
          }
          .email-header .subtitle {
            color: #64748b;
            font-size: 14px;
            margin-top: 8px;
          }
          .message-content {
            background-color: #f8fafc;
            border-radius: 8px;
            padding: 24px;
            margin: 24px 0;
          }
          .field-group {
            margin-bottom: 16px;
          }
          .field-label {
            font-size: 14px;
            color: #64748b;
            margin-bottom: 4px;
          }
          .field-value {
            font-size: 16px;
            color: #18181B;
            font-weight: 500;
          }
          .message-text {
            white-space: pre-wrap;
            color: #18181B;
            line-height: 1.6;
          }
          .email-footer {
            text-align: center;
            margin-top: 32px;
            padding-top: 24px;
            border-top: 1px solid #e5e7eb;
            color: #64748b;
            font-size: 14px;
          }
          .highlight {
            color: #16a34a;
          }
          .timestamp {
            font-size: 12px;
            color: #94a3b8;
            text-align: right;
            margin-top: 16px;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="email-content">
            <div class="email-header">
              <div class="logo">Shearer Carpentry</div>
              <div class="subtitle">New Contact Form Submission</div>
            </div>
            
            <div class="field-group">
              <div class="field-label">From</div>
              <div class="field-value">${name}</div>
            </div>
            
            <div class="field-group">
              <div class="field-label">Email Address</div>
              <div class="field-value">${email}</div>
            </div>
            
            <div class="field-group">
              <div class="field-label">Phone Number</div>
              <div class="field-value">${phone || 'Not provided'}</div>
            </div>
            
            <div class="message-content">
              <div class="field-label">Message</div>
              <div class="message-text">${message}</div>
            </div>
            
            <div class="timestamp">
              Received on ${new Date().toLocaleString()}
            </div>
            
            <div class="email-footer">
              <div class="highlight">Shearer Carpentry</div>
              <div style="margin-top: 8px">Professional Construction & Remodeling Services</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const email = 'shearercarpentry@gmail.com'; 
      const subject = `New Contact from ${formData.name}`;
      const html = EmailTemplate(formData);

      const response = await fetch(
        'https://api.carzoomo.com/socially/send-email',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, subject, html }),
        },
      );

      if (!response.ok) throw new Error('Failed to send message');

      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again or call us directly.');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100"
      id="contact"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/40 to-gray-100/30" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066cc10_1px,transparent_1px),linear-gradient(to_bottom,#26aeb210_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_40%,transparent_75%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/80" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-brand to-brand-hover rounded-full mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to help with all your construction needs. Reach out to us through any of these channels.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 h-full"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors"
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors"
                  placeholder="(123) 456-7890"
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors resize-none"
                  placeholder="How can we help you?"
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-brand hover:bg-brand-hover text-white py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 h-full flex flex-col"
          >
            <div className="rounded-lg overflow-hidden mb-6 flex-grow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14246949.682729263!2d84.21019930304566!3d29.33339856430196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b373043d3c3429%3A0xcee0731bf78aed6f!2sShearer%20Carpentry!5e0!3m2!1sen!2s!4v1760293419821!5m2!1sen!2s"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
            <a
              href="https://maps.google.com/?q=Shearer+Carpentry"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-brand hover:bg-brand-hover text-white rounded-full py-3 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
