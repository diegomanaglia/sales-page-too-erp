import React from 'react';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import TrustLogos from './components/sections/TrustLogos';
import Features from './components/sections/Features';
import Showcase from './components/sections/Showcase';
import Benefits from './components/sections/Benefits';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import FAQ from './components/sections/FAQ';
import CTA from './components/sections/CTA';
import Footer from './components/sections/Footer';
import { BRAND } from './utils/constants';

export default function App() {
  return (
    <div className="min-h-screen bg-white" style={{ color: BRAND.text }}>
      <Navbar />
      <Hero />
      <TrustLogos />
      <Features />
      <Showcase />
      <Benefits />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}