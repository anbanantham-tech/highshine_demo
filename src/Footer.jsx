import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const usefulLinks = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Legal', path: '/legal' },
    { name: 'Contact us', path: '/contact' },
  ];

  return (
    <footer className="bg-[#130b21] text-gray-300 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://highshine.in/assets/images/logo/Highshine-logo-2.svg" 
                alt="Highshine Logo" 
                className="h-10" 
              />
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Highshine IT Solutions Pvt. Ltd.<br/>
              Empowering your digital transformation with innovative IT solutions and dedicated expertise.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Useful Links</h3>
            <ul className="space-y-4">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-[#F5A623] transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#F5A623] shrink-0 mt-1" />
                <span className="text-gray-400 leading-relaxed">
                  No.17, Self Help Industrial Estate,<br/>
                  Baliga Rd, Veeramani Nagar,<br/>
                  Keelkattalai, Chennai,<br/>
                  Tamil Nadu 600117
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[#F5A623] shrink-0" />
                <a href="tel:+919840984513" className="text-gray-400 hover:text-white transition-colors">
                  +91 98409 84513
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-[#F5A623] shrink-0" />
                <a href="mailto:sales@highshine.in" className="text-gray-400 hover:text-white transition-colors">
                  sales@highshine.in
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Highshine IT Solutions Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
