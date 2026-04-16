import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { SIPCalculator } from './components/SIPCalculator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <div className="App">
      <Toaster position="top-right" />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SIPCalculator />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
