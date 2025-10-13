"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Star } from "lucide-react";

export default function Awards() {
  const awards = [
    {
      id: 1,
      title: "Readers' Choice",
      subtitle: "STAR News Winner",
      description: "Voted by readers as the top contractor in our area",
      image: "/images/award1.jpg",
      year: "2023",
      category: "Community Choice",
    },
    {
      id: 2,
      title: "Best of Houzz 2024",
      subtitle: "Service Award",
      description:
        "Recognized for exceptional service quality and customer satisfaction",
      image: "/images/award2.jpg",
      year: "2024",
      category: "Service Excellence",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
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
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-brand to-brand-hover rounded-full flex items-center justify-center">
              <Award className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Best Contractor Awards!
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-brand to-brand-hover rounded-full mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognized for excellence in construction services and customer
            satisfaction. We're honored to be trusted by homeowners throughout
            the Metro Area for our quality craftsmanship, reliable service, and
            commitment to exceeding expectations.
          </p>
        </motion.div>

        {/* Awards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {awards.map((award) => (
            <motion.div
              key={award.id}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between h-full"
            >
              {/* Card Inner Wrapper */}
              <div className="flex flex-col items-center flex-grow">
                {/* Award Image */}
                <div className="relative mb-6 w-full">
                  <div className="aspect-square w-full max-w-xs mx-auto rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={award.image}
                      alt={award.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 bg-brand text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {award.year}
                  </div>
                </div>

                {/* Award Content */}
                <div className="text-center flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex justify-center mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-brand transition-colors">
                      {award.title}
                    </h3>

                    <p className="text-lg font-semibold text-brand mb-3">
                      {award.subtitle}
                    </p>

                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-4">
                      {award.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Category Badge (bottom aligned) */}
              <div className="mt-auto inline-flex items-center px-4 py-2 bg-gray-100 rounded-full self-center">
                <span className="text-sm font-medium text-gray-700">
                  {award.category}
                </span>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-br from-brand/20 to-brand-hover/20 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br from-brand/10 to-brand-hover/10 rounded-tl-xl -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
