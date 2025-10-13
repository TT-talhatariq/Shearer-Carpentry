'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import Help from '@/components/Help';
import ContactUs from '@/components/ContactUs';
import Areas from '@/components/Areas';
import {
  TrendingUp,
  Home,
  LayoutGrid,
  Wine,
  TreePine,
  Square,
  Umbrella,
  ChefHat,
  Sun,
  Archive,
  Fence,
  Monitor,
  CheckCircle,
} from 'lucide-react';

const HomeConstruction = () => {
  const customSolutions = [
    {
      icon: TrendingUp,
      title: 'Custom Stairs',
      description: 'Create unique, stylish stairs that become a focal point in your home.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Home,
      title: 'Chimneys',
      description: 'Design and build custom chimneys that add character and functionality.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: LayoutGrid,
      title: 'Custom Wall Features',
      description: 'Enhance your walls with custom features like built-ins, accent walls, or decorative paneling.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Wine,
      title: 'Bars and Wet Bars',
      description: 'Install custom bars or wet bars to create the perfect entertainment area.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: TreePine,
      title: 'Custom Patios',
      description: 'Build beautiful, customized patios to extend your living space outdoors.',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Square,
      title: 'Wood Features',
      description: 'Add warmth and elegance with custom wood features, such as built-in shelving, crown molding, and wood paneling.',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: Umbrella,
      title: 'Pergolas',
      description: 'Create outdoor retreats with custom pergolas that provide shade and style.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: ChefHat,
      title: 'Outdoor Kitchens',
      description: 'Design and build outdoor kitchens for seamless indoor-outdoor living.',
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  const additionalServices = [
    {
      icon: Sun,
      title: 'Sunrooms and Additions',
      description: 'Expand your living space with custom sunrooms, room additions, or finished basements.',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: Archive,
      title: 'Custom Cabinetry',
      description: 'Design and install custom cabinets that fit your style and storage needs.',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Fence,
      title: 'Decks and Fencing',
      description: 'Build custom decks and fencing to enhance your outdoor space and privacy.',
      color: 'from-violet-500 to-violet-600',
    },
    {
      icon: Monitor,
      title: 'Home Theaters',
      description: 'Create a personalized home theater experience with custom designs and sound systems.',
      color: 'from-rose-500 to-rose-600',
    },
    {
      icon: CheckCircle,
      title: 'Home Office Spaces',
      description: 'Design functional and stylish home office spaces tailored to your work needs.',
      color: 'from-amber-500 to-amber-600',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        badgeText="Home Construction"
        title="Elevate Your House With Custom Home Construction Services"
        highlightedTitle=""
        description="Every house is a work in progress. There's always room for improvements and additional features that can enhance your living experience and increase your property value. At Shearer Carpentry, we have the expertise, passion, and knowledge to deliver custom home construction solutions that will take your home to the next level."
      />

      {/* Our Customized Home Construction Solutions */}
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
              Custom Solutions
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Our Customized Home Construction Solutions
            </motion.h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-brand to-brand-hover rounded-full mb-6" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Once a house is built, we offer a wide range of custom design and construction services, including:
            </motion.p>
          </div>

          {/* Custom Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full hover:border-brand/50 hover:shadow-lg transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${solution.color} mb-4`}>
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-brand transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
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
              Additional Services
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Additional Services
            </motion.h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-brand to-brand-hover rounded-full mb-6" />
          </div>

          {/* Additional Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
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

      {/* Help Section */}
      <Areas />
      <Help />
      <ContactUs />
    </div>
  );
};

export default HomeConstruction;