// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logo from '../assets/Logo.png'; // Import the logo directly

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200 text-dark">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-start mb-4">
              <img 
                src={logo} // Use the imported logo
                alt="Nimse Tech Logo" 
                className="h-16" 
              />
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              We create innovative digital solutions to help businesses grow and succeed in the digital landscape.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:text-purple-600 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-primary hover:text-purple-600 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-primary hover:text-purple-600 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-primary hover:text-purple-600 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-primary hover:text-purple-600 transition-colors">
                <FaGithub size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Portfolio', 'Team', 'About', 'Blogs', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item.toLowerCase()} 
                    className="text-gray-600 hover:text-primary cursor-pointer transition-colors"
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4 text-gray-600">
              <li>
                <p className="font-medium">Address:</p>
                <p>123 Tech Street, Digital City, 10010</p>
              </li>
              <li>
                <p className="font-medium">Email:</p>
                <a href="mailto:info@nimsetech.com" className="hover:text-primary transition-colors">
                  info@nimsetech.com
                </a>
              </li>
              <li>
                <p className="font-medium">Phone:</p>
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
          <p>© {currentYear} Nimse Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 