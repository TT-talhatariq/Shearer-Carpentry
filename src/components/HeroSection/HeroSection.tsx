'use client';

import { motion } from 'framer-motion';

interface HeroSectionProps {
  badgeText?: string;
  title: string;
  highlightedTitle?: string;
  description: string;
}

export default function HeroSection({ 
  badgeText = "Get In Touch",
  title,
  highlightedTitle,
  description 
}: HeroSectionProps) {
  return (
    <section className="relative py-28 pt-48 lg:pt-52 overflow-hidden bg-gradient-to-br from-brand/10 via-brand/5 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-brand/20 to-brand/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066cc10_1px,transparent_1px),linear-gradient(to_bottom,#26aeb210_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_40%,transparent_75%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/80" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/20 text-brand text-sm font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            {badgeText}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            {title} {highlightedTitle && <span className="text-brand">{highlightedTitle}</span>}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
