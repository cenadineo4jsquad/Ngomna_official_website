import React from 'react';
import { motion } from 'framer-motion';
import { Bell, AlertCircle, CheckCircle, Info, Settings, Filter, Archive, Smartphone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotificationsPage = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Real-time Alerts",
      description: "Receive instant notifications for important updates and announcements.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <Filter className="w-8 h-8" />,
      title: "Smart Filtering",
      description: "Customize notification preferences and filter by priority and category.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Archive className="w-8 h-8" />,
      title: "Notification History",
      description: "Access your complete notification history with search and organization tools.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Custom Settings",
      description: "Personalize your notification experience with granular control options.",
      color: "from-green-500 to-green-600"
    }
  ];

  const notificationTypes = [
    { icon: <AlertCircle className="text-red-500" />, title: "Urgent Alerts", description: "Critical updates requiring immediate attention" },
    { icon: <Info className="text-blue-500" />, title: "Information Updates", description: "General information and announcements" },
    { icon: <CheckCircle className="text-green-500" />, title: "Status Updates", description: "Updates on your requests and applications" },
    { icon: <Smartphone className="text-purple-500" />, title: "System Notifications", description: "App updates and system maintenance alerts" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-yellow-50 to-orange-100">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-3xl flex items-center justify-center">
                <Bell className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Smart Notifications
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Stay informed with intelligent notifications that keep you updated on what matters most. 
              Never miss important updates with our smart notification system.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Manage Notifications
              </motion.button>
              
              <motion.button
                className="bg-white text-yellow-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-yellow-200 hover:border-yellow-400 transform hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Customize Settings
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
              Notification Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced notification management tools to keep you informed and organized
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

      {/* Notification Types Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Notifications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Different notification categories to keep you informed about various aspects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {notificationTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    {type.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-700">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Never Miss Important Updates
            </h2>
            <p className="text-xl text-yellow-100 mb-8">
              Enable smart notifications and stay informed about everything that matters
            </p>
            
            <motion.button
              className="bg-white text-yellow-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Set Up Notifications
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotificationsPage;