'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import Help from '@/components/Help';
import {
  Wrench,
  ShowerHead,
  LayoutGrid,
  Monitor,
  Lightbulb,
  Archive,
  Zap,
  Mountain,
  Square,
  Table,
  CheckCircle,
} from 'lucide-react';
import ContactUs from '@/components/ContactUs';
import Areas from '@/components/Areas';

const BathroomRemodeling = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Fixture Upgrades',
      description: 'Replace old faucets, showerheads, and toilets with modern, water-efficient models that enhance both style and functionality.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: ShowerHead,
      title: 'Shower and Bathtub Installation',
      description: 'Install new showers and bathtubs that fit your needs and space, from luxurious spa-like tubs to practical, space-saving showers.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: LayoutGrid,
      title: 'Tile Work',
      description: 'Update your bathroom with new tiles for the floors and walls. Choose from a variety of materials and designs to match your style.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Monitor,
      title: 'Vanity and Countertop Replacement',
      description: 'Upgrade your vanity and countertops with materials that add beauty and durability to your bathroom.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Lightbulb,
      title: 'Lighting Improvements',
      description: 'Improve the ambiance and functionality of your bathroom with modern lighting solutions, including recessed lighting and vanity lights.',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Archive,
      title: 'Storage Solutions',
      description: 'Maximize your space with custom cabinets and shelving that provide ample storage for all your bathroom essentials.',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: Zap,
      title: 'Plumbing and Electrical Updates',
      description: 'Ensure your bathroom is safe and up to code with our expert plumbing and electrical services.',
      color: 'from-pink-500 to-pink-600',
    },
  ];

  const materials = [
    {
      icon: Mountain,
      title: 'Natural Stone',
      description: 'Choose from luxurious natural stones like marble or granite for a timeless, elegant look.',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Square,
      title: 'Artificial Stone',
      description: 'Opt for durable and cost-effective artificial stones like quartz, which offer a variety of colors and patterns.',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: Table,
      title: 'Custom Bathroom Tops',
      description: 'We can customize bathroom countertops to fit your specific measurements and design preferences, ensuring a perfect fit for your space.',
      color: 'from-emerald-500 to-emerald-600',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        badgeText="Bathroom Remodeling"
        title="Update Your Old Bathroom"
        highlightedTitle=""
        description="Having an outdated bathroom can be a constant reminder of the past. At Shearer Carpentry, we offer modern bathroom renovation solutions for any home. From designing to remodeling, we'll give you an up-to-date bathroom within your vision and budget."
      />

      {/* Our Bathroom Remodeling Solutions */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
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
              Professional Solutions
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Our Bathroom Remodeling Solutions
            </motion.h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-brand to-brand-hover rounded-full mb-6" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              We specialize in updating bathrooms in old homes, ensuring they are modern, functional, and beautiful. Our most common renovations include:
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full hover:border-brand/50 hover:shadow-lg transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} mb-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-brand transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Natural or Artificial Material Options */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
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
              Material Options
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Natural or Artificial Material Options
            </motion.h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-brand to-brand-hover rounded-full mb-6" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              We offer a wide range of material options to suit your style and budget:
            </motion.p>
          </div>

          {/* Materials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((material, index) => (
              <motion.div
                key={material.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full hover:border-brand/50 hover:shadow-lg transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${material.color} mb-4`}>
                    <material.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-brand transition-colors">
                    {material.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {material.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <Areas/>
      <Help />
      <ContactUs />
    </div>
  );
};

export default BathroomRemodeling;