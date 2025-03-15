
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useInView } from '@/lib/animations';

const Hero = () => {
  const [containerRef, isInView] = useInView({
    threshold: 0.1
  });
  
  // Create refs for animated elements
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isInView) {
      // Animate in sequence using the CSS custom properties
      const elements = [
        titleRef.current, 
        subtitleRef.current, 
        ctaRef.current
      ];
      
      elements.forEach((el, index) => {
        if (el) {
          el.style.opacity = '0';
          el.style.transform = 'translateY(20px)';
          el.style.animation = 'fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards';
          el.style.animationDelay = `${index * 150}ms`;
        }
      });
      
      if (circleRef.current) {
        circleRef.current.style.animation = 'reveal-blur 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards';
        circleRef.current.style.animationDelay = '300ms';
      }
    }
  }, [isInView]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background"
      ref={containerRef as React.RefObject<HTMLDivElement>}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-50"></div>
      <div 
        ref={circleRef}
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-radial from-primary/5 to-transparent opacity-0"
      ></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="container mx-auto px-4 z-10 py-12 md:py-0">
        <div className="max-w-3xl mx-auto lg:mx-0">
          <div className="space-y-6 text-center lg:text-left">
            <span className="highlight-chip animate-fade-in" style={{animationDelay: '200ms'}}>
              Future of Education
            </span>
            
            <h1 
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight opacity-0"
            >
              Elevate Your Learning with Modern Technology
            </h1>
            
            <p 
              ref={subtitleRef}
              className="text-lg text-muted-foreground md:text-xl max-w-xl mx-auto lg:mx-0 opacity-0"
            >
              Discover a new approach to education that combines cutting-edge technology with proven learning methodologies.
            </p>
            
            <div 
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 opacity-0"
            >
              <a 
                href="#programs" 
                className="px-6 py-3 rounded-full bg-primary text-white font-medium button-hover inline-flex items-center justify-center"
              >
                Explore Programs
                <ArrowRight size={16} className="ml-2" />
              </a>
              
              <a 
                href="#about" 
                className="px-6 py-3 rounded-full bg-secondary text-primary font-medium button-hover inline-flex items-center justify-center"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
