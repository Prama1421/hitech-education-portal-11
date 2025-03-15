
import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import TypeWriter from './TypeWriter';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax effect
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const typewriterWords = [
    'Modern Technology',
    'AI & Machine Learning',
    'Data Science',
    'Web Development',
    'Cutting-edge Skills'
  ];

  return (
    <motion.section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background dark:bg-gray-900"
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-50 dark:opacity-30"></div>
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-radial from-primary/5 to-transparent dark:from-white/5"
      ></motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent dark:from-gray-900"></div>
      
      <div className="container mx-auto px-4 z-10 py-12 md:py-0">
        <motion.div 
          className="max-w-3xl mx-auto lg:mx-0"
          style={{ opacity: contentOpacity }}
        >
          <div className="space-y-6 text-center lg:text-left">
            <motion.span 
              className="highlight-chip dark:bg-white/10 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Future of Education
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Elevate Your Learning with <br className="hidden sm:block" />
              <TypeWriter words={typewriterWords} />
            </motion.h1>
            
            <motion.p 
              className="text-lg text-muted-foreground dark:text-gray-300 md:text-xl max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Discover a new approach to education that combines cutting-edge technology with proven learning methodologies.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a 
                href="#programs" 
                className="px-6 py-3 rounded-full bg-primary text-white dark:bg-white dark:text-primary font-medium inline-flex items-center justify-center"
                whileHover={{ scale: 1.05, y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Programs
                <ArrowRight size={16} className="ml-2" />
              </motion.a>
              
              <motion.a 
                href="#about" 
                className="px-6 py-3 rounded-full bg-secondary dark:bg-gray-800 text-primary dark:text-white font-medium inline-flex items-center justify-center"
                whileHover={{ scale: 1.05, y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <p className="text-sm text-muted-foreground dark:text-gray-400 mb-2">Scroll down</p>
        <motion.div 
          className="w-5 h-10 rounded-full border-2 border-muted-foreground dark:border-gray-400 flex justify-center p-1"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div
            className="w-1 h-1 rounded-full bg-primary dark:bg-white"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
