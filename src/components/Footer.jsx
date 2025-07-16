import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Mail, Twitter, Facebook, Instagram, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedSection from './AnimatedSection';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <AnimatedSection className="col-span-2" direction="left">
            <motion.div 
              className="flex items-center space-x-4 mb-6"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* MINFI Logo */}
              <motion.a 
                href="https://minfi.gov.cm/en/home/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <img 
                  src="/logo_minfi-removebg-preview (1).png" 
                  alt="MINFI Logo" 
                  style={{ width: '100px', height: 'auto' }}
                  className="object-contain"
                />
              </motion.a>
              
              {/* CENADI Logo */}
              <motion.a 
                href="https://www.cenadi.cm/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img 
                  src="/logo_cenadi-removebg-preview.png" 
                  alt="CENADI Logo" 
                  style={{ width: '100px', height: 'auto' }}
                  className="object-contain"
                />
              </motion.a>
              
              {/* nGomna Logo */}
              <motion.img 
                src="/ngomna_logo.png" 
                alt="nGomna Logo" 
                style={{ width: '140px', height: 'auto' }}
                className="object-contain"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            <motion.p 
              className="text-gray-400 text-lg mb-6 max-w-md"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t('footer.description')}
            </motion.p>
            
            {/* Contact Information */}
            <motion.div 
              className="space-y-3 mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href="mailto:app.contact@cenadi.cm"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail size={18} />
                <span>app.contact@cenadi.cm</span>
              </motion.a>
              
              <motion.a 
                href="https://wa.me/+237650780347"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Phone size={18} />
                <span>+237 650 780 347</span>
              </motion.a>
            </motion.div>

            <motion.div 
              className="flex space-x-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href="https://wa.me/+237650780347"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Phone size={20} />
              </motion.a>
              
              <motion.a 
                href="mailto:app.contact@cenadi.cm"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Mail size={20} />
              </motion.a>

              {[Twitter, Facebook, Instagram].map((Icon, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.2}>
            <motion.h3 
              className="text-lg font-semibold mb-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {t('footer.features')}
            </motion.h3>
            <ul className="space-y-2 text-gray-400">
              {[
                t('footer.feature1'),
                t('footer.feature2'),
                t('footer.feature3'),
                t('footer.feature4'),
                t('footer.feature5'),
                t('footer.feature6')
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.a 
                    href="#features"
                    className="hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.4}>
            <motion.h3 
              className="text-lg font-semibold mb-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {t('footer.support')}
            </motion.h3>
            <ul className="space-y-2 text-gray-400">
              {[
                { name: t('footer.helpcenter'), href: '#faq' },
                { name: t('footer.contactus'), href: 'mailto:app.contact@cenadi.cm' },
                { name: t('footer.whatsapp'), href: 'https://wa.me/+237650780347' },
                { name: t('footer.userguide'), href: '#' },
                { name: t('footer.privacy'), href: '#' },
                { name: t('footer.terms'), href: '#' }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.a 
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
        
        <AnimatedSection className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400" delay={0.6}>
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p>
              {t('footer.copyright')}
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <span>{t('footer.powered')}</span>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default Footer;