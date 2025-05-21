
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80')"
        }}
      >
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div className="animate-fade-up">
          <img 
            src="/lovable-uploads/61ee7c47-4a2d-447f-9f4c-193ba47f75bc.png" 
            alt="Aurora Tattoo Company" 
            className="w-64 md:w-72 lg:w-80 mx-auto mb-6"
          />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-aurora-gold mb-4 tracking-wide">
            AURORA TATTOO COMPANY
          </h1>
          
          <p className="text-lg md:text-xl font-serif text-white mb-8 max-w-2xl mx-auto">
            Premium tattoo artistry in a welcoming, sterile environment. 
            Creating custom designs that tell your story.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#book-appointment" 
              className="bg-aurora-gold hover:bg-opacity-90 text-black font-bold py-3 px-8 rounded-md transition-all transform hover-glow"
            >
              Book Appointment
            </a>
            <a 
              href="#meet-artists" 
              className="bg-transparent border-2 border-aurora-gold hover:border-white text-aurora-gold hover:text-white font-bold py-3 px-8 rounded-md transition-colors"
            >
              Meet Our Artists
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-aurora-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
