'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import {
  Shield,
  FileText,
  Phone,
  CheckCircle,
  AlertTriangle,
  Home,
  Droplets,
  Wind,
} from 'lucide-react';

const Insurance = () => {
  const services = [
    {
      title: "Storm Damage Restoration",
      text: "Repair and rebuild after hail, wind, or other severe weather events.",
      icon: Wind,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: "Water Damage Repair",
      text: "Swift and efficient water extraction, drying, and rebuilding services.",
      icon: Droplets,
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      title: "Fire Damage Restoration",
      text: "Comprehensive cleanup, smoke removal, and reconstruction.",
      icon: AlertTriangle,
      color: 'from-red-500 to-red-600',
    },
    {
      title: "General Remodeling",
      text: "Kitchens, bathrooms, basements, and more.",
      icon: Home,
      color: 'from-green-500 to-green-600',
    },
  ];

  const claimAssistance = [
    {
      title: "Insurance Claim Documentation",
      text: "Accurate and detailed documentation of damages.",
      icon: FileText,
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: "Negotiation with Insurers",
      text: "Ensuring you get the maximum coverage you're entitled to.",
      icon: Shield,
      color: 'from-orange-500 to-orange-600',
    },
    {
      title: "Seamless Communication",
      text: "Keeping you updated throughout the process.",
      icon: Phone,
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  const faqs = [
    {
      question: "How do I start the insurance claim process?",
      answer: "Contact us immediately after the damage occurs. We'll guide you through the steps and help you file your claim correctly."
    },
    {
      question: "What if my insurance company denies my claim?",
      answer: "We'll review the denial and assist you in appealing the decision. Our goal is to ensure you get the coverage you deserve."
    },
    {
      question: "How long will the remodeling process take?",
      answer: "The timeline depends on the extent of the damage and the project scope. We'll provide a detailed timeline after assessment."
    },
    {
      question: "Do you work with all insurance companies?",
      answer: "Yes, we work with all major insurance providers and can help coordinate directly with your adjuster."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection 
        badgeText="Insurance Claims"
        title="Home Insurance"
        highlightedTitle="Claims Assistance"
        description="Expert guidance through insurance claims for your remodeling and restoration projects. We work directly with your insurance company to ensure you get the coverage you deserve."
      />

      {/* Introduction Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/40 to-gray-100/30" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066cc10_1px,transparent_1px),linear-gradient(to_bottom,#26aeb210_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_40%,transparent_75%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/80" />
          <div className="absolute inset-0 backdrop-blur-[2px]" />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex justify-center mb-8"
            >
              <div className="bg-brand/20 rounded-full p-4">
                <Shield className="w-12 h-12 text-brand" />
              </div>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Home Insurance Claims Assistance
            </motion.h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-brand to-brand-hover rounded-full mb-6" />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              We specialize in remodeling and renovation projects and can help you
              navigate the entire process relating to insurance claims. Our team is
              available to efficiently communicate and support you with any
              restoration project involving an insurance claim to rebuild your
              property to its former glory.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-50 via-secondary-50 to-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-100/40 to-secondary-100/30" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066cc10_1px,transparent_1px),linear-gradient(to_bottom,#26aeb210_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_40%,transparent_75%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/80" />
          <div className="absolute inset-0 backdrop-blur-[2px]" />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Insurance Services
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-brand to-brand-hover rounded-full mb-6" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive remodeling services tailored to your insurance claim needs
            </p>
          </motion.div>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-center mb-4">
                    <div className={`bg-gradient-to-br ${service.color} p-3 rounded-full`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {service.text}
                  </p>
                </div>
                <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-10 rounded-br-2xl -z-10`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Claim Assistance Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/40 to-gray-100/30" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066cc10_1px,transparent_1px),linear-gradient(to_bottom,#26aeb210_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_40%,transparent_75%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/80" />
          <div className="absolute inset-0 backdrop-blur-[2px]" />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Claim Assistance
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-brand to-brand-hover rounded-full mb-6" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Navigating insurance claims can be complex we're here to make it seamless for you
            </p>
          </motion.div>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {claimAssistance.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-center mb-4">
                    <div className={`bg-gradient-to-br ${item.color} p-3 rounded-full`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300 text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {item.text}
                  </p>
                </div>
                <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br ${item.color} opacity-10 rounded-br-2xl -z-10`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-50 via-secondary-50 to-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-100/40 to-secondary-100/30" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066cc10_1px,transparent_1px),linear-gradient(to_bottom,#26aeb210_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_40%,transparent_75%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/80" />
          <div className="absolute inset-0 backdrop-blur-[2px]" />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-brand to-brand-hover rounded-full mb-6" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common questions about our insurance claim assistance services
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 ml-4">
                      <svg
                        className="w-5 h-5 text-gray-500 group-hover:text-brand transition-colors duration-300 transform group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insurance;
