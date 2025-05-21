
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import ArtistList from '@/components/ArtistList';
import Services from '@/components/Services';
import FAQSection from '@/components/FAQSection';
import Reviews from '@/components/Reviews';
import BookingSection from '@/components/BookingSection';
import MapsLocation from '@/components/MapsLocation';
import SocialProof from '@/components/SocialProof';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import StickyBookingButton from '@/components/StickyBookingButton';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <WhyChooseUs />
        <ArtistList />
        <Services />
        <SocialProof />
        <Reviews />
        <FAQSection />
        <MapsLocation />
        <Newsletter />
        <BookingSection />
      </main>
      <Footer />
      <StickyBookingButton />
    </div>
  );
};

export default Index;
