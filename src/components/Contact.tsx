
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  
  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@hitechedu.org",
      delay: 0.1
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      delay: 0.2
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Tech Avenue, Silicon Valley, CA 94025",
      delay: 0.3
    }
  ];

  const formFields = [
    { id: "name", label: "Full Name", type: "text", placeholder: "John Doe", required: true },
    { id: "email", label: "Email Address", type: "email", placeholder: "john@example.com", required: true },
    { id: "phone", label: "Phone Number", type: "tel", placeholder: "(555) 123-4567", required: false }
  ];

  return (
    <section 
      id="contact" 
      className="section bg-gradient-to-b from-background to-secondary/30 dark:from-gray-900 dark:to-gray-800/50"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="highlight-chip dark:bg-white/10 dark:text-white">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 dark:text-white">
              Let's Start Your Educational Journey
            </h2>
            <p className="text-muted-foreground dark:text-gray-300 mb-8">
              Have questions about our programs or need more information? 
              Fill out the form, and our team will get back to you as soon as possible.
            </p>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: item.delay }}
                >
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-primary/10 dark:bg-white/10 flex items-center justify-center text-primary dark:text-white"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <item.icon size={18} />
                  </motion.div>
                  <div>
                    <h4 className="font-medium dark:text-white">{item.title}</h4>
                    <p className="text-sm text-muted-foreground dark:text-gray-400">{item.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="glass-card rounded-xl p-6 md:p-8 dark:bg-gray-900/50 dark:border-gray-700/50"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {formFields.map((field, index) => (
                <motion.div 
                  key={field.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <label htmlFor={field.id} className="block text-sm font-medium mb-1 dark:text-white">
                    {field.label} {field.required && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleChange}
                    required={field.required}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border bg-background/50 dark:bg-gray-800/50 focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-white transition-all dark:text-white",
                      formErrors[field.id] ? "border-red-500" : "border-border dark:border-gray-700"
                    )}
                    placeholder={field.placeholder}
                  />
                  {formErrors[field.id] && (
                    <motion.p 
                      className="mt-1 text-sm text-red-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {formErrors[field.id]}
                    </motion.p>
                  )}
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="message" className="block text-sm font-medium mb-1 dark:text-white">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg border bg-background/50 dark:bg-gray-800/50 focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-white transition-all resize-none dark:text-white",
                    formErrors.message ? "border-red-500" : "border-border dark:border-gray-700"
                  )}
                  placeholder="Tell us about your educational goals..."
                ></textarea>
                {formErrors.message && (
                  <motion.p 
                    className="mt-1 text-sm text-red-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {formErrors.message}
                  </motion.p>
                )}
              </motion.div>
              
              <motion.button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-6 bg-primary text-white dark:bg-white dark:text-primary rounded-lg font-medium flex items-center justify-center space-x-2 transition-all ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white dark:border-primary border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
