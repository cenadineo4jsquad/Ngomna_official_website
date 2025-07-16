import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const faqs = [
    {
      id: 1,
      question: "Is nGomna really free to use?",
      answer: "Yes! nGomna is completely free to download and use. We believe in providing premium features without any cost to our users. There are no hidden fees, subscriptions, or in-app purchases required."
    },
    {
      id: 2,
      question: "How secure is my data with nGomna?",
      answer: "Your privacy and security are our top priorities. nGomna uses military-grade end-to-end encryption to protect all your data. We never sell your information to third parties, and all data is stored securely on our encrypted servers."
    },
    {
      id: 3,
      question: "Which devices and platforms does nGomna support?",
      answer: "nGomna is available on iOS (iPhone and iPad), Android smartphones and tablets, and we also offer a web version. The app synchronizes seamlessly across all your devices, so you can pick up where you left off on any platform."
    },
    {
      id: 4,
      question: "How do I get started with nGomna?",
      answer: "Getting started is simple! Download nGomna from the App Store or Google Play, create your free account, and follow our intuitive onboarding process. The app will guide you through setting up your preferences and exploring the key features."
    },
    {
      id: 5,
      question: "Can I use nGomna offline?",
      answer: "Yes, many of nGomna's core features work offline. Your data is cached locally, so you can continue using the app even without an internet connection. When you reconnect, everything syncs automatically across your devices."
    }
  ];

  const toggleItem = (id) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Find answers to common questions about nGomna. Can't find what you're looking for? Ask us below!
          </motion.p>
        </AnimatedSection>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto mb-16">
          {faqs.map((faq, index) => (
            <AnimatedSection
              key={faq.id}
              delay={index * 0.1}
              direction="up"
            >
              <motion.div
                className="bg-white rounded-2xl shadow-lg mb-4 overflow-hidden border border-gray-100 hover:border-green-200 transition-colors duration-300"
                whileHover={{ 
                  scale: 1.01,
                  boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  whileHover={{ backgroundColor: "rgba(249, 250, 251, 0.8)" }}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className="w-16 h-16 bg-green-400 rounded-3xl flex items-center justify-center text-white mx-auto mb-4 shadow-md"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <HelpCircle className="w-5 h-5" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openItems.has(faq.id) ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="w-6 h-6 text-gray-500" />
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {openItems.has(faq.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div 
                        className="px-6 pb-6 pl-20"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                      >
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;