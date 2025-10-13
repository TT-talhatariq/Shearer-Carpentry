'use client';

import React from 'react';
import { Phone, Clock, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Help = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-brand/10 via-brand/5 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-brand/20 to-brand/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066cc10_1px,transparent_1px),linear-gradient(to_bottom,#26aeb210_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_40%,transparent_75%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/80" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Emergency Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/20 text-brand text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            EMERGENCY ASSISTANCE
          </div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Need Immediate Help?
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            If you're facing a construction emergency or need urgent assistance, we're here to help. 
            Our experienced team is just a call away, ready to provide prompt and professional emergency services.
          </motion.p>

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center"
          >
            <a
              href="tel:+17632453755"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand to-brand-hover text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:from-brand-hover hover:to-brand transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              Call us
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Help;