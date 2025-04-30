import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  LineChart, 
  Target, 
  Clock,
  Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import BookConsultation from '@/components/BookConsultation';
import HeroSection from '@/components/HeroSections';

const Index = () => {
  // References for scroll animations
  const sectionsRef = useRef<HTMLElement[]>([]);
  // Track if page has been mounted to prevent refresh issues
  const [isMounted, setIsMounted] = useState(false);
  
  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };
  
  useEffect(() => {
    setIsMounted(true);
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Only add observers if page is mounted
    if (isMounted) {
      sectionsRef.current.forEach((section) => {
        section.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
        observer.observe(section);
      });
    }
    
    return () => {
      if (sectionsRef.current.length > 0) {
        sectionsRef.current.forEach((section) => {
          if (section) observer.unobserve(section);
        });
      }
    };
  }, [isMounted]);

  // Show all content immediately on mobile to avoid hover dependency
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        // Make all cards visible on mobile without needing hover
        document.querySelectorAll('.card-hover').forEach(card => {
          card.classList.add('mobile-visible');
        });
      }
    };
    
    // Run once on mount and on resize
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Split Hero Sections */}
      <div className="flex flex-col md:flex-row w-full">
        <HeroSection
          id="trutalenza"
          title="TruTalenza Workforce Solutions"
          subtitle="Innovative HR Solutions"
          description="A dynamic and comprehensive talent management and workforce solutions firm. We specialize in providing innovative staffing, recruitment, and HR consulting services to businesses across various sectors."
        />
        
        <HeroSection
          id="truvisory"
          title="TruVisory HR Services"
          subtitle="End-to-End HR Solutions"
          description="TruVisory HR Services provides end-to-end HR outsourcing solutions designed to streamline HR functions, reduce costs, and enhance business efficiency."
        />
      </div>
      
      {/* Features Section - visible regardless of active section */}
      <section className="py-16 bg-white" ref={addToRefs}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-purple mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence and client success sets us apart in the HR services and talent acquisition industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-purple/10 text-brand-purple">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Expertise & Experience</h3>
              <p className="text-gray-600">
                Our team brings decades of combined experience across multiple industries and HR disciplines.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-purple/10 text-brand-purple">
                <Check size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Compliance-Driven</h3>
              <p className="text-gray-600">
                We ensure all HR processes and solutions comply with relevant regulations and standards.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-purple/10 text-brand-purple">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Customized Solutions</h3>
              <p className="text-gray-600">
                We tailor our services to meet your specific business needs rather than offering one-size-fits-all approaches.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-purple/10 text-brand-purple">
                <LineChart size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Measurable Results</h3>
              <p className="text-gray-600">
                Our focus on metrics and analytics ensures you can track the impact of our services on your business.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50" ref={addToRefs}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-purple mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from businesses that have transformed their workforce management with our solutions.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <TestimonialsSlider />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-brand-purple text-white" ref={addToRefs}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Workforce Management?</h2>
              <p className="text-lg opacity-90 mb-6">
                Partner with us to transform your talent acquisition and HR processes for better business outcomes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="bg-white text-brand-purple hover:bg-gray-100 button-hover">
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-end">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-sm">
                <h3 className="text-xl font-semibold mb-4">Quick Consultation</h3>
                <p className="mb-4">
                  Schedule a free 30-minute consultation with our HR experts to discuss your specific challenges.
                </p>
                <BookConsultation />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
