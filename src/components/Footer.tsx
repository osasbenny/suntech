import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-solar-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src="/logo.png" 
                alt="SunTech Solar Solutions" 
                className="h-16 w-auto mb-4"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Iowa's trusted solar energy partner, providing clean, renewable energy solutions for homes, businesses, and farms.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-solar-yellow transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-solar-yellow transition-colors duration-200">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-solar-yellow transition-colors duration-200">Services</Link></li>
              <li><Link to="/quote" className="text-gray-300 hover:text-solar-yellow transition-colors duration-200">Get Quote</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-solar-yellow transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Residential Solar</span></li>
              <li><span className="text-gray-300">Commercial Solar</span></li>
              <li><span className="text-gray-300">Agricultural Solar</span></li>
              <li><span className="text-gray-300">Battery Storage</span></li>
              <li><span className="text-gray-300">Maintenance</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-solar-yellow" />
                <a href="tel:5633074849" className="text-gray-300 hover:text-solar-yellow transition-colors duration-200">
                  (563) 307-4849
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-solar-yellow" />
                <a href="mailto:info@suntechsolarsolutions.net" className="text-gray-300 hover:text-solar-yellow transition-colors duration-200">
                  info@suntechsolarsolutions.net
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-solar-yellow mt-1" />
                <div className="text-gray-300">
                  <p>4328 Willow Creek Dr</p>
                  <p>Des Moines, IA 50321</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 SunTech Solar Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;