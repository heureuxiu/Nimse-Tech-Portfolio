// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const Section5 = () => {
  const statistics = [
    { value: '5+', label: 'Years Experience' },
    { value: '100+', label: 'Projects Completed' },
    { value: '50+', label: 'Happy Clients' },
    { value: '10+', label: 'Industry Awards' }
  ];
  
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-[#fdfdff]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* About Content */}
          <motion.div 
            className="w-full lg:w-1/2 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-6">About Our Company</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">
              Nimse Tech is a creative digital agency focused on growing brands online through innovative strategies and cutting-edge technology. Since our inception, we've been dedicated to helping businesses of all sizes establish a strong digital presence.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8">
              Our team of experts brings together diverse skills in design, development, and marketing to create cohesive digital experiences that drive results. We believe in transparent partnerships, continuous innovation, and measurable outcomes.
            </p>
            
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {['Client-focused approach', 'Transparent communication', 'Data-driven strategies', 'Continuous innovation'].map((item, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="text-primary mt-1 mr-2 sm:mr-3 flex-shrink-0 text-sm sm:text-base" />
                  <span className="text-sm sm:text-base text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <motion.button
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-white rounded-full text-sm sm:text-base font-medium hover:bg-purple-600 transition-colors shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
            </motion.button>
          </motion.div>
          
          {/* Image and Stats */}
          <motion.div 
            className="w-full lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                src="https://placehold.co/600x400/5443a9/FFFFFF/png?text=About+Us" 
                alt="About Nimse Tech" 
                className="w-full rounded-lg shadow-xl"
              />
              
              {/* Stats Overlay */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-8">
                {statistics.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-lg text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">{stat.value}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section5; 