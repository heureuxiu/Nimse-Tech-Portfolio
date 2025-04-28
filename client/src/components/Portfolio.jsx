import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaLink, FaEye } from 'react-icons/fa';

const portfolioData = [
  {
    id: 1,
    title: "E-commerce Website Redesign",
    category: "web-design",
    image: "/portfolio/portfolio1.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "Mobile App Development",
    category: "mobile-app",
    image: "/portfolio/portfolio2.jpg",
    link: "#"
  },
  {
    id: 3,
    title: "Brand Identity Design",
    category: "branding",
    image: "/portfolio/portfolio3.jpg",
    link: "#"
  },
  {
    id: 4,
    title: "Social Media Campaign",
    category: "marketing",
    image: "/portfolio/portfolio4.jpg",
    link: "#"
  },
  {
    id: 5,
    title: "Corporate Website",
    category: "web-design",
    image: "/portfolio/portfolio5.jpg",
    link: "#"
  },
  {
    id: 6,
    title: "Product Promotion Video",
    category: "video",
    image: "/portfolio/portfolio6.jpg",
    link: "#"
  }
];

const categories = ["all", "web-design", "mobile-app", "branding", "marketing", "video"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredItems = portfolioData.filter(item => 
    activeCategory === "all" || item.category === activeCategory
  );
  
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Latest Work</h2>
          <p className="section-subtitle">
            Check out some of our recent projects that showcase our expertise and creativity
          </p>
        </motion.div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mt-8 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              className={`mx-2 my-2 px-4 py-2 rounded-full capitalize font-medium transition-colors ${
                activeCategory === category 
                  ? "bg-primary text-white" 
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {category.replace('-', ' ')}
            </motion.button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                <p className="text-gray-300 mt-2 capitalize">{item.category.replace('-', ' ')}</p>
                <div className="mt-4 flex space-x-3">
                  <motion.a
                    href={item.link}
                    className="bg-white text-primary p-2 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaLink />
                  </motion.a>
                  <motion.a
                    href={item.link}
                    className="bg-primary text-white p-2 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaEye />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 