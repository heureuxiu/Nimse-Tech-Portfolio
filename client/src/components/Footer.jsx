// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 sm:pt-16 md:pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Nimse Tech</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
              We are a creative digital agency focused on growing brands online through innovative strategies and cutting-edge technology.
            </p>
            <div className="flex space-x-2 sm:space-x-3">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                <FaFacebook className="text-sm sm:text-base" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                <FaTwitter className="text-sm sm:text-base" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                <FaInstagram className="text-sm sm:text-base" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                <FaLinkedin className="text-sm sm:text-base" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Team', 'Blog', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <span className="mr-2">›</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Our Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {['Web Development', 'App Development', 'UI/UX Design', 'SEO Optimization', 'Digital Marketing', 'Branding & Identity'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <span className="mr-2">›</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Contact Us</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary mt-1 mr-3 flex-shrink-0 text-sm sm:text-base" />
                <span className="text-sm sm:text-base text-gray-400">
                  123 Business Avenue, Suite 100, New York, NY 10001
                </span>
              </li>
              <li className="flex items-start">
                <FaPhone className="text-primary mt-1 mr-3 flex-shrink-0 text-sm sm:text-base" />
                <span className="text-sm sm:text-base text-gray-400">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-primary mt-1 mr-3 flex-shrink-0 text-sm sm:text-base" />
                <span className="text-sm sm:text-base text-gray-400">
                  info@nimsetech.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter Subscription */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 pb-4 sm:pb-6 mb-4 sm:mb-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg sm:text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-sm sm:text-base text-gray-400">
                Stay updated with our latest news and offers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-3 sm:px-4 py-2 rounded-l sm:rounded-r-none text-sm sm:text-base focus:outline-none text-gray-900 w-full sm:w-auto"
              />
              <button className="bg-primary text-white px-4 sm:px-6 py-2 rounded-r sm:rounded-l-none text-sm sm:text-base hover:bg-purple-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            © {new Date().getFullYear()} Nimse Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 