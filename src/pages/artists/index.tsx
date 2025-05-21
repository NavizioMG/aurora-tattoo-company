
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArtistList from '@/components/ArtistList';
import StickyBookingButton from '@/components/StickyBookingButton';

const ArtistsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container-custom py-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-aurora-gold mb-6 text-center">Meet Our Artists</h1>
          <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
            Get to know the talented tattoo artists behind our exceptional work. Each artist brings their unique style and expertise to create custom pieces you'll love forever.
          </p>
        </div>
        <ArtistList />
      </main>
      <Footer />
      <StickyBookingButton />
    </div>
  );
};

export default ArtistsPage;
