'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Shield, Clock, Key } from 'lucide-react';

export default function Hero() {
  const features = [
    { icon: Shield, text: 'Licensed & Insured' },
    { icon: Clock, text: 'Emergency Service' },
    { icon: Key, text: 'Free Estimates' },
  ];

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand/10 via-brand/5 to-white pt-28 lg:pt-0">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-brand/20 to-brand/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066cc10_1px,transparent_1px),linear-gradient(to_bottom,#26aeb210_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_40%,transparent_75%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/80" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-20 relative flex items-center min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-80px)]">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full lg:w-[58.33%] flex flex-col gap-6 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {/* Pre-heading */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/20 text-brand text-sm font-medium"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                </span>
                Expert Carpentry Services Available
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                <span className="text-brand">Professional</span> Carpentry &
                Remodeling Solutions
              </h1>

              <motion.p
                className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Expert carpentry services including home remodeling, custom construction,
                kitchen and bathroom renovations. Quality craftsmanship with
                guaranteed results for residential properties in the Metro Area.
              </motion.p>

              {/* Feature List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4"
              >
                {features.map((feature) => (
                  <div
                    key={feature.text}
                    className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full shadow-sm text-gray-700 text-sm font-medium"
                  >
                    <feature.icon className="w-4 h-4 text-brand" />
                    {feature.text}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-stretch sm:items-center"
            >
              <Link href="/contact" className="group relative w-full sm:w-auto">
                <motion.div
                  className="relative inline-flex w-full sm:w-auto items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-brand hover:bg-brand-hover text-white text-base font-semibold rounded-full overflow-hidden transition-all duration-300 shadow-lg shadow-brand/25 hover:shadow-xl hover:shadow-brand/30"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative flex items-center gap-2">
                    Get Free Quote
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.div>
              </Link>
              <Link
                href="/services"
                className="group relative w-full sm:w-auto"
              >
                <motion.div
                  className="relative inline-flex w-full sm:w-auto items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-brand text-brand bg-white hover:bg-brand/10 text-base font-semibold rounded-full overflow-hidden transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative flex items-center gap-2">
                    Our Services
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-full lg:w-[41.67%] relative"
          >
            <motion.div
              className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-brand/10 to-brand/5 rounded-[2rem] sm:rounded-[2.5rem]" />
              <div className="relative h-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image
                  src="/image/hero-bg.jpg"
                  alt="Professional Carpentry Services - Shearer Carpentry"
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
