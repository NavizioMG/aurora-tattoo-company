
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import StickyBookingButton from '@/components/StickyBookingButton';

const AftercareGuide: React.FC = () => {
  const aftercareTips = [
    {
      id: 'day1',
      title: 'Initial Aftercare (Day 1)',
      content: [
        'Keep the bandage on for at least 2-3 hours',
        'Wash hands thoroughly before touching the tattoo',
        'Wash gently with lukewarm water and mild, fragrance-free soap',
        'Pat dry with a clean paper towel or let air dry',
        'Apply a thin layer of recommended aftercare ointment',
        'Do not re-bandage unless instructed by your artist',
      ],
    },
    {
      id: 'days2-14',
      title: 'Days 2-14 Aftercare',
      content: [
        'Wash tattoo 2-3 times daily with mild soap',
        'Apply a thin layer of aftercare product after washing',
        'Avoid soaking the tattoo (no swimming, baths, or hot tubs)',
        'Avoid direct sunlight and tanning beds',
        'Do not pick or scratch at scabs or flaking skin',
        'Wear loose-fitting clothing over the tattoo',
      ],
    },
    {
      id: 'long-term',
      title: 'Long-Term Care',
      content: [
        'Once healed, always apply SPF 30+ when exposing tattoo to sun',
        'Keep skin moisturized regularly',
        'Avoid harsh chemicals directly on the tattoo',
        'Touch-ups may be needed over time and are often offered at a discount',
      ],
    },
    {
      id: 'warning-signs',
      title: 'Warning Signs',
      content: [
        'Excessive redness that spreads beyond the tattoo',
        'Warm to touch or hot skin around tattoo',
        'Swelling that increases rather than decreases',
        'Pus or foul odor from the tattoo',
        'Fever or chills',
        'If you experience any of these symptoms, contact your artist immediately and seek medical attention',
      ],
    },
  ];

  const products = [
    {
      id: 'recommended',
      title: 'Recommended Products',
      content: [
        'Fragrance-free, antibacterial soap (Dr. Bronner's, Dove Sensitive)',
        'Aftercare ointment (A&D ointment, Aquaphor, or our studio's special blend)',
        'Fragrance-free, alcohol-free moisturizer after the first week',
        'SPF 30+ broad-spectrum sunscreen (after fully healed)',
      ],
    },
    {
      id: 'avoid',
      title: 'Products to Avoid',
      content: [
        'Scented lotions or soaps',
        'Petroleum-based products (after initial healing phase)',
        'Alcohol-based products or witch hazel',
        'Neosporin or similar antibiotic ointments (can cause reaction)',
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-aurora-gold mb-6 text-center">Tattoo Aftercare Guide</h1>
            
            <p className="text-white/80 text-lg mb-12 text-center">
              Proper aftercare is essential for the healing process and longevity of your new tattoo. 
              Follow these instructions carefully for best results.
            </p>
            
            <div className="bg-muted/50 rounded-lg p-6 md:p-8 mb-10">
              <h2 className="text-2xl font-serif font-bold text-aurora-gold mb-6">Aftercare Instructions</h2>
              
              <Accordion type="single" collapsible className="w-full">
                {aftercareTips.map((tip) => (
                  <AccordionItem key={tip.id} value={tip.id} className="border-b border-aurora-gold/30">
                    <AccordionTrigger className="text-left font-serif font-semibold py-4 text-aurora-gold hover:text-white">
                      {tip.title}
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-4">
                      <ul className="list-disc pl-5 space-y-2 text-white/80">
                        {tip.content.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-6 md:p-8 mb-10">
              <h2 className="text-2xl font-serif font-bold text-aurora-gold mb-6">Aftercare Products</h2>
              
              <Accordion type="single" collapsible className="w-full">
                {products.map((product) => (
                  <AccordionItem key={product.id} value={product.id} className="border-b border-aurora-gold/30">
                    <AccordionTrigger className="text-left font-serif font-semibold py-4 text-aurora-gold hover:text-white">
                      {product.title}
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-4">
                      <ul className="list-disc pl-5 space-y-2 text-white/80">
                        {product.content.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-serif font-bold text-aurora-gold mb-4">Still Have Questions?</h2>
              <p className="text-white/80 mb-6">
                If you have any concerns about your healing tattoo or need specific advice, please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+15551234567">
                  <Button variant="outline" className="border-aurora-gold text-aurora-gold hover:bg-aurora-gold hover:text-black">
                    Call Us
                  </Button>
                </a>
                <a href="mailto:info@auroratattoo.com">
                  <Button className="bg-aurora-gold text-black hover:bg-opacity-80">
                    Email Us
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <a 
                href="/aftercare.pdf"
                download
                className="inline-flex items-center text-aurora-gold hover:underline"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Printable Aftercare Guide (PDF)
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <StickyBookingButton />
    </div>
  );
};

export default AftercareGuide;
