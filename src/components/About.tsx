
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useInView } from '@/lib/animations';
import { cn } from '@/lib/utils';

const About = () => {
  const [sectionRef, isInView] = useInView({
    threshold: 0.1
  });

  const benefits = [
    "Expert instructors with industry experience",
    "Small class sizes for personalized attention",
    "Cutting-edge curriculum updated regularly",
    "Hands-on projects and practical learning",
    "Career guidance and placement assistance",
    "Flexible learning options (in-person and online)"
  ];

  return (
    <section 
      id="about" 
      className="section"
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
            <span className="highlight-chip mb-2">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pioneering the Future of Technical Education
            </h2>
            <p className="text-muted-foreground mb-6">
              Founded with a vision to transform education through technology, 
              Hitech Education Society has been at the forefront of innovative learning 
              since 2010. We believe in a holistic approach that combines theoretical 
              knowledge with practical application.
            </p>
            <p className="text-muted-foreground mb-8">
              Our mission is to empower students with the skills and mindset needed to 
              thrive in an increasingly digital world, regardless of their background 
              or prior experience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3"
                  style={{ animationDelay: `${index * 100 + 300}ms` }}
                >
                  <CheckCircle size={18} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div 
            className={cn(
              "relative aspect-square max-w-md mx-auto lg:mx-0 lg:ml-auto transition-all duration-700",
              isInView 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 translate-x-12"
            )}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Main image */}
            <div className="relative z-10 w-4/5 h-4/5 overflow-hidden rounded-2xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80')] bg-cover bg-center"></div>
            </div>
            
            {/* Background shapes */}
            <div className="absolute top-1/4 right-1/4 w-4/5 h-4/5 bg-primary/5 rounded-2xl -z-10 transform translate-x-8 translate-y-8"></div>
            <div className="absolute bottom-0 right-0 w-2/3 h-1/3 bg-secondary rounded-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
