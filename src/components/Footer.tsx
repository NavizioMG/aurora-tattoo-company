
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-aurora-gold/30">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="block mb-4">
              <img
                src="/lovable-uploads/61ee7c47-4a2d-447f-9f4c-193ba47f75bc.png"
                alt="Aurora Tattoo Company Logo"
                className="h-24 w-auto object-contain mb-4"
              />
            </Link>
            <p className="text-white/70 text-sm">
              Premium tattoo artistry in a welcoming, sterile environment.
              Creating custom designs that tell your story since 2015.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-aurora-gold font-serif font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/artists" className="text-white/70 hover:text-aurora-gold transition-colors">
                  Our Artists
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-aurora-gold transition-colors">
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link to="/aftercare" className="text-white/70 hover:text-aurora-gold transition-colors">
                  Aftercare Guide
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/70 hover:text-aurora-gold transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <a href="#book-appointment" className="text-white/70 hover:text-aurora-gold transition-colors">
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-aurora-gold font-serif font-bold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-aurora-gold mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-white/70">
                  123 Tattoo Street<br />
                  Inkville, IN 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-aurora-gold mr-2 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-white/70 hover:text-aurora-gold transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-aurora-gold mr-2 flex-shrink-0" />
                <a href="mailto:info@auroratattoo.com" className="text-white/70 hover:text-aurora-gold transition-colors">
                  info@auroratattoo.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Hours & Social */}
          <div className="col-span-1">
            <h4 className="text-aurora-gold font-serif font-bold mb-4 text-lg">Business Hours</h4>
            <ul className="space-y-1 mb-6">
              <li className="text-white/70">Mon-Fri: 12:00 PM - 9:00 PM</li>
              <li className="text-white/70">Saturday: 12:00 PM - 8:00 PM</li>
              <li className="text-white/70">Sunday: Closed</li>
            </ul>
            
            <h4 className="text-aurora-gold font-serif font-bold mb-4 text-lg">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/auroratattoocompany"
                target="_blank"
                rel="noreferrer"
                className="text-aurora-gold hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com/auroratattoocompany"
                target="_blank"
                rel="noreferrer"
                className="text-aurora-gold hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-aurora-gold/30 mt-10 pt-6 text-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Aurora Tattoo Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
