'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Shield, Award, Users, Clock, CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const values = [
    {
      icon: Shield,
      title: 'More Than 20 Years of Experience',
      description:
        'We have been in business for 18 years, providing reliable and high-quality construction services.',
      highlight: 'Licensed & Insured',
    },
    {
      icon: Award,
      title: 'Honesty and Communication',
      description:
        'We always work with your best interests in mind, ensuring transparency and clear communication.',
      highlight: 'Quality Workmanship',
    },
    {
      icon: Users,
      title: 'Educational and Involvement',
      description:
        'We educate and involve you in the process, making sure we stay within your vision and budget. We only do what is necessary, avoiding unnecessary costs.',
      highlight: 'Expert Team',
    },
    {
      icon: Clock,
      title: 'Reliable Service',
      description:
        'Punctual, efficient service delivery with emergency availability when you need us most.',
      highlight: '24/7 Emergency',
    },
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Why Choose Us?
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-brand to-brand-hover rounded-full mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We don't just build homes – we build lasting relationships with our customers through exceptional service, quality craftsmanship, and unwavering commitment to your satisfaction.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand to-brand-hover rounded-full flex items-center justify-center mr-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand transition-colors">
                    {value.title}
                  </h3>
                  <span className="text-sm text-gray-500 font-medium">
                    {value.highlight}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-brand/20 to-brand-hover/20 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
