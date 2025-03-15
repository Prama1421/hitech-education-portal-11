
import { useEffect, useRef, useState } from 'react';

// Intersection Observer Hook for animations when elements enter viewport
export const useInView = (options = {}, once = true) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        
        // If once is true, unobserve after it's been seen
        if (once && currentRef) {
          observer.unobserve(currentRef);
        }
      } else if (!once) {
        setIsInView(false);
      }
    }, options);

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options, once]);

  return [ref, isInView];
};

// Hook for sequentially animating children
export const useSequentialAnimation = (totalItems: number, baseDelay = 100) => {
  return Array.from({ length: totalItems }).map((_, i) => ({
    style: { 
      '--index': i,
      animationDelay: `${i * baseDelay}ms`
    } as React.CSSProperties
  }));
};

// Hook for parallax scrolling effect
export const useParallax = (speed = 0.1) => {
  const ref = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const offset = scrollPosition * speed;
      element.style.transform = `translateY(${offset}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
  
  return ref;
};
