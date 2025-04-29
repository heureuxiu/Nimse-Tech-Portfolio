// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaUser, FaEnvelope, FaTag, FaComment, FaPaperPlane, FaCheck } from 'react-icons/fa';
// Import the GIF
import brandCommunicationGif from '../assets/brand communication.gif'; // Adjust path as needed

const InputField = ({ label, icon, type = "text", id }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const Icon = icon;
  
  return (
    <div className="relative mb-6 group">
      <div className={`absolute left-3 top-1/2 -translate-y-1/2 ${isFocused ? 'text-primary' : 'text-gray-400'} transition-colors duration-300`}>
        <Icon className="text-base" />
      </div>
      
      <input
        type={type}
        id={id}
        className="w-full bg-white rounded-xl border border-gray-200 px-10 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary shadow-sm group-hover:shadow-md transition-all duration-300"
        placeholder=""
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(e.target.value.trim() !== '');
        }}
        onChange={(e) => setHasValue(e.target.value.trim() !== '')}
      />
      
      <label 
        htmlFor={id} 
        className={`absolute text-gray-500 transition-all duration-300 pointer-events-none ${
          isFocused || hasValue
            ? 'text-xs -top-2.5 left-4 bg-white px-1 text-primary font-medium'
            : 'left-10 top-1/2 -translate-y-1/2'
        }`}
      >
        {label}
      </label>
    </div>
  );
};

const TextareaField = ({ label, icon, id }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const Icon = icon;
  
  return (
    <div className="relative mb-6 group">
      <div className={`absolute left-3 top-3 ${isFocused ? 'text-primary' : 'text-gray-400'} transition-colors duration-300`}>
        <Icon className="text-base" />
      </div>
      
      <textarea
        id={id}
        rows="4"
        className="w-full bg-white rounded-xl border border-gray-200 px-10 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary shadow-sm group-hover:shadow-md transition-all duration-300"
        placeholder=""
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(e.target.value.trim() !== '');
        }}
        onChange={(e) => setHasValue(e.target.value.trim() !== '')}
      ></textarea>
      
      <label 
        htmlFor={id} 
        className={`absolute text-gray-500 transition-all duration-300 pointer-events-none ${
          isFocused || hasValue
            ? 'text-xs -top-2.5 left-4 bg-white px-1 text-primary font-medium'
            : 'left-10 top-3'
        }`}
      >
        {label}
      </label>
    </div>
  );
};

const Section7 = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-[#fdfdff] via-purple-50 to-white relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
      </div>
      
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary rounded-full"></div>
        <div className="absolute top-20 right-20 w-8 h-8 bg-purple-500 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-indigo-500 rounded-md rotate-45"></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-32 border-4 border-dashed border-primary/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-3 sm:mb-4"
          >
            <span className="bg-primary/10 text-primary text-xs sm:text-sm px-4 py-1.5 rounded-full font-medium">
              CONTACT US
            </span>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-5 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Let's Start a Conversation
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or questions about our services? We're here to help you bring your ideas to life.
          </p>
        </motion.div>
        
        {/* Two-column layout for GIF and form */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* GIF Column with enhanced styling */}
          <motion.div 
            className="w-full lg:w-1/2 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Frame for the GIF */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-primary/20 via-purple-400/20 to-indigo-300/20 rounded-2xl blur-lg"></div>
              
              <div className="relative bg-white p-2 sm:p-3 rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <img 
                  src={brandCommunicationGif} 
                  alt="Brand Communication" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              
              {/* Feature points added below the GIF */}
              <div className="mt-8 space-y-4">
                <motion.div 
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-green-50 p-1.5 rounded-full text-green-500 mt-0.5">
                    <FaCheck size={14} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Fast Response</h4>
                    <p className="text-sm text-gray-600">We respond to all inquiries within 24 hours</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-green-50 p-1.5 rounded-full text-green-500 mt-0.5">
                    <FaCheck size={14} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Expert Consultation</h4>
                    <p className="text-sm text-gray-600">Get a detailed consult from industry experts</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-green-50 p-1.5 rounded-full text-green-500 mt-0.5">
                    <FaCheck size={14} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Custom Solutions</h4>
                    <p className="text-sm text-gray-600">Tailored strategies for your specific needs</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Form Column with enhanced design */}
          <motion.div 
            className="w-full lg:w-1/2 order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/90 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden border border-gray-100">
              {/* Improved decorative elements */}
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br from-primary/10 to-purple-300/10"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-gradient-to-tl from-indigo-300/10 to-primary/10"></div>
              
              {/* Enhanced heading */}
              <div className="relative mb-8 pb-4">
                <h3 className="text-xl sm:text-2xl font-bold relative inline-block">
                  Send Us a Message
                  <div className="absolute -bottom-1 left-0 h-1 w-full bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
                </h3>
                <p className="text-gray-500 text-sm mt-2">We'd love to hear from you. Fill out the form below.</p>
              </div>
              
              <form className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <InputField 
                    label="Your Name" 
                    icon={FaUser}
                    id="name"
                  />
                  <InputField 
                    label="Your Email" 
                    icon={FaEnvelope} 
                    type="email"
                    id="email"
                  />
                </div>
                
                <InputField 
                  label="Subject" 
                  icon={FaTag}
                  id="subject"
                />
                
                <TextareaField 
                  label="Your Message" 
                  icon={FaComment}
                  id="message"
                />
                
                <motion.button
                  type="submit"
                  className="flex items-center justify-center space-x-2 w-full px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-primary/30 transition-all duration-300 mt-6"
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-base sm:text-lg">Send Message</span>
                  <FaPaperPlane className="ml-2" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section7; 