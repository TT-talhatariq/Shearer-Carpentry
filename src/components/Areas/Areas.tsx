'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  MapPin, 
  Building, 
  Home, 
  Wrench, 
  Hammer, 
  Construction 
} from 'lucide-react';

export default function Areas() {
  const areas = [
    {
      name: 'Plymouth',
      description: 'Main Service Area',
      icon: Building,
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Minneapolis',
      description: 'Service Area',
      icon: Home,
      color: 'from-green-500 to-green-600',
    },
    {
      name: 'Saint Paul',
      description: 'Service Area',
      icon: Wrench,
      color: 'from-purple-500 to-purple-600',
    },
    {
      name: 'Eden Prairie',
      description: 'Service Area',
      icon: Hammer,
      color: 'from-orange-500 to-orange-600',
    },
    {
      name: 'Bloomington',
      description: 'Service Area',
      icon: Construction,
      color: 'from-red-500 to-red-600',
    },
    {
      name: 'Maple Grove',
      description: 'Service Area',
      icon: MapPin,
      color: 'from-teal-500 to-teal-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative md:py-20 py-4 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/20 text-brand text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            Service Coverage
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Areas We Serve
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-brand to-brand-hover rounded-full mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proudly serving the Metro Area and surrounding communities with professional 
            construction and remodeling services. We bring quality craftsmanship to your doorstep.
          </p>
        </motion.div>

        {/* Areas Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {areas.map((area, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${area.color} rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <area.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand transition-colors">
                    {area.name}
                  </h3>
                  <span className="text-sm text-gray-500 font-medium">
                    {area.description}
                  </span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-brand/20 to-brand-hover/20 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-brand/10 to-brand-hover/10 rounded-tl-xl -z-10" />
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-brand to-brand-hover rounded-full hover:from-brand-hover hover:to-brand transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}