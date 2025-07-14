import React from 'react';
import { motion } from 'framer-motion';
import { Download, Play, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-25 to-teal-50"></div>
      
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

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
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
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          >
            <motion.button 
              className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
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
            
            <motion.button 
              className="group bg-white text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 border-2 border-gray-200 hover:border-green-300 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              whileHover={{ 
                scale: 1.05,
                borderColor: "#16a34a"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Play size={20} />
              <span>{t('hero.demo')}</span>
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-600"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          >
            {[
              { color: 'bg-green-500', text: t('hero.free') },
              { color: 'bg-yellow-500', text: t('hero.noads') },
              { color: 'bg-emerald-500', text: t('hero.secure') }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1.1 + (index * 0.1),
                  type: "spring",
                  stiffness: 200
                }}
              >
                <motion.div 
                  className={`w-2 h-2 ${item.color} rounded-full`}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div 
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            animate={{ 
              opacity: [0.4, 1, 0.4],
              y: [0, 3, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;