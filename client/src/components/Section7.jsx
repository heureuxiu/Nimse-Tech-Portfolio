// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Section7 = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or need assistance? Contact us today and our team will get back to you as soon as possible.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us more about your project or inquiry..."
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-purple-600 transition-colors shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-full text-white mr-4">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-700">Our Location</h4>
                    <p className="text-gray-600">123 Business Avenue, Suite 100, New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-full text-white mr-4">
                    <FaPhone />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-700">Phone Number</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-full text-white mr-4">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-700">Email Address</h4>
                    <p className="text-gray-600">info@nimsetech.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-bold text-gray-700 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-white p-3 rounded-full shadow hover:shadow-md transition-shadow">
                    <FaFacebook className="text-primary" />
                  </a>
                  <a href="#" className="bg-white p-3 rounded-full shadow hover:shadow-md transition-shadow">
                    <FaTwitter className="text-primary" />
                  </a>
                  <a href="#" className="bg-white p-3 rounded-full shadow hover:shadow-md transition-shadow">
                    <FaInstagram className="text-primary" />
                  </a>
                  <a href="#" className="bg-white p-3 rounded-full shadow hover:shadow-md transition-shadow">
                    <FaLinkedin className="text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section7; 