'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServiceDetail from './ServiceDetail';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <ServiceDetail />
      <Footer />
    </div>
  );
}