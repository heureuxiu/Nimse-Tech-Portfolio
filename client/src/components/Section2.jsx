// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaDesktop, FaCode, FaMobileAlt, FaSearch, FaChartLine, FaPalette } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description, delay }) => {
  const Icon = icon;
  
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-4 sm:p-5 md:p-6 hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="text-primary mb-3 md:mb-4">
        <Icon size={32} className="sm:w-8 sm:h-8 md:w-10 md:h-10" />
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600">{description}</p>
    </motion.div>
  );
};

const Section2 = () => {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-[#fdfdff]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Our Services</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of digital services to help your business thrive in the online world.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <ServiceCard
            icon={FaDesktop}
            title="Web Development"
            description="We build responsive, user-friendly websites that look great on any device and help you achieve your business goals."
            delay={0.1}
          />
          <ServiceCard
            icon={FaCode}
            title="App Development"
            description="From concept to deployment, we create custom mobile and web applications that solve real business problems."
            delay={0.2}
          />
          <ServiceCard
            icon={FaMobileAlt}
            title="UI/UX Design"
            description="Our design team creates intuitive, engaging user experiences that delight your customers and keep them coming back."
            delay={0.3}
          />
          <ServiceCard
            icon={FaSearch}
            title="SEO Optimization"
            description="We help your business rank higher in search results, driving more organic traffic and potential customers to your site."
            delay={0.4}
          />
          <ServiceCard
            icon={FaChartLine}
            title="Digital Marketing"
            description="Our comprehensive digital marketing strategies help you reach your target audience and grow your business."
            delay={0.5}
          />
          <ServiceCard
            icon={FaPalette}
            title="Branding & Identity"
            description="We create cohesive brand identities that communicate your values and resonate with your target audience."
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default Section2; 