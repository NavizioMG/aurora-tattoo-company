
import React from 'react';
import { MapPin } from 'lucide-react';

const MapsLocation: React.FC = () => {
  return (
    <section id="location" className="py-16 bg-black">
      <div className="container-custom">
        <div className="ornament mb-10">
          <h2 className="section-title">Find Us</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 flex flex-col justify-center">
            <div className="bg-muted/50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <MapPin className="h-6 w-6 text-aurora-gold mr-2 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-aurora-gold">Our Location</h3>
                  <address className="text-white/80 not-italic">
                    123 Tattoo Street<br />
                    Inkville, IN 12345<br />
                    United States
                  </address>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2 text-white">Nearby Landmarks</h4>
                <ul className="text-white/70 space-y-1">
                  <li>• 2 blocks from Central Park</li>
                  <li>• Across from City Art Gallery</li>
                  <li>• 5 minutes from Downtown Station</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2 text-white">Parking</h4>
                <p className="text-white/70">
                  Free parking is available in our lot behind the building. Street parking is also available (metered until 6 PM).
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 h-[400px] rounded-lg overflow-hidden">
            {/* Google Maps iframe - Would typically use API key for production */}
            <iframe
              title="Aurora Tattoo Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7462606709397!2d-122.41941872392758!3d37.77492831456982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5358ca5!2s123+Main+St%2C+San+Francisco%2C+CA+94105!5e0!3m2!1sen!2sus!4v1564523143627!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapsLocation;
