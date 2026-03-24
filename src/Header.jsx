import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/home' },
    { 
      name: 'Solutions', 
      path: '/solutions', 
      hasDropdown: true,
      megaMenu: ['SAP ERP', 'Odoo', 'Custom Development', 'Cloud Migration'] 
    },
    { 
      name: 'Industries', 
      path: '/industries', 
      hasDropdown: true,
      megaMenu: ['Manufacturing', 'Retail', 'Healthcare', 'Finance'] 
    },
    { name: 'About Us', path: '/', isActive: location.pathname === '/' || location.pathname === '/about-us' },
    { 
      name: 'Blogs', 
      path: '/blogs',
      hasDropdown: true,
      megaMenu: ['Tech Insights', 'Company News']
    },
    { name: 'Our Works', path: '/works' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-[#1A1025]/95 backdrop-blur-md text-white sticky top-0 z-50 w-full border-b border-white/5 m-0 p-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="https://highshine.in/assets/images/logo/Highshine-logo-2.svg" 
                alt="Highshine Logo" 
                className="h-8 md:h-10" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1 items-center relative h-full">
            {links.map((link) => {
              const isActive = link.isActive || location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              
              return (
                <div key={link.name} className="group h-full flex items-center relative px-1">
                  <Link
                    to={link.path}
                    className={`relative overflow-hidden flex items-center px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-md ${
                      isActive ? 'text-white bg-white/5' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10 flex items-center">
                      {link.name}
                      {link.hasDropdown && <ChevronDown className="ml-1 w-4 h-4 opacity-70" />}
                    </span>
                    
                    {isActive && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
                        <motion.div
                          layoutId="activeNavIndicator"
                          className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#8B5CF6]/0 via-[#8B5CF6] to-[#8B5CF6]/0 shadow-[0_-4px_10px_rgba(139,92,246,0.5)]"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      </>
                    )}
                  </Link>

                  {/* Mega Menu */}
                  {link.megaMenu && (
                    <div className="absolute top-full left-0 hidden group-hover:block pt-0 w-56">
                      <div className="bg-[#1A1025] rounded-b-lg shadow-xl border border-t-0 border-white/10 overflow-hidden">
                        {link.megaMenu.map((item) => (
                          <Link 
                            key={item} 
                            to={`${link.path}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block px-4 py-3 text-sm text-gray-300 hover:bg-[#2D1F43] hover:text-white transition-colors"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-6 py-2 border border-[#F5A623] rounded-full text-[#F5A623] font-medium hover:bg-[#F5A623]/10 transition-colors relative overflow-hidden group"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-[#130922] border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => {
              const isActive = link.isActive || location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
              <div key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive 
                      ? 'bg-purple-900/40 text-white border-l-4 border-purple-400' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              </div>
            )})}
            <div className="pt-4 pb-2 px-3">
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center px-6 py-2 border border-[#F5A623] rounded-full text-[#F5A623] font-medium hover:bg-[#F5A623]/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
