// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  const features = [
    "Creative and innovative solutions",
    "Attention to detail and quality",
    "User-centric approach",
    "Result-oriented strategies",
    "Timely delivery of projects",
    "Continuous support and maintenance"
  ];
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img 
                src="/about-image.jpg" 
                alt="About Us" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-10 -right-10 bg-primary text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-lg">Years of Experience</p>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2 mt-16 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                We Create Digital Experiences That Matter
              </h2>
              
              <p className="text-gray-600 mb-8">
                At our agency, we believe in the power of digital innovation to transform businesses. For over a decade, we've been helping clients across various industries establish their digital presence and achieve their business goals through strategic digital solutions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                    <p>{feature}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Us
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 