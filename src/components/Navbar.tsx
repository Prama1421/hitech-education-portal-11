
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Programs', href: '#programs' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-smooth',
        scrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#" 
          className="font-display font-bold text-xl text-primary z-50"
          aria-label="Hitech Education Society"
        >
          Hitech<span className="text-primary/80">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary link-underline transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="ml-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-medium button-hover"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          onClick={toggleMenu}
          className="md:hidden z-50 text-primary p-2 focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Menu */}
        <div 
          className={cn(
            "fixed inset-0 bg-white/95 backdrop-blur-lg flex flex-col items-center justify-center z-40 transition-all duration-500 ease-smooth",
            isOpen 
              ? "opacity-100 pointer-events-auto" 
              : "opacity-0 pointer-events-none"
          )}
        >
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-xl font-medium text-primary"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={closeMenu}
              className="mt-4 px-6 py-3 rounded-full bg-primary text-white text-base font-medium button-hover"
              style={{ animationDelay: `${navLinks.length * 50}ms` }}
            >
              Get Started
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
