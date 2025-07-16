import React, { useState, useEffect } from 'react';
import { Menu, X, Smartphone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 h-16 sm:h-20 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center space-x-2">
            <img 
              src="/ngomna_logo.png" 
              alt="nGomna Logo" 
              className="w-[80px] h-[80px] sm:w-[95px] sm:h-[95px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] object-contain"
            />
          </div>
          
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">{t('nav.features')}</a>
            <a href="#news" className="text-gray-700 hover:text-green-600 transition-colors">{t('nav.news')}</a>
            <a href="#comments" className="text-gray-700 hover:text-green-600 transition-colors">{t('nav.reviews')}</a>
            <a href="#faq" className="text-gray-700 hover:text-green-600 transition-colors">{t('nav.faq')}</a>
            <a href="#screenshots" className="text-gray-700 hover:text-green-600 transition-colors">{t('nav.screenshots')}</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">{t('nav.contact')}</a>
          </nav>
          
          {/* Language Toggle and Download Button */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <LanguageToggle />
            <a 
              href="#download" 
              className="group bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 xl:px-6 py-2 xl:py-3 rounded-full font-semibold text-xs xl:text-sm hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 hover:from-green-600 hover:to-emerald-600"
            >
              <span>{t('nav.download')}</span>
              <svg 
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden bg-white/95 backdrop-blur-md ${
          isMenuOpen ? 'max-h-96 opacity-100 border-t border-gray-200' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 px-4 space-y-2 flex flex-col">
            <a href="#features" className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav.features')}</a>
            <a href="#news" className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav.news')}</a>
            <a href="#comments" className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav.reviews')}</a>
            <a href="#faq" className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav.faq')}</a>
            <a href="#screenshots" className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav.screenshots')}</a>
            <a href="#contact" className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</a>
            
            {/* Mobile Language Toggle */}
            <div className="py-3 flex justify-center">
              <LanguageToggle />
            </div>
            
            <a 
              href="#download" 
              className="block py-3 mt-2 mx-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 rounded-full font-semibold text-sm text-center hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.download')}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;