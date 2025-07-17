import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Screenshots from '../components/Screenshots';
import News from '../components/News';
import Comments from '../components/Comments';
import FAQ from '../components/FAQ';
import Download from '../components/Download';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Screenshots />
      <News />
      <Comments />
      <FAQ />
      <Download />
      <Footer />
    </>
  );
};

export default HomePage;