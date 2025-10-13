'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import ContactUs from '@/components/ContactUs';
import HeroSection from '@/components/HeroSection';

export default function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 2000);
  };

  const contactCards = [
    {
      icon: Phone,
      title: 'Phone',
      details: '(763) 245-3755',
      description: 'Available for estimates and consultations',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'shearercarpentry@gmail.com',
      description: 'We respond within 24 hours',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Plymouth, Minnesota',
      description: 'Serving the greater Metro Area',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection 
        badgeText="Get In Touch"
        title="Contact"
        highlightedTitle="Us"
        description="Get in touch for a free estimate or to discuss your carpentry and remodeling needs. We're here to help bring your vision to life."
      />

      {/* Contact Cards Section */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              How to Reach Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Choose the most convenient way to get in touch with our team
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                    <card.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-lg font-semibold text-gray-700 mb-2">
                    {card.details}
                  </p>
                  <p className="text-gray-500 text-sm">{card.description}</p>
                </div>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ContactUs Component */}
      <ContactUs />
    </div>
  );
}
