
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Newsletter: React.FC = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call to Go High Level (GHL)
    setTimeout(() => {
      console.log('Newsletter signup:', email);
      
      toast({
        title: "Successfully Subscribed!",
        description: "You'll now receive updates on flash deals and special events.",
      });
      
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-black to-muted">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-aurora-gold">Stay Connected</h2>
          <p className="text-white/80 mb-6">
            Subscribe for updates on flash tattoo events, special promotions, and artist availability.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-input text-white border-aurora-gold/30 focus:border-aurora-gold max-w-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit" 
              className="bg-aurora-gold hover:bg-opacity-90 text-black font-bold transition-all transform hover-glow"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
          
          <p className="text-white/50 text-xs mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
