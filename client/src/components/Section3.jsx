import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    category: 'Web Development',
    image: 'https://placehold.co/600x400/5443a9/FFFFFF/png?text=E-commerce+Project',
    description: 'A fully responsive e-commerce platform with payment integration and inventory management.'
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'App Development',
    image: 'https://placehold.co/600x400/5443a9/FFFFFF/png?text=Banking+App',
    description: 'Secure banking application with biometric authentication and real-time transaction tracking.'
  },
  {
    id: 3,
    title: 'Corporate Rebrand',
    category: 'Branding',
    image: 'https://placehold.co/600x400/5443a9/FFFFFF/png?text=Corporate+Rebrand',
    description: 'Complete brand identity redesign for a Fortune 500 company, including logo, color palette, and guidelines.'
  },
  {
    id: 4,
    title: 'Social Media Campaign',
    category: 'Marketing',
    image: 'https://placehold.co/600x400/5443a9/FFFFFF/png?text=Social+Campaign',
    description: 'Multi-platform social media campaign that increased engagement by 150% and conversions by 75%.'
  },
  {
    id: 5,
    title: 'Healthcare Dashboard',
    category: 'Web Development',
    image: 'https://placehold.co/600x400/5443a9/FFFFFF/png?text=Healthcare+Dashboard',
    description: 'Interactive dashboard for healthcare providers to monitor patient data and streamline workflows.'
  },
  {
    id: 6,
    title: 'Fitness Tracking App',
    category: 'App Development',
    image: 'https://placehold.co/600x400/5443a9/FFFFFF/png?text=Fitness+App',
    description: 'Cross-platform application for tracking workouts, nutrition, and health metrics with social features.'
  }
];

const Section3 = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 bg-[#fdfdff]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Our Portfolio</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped businesses like yours achieve their goals.
          </p>
        </motion.div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base ${
                filter === category 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-4 sm:p-6">
                <span className="text-primary text-xs sm:text-sm font-semibold">{project.category}</span>
                <h3 className="text-lg sm:text-xl font-bold mt-1 sm:mt-2 mb-2 sm:mb-3">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{project.description}</p>
                <button className="mt-3 sm:mt-4 text-primary text-sm sm:text-base font-medium hover:text-purple-600 transition-colors">
                  View Details →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3; 