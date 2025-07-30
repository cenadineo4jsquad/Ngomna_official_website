import React from 'react';
import { motion } from 'framer-motion';
import { Download, Play, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-25 to-teal-50"></div>

      {/* Animated Phone */}
      <motion.div
        className="absolute right-10 top-32 w-[220px] h-[450px] md:w-[270px] md:h-[550px] opacity-90"
        animate={{
          rotateY: [-15, 15, -15],
          rotateX: [-10, 10, -10],
          rotateZ: [-5, 5, -5],
          translateY: [-20, 20, -20],
          translateX: [-15, 15, -15],
          translateZ: [-30, 30, -30],
          scale: [0.95, 1.05, 0.95]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          perspective: "1500px",
          transformStyle: "preserve-3d"
        }}
      >
        <div className="relative w-full h-full">
          {/* Phone frame */}
          <div className="absolute inset-0 rounded-[55px] bg-[#1C1C1E] shadow-2xl">
            {/* Side buttons */}
            <div className="absolute -left-[2px] w-[4px] h-[40px] bg-[#2A2A2C] rounded-r-lg" style={{ top: '120px' }}></div>
            <div className="absolute -left-[2px] top-[180px] w-[4px] h-[60px] bg-[#2A2A2C] rounded-r-lg"></div>
            <div className="absolute -right-[2px] top-[120px] w-[4px] h-[60px] bg-[#2A2A2C] rounded-l-lg"></div>
          </div>

          {/* Screen bezel */}
          <div className="absolute inset-2 rounded-[50px] bg-black">
            {/* Dynamic Island */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[25px] bg-black rounded-b-[24px] z-20">
              <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[85px] h-[4px] bg-[#1C1C1E] rounded-full"></div>
            </div>

            {/* Screen content */}
            <div className="absolute inset-0 rounded-[48px] overflow-hidden bg-white">
              <div className="absolute inset-0 pt-[6px]">
                <img 
                  src="/Capture.PNG" 
                  alt="nGomna App Interface"
                  className="w-full h-full object-cover"
                  loading="eager"
                  style={{
                    imageRendering: "crisp-edges",
                    backgroundColor: "white"
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-10 -right-10 w-72 h-72 bg-green-200 rounded-full opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-10 -left-10 w-96 h-96 bg-emerald-200 rounded-full opacity-20"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-200 rounded-full opacity-10"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t('hero.title.experience')}
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              nGomna
            </motion.span>
            {t('hero.title.revolution')}
          </motion.h1>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start mb-8 sm:mb-12"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          >
            <motion.button 
              className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Download size={20} />
              <span>{t('hero.download')}</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;