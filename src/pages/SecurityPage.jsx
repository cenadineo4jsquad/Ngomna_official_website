import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Fingerprint, Key, AlertTriangle, CheckCircle, Settings } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SecurityPage = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "End-to-End Encryption",
      description: "Military-grade encryption protects all your data and communications.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Fingerprint className="w-8 h-8" />,
      title: "Biometric Authentication",
      description: "Secure access using fingerprint and facial recognition technology.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Privacy Controls",
      description: "Granular privacy settings to control who can access your information.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Security Alerts",
      description: "Real-time notifications about security events and potential threats.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const securityFeatures = [
    { icon: <Key />, title: "Multi-Factor Authentication", description: "Additional security layers for account protection" },
    { icon: <CheckCircle />, title: "Security Audits", description: "Regular security assessments and vulnerability checks" },
    { icon: <Settings />, title: "Security Settings", description: "Customizable security preferences and controls" },
    { icon: <Shield />, title: "Data Protection", description: "Comprehensive data protection and backup systems" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-red-50 to-orange-100">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Advanced Security
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Your security is our top priority. Experience military-grade protection with 
              advanced encryption, biometric authentication, and comprehensive privacy controls.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Security Dashboard
              </motion.button>
              
              <motion.button
                className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-red-200 hover:border-red-400 transform hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Security Settings
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive security measures to protect your data and privacy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Security Features */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Additional security layers for comprehensive protection
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Secure Your Digital Life
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Enable advanced security features and protect your data with military-grade encryption
            </p>
            
            <motion.button
              className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Activate Security Features
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SecurityPage;