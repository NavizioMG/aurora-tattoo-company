
import React from 'react';

interface ServiceCategory {
  title: string;
  items: {
    name: string;
    description?: string;
  }[];
}

const serviceCategories: ServiceCategory[] = [
  {
    title: "Custom Tattoos",
    items: [
      { name: "Full Custom Design", description: "Unique artwork created specifically for you" },
      { name: "Cover-ups", description: "Transform or hide existing tattoos" },
      { name: "Rework & Touch-ups", description: "Enhance and refresh older tattoos" },
    ]
  },
  {
    title: "Specialized Styles",
    items: [
      { name: "Neo-Traditional" },
      { name: "Japanese" },
      { name: "Black & Grey Realism" },
      { name: "Geometric" },
      { name: "Watercolor" },
      { name: "Fine Line" },
      { name: "American Traditional" },
    ]
  }
];

const businessHours = [
  { day: "Monday - Friday", hours: "12:00 PM - 9:00 PM" },
  { day: "Saturday", hours: "12:00 PM - 8:00 PM" },
  { day: "Sunday", hours: "Closed" }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="container-custom">
        <div className="ornament mb-10">
          <h2 className="section-title">Our Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-muted/50 p-6 md:p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center text-aurora-gold">Services</h3>
            
            {serviceCategories.map((category, idx) => (
              <div key={idx} className="mb-8">
                <h4 className="text-xl font-serif font-bold mb-3 border-b border-aurora-gold/30 pb-2">
                  {category.title}
                </h4>
                <ul className="space-y-3">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex flex-col">
                      <span className="text-white font-medium">{item.name}</span>
                      {item.description && (
                        <span className="text-sm text-white/70">{item.description}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            <div className="mt-6 text-center">
              <p className="text-white/70 text-sm italic">
                Prices vary based on size, complexity, and placement.
                Contact us for a personalized quote.
              </p>
            </div>
          </div>
          
          <div>
            <div className="bg-muted/50 p-6 md:p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-aurora-gold">Business Hours</h3>
              
              <div className="space-y-4">
                {businessHours.map((schedule, idx) => (
                  <div key={idx} className="flex justify-between border-b border-aurora-gold/30 pb-2 last:border-0">
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-white/80">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-muted/50 p-6 md:p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center text-aurora-gold">Booking Process</h3>
              
              <ol className="space-y-4 list-decimal list-inside">
                <li className="text-white">
                  <span className="font-medium">Consultation:</span>
                  <p className="pl-6 text-white/70 mt-1">
                    Discuss your ideas with our artists to create your perfect design.
                  </p>
                </li>
                <li className="text-white">
                  <span className="font-medium">Deposit:</span>
                  <p className="pl-6 text-white/70 mt-1">
                    A $50-100 non-refundable deposit is required to secure your appointment.
                  </p>
                </li>
                <li className="text-white">
                  <span className="font-medium">Design Approval:</span>
                  <p className="pl-6 text-white/70 mt-1">
                    Review and approve your custom design before tattooing begins.
                  </p>
                </li>
                <li className="text-white">
                  <span className="font-medium">Session:</span>
                  <p className="pl-6 text-white/70 mt-1">
                    Arrive on time for your scheduled appointment ready for your tattoo experience.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
