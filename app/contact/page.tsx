'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <ContactForm />
      <Footer />
    </div>
  );
}