"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import {
  Home,
  Layout,
  Phone,
  Layers,
  Lightbulb,
  Droplets,
  Wind,
  Archive,
  CheckCircle,
  AlertTriangle,
  Wrench,
  Settings,
  Palette,
  Users,
} from "lucide-react";
import Help from "@/components/Help";
import ContactUs from "@/components/ContactUs";
import Areas from "@/components/Areas";
import Image from "next/image";

const BasementRemodeling = () => {
  const services = [
    {
      icon: Wrench,
      title: "Moving and Rearranging Walls",
      description:
        "Optimize your basement's layout by moving or rearranging walls to create a more functional space.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Layout,
      title: "Designing Spaces",
      description:
        "We help design practical and attractive layouts for your basement, tailored to your needs.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Phone,
      title: "Warranty Calls About Water Damage",
      description:
        "We handle all insurance work for water damage claims, navigating the process so you can take full advantage of your insurance without worry.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Layers,
      title: "Flooring Installation",
      description:
        "Choose from a variety of flooring options to enhance the comfort and appearance of your basement.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Lightbulb,
      title: "Lighting Solutions",
      description:
        "Improve the ambiance and functionality of your basement with our expert lighting installations.",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Droplets,
      title: "Insulation and Waterproofing",
      description:
        "Ensure your basement is warm, dry, and energy-efficient with our insulation and waterproofing services.",
      color: "from-cyan-500 to-cyan-600",
    },
  ];

  const problemSigns = [
    {
      icon: AlertTriangle,
      title: "Water Damage",
      description:
        "Stains, mold, or mildew indicate water damage that needs addressing.",
    },
    {
      icon: Wind,
      title: "Poor Insulation",
      description:
        "Cold drafts and high energy bills may signal inadequate insulation.",
    },
    {
      icon: Settings,
      title: "Outdated Design",
      description:
        "An old or impractical layout can make your basement less functional.",
    },
    {
      icon: AlertTriangle,
      title: "Structural Issues",
      description:
        "Cracks in walls or floors can point to structural problems that need fixing.",
    },
    {
      icon: Droplets,
      title: "Damp or Musty Smell",
      description:
        "Persistent odors can be a sign of moisture issues or mold growth.",
    },
    {
      icon: Lightbulb,
      title: "Inadequate Lighting",
      description:
        "A dark, poorly lit basement can benefit from a lighting upgrade.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        badgeText="Basement Remodeling"
        title="Unlock the Potential of Your Basement"
        highlightedTitle=""
        description="Transform your basement into a functional and inviting space with our professional basement remodeling services in Plymouth, MN. We specialize in creating beautiful, practical spaces that maximize your home's potential."
      />

      {/* Our Basement Remodeling Services Include */}
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
              Professional Services
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Our Basement Remodeling Services Include
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
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} mb-4`}
                  >
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

      {/* Signs that Your Basement Might Need A Remodeling Job */}
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
              Warning Signs
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Signs that Your Basement Might Need A Remodeling Job
            </motion.h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-brand to-brand-hover rounded-full mb-6" />
          </div>

          {/* Problem Signs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemSigns.map((sign, index) => (
              <motion.div
                key={sign.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full hover:border-brand/50 hover:shadow-lg transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand/10 text-brand mb-4">
                    <sign.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-brand transition-colors">
                    {sign.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {sign.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Designing Options Available */}
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
              Design Options
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Designing Options Available
            </motion.h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-brand to-brand-hover rounded-full mb-6" />
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  At Shearer Carpentry, we offer a range of design options to
                  suit your needs. We can help you design the space or
                  collaborate with designers to bring your vision to life.
                  Whether you want a cozy family room, a home office, or an
                  entertainment area, we have the expertise to make it happen.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  We specialize in transforming underutilized basement spaces
                  into beautiful, functional areas that add significant value to
                  your home. Our comprehensive approach includes everything from
                  structural modifications and electrical work to finishing
                  touches that make your basement feel like a natural extension
                  of your living space.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Quality craftsmanship and attention to detail are at the heart
                  of everything we do. We use only the finest materials and
                  employ time-tested construction techniques to ensure your
                  basement remodeling project stands the test of time. Our
                  commitment to excellence has earned us a reputation as one of
                  the most trusted contractors in the Plymouth area.
                </p>
              </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="relative h-full">
                <div className="h-full min-h-[200px] lg:min-h-[400px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl">
                  <Image
                  src="/kitchen-eight.jpg"
                    fill
                    priority
                    alt="Professional Basement Remodeling - Shearer Carpentry"
                    className="w-full h-full object-cover rounded-2xl lg:rounded-3xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Areas />
      <Help />
      <ContactUs />
    </div>
  );
};

export default BasementRemodeling;
