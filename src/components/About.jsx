import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Users, Globe, Award, TrendingUp, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedSection from './AnimatedSection';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "10M+",
      label: t('about.stats.users'),
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "50+",
      label: t('about.stats.services'),
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "4.8/5",
      label: t('about.stats.rating'),
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "99.9%",
      label: t('about.stats.uptime'),
      color: "from-purple-500 to-purple-600"
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: t('about.features.government')
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: t('about.features.secure')
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: t('about.features.multilingual')
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: t('about.features.support')
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t('about.title')}
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t('about.subtitle')}
          </motion.p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <AnimatedSection direction="left">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <motion.span 
                  className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {t('about.badge')}
                </motion.span>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {t('about.description')}
                </p>
              </div>
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "10M+",
      label: t('about.stats.users'),
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "50+",
      label: t('about.stats.services'),
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "4.8/5",
      label: t('about.stats.rating'),
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "99.9%",
      label: t('about.stats.uptime'),
      color: "from-purple-500 to-purple-600"
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: t('about.features.government')
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: t('about.features.secure')
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: t('about.features.multilingual')
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: t('about.features.support')
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <AnimatedSection direction="left">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <motion.span 
                  className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {t('about.badge')}
                </motion.span>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {t('about.title')}
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {t('about.description')}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    {feature.icon}
                    <span className="text-gray-700 font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <Smartphone className="w-5 h-5" />
                <span>{t('about.cta')}</span>
              </motion.button>
            </motion.div>
          </AnimatedSection>

          {/* Right Content - Stats */}
          <AnimatedSection direction="right" delay={0.3}>
            <motion.div
              className="relative"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl transform -rotate-3"></div>
              
              {/* Stats Grid */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.5 + (index * 0.1),
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mx-auto mb-4`}>
                        {stat.icon}
                      </div>
                      
                      <motion.div
                        className="text-3xl font-bold text-gray-900 mb-2"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ 
                          duration: 0.8, 
                          delay: 0.7 + (index * 0.1),
                          type: "spring",
                          stiffness: 300
                        }}
                        viewport={{ once: true }}
                      >
                        {stat.number}
                      </motion.div>
                      
                      <p className="text-gray-600 font-medium text-sm">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Partnership Logos */}
                <motion.div
                  className="mt-8 pt-8 border-t border-gray-200"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <p className="text-center text-gray-500 text-sm mb-4 font-medium">
                    {t('about.partnership')}
                  </p>
                  <div className="flex items-center justify-center space-x-6">
                    <motion.img 
                      src="/logo_minfi-removebg-preview (1).png" 
                      alt="MINFI" 
                      className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <motion.img 
                      src="/logo_cenadi-removebg-preview.png" 
                      alt="CENADI" 
                      className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;