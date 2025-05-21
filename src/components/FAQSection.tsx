
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "What should I do to prepare for my tattoo appointment?",
    answer: (
      <div>
        <p>Before your appointment:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Get a good night's sleep</li>
          <li>Stay hydrated</li>
          <li>Eat a good meal before arriving</li>
          <li>Avoid alcohol for 24 hours before your session</li>
          <li>Wear comfortable clothing that allows easy access to the tattoo area</li>
        </ul>
      </div>
    )
  },
  {
    question: "What is your cancellation policy?",
    answer: (
      <div>
        <p>We require at least 48 hours notice for cancellations. Cancellations with less notice or no-shows will result in the loss of your deposit. We understand emergencies happen, so please contact us as soon as possible if you need to reschedule.</p>
      </div>
    )
  },
  {
    question: "How much does a tattoo cost?",
    answer: (
      <div>
        <p>Tattoo pricing varies based on several factors:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Size and placement of the tattoo</li>
          <li>Complexity of the design</li>
          <li>Time required to complete</li>
          <li>Artist experience level</li>
        </ul>
        <p className="mt-2">For accurate pricing, we recommend scheduling a consultation with one of our artists.</p>
      </div>
    )
  },
  {
    question: "What is the minimum age requirement?",
    answer: (
      <div>
        <p>You must be 18 years or older with valid government-issued ID to get tattooed at our studio. We do not offer tattoos to minors, even with parental consent.</p>
      </div>
    )
  },
  {
    question: "How do I take care of my new tattoo?",
    answer: (
      <div>
        <p>Basic aftercare instructions include:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Keep the bandage on for the time period recommended by your artist</li>
          <li>Gently wash with mild unscented soap</li>
          <li>Apply a thin layer of recommended aftercare product</li>
          <li>Avoid direct sunlight, swimming, and soaking for at least 2 weeks</li>
          <li>Don't pick or scratch at scabs that form</li>
        </ul>
        <p className="mt-2">You'll receive detailed aftercare instructions after your session, or you can visit our Aftercare page.</p>
      </div>
    )
  },
  {
    question: "Do you offer gift certificates?",
    answer: (
      <div>
        <p>Yes! Gift certificates are available in various amounts and make a great gift. They can be purchased in-studio or by contacting us directly.</p>
      </div>
    )
  },
];

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-muted to-black">
      <div className="container-custom">
        <div className="ornament mb-10">
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-aurora-gold/30">
                <AccordionTrigger className="text-left font-serif font-semibold py-4 text-aurora-gold hover:text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/80 pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/80 mb-4">
            Have more questions? We're happy to help!
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-transparent border-2 border-aurora-gold hover:border-white text-aurora-gold hover:text-white font-bold py-2 px-6 rounded-md transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
