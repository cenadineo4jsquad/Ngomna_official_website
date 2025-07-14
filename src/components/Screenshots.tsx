import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, AnimatePresence } from 'framer-motion';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Link from '@mui/material/Link';
import { Play, Pause } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/Carousel.css';

import { Autoplay, Pagination } from 'swiper/modules';
import AnimatedSection from './AnimatedSection';

const imageData = [
  { 
    src: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800', 
    description: 'Monthly payslips', 
    smallerText: 'In just a few clicks, access your payslip every month with nGomna',
    learnMoreLink: '/Payslips'
  },
  { 
    src: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800', 
    description: 'View payslips', 
    smallerText: 'Take a look at your payslip before using it with nGomna', 
    learnMoreLink: '/Payslips' 
  },
  { 
    src: 'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=800', 
    description: 'Download payslips', 
    smallerText: 'Freely download your payslip with nGomna', 
    learnMoreLink: '/Payslips' 
  },
  { 
    src: 'https://images.pexels.com/photos/1739842/pexels-photo-1739842.jpeg?auto=compress&cs=tinysrgb&w=800', 
    description: 'Share payslips', 
    smallerText: 'Easily share your payslip via other media with nGomna', 
    learnMoreLink: '/Payslips' 
  },
  { 
    src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800', 
    description: 'Store payslips', 
    smallerText: 'Safely keep records of all your downloaded payslips with nGomna', 
    learnMoreLink: '/Payslips' 
  },
];

const Screenshots = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCarousel();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  const animateCarousel = () => {
    setCurrentSlide((prevSlide) => (prevSlide === imageData.length - 1 ? 0 : prevSlide + 1));
  };

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  const handleLearnMoreClick = () => {
    window.location.href = imageData[currentSlide].learnMoreLink;
  };

  const togglePlayPause = () => {
    if (swiperInstance) {
      if (isPlaying) {
        swiperInstance.autoplay.stop();
      } else {
        swiperInstance.autoplay.start();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="screenshots" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            See nGomna in Action
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Experience the beautiful interface and smooth user experience through our interactive showcase.
          </motion.p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="carousel-container" ref={carouselRef}>
            {/* Enhanced Text Area with Glass Morphism */}
            <motion.div 
              className="carousel-text-area"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="text-content-wrapper">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <motion.h3 
                      className="description"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      {imageData[currentSlide].description}
                    </motion.h3>
                    <motion.p 
                      className="smaller-text"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {imageData[currentSlide].smallerText}
                    </motion.p>
                  </motion.div>
                </AnimatePresence>
                
                <motion.div 
                  className="action-buttons"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <motion.button
                    className="learn-more-btn"
                    onClick={handleLearnMoreClick}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span>Learn More</span>
                    <KeyboardArrowRightIcon className="arrow-icon" />
                  </motion.button>
                  
                  <motion.button
                    className="play-pause-btn"
                    onClick={togglePlayPause}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Enhanced Phone Mockup */}
            <motion.div
              className="phone-mockup-container"
              initial={{ x: 50, opacity: 0, rotateY: 15 }}
              whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                rotateY: -2,
                transition: { duration: 0.3 }
              }}
            >
              <div className="phone-mockup">
                <div className="phone-frame">
                  {/* Enhanced notch with details */}
                  <div className="phone-notch">
                    <div className="speaker"></div>
                    <div className="camera"></div>
                  </div>
                  
                  {/* Screen with enhanced effects */}
                  <div className="phone-screen">
                    <div className="screen-overlay"></div>
                    <Swiper
                      autoplay={{ delay: 2500, disableOnInteraction: false }}
                      pagination={{ 
                        clickable: true,
                        bulletClass: 'phone-swiper-bullet',
                        bulletActiveClass: 'phone-swiper-bullet-active'
                      }}
                      modules={[Autoplay, Pagination]}
                      className="phoneSwiper"
                      onSlideChange={handleSlideChange}
                      onSwiper={setSwiperInstance}
                      effect="fade"
                      speed={800}
                    >
                      {imageData.map((item, index) => (
                        <SwiperSlide key={`slide${index}`}>
                          <div className="slide-content">
                            <img src={item.src} alt={item.description} />
                            <div className="slide-overlay"></div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  
                  {/* Enhanced home indicator */}
                  <div className="phone-home-indicator"></div>
                  
                  {/* Side buttons */}
                  <div className="phone-buttons">
                    <div className="volume-up"></div>
                    <div className="volume-down"></div>
                    <div className="power-button"></div>
                  </div>
                </div>
                
                {/* Phone shadow */}
                <div className="phone-shadow"></div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Screenshots;