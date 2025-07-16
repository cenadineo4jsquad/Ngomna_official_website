import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle, Send, MessageSquare, CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());
  const [question, setQuestion] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    if (question.trim() && email.trim()) {
      // Here you would typically send the question to your backend
      setIsSubmitted(true);
      setQuestion('');
      setEmail('');
      
      // Reset the success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
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

        {/* Ask a Question Section */}
        <AnimatedSection className="max-w-2xl mx-auto" delay={0.8}>
          <motion.div 
            className="relative bg-gradient-to-br from-white via-green-25/40 to-emerald-25/30 rounded-3xl shadow-lg p-8 border border-green-50/30 backdrop-blur-sm overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100/15 to-emerald-100/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-100/15 to-green-100/10 rounded-full translate-y-12 -translate-x-12"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-green-50/20 to-emerald-50/15 rounded-full"></div>
            
            <div className="relative z-10">
              <motion.div 
                className="text-center mb-8"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl flex items-center justify-center text-white mx-auto mb-4 shadow-md"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MessageSquare className="w-8 h-8" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Still Have Questions?
                </h3>
                <p className="text-gray-600">
                  Can't find what you're looking for? Drop us a message and we'll respond within 24 hours.
                </p>
              </motion.div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    onSubmit={handleSubmitQuestion}
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <motion.input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-green-400/50 focus:border-green-200 transition-all duration-200 bg-white/60 backdrop-blur-sm shadow-sm"
                        required
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="question" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message
                      </label>
                      <motion.textarea
                        id="question"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="What would you like to know about nGomna?"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-green-400/50 focus:border-green-200 transition-all duration-200 resize-none bg-white/60 backdrop-blur-sm shadow-sm"
                        required
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    </motion.div>

                    <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-md"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 15px 30px rgba(34, 197, 94, 0.2)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div 
                    className="text-center py-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div 
                      className="w-16 h-16 bg-green-400 rounded-3xl flex items-center justify-center text-white mx-auto mb-4 shadow-md"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 200,
                        delay: 0.2
                      }}
                    >
                      <CheckCircle className="w-8 h-8" />
                    </motion.div>
                    <motion.h4 
                      className="text-xl font-bold text-gray-900 mb-2"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      Question Submitted!
                    </motion.h4>
                    <motion.p 
                      className="text-gray-600"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      Thanks for reaching out! Our team will respond within 24 hours.
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQ;