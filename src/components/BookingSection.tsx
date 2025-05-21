
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from '@/hooks/use-toast';

const BookingSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    artist: '',
    tattooIdea: '',
    placement: '',
    size: '',
    budget: '',
    additionalInfo: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // This would normally connect to Go High Level (GHL) forms
    // Since we don't have actual integration, we'll simulate success
    
    toast({
      title: "Request Submitted!",
      description: "We'll contact you shortly to discuss your tattoo idea.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      artist: '',
      tattooIdea: '',
      placement: '',
      size: '',
      budget: '',
      additionalInfo: '',
    });
  };

  return (
    <section id="book-appointment" className="py-20 bg-gradient-to-b from-black to-muted">
      <div className="container-custom">
        <div className="ornament mb-10">
          <h2 className="section-title">Book Your Appointment</h2>
        </div>
        
        <div className="max-w-3xl mx-auto bg-muted/50 rounded-lg p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="bg-input text-white border-aurora-gold/30 focus:border-aurora-gold"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-input text-white border-aurora-gold/30 focus:border-aurora-gold"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  required
                  className="bg-input text-white border-aurora-gold/30 focus:border-aurora-gold"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="artist" className="text-white">Preferred Artist (Optional)</Label>
                <Select onValueChange={(value) => handleSelectChange('artist', value)}>
                  <SelectTrigger className="bg-input text-white border-aurora-gold/30">
                    <SelectValue placeholder="Select artist (optional)" />
                  </SelectTrigger>
                  <SelectContent className="bg-muted text-white border-aurora-gold/30">
                    <SelectItem value="alex">Alex Rivera</SelectItem>
                    <SelectItem value="jordan">Jordan Lee</SelectItem>
                    <SelectItem value="sam">Sam Chen</SelectItem>
                    <SelectItem value="taylor">Taylor Morgan</SelectItem>
                    <SelectItem value="any">No Preference</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="tattooIdea" className="text-white">Tattoo Idea</Label>
              <Textarea
                id="tattooIdea"
                name="tattooIdea"
                value={formData.tattooIdea}
                onChange={handleChange}
                placeholder="Describe your tattoo idea in detail..."
                required
                className="bg-input text-white border-aurora-gold/30 focus:border-aurora-gold min-h-[100px]"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="placement" className="text-white">Placement</Label>
                <Input
                  id="placement"
                  name="placement"
                  value={formData.placement}
                  onChange={handleChange}
                  placeholder="e.g., Forearm, Back, etc."
                  className="bg-input text-white border-aurora-gold/30 focus:border-aurora-gold"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="size" className="text-white">Approximate Size</Label>
                <Input
                  id="size"
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  placeholder="e.g., 3x5 inches"
                  className="bg-input text-white border-aurora-gold/30 focus:border-aurora-gold"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="budget" className="text-white">Budget Range (Optional)</Label>
                <Input
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="e.g., $300-500"
                  className="bg-input text-white border-aurora-gold/30 focus:border-aurora-gold"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="additionalInfo" className="text-white">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                placeholder="Any additional details or questions..."
                className="bg-input text-white border-aurora-gold/30 focus:border-aurora-gold"
              />
            </div>
            
            <div className="text-sm text-white/60 italic">
              * By submitting this form, you agree to our cancellation and deposit policies.
            </div>
            
            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                className="bg-aurora-gold hover:bg-opacity-90 text-black font-bold py-3 px-8 rounded-md transition-all transform hover-glow w-full md:w-auto md:min-w-[200px]"
              >
                Submit Request
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
