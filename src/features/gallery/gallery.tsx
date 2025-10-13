"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import { images } from "./constant";
import Image from "next/image";

export default function Gallery() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        badgeText="Project Gallery"
        title="Our"
        highlightedTitle="Gallery"
        description="Explore our portfolio of completed remodeling and renovation projects. See the quality craftsmanship and attention to detail that sets Shearer Carpentry apart."
      />

      {/* Gallery Section */}
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
              Featured Projects
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-brand to-brand-hover rounded-full mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Browse through our completed projects showcasing our expertise in
              kitchen remodeling, bathroom renovations, basement finishing, and
              custom home construction.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {images.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={src}
                    alt={`Gallery Project ${index + 1}`}
                    fill
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    placeholder="blur"
                    blurDataURL="/blur-placeholder.jpg"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
