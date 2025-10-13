'use client';

import { motion } from 'framer-motion';
import { 
  Phone, 
  Calculator, 
  MessageCircle, 
  Users, 
  Calendar, 
  Hammer, 
  CheckCircle, 
  Heart 
} from 'lucide-react';

export default function Steps() {
  const steps = [
    {
      icon: Phone,
      title: 'First Contact',
      description: 'Schedule an appointment to review the scope and space of your project.',
    },
    {
      icon: Calculator,
      title: 'Estimate',
      description: 'We provide a detailed estimate for the project.',
    },
    {
      icon: MessageCircle,
      title: 'Follow-Up',
      description: 'If we don\'t hear back, we follow up to answer any questions and address concerns.',
    },
    {
      icon: Users,
      title: 'Pre-Construction Meeting',
      description: 'If moving forward, we will meet again to finalize details and answer any questions.',
    },
    {
      icon: Calendar,
      title: 'Scheduling',
      description: 'We build a project schedule using Buildertrend, an app that lets you follow the progress.',
    },
    {
      icon: Hammer,
      title: 'Project Start',
      description: 'We begin the construction or renovation process.',
    },
    {
      icon: CheckCircle,
      title: 'Final Walkthrough',
      description: 'We conduct a final walkthrough to ensure you are happy with the project.',
    },
    {
      icon: Heart,
      title: 'Enjoy the Result',
      description: 'Enjoy your beautifully upgraded or newly constructed space!',
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Construction Process
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-brand to-brand-hover rounded-full mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From initial consultation to final walkthrough, we ensure a smooth and transparent construction process
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-brand to-brand-hover rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-brand transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step Number */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-gray-600">{index + 1}</span>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-brand/10 to-brand-hover/10 rounded-tl-xl -z-10" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}