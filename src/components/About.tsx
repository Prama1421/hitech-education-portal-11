
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const About = () => {
  const benefits = [
    "Expert instructors with industry experience",
    "Small class sizes for personalized attention",
    "Cutting-edge curriculum updated regularly",
    "Hands-on projects and practical learning",
    "Career guidance and placement assistance",
    "Flexible learning options (in-person and online)"
  ];

  const listVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section 
      id="about" 
      className="section dark:bg-gray-900"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="highlight-chip mb-2 dark:bg-white/10 dark:text-white">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
              Pioneering the Future of Technical Education
            </h2>
            <p className="text-muted-foreground dark:text-gray-300 mb-6">
              Founded with a vision to transform education through technology, 
              Hitech Education Society has been at the forefront of innovative learning 
              since 2010. We believe in a holistic approach that combines theoretical 
              knowledge with practical application.
            </p>
            <p className="text-muted-foreground dark:text-gray-300 mb-8">
              Our mission is to empower students with the skills and mindset needed to 
              thrive in an increasingly digital world, regardless of their background 
              or prior experience.
            </p>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-3"
                  variants={itemVariants}
                >
                  <CheckCircle size={18} className="text-primary dark:text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-sm dark:text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative aspect-square max-w-md mx-auto lg:mx-0 lg:ml-auto"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Main image */}
            <motion.div 
              className="relative z-10 w-4/5 h-4/5 overflow-hidden rounded-2xl shadow-xl"
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
              <motion.div 
                className="w-full h-full bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80')] bg-cover bg-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1 }}
              ></motion.div>
            </motion.div>
            
            {/* Background shapes */}
            <motion.div 
              className="absolute top-1/4 right-1/4 w-4/5 h-4/5 bg-primary/5 dark:bg-blue-500/10 rounded-2xl -z-10"
              initial={{ x: 20, y: 20 }}
              animate={{ x: 30, y: 30 }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 5 }}
            ></motion.div>
            <motion.div 
              className="absolute bottom-0 right-0 w-2/3 h-1/3 bg-secondary dark:bg-indigo-500/20 rounded-xl -z-10"
              initial={{ rotate: 0 }}
              animate={{ rotate: 5 }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 6 }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
