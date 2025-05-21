
import React, { useState, useEffect } from 'react';

const StickyBookingButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <a 
      href="#book-appointment"
      className="sticky-booking-btn hover-glow"
      aria-label="Book appointment"
    >
      Book Now
    </a>
  );
};

export default StickyBookingButton;
