import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Heart, Users, Star, Smartphone } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Experience unprecedented speed with our optimized algorithms and cutting-edge technology.",
      color: "from-yellow-400 to-yellow-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Private",
      description: "Your data is protected with end-to-end encryption and privacy-first design principles.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "User-Friendly",
      description: "Intuitive interface designed with love, making every interaction smooth and delightful.",
      color: "from-green-400 to-green-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Driven",
      description: "Join millions of users who trust nGomna for their daily mobile experience.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Crafted with attention to detail and built to exceed your expectations.",
      color: "from-green-600 to-green-700"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Cross-Platform",
      description: "Available on all major platforms with seamless synchronization across devices.",
      color: "from-teal-500 to-cyan-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Why Choose nGomna?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Discover the powerful features that make nGomna the perfect choice for your mobile experience.
          </motion.p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              direction="up"
            >
              <motion.div
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-green-200"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {feature.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;