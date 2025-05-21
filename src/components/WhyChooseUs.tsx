
import React from 'react';
import { Star, Shield, PenLine, Award } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left mb-10 md:mb-0">
      <div className="bg-aurora-gold/10 rounded-full p-3 mb-4">
        <div className="text-aurora-gold">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Award size={24} />,
      title: 'Award-Winning Artists',
      description: 'Our talented team has won multiple awards at tattoo conventions nationwide.',
    },
    {
      icon: <PenLine size={24} />,
      title: 'Custom Designs',
      description: 'Every tattoo is custom-designed to tell your unique story and match your vision.',
    },
    {
      icon: <Shield size={24} />,
      title: 'Sterile Environment',
      description: 'We maintain the highest standards of cleanliness and hygiene for your safety.',
    },
    {
      icon: <Star size={24} />,
      title: 'Premium Experience',
      description: 'From consultation to aftercare, enjoy a professional and comfortable process.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-muted">
      <div className="container-custom">
        <div className="ornament mb-10">
          <h2 className="section-title">Why Choose Us</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
