
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Auth mock
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    setIsScrolled(window.scrollY > 10); // Init state
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

  // Fix: Always show navbar (header) on all pages
  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' 
        : 'bg-white md:bg-transparent py-4 shadow-md md:shadow-none'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold text-brand-purple">
            TruTalenza
          </h1>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={`hover-effect hover:text-brand-purple ${
              location.pathname === '/' ? 'text-brand-purple font-medium' : 'text-gray-700'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className={`hover-effect hover:text-brand-purple ${
              location.pathname === '/services' ? 'text-brand-purple font-medium' : 'text-gray-700'
            }`}
          >
            Services
          </Link>
          <Link 
            to="/industries" 
            className={`hover-effect hover:text-brand-purple ${
              location.pathname === '/industries' ? 'text-brand-purple font-medium' : 'text-gray-700'
            }`}
          >
            Industries
          </Link>
          <Link 
            to="/contact" 
            className={`hover-effect hover:text-brand-purple ${
              location.pathname === '/contact' ? 'text-brand-purple font-medium' : 'text-gray-700'
            }`}
          >
            Contact
          </Link>
          
          {isAuthenticated ? (
            <div className="flex items-center space-x-2">
              <Link to="/dashboard">
                <Button variant="ghost" className="flex items-center gap-2 hover-effect">
                  <User size={18} />
                  <span>Dashboard</span>
                </Button>
              </Link>
              <Button 
                onClick={handleLogout} 
                variant="outline" 
                className="hover-effect"
              >
                Logout
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button className="bg-brand-purple hover:bg-brand-lightPurple button-hover">
                Login
              </Button>
            </Link>
          )}
        </div>
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          aria-label="Open menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white animate-fade-in border-t">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <Link 
              to="/" 
              className="block py-2 hover:text-brand-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="block py-2 hover:text-brand-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/industries" 
              className="block py-2 hover:text-brand-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              Industries
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 hover:text-brand-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            {isAuthenticated ? (
              <div className="space-y-2 pt-2 border-t">
                <Link 
                  to="/dashboard" 
                  className="block py-2 hover:text-brand-purple"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button 
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }} 
                  className="w-full text-left py-2 text-red-600 hover:text-red-800"
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
                  <Button className="w-full bg-brand-purple hover:bg-brand-lightPurple">
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
