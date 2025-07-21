import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, ArrowRight, Shield, Users, Globe, Mail, Smartphone, Bell, Lock, CheckCircle, Star } from 'lucide-react';
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
      icon: <Star className="w-8 h-8" />,
      number: "4.8/5",
      label: t('about.stats.rating'),
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      number: "99.9%",
      label: t('about.stats.uptime'),
      color: "from-purple-500 to-purple-600"
    }
  ];

  const visionPoints = [
    {
      icon: <Users className="w-6 h-6" />,
      text: "Bring Cameroonian public servants closer to government services"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      text: "Bring ordinary citizens closer to government services"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      text: "Foundational building block of e-citizenship"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Protection of the identity and data of public servants"
    }
  ];

  const missionPoints = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      text: "Download payslips via account using internet-connected phone"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      text: "Display real-time notifications and payslip status updates"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      text: "Protect data of every user registered in the system"
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: "Support for account reset, installation assistance, and bug tracking"
    }
  ];

  const futureServices = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Government Messaging",
      description: "Secure communications between public servants, reducing reliance on external platforms"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "E-Services Integration",
      description: "Comprehensive digital services platform for all government interactions"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Data Sovereignty",
      description: "State control over citizen data with advanced security measures"
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.div
            className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Globe className="w-4 h-4" />
            <span>About nGomna</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 px-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Digital Transformation
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              for Cameroon
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto px-4 leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            nGomna is a showcase and integration platform for services resulting from the digital transformations of the Cameroonian government. A valuable tool for public servants to access their professional and administrative information.
          </motion.p>
        </AnimatedSection>

        {/* Vision Section */}
        <AnimatedSection className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              
              <div className="space-y-4">
                {visionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                      {point.icon}
                    </div>
                    <p className="text-gray-700 font-medium leading-relaxed">{point.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.4 + (index * 0.1),
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mx-auto mb-4`}>
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                      <p className="text-gray-600 font-medium text-sm">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Mission Section */}
        <AnimatedSection className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              className="lg:order-2"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              
              <div className="space-y-4">
                {missionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 flex-shrink-0">
                      {point.icon}
                    </div>
                    <p className="text-gray-700 font-medium leading-relaxed">{point.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="lg:order-1 relative"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl transform -rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Key Features</h4>
                  <p className="text-gray-600">Essential tools for public servants</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">Payslip Management</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">Real-time Notifications</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-medium text-gray-700">Data Protection</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    <span className="text-sm font-medium text-gray-700">24/7 Support</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Future Perspectives */}
        <AnimatedSection>
          <motion.div
            className="text-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Future Perspectives</h3>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expanding our platform with new services to enhance digital sovereignty and secure communications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {futureServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Partnership Section */}
        <AnimatedSection className="mt-20">
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Government Partnership</h4>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Developed in collaboration with key Cameroonian government institutions to ensure authenticity, security, and compliance with national digital transformation goals.
              </p>
            </div>
            
            <div className="flex items-center justify-center space-x-8">
              <motion.img 
                src="/logo_minfi-removebg-preview (1).png" 
                alt="MINFI" 
                className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.img 
                src="/logo_cenadi-removebg-preview.png" 
                alt="CENADI" 
                className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;