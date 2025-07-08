import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/quote', label: 'Get Quote' },
    { path: '/contact', label: 'Contact' },
    { path: '/blog', label: 'Blog' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/logo.png" 
              alt="SunTech Solar Solutions" 
              className="h-12 w-auto group-hover:scale-105 transition-transform duration-200"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-200 hover:text-solar-orange ${
                  location.pathname === item.path
                    ? 'text-solar-orange'
                    : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:5633074849"
              className="flex items-center space-x-2 bg-solar-blue hover:bg-solar-navy text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span>(563) 307-4849</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors duration-200 hover:text-solar-orange ${
                    location.pathname === item.path
                      ? 'text-solar-orange'
                      : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:5633074849"
                className="flex items-center space-x-2 bg-solar-blue hover:bg-solar-navy text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 w-fit"
              >
                <Phone className="w-4 h-4" />
                <span>(563) 307-4849</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;