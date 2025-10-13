'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import Help from '@/components/Help';
import ContactUs from '@/components/ContactUs';
import Areas from '@/components/Areas';
import {
  Wrench,
  Layers,
  Droplets,
  Square,
  Lightbulb,
  ChefHat,
  Archive,
  Home,
  Search,
  Settings,
  Ruler,
  CheckCircle,
} from 'lucide-react';

const KitchenRemodeling = () => {
  const services = [
    {
      icon: Archive,
      title: 'Cabinet Refacing and Replacement',
      description: 'Update your kitchen\'s look with new cabinets or refaced existing ones. Choose from a variety of styles and finishes to match your taste.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Layers,
      title: 'Countertop Installation',
      description: 'Upgrade your kitchen with beautiful and durable countertops. We offer a range of materials, including natural stone and artificial options.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Droplets,
      title: 'Backsplash Design',
      description: 'Add a stylish and functional backsplash to protect your walls and enhance your kitchen\'s aesthetic.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Square,
      title: 'Flooring Upgrades',
      description: 'Replace old flooring with new, durable materials that are both beautiful and easy to maintain.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Lightbulb,
      title: 'Lighting Improvements',
      description: 'Improve the ambiance and functionality of your kitchen with modern lighting solutions, including under-cabinet lighting and pendant lights.',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: ChefHat,
      title: 'Appliance Installation',
      description: 'Install new, energy-efficient appliances that make your kitchen more functional and eco-friendly.',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: Archive,
      title: 'Custom Storage Solutions',
      description: 'Maximize your kitchen space with custom cabinets and storage options designed to meet your needs.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Home,
      title: 'Island and Breakfast Bar Addition',
      description: 'Add an island or breakfast bar for extra workspace and seating, enhancing both form and function.',
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  const features = [
    {
      icon: Home,
      title: 'Expert Updates for Old Houses',
      description: 'We specialize in updating kitchens in older homes, ensuring they are modern, functional, and up-to-date.',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: Search,
      title: 'Quality Materials',
      description: 'We work with both natural and artificial stones and other high-quality materials to suit your style and budget.',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Settings,
      title: 'Customized Features',
      description: 'We offer customized countertops and other kitchen features, ensuring they fit perfectly with your vision and space.',
      color: 'from-violet-500 to-violet-600',
    },
    {
      icon: Ruler,
      title: 'Precision and Care',
      description: 'We take precise measurements and meticulous care to ensure every aspect of your kitchen renovation meets your expectations.',
      color: 'from-rose-500 to-rose-600',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        badgeText="Kitchen Remodeling"
        title="Expert Kitchen Remodeling Services"
        highlightedTitle=""
        description="An outdated kitchen can be unpleasant to look at and inefficient, making cooking and dining a chore. At Shearer Carpentry, we have dedicated years to perfecting the art of kitchen renovation. With our expertise and passion for remodeling, we will take your vision for a modern kitchen and elevate it to the next level."
      />

      {/* Our Kitchen Renovation Solutions */}
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
              Our Kitchen Renovation Solutions
            </motion.h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-brand to-brand-hover rounded-full mb-6" />
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

      {/* Why Choose Our Kitchen Remodeling Services */}
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
              Why Choose Us
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Why Choose Our Kitchen Remodeling Services?
            </motion.h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-brand to-brand-hover rounded-full mb-6" />
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full hover:border-brand/50 hover:shadow-lg transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-brand transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <Areas />
      <Help />
      <ContactUs />
    </div>
  );
};

export default KitchenRemodeling;