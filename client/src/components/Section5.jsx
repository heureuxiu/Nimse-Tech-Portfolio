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
    <section id="about" className="py-20 bg-[#fdfdff]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* About Content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our Company</h2>
            <p className="text-lg text-gray-600 mb-6">
              Nimse Tech is a creative digital agency focused on growing brands online through innovative strategies and cutting-edge technology. Since our inception, we've been dedicated to helping businesses of all sizes establish a strong digital presence.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of experts brings together diverse skills in design, development, and marketing to create cohesive digital experiences that drive results. We believe in transparent partnerships, continuous innovation, and measurable outcomes.
            </p>
            
            <ul className="space-y-3 mb-8">
              {['Client-focused approach', 'Transparent communication', 'Data-driven strategies', 'Continuous innovation'].map((item, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <motion.button
              className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-purple-600 transition-colors shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
            </motion.button>
          </motion.div>
          
          {/* Image and Stats */}
          <motion.div 
            className="lg:w-1/2"
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
              <div className="grid grid-cols-2 gap-4 mt-8">
                {statistics.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</h3>
                    <p className="text-gray-600">{stat.label}</p>
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