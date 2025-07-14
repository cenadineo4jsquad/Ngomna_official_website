import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  en: {
    // Header
    'nav.features': 'Features',
    'nav.news': 'News',
    'nav.reviews': 'Reviews',
    'nav.faq': 'FAQ',
    'nav.screenshots': 'Screenshots',
    'nav.contact': 'Contact',
    'nav.download': 'Download',
    
    // Hero Section
    'hero.title.experience': 'Experience the',
    'hero.title.revolution': 'Revolution',
    'hero.subtitle': 'Transform your mobile experience with our cutting-edge application. Designed for the modern user, built for the future.',
    'hero.download': 'Download Now',
    'hero.demo': 'Watch Demo',
    'hero.free': '100% Free',
    'hero.noads': 'No Ads',
    'hero.secure': 'Secure & Private',
    
    // Features Section
    'features.title': 'Why Choose nGomna?',
    'features.subtitle': 'Discover the powerful features that make nGomna the perfect choice for your mobile experience.',
    'features.fast.title': 'Lightning Fast',
    'features.fast.desc': 'Experience unprecedented speed with our optimized algorithms and cutting-edge technology.',
    'features.secure.title': 'Secure & Private',
    'features.secure.desc': 'Your data is protected with end-to-end encryption and privacy-first design principles.',
    'features.friendly.title': 'User-Friendly',
    'features.friendly.desc': 'Intuitive interface designed with love, making every interaction smooth and delightful.',
    'features.community.title': 'Community Driven',
    'features.community.desc': 'Join millions of users who trust nGomna for their daily mobile experience.',
    'features.quality.title': 'Premium Quality',
    'features.quality.desc': 'Crafted with attention to detail and built to exceed your expectations.',
    'features.platform.title': 'Cross-Platform',
    'features.platform.desc': 'Available on all major platforms with seamless synchronization across devices.',
    
    // Screenshots Section
    'screenshots.title': 'See nGomna in Action',
    'screenshots.subtitle': 'Experience the beautiful interface and smooth user experience through our interactive showcase.',
    
    // News Section
    'news.title': 'Latest News & Updates',
    'news.subtitle': 'Stay up to date with the latest developments, features, and announcements from the nGomna team.',
    'news.readmore': 'Read More',
    'news.viewall': 'View All News',
    
    // Comments Section
    'comments.title': 'What People Are Saying',
    'comments.subtitle': 'Join millions of satisfied users who have transformed their mobile experience with nGomna.',
    'comments.satisfaction': '98% Satisfaction Rate',
    'comments.support': '24/7 Support',
    'comments.based': 'Based on 50,000+ reviews from verified users',
    
    // FAQ Section
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Find answers to common questions about nGomna. Can\'t find what you\'re looking for? Ask us below!',
    'faq.still': 'Still Have Questions?',
    'faq.message': 'Can\'t find what you\'re looking for? Drop us a message and we\'ll respond within 24 hours.',
    'faq.email': 'Email Address',
    'faq.emailPlaceholder': 'Enter your email address',
    'faq.messageLabel': 'Message',
    'faq.messagePlaceholder': 'What would you like to know about nGomna?',
    'faq.send': 'Send Message',
    'faq.submitted': 'Question Submitted!',
    'faq.thanks': 'Thanks for reaching out! Our team will respond within 24 hours.',
    
    // Download Section
    'download.title': 'Ready to Get Started?',
    'download.subtitle': 'Join millions of satisfied users and download nGomna today. Available on all major platforms.',
    'download.rating': '4.8/5 Rating',
    'download.testimonial': '"nGomna has completely transformed how I use my phone. The interface is beautiful and the performance is incredible!" - Sarah M.',
    'download.appstore': 'App Store',
    'download.googleplay': 'Google Play',
    'download.downloads': '10M+ Downloads',
    'download.free': 'Always Free',
    
    // Footer
    'footer.description': 'Experience the future of mobile applications with nGomna. Built with love, designed for excellence.',
    'footer.quicklinks': 'Quick Links',
    'footer.support': 'Support',
    'footer.helpcenter': 'Help Center',
    'footer.contactus': 'Contact Us',
    'footer.bugreports': 'Bug Reports',
    'footer.featurerequests': 'Feature Requests',
    'footer.privacy': 'Privacy Policy',
    'footer.copyright': '© 2025 nGomna. All rights reserved. Made with ❤️ for mobile users everywhere.'
  },
  fr: {
    // Header
    'nav.features': 'Fonctionnalités',
    'nav.news': 'Actualités',
    'nav.reviews': 'Avis',
    'nav.faq': 'FAQ',
    'nav.screenshots': 'Captures',
    'nav.contact': 'Contact',
    'nav.download': 'Télécharger',
    
    // Hero Section
    'hero.title.experience': 'Découvrez la',
    'hero.title.revolution': 'Révolution',
    'hero.subtitle': 'Transformez votre expérience mobile avec notre application de pointe. Conçue pour l\'utilisateur moderne, construite pour l\'avenir.',
    'hero.download': 'Télécharger',
    'hero.demo': 'Voir la Démo',
    'hero.free': '100% Gratuit',
    'hero.noads': 'Sans Pub',
    'hero.secure': 'Sécurisé et Privé',
    
    // Features Section
    'features.title': 'Pourquoi Choisir nGomna?',
    'features.subtitle': 'Découvrez les fonctionnalités puissantes qui font de nGomna le choix parfait pour votre expérience mobile.',
    'features.fast.title': 'Ultra Rapide',
    'features.fast.desc': 'Découvrez une vitesse sans précédent avec nos algorithmes optimisés et notre technologie de pointe.',
    'features.secure.title': 'Sécurisé et Privé',
    'features.secure.desc': 'Vos données sont protégées par un chiffrement de bout en bout et des principes de conception axés sur la confidentialité.',
    'features.friendly.title': 'Facile à Utiliser',
    'features.friendly.desc': 'Interface intuitive conçue avec amour, rendant chaque interaction fluide et agréable.',
    'features.community.title': 'Communautaire',
    'features.community.desc': 'Rejoignez des millions d\'utilisateurs qui font confiance à nGomna pour leur expérience mobile quotidienne.',
    'features.quality.title': 'Qualité Premium',
    'features.quality.desc': 'Conçu avec attention aux détails et construit pour dépasser vos attentes.',
    'features.platform.title': 'Multi-Plateforme',
    'features.platform.desc': 'Disponible sur toutes les principales plateformes avec synchronisation transparente entre appareils.',
    
    // Screenshots Section
    'screenshots.title': 'Voir nGomna en Action',
    'screenshots.subtitle': 'Découvrez la belle interface et l\'expérience utilisateur fluide à travers notre vitrine interactive.',
    
    // News Section
    'news.title': 'Dernières Nouvelles et Mises à Jour',
    'news.subtitle': 'Restez au courant des derniers développements, fonctionnalités et annonces de l\'équipe nGomna.',
    'news.readmore': 'Lire Plus',
    'news.viewall': 'Voir Toutes les Nouvelles',
    
    // Comments Section
    'comments.title': 'Ce Que Disent les Gens',
    'comments.subtitle': 'Rejoignez des millions d\'utilisateurs satisfaits qui ont transformé leur expérience mobile avec nGomna.',
    'comments.satisfaction': '98% de Satisfaction',
    'comments.support': 'Support 24/7',
    'comments.based': 'Basé sur plus de 50 000 avis d\'utilisateurs vérifiés',
    
    // FAQ Section
    'faq.title': 'Questions Fréquemment Posées',
    'faq.subtitle': 'Trouvez des réponses aux questions courantes sur nGomna. Vous ne trouvez pas ce que vous cherchez? Demandez-nous ci-dessous!',
    'faq.still': 'Vous Avez Encore des Questions?',
    'faq.message': 'Vous ne trouvez pas ce que vous cherchez? Envoyez-nous un message et nous répondrons dans les 24 heures.',
    'faq.email': 'Adresse E-mail',
    'faq.emailPlaceholder': 'Entrez votre adresse e-mail',
    'faq.messageLabel': 'Message',
    'faq.messagePlaceholder': 'Que souhaiteriez-vous savoir sur nGomna?',
    'faq.send': 'Envoyer le Message',
    'faq.submitted': 'Question Soumise!',
    'faq.thanks': 'Merci de nous avoir contactés! Notre équipe répondra dans les 24 heures.',
    
    // Download Section
    'download.title': 'Prêt à Commencer?',
    'download.subtitle': 'Rejoignez des millions d\'utilisateurs satisfaits et téléchargez nGomna aujourd\'hui. Disponible sur toutes les principales plateformes.',
    'download.rating': 'Note 4.8/5',
    'download.testimonial': '"nGomna a complètement transformé la façon dont j\'utilise mon téléphone. L\'interface est magnifique et les performances sont incroyables!" - Sarah M.',
    'download.appstore': 'App Store',
    'download.googleplay': 'Google Play',
    'download.downloads': 'Plus de 10M de Téléchargements',
    'download.free': 'Toujours Gratuit',
    
    // Footer
    'footer.description': 'Découvrez l\'avenir des applications mobiles avec nGomna. Construit avec amour, conçu pour l\'excellence.',
    'footer.quicklinks': 'Liens Rapides',
    'footer.support': 'Support',
    'footer.helpcenter': 'Centre d\'Aide',
    'footer.contactus': 'Nous Contacter',
    'footer.bugreports': 'Rapports de Bugs',
    'footer.featurerequests': 'Demandes de Fonctionnalités',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.copyright': '© 2025 nGomna. Tous droits réservés. Fait avec ❤️ pour les utilisateurs mobiles du monde entier.'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};