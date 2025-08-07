import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, AnimatePresence } from 'framer-motion';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Link from '@mui/material/Link';
import { Play, Pause } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/Carousel.css';

import { Autoplay, Pagination } from 'swiper/modules';
import AnimatedSection from './AnimatedSection';

const Screenshots = () => {
  const { t } = useLanguage();
  
  const featureData = [
    { 
      src: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: 'FileText',
      titleKey: 'features.payslips.title',
      descKey: 'features.payslips.desc',
      learnMoreLink: '/payslips'
    },
    { 
      src: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: 'Bell',
      titleKey: 'features.notifications.title',
      descKey: 'features.notifications.desc',
      learnMoreLink: '/notifications'
    },
    { 
      src: 'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: 'MessageCircle',
      titleKey: 'features.messaging.title',
      descKey: 'features.messaging.desc',
      learnMoreLink: '/messaging'
    },
    { 
      src: 'https://images.pexels.com/photos/1739842/pexels-photo-1739842.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: 'Shield',
      titleKey: 'features.security.title',
      descKey: 'features.security.desc',
      learnMoreLink: '/security'
    },
    { 
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: 'Users',
      titleKey: 'features.census.title',
      descKey: 'features.census.desc',
      learnMoreLink: '/census'
    },
    { 
      src: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: 'Bot',
      titleKey: 'features.govai.title',
      descKey: 'features.govai.desc',
      learnMoreLink: '/gov-ai'
    },
    { 
      src: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: 'Key',
      titleKey: 'features.otp.title',
      descKey: 'features.otp.desc',
      learnMoreLink: '/otp'
    },
    { 
      src: 'https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: 'Building',
      titleKey: 'features.dgi.title',
      descKey: 'features.dgi.desc',
      learnMoreLink: '/dgi'
    },
  ];
  
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
    window.location.href = featureData[currentSlide].learnMoreLink;
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
    <section id="screenshots" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-purple-50">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-8 sm:mb-12 md:mb-16">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-4"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t('screenshots.title')}
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t('screenshots.subtitle')}
          </motion.p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="carousel-container" ref={carouselRef}>
            {/* Enhanced Text Area with Glass Morphism */}
            <motion.div 
              className="carousel-text-area hidden sm:block"
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
                      {t(featureData[currentSlide].titleKey)}
                    </motion.h3>
                    <motion.p 
                      className="smaller-text"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {t(featureData[currentSlide].descKey)}
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
                    <span>{t('screenshots.learnmore')}</span>
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
                      {featureData.map((item, index) => (
                        <SwiperSlide key={`slide${index}`}>
                          <div className="slide-content">
                            <img src={item.src} alt={t(item.titleKey)} />
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