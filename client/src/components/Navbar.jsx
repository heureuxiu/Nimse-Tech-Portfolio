import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import ParticleBackground from './ParticleBackground';
import logo from '../assets/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', to: 'home' },
    { name: 'SERVICES', to: 'services' },
    { name: 'PORTFOLIO', to: 'portfolio' },
    { name: 'TEAM', to: 'team' },
    { name: 'ABOUT', to: 'about' },
    { name: 'BLOGS', to: 'blogs' },
    { name: 'CONTACT', to: 'contact' }
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 ${
        scrolled ? 'bg-white bg-opacity-95 shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {scrolled && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <NavbarParticleBackground />
        </div>
      )}
      
      <div className="container mx-auto px-4 flex justify-between items-center relative z-10">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src={logo}
            alt="Nimse Tech Logo" 
            className="h-20" 
          />
        </motion.div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`font-medium cursor-pointer transition-colors ${
                scrolled ? 'text-dark hover:text-primary' : 'text-dark hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <motion.button 
            className="ml-4 px-6 py-2 bg-primary text-white rounded-full hover:bg-purple-600 transition-colors shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Quote
          </motion.button>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            className={`${scrolled ? 'text-dark' : 'text-dark'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="font-medium text-dark hover:text-primary cursor-pointer transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <motion.button 
              className="self-start px-6 py-2 bg-primary text-white rounded-full hover:bg-purple-600 transition-colors shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Quote
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

// Create a simplified particle background specifically for the navbar
const NavbarParticleBackground = () => {
  return (
    <div className="w-full h-full">
      <ParticleBackground lightMode={true} />
    </div>
  );
};

export default Navbar; 