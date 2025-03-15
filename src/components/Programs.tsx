
import React from 'react';
import { BookOpen, Users, Monitor, Code, Database, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const programs = [
  {
    id: 1,
    title: 'Computer Science Fundamentals',
    description: 'Build a strong foundation in algorithms, data structures, and computational thinking.',
    icon: Code,
    color: 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300'
  },
  {
    id: 2,
    title: 'Data Science & Analytics',
    description: 'Learn to extract meaningful insights from complex datasets using statistical methods.',
    icon: Database,
    color: 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300'
  },
  {
    id: 3,
    title: 'AI & Machine Learning',
    description: 'Explore cutting-edge techniques in artificial intelligence and predictive modeling.',
    icon: Cloud,
    color: 'bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-300'
  },
  {
    id: 4,
    title: 'Web Development',
    description: 'Create responsive and dynamic web applications using modern frameworks.',
    icon: Monitor,
    color: 'bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-300'
  },
  {
    id: 5,
    title: 'Cybersecurity',
    description: 'Develop skills to protect systems and networks from digital attacks.',
    icon: BookOpen,
    color: 'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-300'
  },
  {
    id: 6,
    title: 'Tech Leadership',
    description: 'Cultivate management skills specific to technology teams and projects.',
    icon: Users,
    color: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300'
  }
];

const Programs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section 
      id="programs" 
      className="section bg-secondary/30 dark:bg-gray-800/50"
    >
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="highlight-chip dark:bg-white/10 dark:text-white">Our Programs</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 dark:text-white">
            Cutting-edge Education Programs
          </h2>
          <p className="text-muted-foreground dark:text-gray-300">
            Our curriculum is designed to provide practical skills that match industry demands, taught by experts who are leaders in their fields.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {programs.map((program) => (
            <motion.div 
              key={program.id} 
              className={cn(
                "glass-card rounded-xl p-6 transition-all hover:shadow-xl dark:bg-gray-900/50 dark:border-gray-700/50",
              )}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { type: 'spring', stiffness: 400, damping: 10 }
              }}
            >
              <div className={`w-12 h-12 rounded-full ${program.color} flex items-center justify-center mb-4`}>
                <program.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">{program.title}</h3>
              <p className="text-muted-foreground dark:text-gray-400">{program.description}</p>
              <motion.a 
                href="#contact" 
                className="mt-4 inline-block text-primary dark:text-blue-300 font-medium link-underline"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                Learn more
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
