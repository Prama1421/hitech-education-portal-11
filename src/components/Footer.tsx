
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '@/lib/ThemeContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer className={`${isDark ? 'bg-gray-900 text-white' : 'bg-primary text-white'}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xl mb-4">Hitech<span className="opacity-75">.</span></h3>
            <p className={`text-sm max-w-xs`}>
              Empowering the next generation of tech innovators through cutting-edge education and practical skills development.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className={`${isDark ? 'text-white/70 hover:text-white' : 'text-white/70 hover:text-white'} transition-colors`} aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className={`${isDark ? 'text-white/70 hover:text-white' : 'text-white/70 hover:text-white'} transition-colors`} aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className={`${isDark ? 'text-white/70 hover:text-white' : 'text-white/70 hover:text-white'} transition-colors`} aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className={`${isDark ? 'text-white/70 hover:text-white' : 'text-white/70 hover:text-white'} transition-colors`} aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Programs</h3>
            <ul className={`space-y-2 text-sm`}>
              <li><a href="#" className={`hover:text-white/90 transition-colors`}>Computer Science</a></li>
              <li><a href="#" className={`hover:text-white/90 transition-colors`}>Data Science</a></li>
              <li><a href="#" className={`hover:text-white/90 transition-colors`}>Artificial Intelligence</a></li>
              <li><a href="#" className={`hover:text-white/90 transition-colors`}>Web Development</a></li>
              <li><a href="#" className={`hover:text-white/90 transition-colors`}>Cybersecurity</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className={`space-y-2 text-sm`}>
              <li><a href="#" className={`hover:text-white/90 transition-colors`}>Blog</a></li>
              <li><a href="#" className={`hover:text-white/90 transition-colors`}>Career Support</a></li>
              <li><a href="#" className={`hover:text-white/90 transition-colors`}>Events</a></li>
              <li><a href="#" className={`hover:text-white/90 transition-colors`}>FAQs</a></li>
              <li><a href="#" className={`hover:text-white/90 transition-colors`}>Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className={`space-y-2 text-sm`}>
              <li>123 Tech Avenue, Silicon Valley</li>
              <li>CA 94025, United States</li>
              <li className="pt-2">
                <a href="mailto:info@hitechedu.org" className={`flex items-center hover:text-white/90 transition-colors`}>
                  <Mail size={14} className="mr-2" />
                  info@hitechedu.org
                </a>
              </li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className={`border-t ${isDark ? 'border-white/10' : 'border-white/10'} mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/60`}>
          <p>© {currentYear} Hitech Education Society. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className={`hover:text-white transition-colors`}>Privacy Policy</a>
            <a href="#" className={`hover:text-white transition-colors`}>Terms of Service</a>
            <a href="#" className={`hover:text-white transition-colors`}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
