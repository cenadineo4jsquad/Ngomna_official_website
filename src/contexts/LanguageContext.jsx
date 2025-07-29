import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext(undefined);

// Translation data
const translations = {
  en: {
    // Header
    'nav.features': 'Features',
    'nav.features.title': 'nGomna Features',
    'nav.features.subtitle': 'Explore all capabilities',
    'nav.news': 'News',
    'nav.reviews': 'Reviews',
    'nav.faq': 'FAQ',
    'nav.screenshots': 'Screenshots',
    'nav.contact': 'Contact',
    'nav.download': 'Download',
    
    // Feature names for dropdown
    'features.payslips': 'Payslips',
    'features.information': 'Information',
    'features.notifications': 'Notifications',
    'features.census': 'Census',
    'features.messaging': 'Messaging',
    'features.children': 'Children',
    'features.security': 'Security',
    'features.otp': 'OTP',
    'features.dgi': 'DGI',
    'features.govai': 'GOV-AI',
    
    // Hero Section
    'hero.title.experience': 'Experience the',
    'hero.title.revolution': 'Revolution',
    'hero.subtitle': 'The citizens closer to the Government',
    'hero.download': 'Download Now',
    'hero.free': '100% Free',
    'hero.noads': 'No Ads',
    'hero.secure': 'Secure & Private',
    
    // About Section
    'about.badge': 'About nGomna',
    'about.title': 'About nGomna',
    'about.subtitle': 'About nGomna',
    'about.description': 'nGomna is a cutting-edge mobile application developed in partnership with government institutions to provide citizens with seamless access to essential services. From payslips to official documents, we\'re transforming how you interact with government services.',
    'about.features.government': 'Official government partnership',
    'about.features.secure': 'Bank-level security & encryption',
    'about.features.multilingual': 'Multi-language support',
    'about.features.support': '24/7 customer support',
    'about.stats.users': 'Active Users',
    'about.stats.services': 'Government Services',
    'about.stats.rating': 'User Rating',
    'about.stats.uptime': 'System Uptime',
    'about.partnership': 'In partnership with',
    'about.cta': 'Discover More',
    
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
    
    // FAQ Questions and Answers
    'faq.q1': 'Is nGomna really free to use?',
    'faq.a1': 'Yes! nGomna is completely free to download and use. We believe in providing premium features without any cost to our users. There are no hidden fees, subscriptions, or in-app purchases required.',
    'faq.q2': 'How secure is my data with nGomna?',
    'faq.a2': 'Your privacy and security are our top priorities. nGomna uses military-grade end-to-end encryption to protect all your data. We never sell your information to third parties, and all data is stored securely on our encrypted servers.',
    'faq.q3': 'Which devices and platforms does nGomna support?',
    'faq.a3': 'nGomna is available on iOS (iPhone and iPad), Android smartphones and tablets, and we also offer a web version. The app synchronizes seamlessly across all your devices, so you can pick up where you left off on any platform.',
    'faq.q4': 'How do I get started with nGomna?',
    'faq.a4': 'Getting started is simple! Download nGomna from the App Store or Google Play, create your free account, and follow our intuitive onboarding process. The app will guide you through setting up your preferences and exploring the key features.',
    'faq.q5': 'Can I use nGomna offline?',
    'faq.a5': 'Yes, many of nGomna\'s core features work offline. Your data is cached locally, so you can continue using the app even without an internet connection. When you reconnect, everything syncs automatically across your devices.',
    
    // Screenshots Section
    'screenshots.payslips': 'Monthly payslips',
    'screenshots.payslips.desc': 'In just a few clicks, access your payslip every month with nGomna',
    'screenshots.view': 'View payslips',
    'screenshots.view.desc': 'Take a look at your payslip before using it with nGomna',
    'screenshots.download': 'Download payslips',
    'screenshots.download.desc': 'Freely download your payslip with nGomna',
    'screenshots.share': 'Share payslips',
    'screenshots.share.desc': 'Easily share your payslip via other media with nGomna',
    'screenshots.store': 'Store payslips',
    'screenshots.store.desc': 'Safely keep records of all your downloaded payslips with nGomna',
    'screenshots.learnmore': 'Learn More',
    
    // Comments Section - User Reviews
    'comments.user1.name': 'Sarah Chen',
    'comments.user1.comment': 'nGomna has completely revolutionized how I use my phone! The AI features are incredible and the interface is so intuitive.',
    'comments.user2.name': 'Marcus Rodriguez',
    'comments.user2.comment': 'As a developer, I appreciate the attention to detail in nGomna. The performance is outstanding and the security features give me peace of mind.',
    'comments.user3.name': 'Emily Watson',
    'comments.user3.comment': 'The design is absolutely beautiful! Every interaction feels smooth and delightful. nGomna sets the standard for mobile apps.',
    'comments.user4.name': 'David Kim',
    'comments.user4.comment': 'I\'ve been using nGomna for 6 months now and it just keeps getting better. The recent AI update is a game-changer!',
    'comments.user5.name': 'Lisa Thompson',
    'comments.user5.comment': 'Finally, an app that actually cares about user privacy! The end-to-end encryption and clean interface make this my go-to choice.',
    'comments.user6.name': 'Alex Johnson',
    'comments.user6.comment': 'The community around nGomna is amazing! Great app with even better support. Highly recommend to everyone.',
    
    // News Section
    'news.article1.title': 'nGomna 3.0 Released with Revolutionary AI Features',
    'news.article1.excerpt': 'Experience the future with our new AI-powered interface that learns and adapts to your usage patterns.',
    'news.article1.category': 'Product Update',
    'news.article2.title': 'Enhanced Security: End-to-End Encryption Now Live',
    'news.article2.excerpt': 'Your privacy matters. We\'ve implemented military-grade encryption to protect all your data.',
    'news.article2.category': 'Security',
    'news.article3.title': 'Community Milestone: 50 Million Active Users',
    'news.article3.excerpt': 'Thank you to our amazing community for helping us reach this incredible milestone!',
    'news.article3.category': 'Community',
    'news.article4.title': 'nGomna Wins \'App of the Year\' Award',
    'news.article4.excerpt': 'We\'re honored to receive this prestigious recognition from the Mobile Excellence Awards 2025.',
    'news.article4.category': 'Awards',
    
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
    'footer.description': 'Experience the future of mobile applications with nGomna. Built with love, designed for excellence, in partnership with government institutions.',
    'footer.features': 'Features',
    'footer.payslips': 'Payslips',
    'footer.information': 'Information',
    'footer.notifications': 'Notifications',
    'footer.census': 'Census',
    'footer.messaging': 'Messaging',
    'footer.children': 'Children',
    'footer.security': 'Security',
    'footer.otp': 'OTP',
    'footer.dgi': 'DGI',
    'footer.govai': 'GOV-AI',
    'footer.support': 'Support',
    'footer.helpcenter': 'Help Center',
    'footer.contactus': 'Contact Us',
    'footer.whatsapp': 'WhatsApp Support',
    'footer.userguide': 'User Guide',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.copyright': '© 2025 nGomna. All rights reserved. Made with ❤️ for mobile users everywhere.',
    'footer.powered': 'Powered by CENADI & MINFI'
  },
  fr: {
    // Header
    'nav.features': 'Fonctionnalités',
    'nav.features.title': 'Fonctionnalités nGomna',
    'nav.features.subtitle': 'Explorez toutes les capacités',
    'nav.news': 'Actualités',
    'nav.reviews': 'Avis',
    'nav.faq': 'FAQ',
    'nav.screenshots': 'Captures',
    'nav.contact': 'Contact',
    'nav.download': 'Télécharger',
    
    // Feature names for dropdown
    'features.payslips': 'Bulletins de paie',
    'features.information': 'Information',
    'features.notifications': 'Notifications',
    'features.census': 'Recensement',
    'features.messaging': 'Messagerie',
    'features.children': 'Enfants',
    'features.security': 'Sécurité',
    'features.otp': 'OTP',
    'features.dgi': 'DGI',
    'features.govai': 'GOV-IA',
    
    // Hero Section
    'hero.title.experience': 'Découvrez la',
    'hero.title.revolution': 'Révolution',
    'hero.subtitle': 'Les citoyens plus proches du Gouvernement',
    'hero.download': 'Télécharger',
    'hero.free': '100% Gratuit',
    'hero.noads': 'Sans Pub',
    'hero.secure': 'Sécurisé et Privé',
    
    // About Section
    'about.badge': 'À propos de nGomna',
    'about.title': 'À propos de nGomna',
    'about.subtitle': 'À propos de nGomna',
    'about.description': 'nGomna est une application mobile de pointe développée en partenariat avec les institutions gouvernementales pour fournir aux citoyens un accès transparent aux services essentiels. Des bulletins de paie aux documents officiels, nous transformons votre interaction avec les services gouvernementaux.',
    'about.features.government': 'Partenariat gouvernemental officiel',
    'about.features.secure': 'Sécurité et chiffrement de niveau bancaire',
    'about.features.multilingual': 'Support multilingue',
    'about.features.support': 'Support client 24/7',
    'about.stats.users': 'Utilisateurs Actifs',
    'about.stats.services': 'Services Gouvernementaux',
    'about.stats.rating': 'Note Utilisateur',
    'about.stats.uptime': 'Disponibilité Système',
    'about.partnership': 'En partenariat avec',
    'about.cta': 'Découvrir Plus',
    
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
    
    // FAQ Questions and Answers
    'faq.q1': 'nGomna est-il vraiment gratuit?',
    'faq.a1': 'Oui! nGomna est complètement gratuit à télécharger et à utiliser. Nous croyons en la fourniture de fonctionnalités premium sans aucun coût pour nos utilisateurs. Il n\'y a pas de frais cachés, d\'abonnements ou d\'achats intégrés requis.',
    'faq.q2': 'Quelle est la sécurité de mes données avec nGomna?',
    'faq.a2': 'Votre confidentialité et votre sécurité sont nos priorités absolues. nGomna utilise un chiffrement de bout en bout de qualité militaire pour protéger toutes vos données. Nous ne vendons jamais vos informations à des tiers, et toutes les données sont stockées en sécurité sur nos serveurs chiffrés.',
    'faq.q3': 'Quels appareils et plateformes nGomna prend-il en charge?',
    'faq.a3': 'nGomna est disponible sur iOS (iPhone et iPad), smartphones et tablettes Android, et nous offrons également une version web. L\'application se synchronise parfaitement sur tous vos appareils, vous pouvez donc reprendre là où vous vous êtes arrêté sur n\'importe quelle plateforme.',
    'faq.q4': 'Comment commencer avec nGomna?',
    'faq.a4': 'Commencer est simple! Téléchargez nGomna depuis l\'App Store ou Google Play, créez votre compte gratuit, et suivez notre processus d\'intégration intuitif. L\'application vous guidera dans la configuration de vos préférences et l\'exploration des fonctionnalités clés.',
    'faq.q5': 'Puis-je utiliser nGomna hors ligne?',
    'faq.a5': 'Oui, de nombreuses fonctionnalités principales de nGomna fonctionnent hors ligne. Vos données sont mises en cache localement, vous pouvez donc continuer à utiliser l\'application même sans connexion Internet. Lorsque vous vous reconnectez, tout se synchronise automatiquement sur vos appareils.',
    
    // Screenshots Section
    'screenshots.payslips': 'Bulletins de paie mensuels',
    'screenshots.payslips.desc': 'En quelques clics seulement, accédez à votre bulletin de paie chaque mois avec nGomna',
    'screenshots.view': 'Voir les bulletins de paie',
    'screenshots.view.desc': 'Jetez un coup d\'œil à votre bulletin de paie avant de l\'utiliser avec nGomna',
    'screenshots.download': 'Télécharger les bulletins de paie',
    'screenshots.download.desc': 'Téléchargez librement votre bulletin de paie avec nGomna',
    'screenshots.share': 'Partager les bulletins de paie',
    'screenshots.share.desc': 'Partagez facilement votre bulletin de paie via d\'autres médias avec nGomna',
    'screenshots.store': 'Stocker les bulletins de paie',
    'screenshots.store.desc': 'Conservez en sécurité les enregistrements de tous vos bulletins de paie téléchargés avec nGomna',
    'screenshots.learnmore': 'En Savoir Plus',
    
    // Comments Section - User Reviews
    'comments.user1.name': 'Sarah Chen',
    'comments.user1.comment': 'nGomna a complètement révolutionné la façon dont j\'utilise mon téléphone! Les fonctionnalités IA sont incroyables et l\'interface est si intuitive.',
    'comments.user2.name': 'Marcus Rodriguez',
    'comments.user2.comment': 'En tant que développeur, j\'apprécie l\'attention aux détails dans nGomna. Les performances sont exceptionnelles et les fonctionnalités de sécurité me donnent la tranquillité d\'esprit.',
    'comments.user3.name': 'Emily Watson',
    'comments.user3.comment': 'Le design est absolument magnifique! Chaque interaction est fluide et délicieuse. nGomna établit la norme pour les applications mobiles.',
    'comments.user4.name': 'David Kim',
    'comments.user4.comment': 'J\'utilise nGomna depuis 6 mois maintenant et ça ne fait que s\'améliorer. La récente mise à jour IA change la donne!',
    'comments.user5.name': 'Lisa Thompson',
    'comments.user5.comment': 'Enfin, une application qui se soucie vraiment de la confidentialité des utilisateurs! Le chiffrement de bout en bout et l\'interface propre en font mon choix de référence.',
    'comments.user6.name': 'Alex Johnson',
    'comments.user6.comment': 'La communauté autour de nGomna est incroyable! Excellente application avec un support encore meilleur. Je recommande vivement à tout le monde.',
    
    // News Section
    'news.article1.title': 'nGomna 3.0 Publié avec des Fonctionnalités IA Révolutionnaires',
    'news.article1.excerpt': 'Découvrez l\'avenir avec notre nouvelle interface alimentée par l\'IA qui apprend et s\'adapte à vos habitudes d\'utilisation.',
    'news.article1.category': 'Mise à Jour Produit',
    'news.article2.title': 'Sécurité Renforcée: Chiffrement de Bout en Bout Maintenant Actif',
    'news.article2.excerpt': 'Votre confidentialité compte. Nous avons implémenté un chiffrement de qualité militaire pour protéger toutes vos données.',
    'news.article2.category': 'Sécurité',
    'news.article3.title': 'Étape Communautaire: 50 Millions d\'Utilisateurs Actifs',
    'news.article3.excerpt': 'Merci à notre incroyable communauté de nous avoir aidés à atteindre cette étape incroyable!',
    'news.article3.category': 'Communauté',
    'news.article4.title': 'nGomna Remporte le Prix \'Application de l\'Année\'',
    'news.article4.excerpt': 'Nous sommes honorés de recevoir cette reconnaissance prestigieuse des Mobile Excellence Awards 2025.',
    'news.article4.category': 'Récompenses',
    
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
    'footer.description': 'Découvrez l\'avenir des applications mobiles avec nGomna. Construit avec amour, conçu pour l\'excellence, en partenariat avec les institutions gouvernementales.',
    'footer.features': 'Fonctionnalités',
    'footer.payslips': 'Bulletins de paie',
    'footer.information': 'Information',
    'footer.notifications': 'Notifications',
    'footer.census': 'Recensement',
    'footer.messaging': 'Messagerie',
    'footer.children': 'Enfants',
    'footer.security': 'Sécurité',
    'footer.otp': 'OTP',
    'footer.dgi': 'DGI',
    'footer.govai': 'GOV-IA',
    'footer.support': 'Support',
    'footer.helpcenter': 'Centre d\'Aide',
    'footer.contactus': 'Nous Contacter',
    'footer.whatsapp': 'Support WhatsApp',
    'footer.userguide': 'Guide Utilisateur',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions d\'Utilisation',
    'footer.copyright': '© 2025 nGomna. Tous droits réservés. Fait avec ❤️ pour les utilisateurs mobiles du monde entier.',
    'footer.powered': 'Propulsé par CENADI & MINFI'
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
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