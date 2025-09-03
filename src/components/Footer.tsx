import { Mail, Phone, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer
      className="text-white border-t border-white/10"
      style={{
        background: 'linear-gradient(135deg, #1a1b3a 0%, #2c2947 25%, #3d3766 50%, #4a4085 75%, #5749a3 100%)'
      }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4 animate-slide-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-bold text-white">TruTalenza</h3>
            <p className="text-sm text-white/80">
              A dynamic and comprehensive talent management and workforce solutions firm.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-white/90 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.3c-1 0-1.8-0.8-1.8-1.7s0.8-1.7 1.8-1.7 1.8 0.8 1.8 1.7-0.8 1.7-1.8 1.7zm12.5 12.3h-3v-5.6c0-3.4-4-3.1-4 0v5.6h-3v-11h3v1.9c1.4-2.6 7-2.8 7 2.5v6.6z"/>
                </svg>
              </a>
              <a href="#" className="text-white/90 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="space-y-4 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/industries" className="text-white/80 hover:text-white transition-colors">Industries</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/login" className="text-white/80 hover:text-white transition-colors">Login</Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4 animate-slide-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg font-semibold text-white">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-white/70" />
                <a href="tel:+916398807772" className="text-white/80 hover:text-white transition-colors">
                  +91 6398807772
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-white/70" />
                <a href="mailto:truvisory@gmail.com" className="text-white/80 hover:text-white transition-colors">
                  truvisory@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-white/70" />
                <a href="mailto:trutalenza@gmail.com" className="text-white/80 hover:text-white transition-colors">
                  trutalenza@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-white/70 mt-1" />
                <span className="text-white/80">New Delhi, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-white/70" />
                <span className="text-white/80">Mon-Fri: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 text-center text-sm text-gray-600 dark:text-gray-300">
          <p>© {currentYear} TruVision HR Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
