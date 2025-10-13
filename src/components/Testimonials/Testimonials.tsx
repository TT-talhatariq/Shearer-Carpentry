"use client";

import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote:
      "Had Jesse and his team install storm doors on my new home. They did a great job and cleaned up everything afterwards. Even removed the window stickers and washed the glass.",
    name: "Carolyn Cunningham",
    image: "/carolyn.png",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Shearer Carpentry responded quickly, gave a fair estimate, and completed the job ahead of schedule. The team was professional, efficient, and left everything spotless highly recommended!",
    name: "Steve Florman",
    image: "/steven.png",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Excellent craftsmanship, great customer care, and amazing flexibility. Jesse’s creative solutions made our cabinets beautiful. We’re beyond happy and will definitely hire him again!",
    name: "Caroline Strang",
    image: "/caroline.png",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "I am SO happy I went with Shearer! They are a quality remodeling outfit, I always felt that the details were taken care of. Very nice people, too. Highly recommend them!",
    name: "Lisa F",
    image: "/lisa.png",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "Tracey and the team were amazing to work with! Highly recommend for all your carpentry needs! Professional and reliable service. Great results every time!",
    name: "Chris Northenscold",
    image: "/chris.png",
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
      ease: "easeOut",
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
  rating,
  image,
  index,
}: {
  quote: string;
  name: string;
  rating: number;
  image?: string;
  index: number;
}) => {
  return (
    <motion.div
      className="bg-white p-4 md:p-8 rounded-xl shadow-lg mx-1 md:mx-3 flex flex-col items-center justify-center border border-gray-100 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        y: -5,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      }}
    >
      <Image
        src={image || "/carolyn.png"}
        alt={name}
        width={64}
        height={64}
        unoptimized
        className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-green-600 mx-auto"
      />

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
              className={
                i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className="text-gray-700 text-center mb-6 md:mb-8 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
      >
        {quote}
      </motion.p>

      <motion.div
        className="text-center flex flex-col items-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 + index * 0.05, duration: 0.5 }}
      >
        <motion.div
          className="w-12 h-1 bg-gradient-to-r from-brand to-brand-hover mx-auto mb-3"
          initial={{ width: 0 }}
          animate={{ width: "3rem" }}
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
      </motion.div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [windowWidth, setWindowWidth] = React.useState(0);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

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
    centerMode: false,
    centerPadding: "0px",
    adaptiveHeight: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
          infinite: true,
          adaptiveHeight: false,
          variableWidth: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
          infinite: true,
          adaptiveHeight: false,
          variableWidth: false,
        },
      },
    ],
    dotsClass: "slick-dots custom-dots",
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

  const goToPrevMobile = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNextMobile = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
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
              bottom: -40px;
            }
            
            .testimonial-section .slick-slide {
              padding: 0 10px !important;
              width: 100% !important;
            }
            
            .testimonial-section .slick-track {
              display: flex !important;
              align-items: stretch;
              width: 100% !important;
            }
            
            .testimonial-section .slick-slide > div {
              height: 100%;
              width: 100% !important;
            }
            
            .testimonial-section .slick-list {
              width: 100% !important;
            }
          }

          @media (max-width: 480px) {
            .testimonial-section .slick-slide {
              padding: 0 5px !important;
              width: 100% !important;
            }
            
            .testimonial-section .slick-track {
              width: 100% !important;
            }
            
            .testimonial-section .slick-slide > div {
              width: 100% !important;
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
            Discover why our customers love working with us. Read their
            experiences and see why we're the trusted choice for your
            construction and remodeling needs.
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
          {isMobile ? (
            /* Mobile Single Card Display */
            <div className="relative">
              <div className="pb-10">
                <TestimonialCard
                  image={testimonials[currentSlide].image}
                  quote={testimonials[currentSlide].quote}
                  name={testimonials[currentSlide].name}
                  rating={testimonials[currentSlide].rating}
                  index={currentSlide}
                />
              </div>
              
              {/* Mobile Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-brand scale-125' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          ) : (
            /* Desktop Slider */
            <Slider key={windowWidth} ref={sliderRef} {...settings} className="testimonial-slider">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="h-[400px] pb-10">
                  <TestimonialCard
                    image={testimonial.image}
                    quote={testimonial.quote}
                    name={testimonial.name}
                    rating={testimonial.rating}
                    index={index}
                  />
                </div>
              ))}
            </Slider>
          )}

          {/* Navigation Controls */}
          <motion.div
            className="flex justify-center items-center gap-3 mt-16"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <motion.button
              onClick={isMobile ? goToPrevMobile : goToPrev}
              className="bg-white rounded-full w-12 h-12 flex justify-center items-center shadow-lg hover:bg-gray-100 transition-colors border border-gray-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={24} className="text-gray-700" />
            </motion.button>
            <motion.button
              onClick={isMobile ? goToNextMobile : goToNext}
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
