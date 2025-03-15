
import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    content: "The program exceeded all my expectations. The instructors were knowledgeable and the curriculum was challenging yet engaging. I was able to land a job at a top tech company within a month of graduation.",
    author: "Sarah Johnson",
    position: "Software Engineer at Google",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    content: "As someone who was switching careers, I was worried about keeping up, but the supportive environment and practical approach made learning enjoyable. The career guidance was invaluable.",
    author: "Michael Chen",
    position: "Data Scientist at Amazon",
    image: "https://randomuser.me/api/portraits/men/54.jpg"
  },
  {
    id: 3,
    content: "The hands-on projects were the highlight for me. Building real-world applications gave me the confidence and portfolio I needed to showcase my skills to potential employers.",
    author: "Emily Rodriguez",
    position: "UI/UX Designer at Microsoft",
    image: "https://randomuser.me/api/portraits/women/17.jpg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      goToNext();
    }, 8000);
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    goToNext();
  };

  const handlePrevious = () => {
    setDirection(-1);
    goToPrevious();
  };

  return (
    <section 
      id="testimonials" 
      className="section bg-primary/5 dark:bg-gray-800/30"
    >
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="highlight-chip dark:bg-white/10 dark:text-white">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 dark:text-white">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground dark:text-gray-300">
            Hear from our alumni about their experiences and how our programs helped them achieve their career goals.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence custom={direction} initial={false} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="px-4"
              >
                <div className="glass-card rounded-xl p-8 md:p-10 relative dark:bg-gray-900/50 dark:border-gray-700/50">
                  <Quote 
                    size={40} 
                    className="absolute text-primary/10 dark:text-white/10 top-8 right-8" 
                  />
                  
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <motion.div 
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white dark:border-gray-700 shadow-md flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].author} 
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    
                    <div className="flex-1">
                      <p className="text-lg mb-6 italic text-balance dark:text-gray-300">
                        "{testimonials[currentIndex].content}"
                      </p>
                      
                      <div>
                        <h4 className="font-bold text-lg dark:text-white">{testimonials[currentIndex].author}</h4>
                        <p className="text-sm text-muted-foreground dark:text-gray-400">{testimonials[currentIndex].position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-3">
            <motion.button 
              onClick={handlePrevious}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-primary/20 text-primary dark:border-white/20 dark:text-white hover:bg-primary/5 dark:hover:bg-white/5 transition-colors"
              aria-label="Previous testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft size={18} />
            </motion.button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2.5 rounded-full transition-all ${
                    index === currentIndex 
                      ? "bg-primary dark:bg-white w-6" 
                      : "bg-primary/30 dark:bg-white/30 w-2.5"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
            
            <motion.button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-primary/20 text-primary dark:border-white/20 dark:text-white hover:bg-primary/5 dark:hover:bg-white/5 transition-colors"
              aria-label="Next testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
