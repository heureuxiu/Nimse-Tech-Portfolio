// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-primary hover:text-purple-600 transition-colors">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-primary hover:text-purple-600 transition-colors">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-primary hover:text-purple-600 transition-colors">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-primary hover:text-purple-600 transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="text-primary hover:text-purple-600 transition-colors">
            <FaGithub size={24} />
          </a>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-gray-600">
          <p>© {new Date().getFullYear()} Nimse Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 