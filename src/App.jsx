import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import News from './components/News';
import Comments from './components/Comments';
import FAQ from './components/FAQ';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Features />
        <Screenshots />
        <News />
        <Comments />
        <FAQ />
        <Download />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;