// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'; 
import { FaLaptopCode, FaPalette, FaChartLine, FaEnvelope, FaUsers, FaFilm } from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaLaptopCode size={40} />,
    title: "Website Development",
    description: "Build your website, Prime brand impression, top sales resource, scalable systems",
    color: "bg-blue-100",
    textColor: "text-blue-600"
  },
  {
    icon: <FaPalette size={40} />,
    title: "Graphic Designing",
    description: "Crafting visual magic through expert graphics design skills.",
    color: "bg-green-100",
    textColor: "text-green-600"
  },
  {
    icon: <FaChartLine size={40} />,
    title: "Digital Marketing",
    description: "Driving growth through expert digital marketing strategies.",
    color: "bg-purple-100",
    textColor: "text-purple-600"
  },
  {
    icon: <FaEnvelope size={40} />,
    title: "Email Marketing",
    description: "Engage, convert, and retain customers through targeted email marketing strategies",
    color: "bg-red-100",
    textColor: "text-red-600"
  },
  {
    icon: <FaUsers size={40} />,
    title: "Lead Generation",
    description: "Generating leads efficiently to fuel business growth and success",
    color: "bg-yellow-100",
    textColor: "text-yellow-600"
  },
  {
    icon: <FaFilm size={40} />,
    title: "2D/3D Animation",
    description: "Bringing imagination to life with mesmerizing 2D/3D animation creations",
    color: "bg-indigo-100",
    textColor: "text-indigo-600"
  }
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <div className={`p-5 rounded-full ${service.color} ${service.textColor} mb-6`}>
        {service.icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
      <motion.a
        href="#"
        className="mt-6 text-primary font-semibold inline-flex items-center"
        whileHover={{ x: 5 }}
      >
        Portfolio
        <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
        </svg>
      </motion.a>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Suite of Services</h2>
          <p className="section-subtitle">We offer a comprehensive range of services designed to meet all your digital needs</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 