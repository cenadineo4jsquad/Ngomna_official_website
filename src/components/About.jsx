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
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 px-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            About nGomna
          </motion.h2>
        </AnimatedSection>

        {/* Mission and Vision Section */}
        <AnimatedSection className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
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
                    className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100"
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
              className=""
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
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
                    className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100"
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
          </div>
        </AnimatedSection>

        {/* Future Perspectives */}
        <AnimatedSection className="mb-20">


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
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
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
      </div>
    </section>
  );
};

export default About;