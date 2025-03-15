
import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { useInView } from '@/lib/animations';
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
  const [sectionRef, isInView] = useInView({
    threshold: 0.1
  });
  
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

  return (
    <section 
      id="testimonials" 
      className="section bg-primary/5"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
    >
      <div className="container mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="highlight-chip">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground">
            Hear from our alumni about their experiences and how our programs helped them achieve their career goals.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-smooth"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full px-4"
                >
                  <div className={cn(
                    "glass-card rounded-xl p-8 md:p-10 relative",
                    isInView ? "animate-fade-in" : "opacity-0"
                  )}>
                    <Quote 
                      size={40} 
                      className="absolute text-primary/10 top-8 right-8" 
                    />
                    
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <p className="text-lg mb-6 italic text-balance">
                          "{testimonial.content}"
                        </p>
                        
                        <div>
                          <h4 className="font-bold text-lg">{testimonial.author}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-3">
            <button 
              onClick={goToPrevious}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-primary/20 text-primary hover:bg-primary/5 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={18} />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex 
                      ? "bg-primary w-6" 
                      : "bg-primary/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={goToNext}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-primary/20 text-primary hover:bg-primary/5 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
