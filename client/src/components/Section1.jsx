// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import { FaSearch, FaCheck } from 'react-icons/fa';

const Section1 = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:py-40 bg-gradient-to-br from-secondary to-light text-dark relative overflow-hidden min-h-screen flex items-center">
      <ParticleBackground lightMode={true} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-dark"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Crafting Brilliance
          </motion.h1>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Through Strategy
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mb-8 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Stop settling for average results. Our Growth Programs help your organization grow better with
            a fractional team of creative, marketing, and technical experts focused on turning your
            growing pains into predictable gains.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button
              className="px-8 py-4 bg-primary rounded-full text-lg font-semibold text-white hover:bg-purple-600 transition-all shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
            <motion.button
              className="px-8 py-4 border border-primary text-primary rounded-full text-lg font-semibold hover:bg-primary hover:bg-opacity-10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
          
          {/* Search box */}
          <motion.div
            className="relative mt-16 w-full max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search for Services: Seo, Ads, Marketing"
                className="w-full py-4 px-6 pr-12 rounded-full bg-white shadow-md border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary p-3 rounded-full hover:bg-purple-600 transition-colors shadow-md">
                <FaSearch className="text-white" />
              </button>
            </div>
          </motion.div>
          
          {/* Feature points */}
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-start space-x-2">
              <FaCheck className="text-accent mt-1 flex-shrink-0" />
              <p className="text-gray-600">Captivating Visuals: Use compelling images to showcase the agency's work.</p>
            </div>
            <div className="flex items-start space-x-2">
              <FaCheck className="text-accent mt-1 flex-shrink-0" />
              <p className="text-gray-600">Unique Value: Highlight what sets the agency apart in a clear headline</p>
            </div>
            <div className="flex items-start space-x-2">
              <FaCheck className="text-accent mt-1 flex-shrink-0" />
              <p className="text-gray-600">Actionable CTA: Prompt visitors to engage with a clear call to action.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section1; 