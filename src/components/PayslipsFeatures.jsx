import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Share, Eye, Archive, Calendar, DollarSign, User, Building, Bell, MessageCircle, Shield, Key, Bot } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedSection from './AnimatedSection';

const PayslipsFeatures = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Payslips Management",
      description: "Access, download, and manage your monthly payslips with ease and security.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Smart Notifications",
      description: "Receive instant alerts for important updates and government announcements.",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Secure Messaging",
      description: "Communicate securely with government services through encrypted channels.",
      image: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Security",
      description: "Military-grade encryption and biometric authentication for maximum protection.",
      image: "https://images.pexels.com/photos/1739842/pexels-photo-1739842.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Census & Demographics",
      description: "Access population data and participate in national census activities.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <Key className="w-8 h-8" />,
      title: "OTP Authentication",
      description: "Secure one-time password system for enhanced transaction security.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "DGI Tax Services",
      description: "Streamlined tax calculations, filing, and payment processing.",
      image: "https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "GOV-AI Assistant",
      description: "AI-powered virtual assistant for intelligent government service support.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  return (
    <section id="payslips-features" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            nGomna Features
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Comprehensive digital services for modern government interaction
          </motion.p>
        </AnimatedSection>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              direction="up"
            >
              <motion.div
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-gray-200 h-full overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Feature Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg`}>
                    {feature.icon}
                  </div>
                </div>
                
                {/* Feature Content */}
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PayslipsFeatures;