'use client';

import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote:
      'Shearer Carpentry transformed our basement into a beautiful family room. The attention to detail and quality craftsmanship exceeded our expectations. Highly recommended!',
    name: 'Michael Johnson',
    title: 'Homeowner',
    rating: 5,
  },
  {
    id: 2,
    quote:
      'Our kitchen renovation was completed on time and within budget. The team was professional, clean, and communicated throughout the entire process.',
    name: 'Sarah Martinez',
    title: 'Property Manager',
    rating: 5,
  },
  {
    id: 3,
    quote:
      'Our bathroom remodel looks amazing and the quality is outstanding.',
    name: 'David Thompson',
    title: 'Business Owner',
    rating: 5,
  },
  {
    id: 4,
    quote:
      'We hired Shearer Carpentry for our custom home construction. Their expertise and dedication to quality made our dream home a reality. Thank you!',
    name: 'Jennifer Wilson',
    title: 'Homeowner',
    rating: 5,
  },
  {
    id: 5,
    quote:
      'Professional, reliable, and skilled craftsmen. They completed our home renovation project with precision and care. We couldn\'t be happier with the results.',
    name: 'Robert Garcia',
    title: 'Engineer',
    rating: 5,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const TestimonialCard = ({
  quote,
  name,
  title,
  rating,
  index,
}: {
  quote: string;
  name: string;
  title: string;
  rating: number;
  index: number;
}) => {
  return (
    <motion.div
      className="bg-white p-8 rounded-xl shadow-lg mx-3 h-full flex flex-col border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeOut',
      }}
      whileHover={{
        y: -5,
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      }}
    >
      {/* Quote Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-brand to-brand-hover rounded-full flex items-center justify-center">
          <span className="text-white text-2xl font-bold">"</span>
        </div>
      </div>

      {/* Stars */}
      <motion.div
        className="flex justify-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { delay: 0.3 + i * 0.05, duration: 0.3 },
            }}
          >
            <Star
              size={20}
              className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Quote */}
      <motion.p
        className="text-gray-700 text-center mb-8 flex-grow leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
      >
        {quote}
      </motion.p>

      {/* Customer Info */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 + index * 0.05, duration: 0.5 }}
      >
        <motion.div
          className="w-12 h-1 bg-gradient-to-r from-brand to-brand-hover mx-auto mb-3"
          initial={{ width: 0 }}
          animate={{ width: '3rem' }}
          transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
        ></motion.div>
        <motion.p
          className="font-bold text-gray-900 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 + index * 0.05, duration: 0.3 }}
        >
          {name}
        </motion.p>
        <motion.p
          className="text-gray-600 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 + index * 0.05, duration: 0.3 }}
        >
          {title}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    dotsClass: 'slick-dots custom-dots',
    customPaging: function (i: number) {
      return (
        <div className="dot-wrapper">
          <div className="custom-dot"></div>
        </div>
      );
    },
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
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
        <style jsx global>{`
          .testimonial-section .slick-dots {
            bottom: -60px;
            display: flex !important;
            justify-content: center;
            margin-top: 20px;
          }

          .testimonial-section .slick-dots li {
            width: auto;
            height: auto;
            margin: 0 5px;
          }

          .testimonial-section .custom-dot {
            width: 12px;
            height: 12px;
            background-color: #d1d5db;
            border-radius: 50%;
            transition: all 0.3s ease;
          }

          .testimonial-section .slick-active .custom-dot {
            background-color: #2c552e;
            transform: scale(1.2);
          }

          .testimonial-section .dot-wrapper {
            padding: 5px;
            cursor: pointer;
          }

          @media (max-width: 768px) {
            .testimonial-section .slick-dots {
              bottom: -80px;
            }
          }
        `}</style>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/20 text-brand text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            TESTIMONIALS
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-brand to-brand-hover rounded-full mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why our customers love working with us. Read their experiences and see why we're the trusted choice for your construction and remodeling needs.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          className="relative testimonial-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <Slider ref={sliderRef} {...settings} className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="h-full md:h-[400px] pb-10">
                <TestimonialCard
                  quote={testimonial.quote}
                  name={testimonial.name}
                  title={testimonial.title}
                  rating={testimonial.rating}
                  index={index}
                />
              </div>
            ))}
          </Slider>

          {/* Navigation Controls */}
          <motion.div
            className="flex justify-center items-center gap-3 mt-16"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <motion.button
              onClick={goToPrev}
              className="bg-white rounded-full w-12 h-12 flex justify-center items-center shadow-lg hover:bg-gray-100 transition-colors border border-gray-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={24} className="text-gray-700" />
            </motion.button>
            <motion.button
              onClick={goToNext}
              className="bg-gradient-to-r from-brand to-brand-hover rounded-full w-12 h-12 flex justify-center items-center shadow-lg hover:from-brand-hover hover:to-brand transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={24} className="text-white" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;