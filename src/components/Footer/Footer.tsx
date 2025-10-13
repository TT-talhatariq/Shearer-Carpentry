"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Insurance", href: "/insurance" },
    { name: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  const services = [
    {
      name: "Basement Remodeling",
      href: "/services/home-remodeling/basement-remodeling",
    },
    {
      name: "Bathroom Remodeling",
      href: "/services/home-remodeling/bathroom-remodeling",
    },
    {
      name: "Kitchen Remodeling",
      href: "/services/home-remodeling/kitchen-remodeling",
    },
    { name: "Home Construction", href: "/services/home-construction" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-[1440px] mx-auto md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 md:-mt-10"
          >
            <Link href="/" className="block">
              <Image
                src="/images/shearer-carpentry-logo.png"
                alt="Shearer Carpentry"
                width={150}
                height={150}
                className="w-32 h-auto -ms-6 filter brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 leading-relaxed mt-2">
              Professional construction services for your home renovation and
              custom construction projects. Contact us today for a free
              estimate!
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <div className="space-y-3">
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">(763) 245-3755</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">shearercarpentry@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">14322 21st Avenue North</p>
                  <p className="text-gray-300">Plymouth, Minnesota, 55447</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 -mb-8 pb-4 md:pb-0 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <p className="text-gray-400 text-sm text-center md:text-right">
              © {new Date().getFullYear()} Shearer Carpentry. All rights
              reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
