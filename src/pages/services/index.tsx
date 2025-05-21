
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import StickyBookingButton from '@/components/StickyBookingButton';

const ServicesPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container-custom py-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-aurora-gold mb-6 text-center">Services & Pricing</h1>
          <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
            At Aurora Tattoo Company, we specialize in various tattoo styles and services. 
            Our talented artists can bring your vision to life with expertise and precision.
          </p>
        </div>
        <Services />
      </main>
      <Footer />
      <StickyBookingButton />
    </div>
  );
};

export default ServicesPage;
