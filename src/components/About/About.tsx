'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Star } from 'lucide-react';

export default function About() {
  const commitments = [
    'Free detailed estimates',
    'Quality materials and workmanship',
    'Clean job site cleanup',
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/40 to-gray-100/30" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066cc10_1px,transparent_1px),linear-gradient(to_bottom,#26aeb210_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_40%,transparent_75%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/80" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/20 text-brand text-sm font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            Expert Carpentry Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            About Shearer Carpentry
          </motion.h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-brand to-brand-hover rounded-full mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Expert carpentry and remodeling services in Metro Area, MN. 
            Your trusted partner for high-quality construction and renovation projects.
          </motion.p>
        </div>

        {/* Stats Section */}

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Content and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 lg:mb-6">
                Quality Construction Services & Unmatched Customer Service
              </h3>
              <div className="space-y-4 lg:space-y-6 text-gray-600 leading-relaxed text-sm lg:text-base">
                <p className="text-base lg:text-lg">
                  Finding the right contractor for your renovation can be a challenge. 
                  If not done correctly, a renovation can damage your property and lead 
                  to higher costs than benefits. At Shearer Carpentry, we strive to provide 
                  high-quality construction services and unmatched customer service.
                </p>
                <p>
                  Our goal is to ensure you enjoy your upgraded kitchen, bathroom, or any 
                  other project without any hassle. Contact Shearer Carpentry today at 
                  <strong> (763) 245-3755</strong> or email us at 
                  <strong> shearercarpentry@gmail.com</strong> to start your next home 
                  renovation or custom construction project. We look forward to working with you!
                </p>
             
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mt-8">
              <Link
                href="tel:+17632453755"
                className="inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 bg-brand text-white font-semibold rounded-full hover:bg-brand-hover transition-all duration-300 shadow-lg hover:shadow-xl text-sm lg:text-base"
              >
                Call Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 border-2 border-brand text-brand font-semibold rounded-full hover:bg-brand/10 transition-all duration-300 text-sm lg:text-base"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Right Side - Image and Commitments */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] lg:aspect-[5/3] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl">
                <Image
                  src="/images/hero-bg.jpg"
                  alt="Shearer Carpentry professional construction services"
                  fill
                  className="object-cover rounded-2xl lg:rounded-3xl"
                />
              </div>
              {/* Floating card - Hidden on mobile */}
              {/* <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-3 lg:-bottom-6 -left-3 lg:-left-6 bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-lg lg:shadow-xl border border-gray-100 hidden sm:block"
              >
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-8 h-8 lg:w-12 lg:h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 lg:w-6 lg:h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-lg lg:text-2xl font-bold text-gray-900">
                      5.0
                    </div>
                    <div className="text-xs lg:text-sm text-gray-600">
                      Customer Rating
                    </div>
                  </div>
                </div>
              </motion.div> */}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
