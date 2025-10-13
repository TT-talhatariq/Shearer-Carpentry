'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection
        badgeText="Legal Information"
        title="Privacy"
        highlightedTitle="Policy"
        description="We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our services."
      />

      {/* Privacy Content */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/40 to-gray-100/30" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066cc10_1px,transparent_1px),linear-gradient(to_bottom,#26aeb210_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_40%,transparent_75%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/80" />
          <div className="absolute inset-0 backdrop-blur-[2px]" />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            {/* Last Updated */}
            <p className="text-sm text-gray-500 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            {/* Privacy Sections */}
            <div className="space-y-8">
              {/* 1. Information We Collect */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We collect information you provide directly to us, such as when you request a quote, contact us, or use our services:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Personal identification information (name, email address, phone number, address)</li>
                  <li>Project details and specifications</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Communication records and correspondence</li>
                </ul>
              </div>

              {/* 2. How We Use Your Information */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Provide, operate, and maintain our services</li>
                  <li>Process quotes and project requests</li>
                  <li>Communicate with you about your projects</li>
                  <li>Send you important updates and information</li>
                  <li>Improve our services and customer experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              {/* 3. Information Sharing */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
                <p className="text-gray-600 leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with trusted service providers who assist us in operating our business, conducting our services, or serving you, as long as they agree to keep this information confidential.
                </p>
              </div>

              {/* 4. Data Security */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              {/* 5. Cookies and Tracking */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">5. Cookies and Tracking Technologies</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.
                </p>
              </div>

              {/* 6. Third-Party Services */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">6. Third-Party Services</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may use third-party services for analytics, payment processing, or other functionalities. These services have their own privacy policies, and we encourage you to review them.
                </p>
              </div>

              {/* 7. Your Rights */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Access and review your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
              </div>

              {/* 8. Data Retention */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">8. Data Retention</h2>
                <p className="text-gray-600 leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
              </div>

              {/* 9. Children's Privacy */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                </p>
              </div>

              {/* 10. Changes to Privacy Policy */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">10. Changes to Privacy Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </div>

              {/* 11. Contact Information */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Phone:</strong> (763) 245-3755</p>
                  <p><strong>Email:</strong> <a href="mailto:shearercarpentry@gmail.com" className="text-blue-600 hover:underline">shearercarpentry@gmail.com</a></p>
                  <p><strong>Address:</strong> Plymouth, Minnesota, United States</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;