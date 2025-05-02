import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Shield, Award, Verified, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { toast } = useToast();
  
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    setIsScrolled(window.scrollY > 10);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account",
      duration: 3000,
    });
    
    setTimeout(() => {
      window.location.href = '/';
    }, 500);
  };

  const services = [
    { title: 'Talent Acquisition', description: 'Recruitment services across multiple industries' },
    { title: 'HR Consulting', description: 'Creating tailored HR strategies' },
    { title: 'Workforce Management', description: 'Solutions for managing large-scale workforces' },
    { title: 'Training & Development', description: 'Customized programs to upskill employees' },
  ];

  const industries = [
    { title: 'IT & ITES', description: 'Recruitment and compliance solutions' },
    { title: 'BFSI', description: 'HR services for banking and finance' },
    { title: 'Healthcare', description: 'Regulatory & staffing compliance' },
    { title: 'Manufacturing', description: 'Support for workforce management' },
    { title: 'Retail', description: 'High-volume workforce solutions' },
    { title: 'Education', description: 'Complete HR outsourcing' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2' 
          : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <Shield className="h-6 w-6 text-brand-purple group-hover:text-brand-lightPurple transition-colors" />
          <h1 className="text-xl md:text-2xl font-bold text-brand-purple group-hover:text-brand-lightPurple transition-colors">
            TruTalenza
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={`flex items-center space-x-1 hover:text-brand-purple transition-all duration-300 transform hover:scale-105 ${
              location.pathname === '/' ? 'text-brand-purple font-medium' : 'text-white font-medium'
            }`}
          >
            <Award className="h-4 w-4" />
            <span>Home</span>
          </Link>
          
          <Link 
            to="/services" 
            className={`flex items-center space-x-1 hover:text-brand-purple transition-all duration-300 transform hover:scale-105 ${
              location.pathname === '/services' ? 'text-brand-purple font-medium' : 'text-white font-medium'
            }`}
          >
            <Handshake className="h-4 w-4" />
            <span>Services</span>
          </Link>

          <Link 
            to="/industries" 
            className={`flex items-center space-x-1 hover:text-brand-purple transition-all duration-300 transform hover:scale-105 ${
              location.pathname === '/industries' ? 'text-brand-purple font-medium' : 'text-white font-medium'
            }`}
          >
            <Shield className="h-4 w-4" />
            <span>Industries</span>
          </Link>

          <Link 
            to="/contact" 
            className={`flex items-center space-x-1 hover:text-brand-purple transition-all duration-300 transform hover:scale-105 ${
              location.pathname === '/contact' ? 'text-brand-purple font-medium' : 'text-white font-medium'
            }`}
          >
            <Handshake className="h-4 w-4" />
            <span>Contact</span>
          </Link>
          
          {isAuthenticated ? (
            <div className="flex items-center space-x-2">
              <Link to="/dashboard">
                <Button 
                  variant="ghost" 
                  className="flex items-center gap-2 text-white hover:bg-brand-purple/10 transition-all duration-300 transform hover:scale-105 group"
                >
                  <User size={18} className="group-hover:text-brand-purple transition-colors" />
                  <span className="group-hover:text-brand-purple">Dashboard</span>
                </Button>
              </Link>
              <Button 
                onClick={handleLogout} 
                variant="outline" 
                className="text-white border-white hover:bg-brand-purple/10 hover:text-brand-purple transition-all duration-300 transform hover:scale-105"
              >
                Logout
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button className="bg-brand-purple hover:bg-brand-lightPurple transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Login
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-brand-purple transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md animate-fade-in border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              to="/" 
              className="block py-2 hover:text-brand-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            <Link
              to="/services"
              className="block py-2 hover:text-brand-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            
            <div className="pl-4 space-y-2">
              {services.map((service) => (
                <Link
                  key={service.title}
                  to="/services"
                  className="block py-1 text-sm text-gray-600 hover:text-brand-purple transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {service.title}
                </Link>
              ))}
            </div>

            <Link
              to="/industries"
              className="block py-2 hover:text-brand-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Industries
            </Link>
            
            <div className="pl-4 space-y-2">
              {industries.map((industry) => (
                <Link
                  key={industry.title}
                  to="/industries"
                  className="block py-1 text-sm text-gray-600 hover:text-brand-purple transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {industry.title}
                </Link>
              ))}
            </div>

            <Link 
              to="/contact" 
              className="block py-2 hover:text-brand-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            {isAuthenticated ? (
              <div className="space-y-2 pt-2 border-t">
                <Link 
                  to="/dashboard" 
                  className="block py-2 hover:text-brand-purple transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button 
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }} 
                  className="w-full text-left py-2 text-red-600 hover:text-red-800 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="pt-2">
                <Link 
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="w-full bg-brand-purple hover:bg-brand-lightPurple transition-colors">
                    Login
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
