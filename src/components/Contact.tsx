
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useInView } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [sectionRef, isInView] = useInView({
    threshold: 0.1
  });
  
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Form submitted successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      setLoading(false);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="section bg-gradient-to-b from-background to-secondary/30"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={cn(
              "transition-all duration-700",
              isInView 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 -translate-x-12"
            )}
          >
            <span className="highlight-chip">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Let's Start Your Educational Journey
            </h2>
            <p className="text-muted-foreground mb-8">
              Have questions about our programs or need more information? 
              Fill out the form, and our team will get back to you as soon as possible.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-medium">Email Us</h4>
                  <p className="text-sm text-muted-foreground">info@hitechedu.org</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-medium">Call Us</h4>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-medium">Visit Us</h4>
                  <p className="text-sm text-muted-foreground">123 Tech Avenue, Silicon Valley, CA 94025</p>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className={cn(
              "glass-card rounded-xl p-6 md:p-8 transition-all duration-700",
              isInView 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 translate-x-12"
            )}
            style={{ transitionDelay: '200ms' }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Tell us about your educational goals..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-6 bg-primary text-white rounded-lg font-medium flex items-center justify-center space-x-2 transition-all button-hover ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
