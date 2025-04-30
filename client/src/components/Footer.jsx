import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaChevronRight,
  FaArrowRight,
} from "react-icons/fa";
import { HiOutlineChevronRight } from "react-icons/hi";

// Import the logo
import Logo from "../assets/Logo3.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-16 pb-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-primary/5"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-purple-400/5 blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnptNiAwaDZ2LTZoLTZ2NnptLTEyIDBoLTZ2Nmg2di02em0tNi02aC02djZoNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto mb-16 relative">
        <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-gray-700/50 overflow-hidden relative">
          {/* Accent line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-purple-500 to-primary/50"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8 md:mb-0 md:max-w-xl"
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Transform Your Business Today – Get in Touch for a
                <span className="text-primary"> Free Consultation</span>
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-primary font-medium mt-2 hover:text-white group transition-colors"
                >
                  Contact Us 
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary opacity-20 blur-xl rounded-full"></div>
                <img src={Logo} alt="Nimse Tech Logo" className="h-32 w-auto relative z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Links Grid with modern layout */}
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 mb-16">
          {/* Company Column - spans 5 columns */}
          <div className="md:col-span-5">
            <div className="mb-8">
              <Link to="/">
                <img src={Logo} alt="Nimse Tech Logo" className="h-12 w-auto mb-4" />
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                We create innovative digital solutions that transform how businesses connect with their customers. Our expertise in web development, mobile apps, and digital marketing helps brands grow in the digital era.
              </p>
            </div>
            
            {/* Commenting out the Menu section */}
            {/*
            <h3 className="text-lg font-bold mb-6 text-white relative pb-3 inline-block">
              Menu
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent"></span>
            </h3>
            
            <ul className="space-y-3 text-gray-300 grid grid-cols-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-primary transition-colors inline-flex items-center group"
                >
                  <span className="w-6 h-0.5 bg-primary/50 mr-2 group-hover:w-8 transition-all"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/#about"
                  className="hover:text-primary transition-colors inline-flex items-center group"
                >
                  <span className="w-6 h-0.5 bg-primary/50 mr-2 group-hover:w-8 transition-all"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/#services"
                  className="hover:text-primary transition-colors inline-flex items-center group"
                >
                  <span className="w-6 h-0.5 bg-primary/50 mr-2 group-hover:w-8 transition-all"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/#portfolio"
                  className="hover:text-primary transition-colors inline-flex items-center group"
                >
                  <span className="w-6 h-0.5 bg-primary/50 mr-2 group-hover:w-8 transition-all"></span>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/#team"
                  className="hover:text-primary transition-colors inline-flex items-center group"
                >
                  <span className="w-6 h-0.5 bg-primary/50 mr-2 group-hover:w-8 transition-all"></span>
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="/#contact"
                  className="hover:text-primary transition-colors inline-flex items-center group"
                >
                  <span className="w-6 h-0.5 bg-primary/50 mr-2 group-hover:w-8 transition-all"></span>
                  Contact
                </Link>
              </li>
            </ul>
            */}
          </div>

          {/* Our Services Column - spans 3 columns */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-bold mb-6 text-white relative pb-3 inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent"></span>
            </h3>
            
            <ul className="space-y-3 text-gray-300">
              {[
                { name: "Web Development", to: "/services/web" },
                { name: "App Development", to: "/services/app" },
                { name: "UI/UX Design", to: "/services/ui-ux" },
                { name: "SEO Optimization", to: "/services/seo" },
                { name: "Digital Marketing", to: "/services/marketing" },
                { name: "Branding & Identity", to: "/services/branding" },
              ].map((item, i) => (
                <li key={i} className="flex items-center group">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-all mr-2.5"></div>
                  <Link
                    to={item.to}
                    className="hover:text-primary transition-colors group-hover:translate-x-1 transition-transform"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Column - spans 4 columns */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-bold mb-6 text-white relative pb-3 inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent"></span>
            </h3>
            
            <ul className="space-y-5 text-gray-300">
              <li className="flex items-start">
                <div className="mr-4 p-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-md">
                  <FaMapMarkerAlt className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Our Office</p>
                  <p>123 Business Avenue, Suite 100,<br />New York, NY 10001</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 p-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-md">
                  <FaPhoneAlt className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Phone</p>
                  <p>+1 (555) 123-4567</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 p-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-md">
                  <FaEnvelope className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Email</p>
                  <p>info@nimsetech.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative">
        <div className="container mx-auto">
          <div className="border-t border-gray-800/50 pt-8 pb-2">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Social Media Icons */}
              <div className="flex items-center space-x-3 mb-6 md:mb-0">
                <p className="text-sm text-gray-400 mr-4">Follow us:</p>
                <a href="#" aria-label="Facebook" className="group">
                  <div className="bg-gray-800 group-hover:bg-primary/20 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 border border-gray-700 group-hover:border-primary/50">
                    <FaFacebook className="text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                </a>
                <a href="#" aria-label="Twitter" className="group">
                  <div className="bg-gray-800 group-hover:bg-primary/20 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 border border-gray-700 group-hover:border-primary/50">
                    <FaTwitter className="text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                </a>
                <a href="#" aria-label="Instagram" className="group">
                  <div className="bg-gray-800 group-hover:bg-primary/20 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 border border-gray-700 group-hover:border-primary/50">
                    <FaInstagram className="text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                </a>
                <a href="#" aria-label="LinkedIn" className="group">
                  <div className="bg-gray-800 group-hover:bg-primary/20 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 border border-gray-700 group-hover:border-primary/50">
                    <FaLinkedin className="text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                </a>
              </div>

              <div className="text-sm text-gray-500">
                © {currentYear} <span className="text-gray-400">Nimse Tech</span>. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
