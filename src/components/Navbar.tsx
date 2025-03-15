
import React, { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useTheme } from '@/lib/ThemeContext';

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
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const isDark = theme === 'dark';

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-smooth',
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="font-display font-bold text-xl text-primary dark:text-white z-50"
          aria-label="Hitech Education Society"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Hitech<span className="text-primary/80 dark:text-primary/60">.</span>
        </motion.a>

        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden md:flex items-center space-x-6"
          initial="hidden"
          animate="visible"
          variants={navVariants}
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className={cn(
                "relative text-sm font-medium transition-colors",
                activeSection === link.href.substring(1) 
                  ? "text-primary dark:text-white" 
                  : "text-muted-foreground hover:text-primary dark:hover:text-white"
              )}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary dark:bg-white"
                  layoutId="navbar-underline"
                />
              )}
            </motion.a>
          ))}
          <motion.a 
            href="#contact" 
            className="ml-2 px-4 py-2 rounded-full bg-primary text-white dark:bg-white dark:text-primary text-sm font-medium hover:shadow-lg transition-all"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
          <motion.button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-full bg-secondary dark:bg-gray-800 text-primary dark:text-white"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            variants={itemVariants}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </motion.nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center z-50 space-x-2">
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary dark:bg-gray-800 text-primary dark:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
          <motion.button 
            onClick={toggleMenu}
            className="text-primary dark:text-white p-2 focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="fixed inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg flex flex-col items-center justify-center z-40 md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.nav 
                className="flex flex-col items-center space-y-8"
                variants={navVariants}
                initial="hidden"
                animate="visible"
              >
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(
                      "text-xl font-medium",
                      activeSection === link.href.substring(1) 
                        ? "text-primary dark:text-white" 
                        : "text-muted-foreground dark:text-gray-400"
                    )}
                    variants={itemVariants}
                    custom={i}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.a 
                  href="#contact" 
                  onClick={closeMenu}
                  className="mt-4 px-6 py-3 rounded-full bg-primary text-white dark:bg-white dark:text-primary text-base font-medium shadow-lg hover:shadow-xl transition-all"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.a>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
