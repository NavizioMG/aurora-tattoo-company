
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import StickyBookingButton from '@/components/StickyBookingButton';

const FAQPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container-custom py-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-aurora-gold mb-6 text-center">Frequently Asked Questions</h1>
          <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
            Find answers to common questions about our tattoo services, booking process, aftercare, and more. If you don't find what you're looking for, please contact us.
          </p>
        </div>
        <FAQSection />
      </main>
      <Footer />
      <StickyBookingButton />
    </div>
  );
};

export default FAQPage;
