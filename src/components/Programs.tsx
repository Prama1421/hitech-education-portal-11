
import React from 'react';
import { BookOpen, Users, Monitor, Code, Database, Cloud } from 'lucide-react';
import { useInView, useSequentialAnimation } from '@/lib/animations';
import { cn } from '@/lib/utils';

const programs = [
  {
    id: 1,
    title: 'Computer Science Fundamentals',
    description: 'Build a strong foundation in algorithms, data structures, and computational thinking.',
    icon: Code,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    id: 2,
    title: 'Data Science & Analytics',
    description: 'Learn to extract meaningful insights from complex datasets using statistical methods.',
    icon: Database,
    color: 'bg-purple-50 text-purple-600'
  },
  {
    id: 3,
    title: 'AI & Machine Learning',
    description: 'Explore cutting-edge techniques in artificial intelligence and predictive modeling.',
    icon: Cloud,
    color: 'bg-green-50 text-green-600'
  },
  {
    id: 4,
    title: 'Web Development',
    description: 'Create responsive and dynamic web applications using modern frameworks.',
    icon: Monitor,
    color: 'bg-amber-50 text-amber-600'
  },
  {
    id: 5,
    title: 'Cybersecurity',
    description: 'Develop skills to protect systems and networks from digital attacks.',
    icon: BookOpen,
    color: 'bg-red-50 text-red-600'
  },
  {
    id: 6,
    title: 'Tech Leadership',
    description: 'Cultivate management skills specific to technology teams and projects.',
    icon: Users,
    color: 'bg-indigo-50 text-indigo-600'
  }
];

const Programs = () => {
  const [sectionRef, isInView] = useInView({
    threshold: 0.1
  });
  
  const animations = useSequentialAnimation(programs.length, 100);

  return (
    <section 
      id="programs" 
      className="section bg-secondary/30"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
    >
      <div className="container mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="highlight-chip">Our Programs</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Cutting-edge Education Programs
          </h2>
          <p className="text-muted-foreground">
            Our curriculum is designed to provide practical skills that match industry demands, taught by experts who are leaders in their fields.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div 
              key={program.id} 
              className={cn(
                "glass-card rounded-xl p-6 transition-all duration-500 hover:shadow-lg hover:translate-y-[-4px]",
                isInView ? "opacity-100" : "opacity-0 translate-y-8"
              )}
              style={{
                transitionDelay: `${index * 100}ms`,
                ...animations[index].style
              }}
            >
              <div className={`w-12 h-12 rounded-full ${program.color} flex items-center justify-center mb-4`}>
                <program.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{program.title}</h3>
              <p className="text-muted-foreground">{program.description}</p>
              <a 
                href="#contact" 
                className="mt-4 inline-block text-primary font-medium link-underline"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
