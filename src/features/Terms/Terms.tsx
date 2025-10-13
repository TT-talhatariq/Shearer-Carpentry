'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Hero Section */}
      <HeroSection
        badgeText="Legal Information"
        title="Terms of"
        highlightedTitle="Service"
        description="Please read these terms carefully before using our services. By engaging with Shearer Carpentry, you agree to be bound by these terms and conditions."
      />

      {/* Terms Content */}
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

            {/* Terms Sections */}
            <div className="space-y-8">
              {/* 1. Acceptance of Terms */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  By engaging Shearer Carpentry for any services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              {/* 2. Services Provided */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">2. Services Provided</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Shearer Carpentry provides professional carpentry and construction services including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Home remodeling and renovation</li>
                  <li>Kitchen and bathroom remodeling</li>
                  <li>Basement finishing and remodeling</li>
                  <li>Custom home construction</li>
                  <li>Carpentry and woodworking services</li>
                  <li>Insurance claim assistance</li>
                </ul>
              </div>

              {/* 3. Estimates and Pricing */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">3. Estimates and Pricing</h2>
                <p className="text-gray-600 leading-relaxed">
                  We provide free detailed estimates for all projects. Estimates are valid for 30 days from the date of issue. All pricing is based on current material costs and labor rates. Prices may be subject to change due to market fluctuations or project modifications.
                </p>
              </div>

              {/* 4. Payment Terms */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Payment terms will be outlined in your specific contract. Our standard payment structure includes:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Initial deposit required to begin work</li>
                  <li>Progress payments as milestones are reached</li>
                  <li>Final payment upon project completion</li>
                  <li>Late fees may apply for overdue payments</li>
                </ul>
              </div>

              {/* 5. Warranty */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">5. Warranty</h2>
                <p className="text-gray-600 leading-relaxed">
                  We provide a warranty on our workmanship as outlined in your specific contract. Material warranties are provided by manufacturers. Warranty terms and conditions will be detailed in your project contract.
                </p>
              </div>

              {/* 6. Insurance and Licensing */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">6. Insurance and Licensing</h2>
                <p className="text-gray-600 leading-relaxed">
                  Shearer Carpentry is fully licensed and insured. We carry general liability insurance and workers' compensation insurance. We ensure all work complies with local building codes and obtain necessary permits when required.
                </p>
              </div>

              {/* 7. Limitation of Liability */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our liability is limited to the cost of the services provided. We are not responsible for pre-existing conditions or damages not caused by our work. We take reasonable precautions to protect your property during construction.
                </p>
              </div>

              {/* 8. Force Majeure */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">8. Force Majeure</h2>
                <p className="text-gray-600 leading-relaxed">
                  We shall not be liable for any delay or failure to perform due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, government actions, or other unforeseeable events.
                </p>
              </div>

              {/* 9. Dispute Resolution */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">9. Dispute Resolution</h2>
                <p className="text-gray-600 leading-relaxed">
                  Any disputes arising from our services will be resolved through good faith negotiation. If resolution cannot be reached, disputes will be subject to binding arbitration in accordance with Minnesota state law.
                </p>
              </div>

              {/* 10. Changes to Terms */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of our services after changes constitutes acceptance of the new terms.
                </p>
              </div>

              {/* 11. Contact Information */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
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

export default Terms;