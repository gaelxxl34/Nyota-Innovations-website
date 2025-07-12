'use client';

import Header from '../components/Header';
import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <Hero />
      <ServicesPreview />
      <Footer />
    </div>
  );
}