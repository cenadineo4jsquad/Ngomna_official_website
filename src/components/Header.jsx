import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Smartphone, ChevronDown, FileText, Info, Bell, Users, MessageCircle, Baby, Shield, Key, Building, Bot } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();
  const navigate = useNavigate();

  const features = [
    { name: t('features.payslips'), icon: <FileText size={16} />, href: '/payslips' },
    { name: t('features.information'), icon: <Info size={16} />, href: '/information' },
    { name: t('features.notifications'), icon: <Bell size={16} />, href: '/notifications' },
    { name: t('features.census'), icon: <Users size={16} />, href: '/census' },
    { name: t('features.messaging'), icon: <MessageCircle size={16} />, href: '/messaging' },
    { name: t('features.children'), icon: <Baby size={16} />, href: '/children' },
    { name: t('features.security'), icon: <Shield size={16} />, href: '/security' },
    { name: t('features.otp'), icon: <Key size={16} />, href: '/otp' },
    { name: t('features.dgi'), icon: <Building size={16} />, href: '/dgi' },
    { name: t('features.govai'), icon: <Bot size={16} />, href: '/gov-ai' }
  ];

  const handleSectionNavigation = (sectionId) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Slight delay to ensure navigation completes
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
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
            <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">Home</Link>
            <div className="relative dropdown-container">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors"
              >
                <span>{t('nav.features')}</span>
                <ChevronDown 
                  size={16} 
                  className={`transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 animate-fade-in-up">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <h3 className="text-sm font-semibold text-gray-900">{t('nav.features.title')}</h3>
                    <p className="text-xs text-gray-500">{t('nav.features.subtitle')}</p>
                  </div>
                  <div className="py-2">
                    {features.map((feature, index) => (
                      <Link
                        key={index}
                        to={feature.href}
                        className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors group"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-green-100 flex items-center justify-center text-gray-600 group-hover:text-green-600 transition-colors">
                          {feature.icon}
                        </div>
                        <span className="font-medium">{feature.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <button onClick={() => handleSectionNavigation('about')} className="text-gray-700 hover:text-green-600 transition-colors">About</button>
            <button onClick={() => handleSectionNavigation('news')} className="text-gray-700 hover:text-green-600 transition-colors">{t('nav.news')}</button>
            <button onClick={() => handleSectionNavigation('comments')} className="text-gray-700 hover:text-green-600 transition-colors">{t('nav.reviews')}</button>
            <button onClick={() => handleSectionNavigation('faq')} className="text-gray-700 hover:text-green-600 transition-colors">{t('nav.faq')}</button>
            <button onClick={() => handleSectionNavigation('contact')} className="text-gray-700 hover:text-green-600 transition-colors">{t('nav.contact')}</button>
          </nav>
          
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <LanguageToggle />
            <button 
              onClick={() => handleSectionNavigation('download')}
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
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`lg:hidden transition-all duration-300 overflow-hidden bg-white/95 backdrop-blur-md ${
          isMenuOpen ? 'max-h-96 opacity-100 border-t border-gray-200' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 px-4 space-y-2 flex flex-col">
            <Link to="/" className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <div className="space-y-1">
              <div className="py-2 px-4 text-sm font-semibold text-gray-900 border-b border-gray-200">
                {t('nav.features')}
              </div>
              {features.map((feature, index) => (
                <Link
                  key={index}
                  to={feature.href}
                  className="flex items-center space-x-3 py-2 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-6 h-6 rounded-md bg-gray-100 flex items-center justify-center text-gray-600">
                    {feature.icon}
                  </div>
                  <span className="text-sm">{feature.name}</span>
                </Link>
              ))}
            </div>
            <button onClick={() => handleSectionNavigation('about')} className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors text-left">About</button>
            <button onClick={() => handleSectionNavigation('news')} className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors text-left">{t('nav.news')}</button>
            <button onClick={() => handleSectionNavigation('comments')} className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors text-left">{t('nav.reviews')}</button>
            <button onClick={() => handleSectionNavigation('faq')} className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors text-left">{t('nav.faq')}</button>
            <button onClick={() => handleSectionNavigation('contact')} className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors text-left">{t('nav.contact')}</button>
            
            <div className="py-3 flex justify-center">
              <LanguageToggle />
            </div>
            
            <button 
              onClick={() => handleSectionNavigation('download')}
              className="block py-3 mt-2 mx-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 rounded-full font-semibold text-sm text-center hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
            >
              {t('nav.download')}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;