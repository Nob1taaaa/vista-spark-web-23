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
import LoginModal from "@/components/LoginModal";

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
      <LoginModal />
      
      {/* Hero Section - Ensure it's always visible */}
      <section className="pt-28 pb-16 bg-brand-purple text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                TruTalenza Workforce Solutions
              </h1>
              <p className="text-lg opacity-90 mb-8 max-w-2xl">
                A dynamic and comprehensive talent management and workforce solutions firm. We specialize in providing innovative staffing, recruitment, and HR consulting services to businesses across various sectors.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="bg-white text-brand-purple hover:bg-gray-100 button-hover">
                    <span>Get in Touch</span>
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
                <BookConsultation />
              </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="/lovable-uploads/5f0df653-072c-4026-bb24-2fdf6d2dacd8.png" 
                alt="TruTalenza Team" 
                className="max-w-full h-auto rounded-lg shadow-lg"
                style={{ maxHeight: '400px' }}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Ensure all sections have proper visibility */}
      <section className="py-20 opacity-100" ref={addToRefs}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-purple mb-12">
            Our Mission & Vision
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-brand-purple hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-brand-purple">Mission</h3>
              <p className="text-gray-700">
                To bridge the gap between talent and opportunity.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-brand-purple hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-brand-purple">Vision</h3>
              <p className="text-gray-700">
                To become a trusted partner for companies seeking top talent and individuals aiming to grow their careers.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50 opacity-100" ref={addToRefs}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-purple mb-4">
            Our Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We provide comprehensive workforce solutions tailored to your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Make all service cards explicitly visible on mobile */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all card-hover mobile-visible">
              <div className="p-6">
                <div className="w-12 h-12 bg-brand-purple/10 rounded-full flex items-center justify-center text-brand-purple mb-4">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-brand-purple">
                  Talent Acquisition
                </h3>
                <p className="text-gray-600">
                  We provide recruitment services across multiple industries, sourcing the best candidates for both permanent and temporary positions.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all card-hover mobile-visible">
              <div className="p-6">
                <div className="w-12 h-12 bg-brand-purple/10 rounded-full flex items-center justify-center text-brand-purple mb-4">
                  <LineChart size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-brand-purple">
                  HR Consulting
                </h3>
                <p className="text-gray-600">
                  Expertise in creating tailored HR strategies to improve workforce efficiency, compliance, and culture.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all card-hover mobile-visible">
              <div className="p-6">
                <div className="w-12 h-12 bg-brand-purple/10 rounded-full flex items-center justify-center text-brand-purple mb-4">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-brand-purple">
                  Workforce Management
                </h3>
                <p className="text-gray-600">
                  Solutions for managing large-scale workforces, including contingent staffing and project-based hiring.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all card-hover mobile-visible">
              <div className="p-6">
                <div className="w-12 h-12 bg-brand-purple/10 rounded-full flex items-center justify-center text-brand-purple mb-4">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-brand-purple">
                  Training & Development
                </h3>
                <p className="text-gray-600">
                  Customized programs to upskill employees, empowering them with industry knowledge and tools.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="bg-brand-purple hover:bg-brand-lightPurple button-hover">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Continue with the rest of the sections with improved visibility */}
      <section className="py-20 opacity-100" ref={addToRefs}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-purple mb-4">
            Our Process
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            A systematic approach to deliver exceptional results for our clients
          </p>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="bg-brand-purple text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-purple mb-2">Understanding Needs</h3>
                <p className="text-gray-600">
                  We carefully analyze your requirements and identify the ideal candidate profile.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="bg-brand-purple text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-purple mb-2">Candidate Sourcing</h3>
                <p className="text-gray-600">
                  We leverage our extensive network and advanced search techniques to find qualified candidates.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="bg-brand-purple text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-purple mb-2">Candidate Screening</h3>
                <p className="text-gray-600">
                  We conduct thorough interviews and assessments to evaluate candidates' skills and experience.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="bg-brand-purple text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-purple mb-2">Candidate Presentation</h3>
                <p className="text-gray-600">
                  We present a shortlist of highly qualified candidates who meet your specific needs.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="bg-brand-purple text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-purple mb-2">Placement & Onboarding</h3>
                <p className="text-gray-600">
                  We facilitate the hiring process and ensure a smooth transition for the new employee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white opacity-100" ref={addToRefs}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-purple mb-4">
            What Our Clients Say
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Hear from businesses that have partnered with TruTalenza for their workforce solutions
          </p>
          
          <div className="max-w-4xl mx-auto">
            <TestimonialsSlider />
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50 opacity-100" ref={addToRefs}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-purple mb-12">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center card-hover">
              <div className="w-16 h-16 bg-brand-purple/10 text-brand-purple rounded-full mx-auto flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-purple">Integrity</h3>
              <p className="text-gray-600">
                We uphold ethical standards in all our operations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center card-hover">
              <div className="w-16 h-16 bg-brand-purple/10 text-brand-purple rounded-full mx-auto flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-purple">Commitment</h3>
              <p className="text-gray-600">
                We are dedicated to delivering exceptional service.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center card-hover">
              <div className="w-16 h-16 bg-brand-purple/10 text-brand-purple rounded-full mx-auto flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-purple">Speed</h3>
              <p className="text-gray-600">
                We strive for efficiency and timely results.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center card-hover">
              <div className="w-16 h-16 bg-brand-purple/10 text-brand-purple rounded-full mx-auto flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-purple">Passion</h3>
              <p className="text-gray-600">
                We are passionate about connecting talent with opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 opacity-100" ref={addToRefs}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-purple mb-4">
            Industries We Serve
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our expertise spans across multiple sectors with specialized recruitment and HR solutions
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100 hover:shadow-md transition-all card-hover">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-brand-purple/10 rounded-full flex items-center justify-center text-brand-purple">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">IT & ITES</h3>
              </div>
              <p className="text-gray-600">Recruitment and compliance solutions</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100 hover:shadow-md transition-all card-hover">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-brand-purple/10 rounded-full flex items-center justify-center text-brand-purple">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">BFSI</h3>
              </div>
              <p className="text-gray-600">HR services for banking, finance, and insurance sectors</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100 hover:shadow-md transition-all card-hover">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-brand-purple/10 rounded-full flex items-center justify-center text-brand-purple">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Healthcare & Pharmaceuticals</h3>
              </div>
              <p className="text-gray-600">Regulatory & staffing compliance</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100 hover:shadow-md transition-all card-hover">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-brand-purple/10 rounded-full flex items-center justify-center text-brand-purple">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Retail & E-commerce</h3>
              </div>
              <p className="text-gray-600">High-volume workforce management</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100 hover:shadow-md transition-all card-hover">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-brand-purple/10 rounded-full flex items-center justify-center text-brand-purple">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Manufacturing & Engineering</h3>
              </div>
              <p className="text-gray-600">Support for blue & white-collar workforce</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100 hover:shadow-md transition-all card-hover">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-brand-purple/10 rounded-full flex items-center justify-center text-brand-purple">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Education & EdTech</h3>
              </div>
              <p className="text-gray-600">Complete HR outsourcing for institutions</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-brand-purple text-white opacity-100" ref={addToRefs}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-lg hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Expertise & Experience</h3>
              <p className="opacity-90">
                Industry leaders with in-depth HR knowledge
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-lg hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Compliance-Driven Approach</h3>
              <p className="opacity-90">
                100% statutory compliance and risk mitigation
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-lg hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Customized Solutions</h3>
              <p className="opacity-90">
                Tailored HR solutions for startups, SMEs, and enterprises
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/contact">
              <Button className="bg-white text-brand-purple hover:bg-gray-100 button-hover">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-20 opacity-100" ref={addToRefs}>
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-brand-purple to-brand-lightPurple rounded-xl p-8 md:p-12 text-white">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:max-w-2xl">
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Workforce?</h2>
                <p className="text-lg opacity-90 mb-8 md:mb-0">
                  Partner with TruTalenza for innovative HR solutions that drive growth and success.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="bg-white text-brand-purple hover:bg-gray-100 button-hover">
                    Contact Us
                  </Button>
                </Link>
                <Link to="/blog">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 button-hover">
                    Read Our Blog
                  </Button>
                </Link>
                <Link to="/faq">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 button-hover">
                    View FAQs
                  </Button>
                </Link>
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
