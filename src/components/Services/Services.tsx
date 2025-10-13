'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Home,
  Building,
  Wrench,
  Shield,
  Droplets,
  Square,
  ArrowRight,
  CheckCircle,
  Hammer,
  Bath,
  ChefHat,
  Construction,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Construction,
      title: 'Basement Remodeling',
      description:
        'Transform your basement into a functional and stylish space. Whether you need an extra living area, a home office, or a playroom, our expert team will turn your vision into reality.',
      features: [
        'Extra Living Areas',
        'Home Office Spaces',
        'Playroom Design',
        'Complete Transformations',
      ],
      image: '/images/basement.webp',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Bath,
      title: 'Bathroom Remodeling',
      description:
        'Upgrade your bathroom with modern fixtures, stylish designs, and efficient layouts. We handle everything from minor updates to complete overhauls, ensuring a bathroom you\'ll love.',
      features: [
        'Modern Fixtures',
        'Stylish Designs',
        'Efficient Layouts',
        'Complete Overhauls',
      ],
      image: '/images/bathroom.webp',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: ChefHat,
      title: 'Kitchen Remodeling',
      description:
        'Create the kitchen of your dreams with our comprehensive remodeling services. We focus on maximizing space, enhancing functionality, and adding beautiful design elements that make your kitchen the heart of your home.',
      features: [
        'Space Maximization',
        'Enhanced Functionality',
        'Beautiful Design Elements',
      ],
      image: '/images/kitchen.webp',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Home,
      title: 'Custom Home Construction',
      description:
        'Build a custom home that perfectly fits your lifestyle. From unique staircases and chimneys to custom wall features and wet bars, our team will create a home tailored to your needs and preferences.',
      features: [
        'Unique Staircases',
        'Custom Chimneys',
        'Custom Wall Features',
        'Wet Bar Installation',
      ],
      image: '/images/custom-home.webp',
      color: 'from-orange-500 to-orange-600',
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
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-50 via-secondary-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-100/40 to-secondary-100/30" />
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
            Our Construction Services
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-brand to-brand-hover rounded-full mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert carpentry and remodeling services for your home renovation and custom construction projects
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div
                    className={`bg-gradient-to-br ${service.color} p-3 rounded-full`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <Link
                    href="/contact"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-brand text-white font-semibold rounded-full hover:bg-brand-hover transition-all duration-300 text-sm"
                  >
                    Book Now
                  </Link>
                  <Link
                    href="/services"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 border-2 border-brand text-brand font-semibold rounded-full hover:bg-brand/10 transition-all duration-300 text-sm"
                  >
                    View Detail
                  </Link>
                </div>
              </div>

              {/* Decorative Elements */}
              <div
                className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-10 rounded-br-2xl -z-10`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-brand border-2 border-brand rounded-full hover:bg-brand/10 transition-all duration-300"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
