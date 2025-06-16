import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  LineChart, 
  Target, 
  Check,
  Brain,
  Trophy,
  Zap,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import BookConsultation from '@/components/BookConsultation';
import HeroSection from '@/components/HeroSections';

const Index = () => {
  const sectionsRef = useRef<HTMLElement[]>([]);
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

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      
      {/* Single Hero Section */}
      <HeroSection
        id="trutalenza"
        title="TruTalenza Workforce Solutions"
        subtitle="Strategic Talent Solutions & HR Excellence"
        description="Comprehensive workforce solutions and strategic talent acquisition services designed to optimize organizational growth, ensure regulatory compliance, and drive competitive advantage across diverse industries."
      />
      
      {/* Why Partner with TruTalenza Section */}
      <section className="py-16 bg-white w-full" ref={addToRefs}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#382c74] mb-4">Why Partner with TruTalenza?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center p-4 md:p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#382c74]/10 text-[#382c74] mb-4">
                <h2 className="text-3xl font-bold">1</h2>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#382c74]">Industry Expertise</h3>
              <p className="text-gray-600">
                Specialized recruitment professionals with deep sector knowledge and proven track records in strategic talent acquisition.
              </p>
            </div>
            
            <div className="text-center p-4 md:p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#382c74]/10 text-[#382c74] mb-4">
                <h2 className="text-3xl font-bold">2</h2>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#382c74]">Tailored Solutions</h3>
              <p className="text-gray-600">
                Customized workforce strategies designed to align with your unique business objectives and organizational culture.
              </p>
            </div>
            
            <div className="text-center p-4 md:p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#382c74]/10 text-[#382c74] mb-4">
                <h2 className="text-3xl font-bold">3</h2>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#382c74]">Advanced Technology</h3>
              <p className="text-gray-600">
                AI-powered talent matching platform with comprehensive candidate databases and streamlined recruitment processes.
              </p>
            </div>
            
            <div className="text-center p-4 md:p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#382c74]/10 text-[#382c74] mb-4">
                <h2 className="text-3xl font-bold">4</h2>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#382c74]">Inclusive Excellence</h3>
              <p className="text-gray-600">
                Committed to building diverse, inclusive workforces that drive innovation and sustainable business success.
              </p>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-[#382c74] mb-8 text-center">Core Specializations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="p-4 md:p-6 bg-[#F5F7FF] rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-[#382c74]">Executive Leadership</h3>
                <p className="text-gray-600">
                  Strategic executive search and C-suite recruitment for transformational leadership roles.
                </p>
              </div>
              
              <div className="p-4 md:p-6 bg-[#F5F7FF] rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-[#382c74]">Healthcare & Life Sciences</h3>
                <p className="text-gray-600">
                  Specialized talent acquisition in healthcare, pharmaceuticals, and biotechnology sectors.
                </p>
              </div>
              
              <div className="p-4 md:p-6 bg-[#F5F7FF] rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-[#382c74]">Financial Services</h3>
                <p className="text-gray-600">
                  Expert recruitment solutions for banking, financial services, and insurance organizations.
                </p>
              </div>
              
              <div className="p-4 md:p-6 bg-[#F5F7FF] rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-[#382c74]">Technology & Innovation</h3>
                <p className="text-gray-600">
                  Advanced talent solutions for technology companies and digital transformation initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Strategic Engagement Process - Mobile Optimized Horizontal Timeline */}
      <section className="py-16 bg-[#F5F7FF] w-full" ref={addToRefs}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2c3e74] mb-4">Strategic Engagement Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our proven methodology for delivering exceptional talent solutions
            </p>
          </div>
          
          {/* Mobile-First Horizontal Timeline */}
          <div className="relative overflow-x-auto pb-4">
            {/* Horizontal scrolling container for mobile */}
            <div className="flex gap-4 min-w-max md:grid md:grid-cols-5 md:gap-6 md:min-w-0">
              {/* Step 1 */}
              <div className="flex-shrink-0 w-64 md:w-auto text-center bg-white rounded-2xl p-6 shadow-lg border-2 border-[#2c3e74]/10 hover:border-[#2c3e74]/30 transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#2c3e74] to-[#7E69AB] text-white flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-lg">
                  1
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#2c3e74]">Strategic Discovery</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Comprehensive analysis of organizational requirements and strategic talent profile development.
                </p>
                <div className="mt-4 w-full h-1 bg-gradient-to-r from-[#2c3e74] to-[#7E69AB] rounded-full"></div>
              </div>
              
              {/* Step 2 */}
              <div className="flex-shrink-0 w-64 md:w-auto text-center bg-white rounded-2xl p-6 shadow-lg border-2 border-[#2c3e74]/10 hover:border-[#2c3e74]/30 transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#2c3e74] to-[#7E69AB] text-white flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-lg">
                  2
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#2c3e74]">Advanced Intelligence</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Multi-channel talent acquisition utilizing proprietary networks and AI-powered search algorithms.
                </p>
                <div className="mt-4 w-full h-1 bg-gradient-to-r from-[#2c3e74] to-[#7E69AB] rounded-full"></div>
              </div>
              
              {/* Step 3 */}
              <div className="flex-shrink-0 w-64 md:w-auto text-center bg-white rounded-2xl p-6 shadow-lg border-2 border-[#2c3e74]/10 hover:border-[#2c3e74]/30 transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#2c3e74] to-[#7E69AB] text-white flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-lg">
                  3
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#2c3e74]">Rigorous Assessment</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Comprehensive candidate evaluation through structured interviews and competency assessments.
                </p>
                <div className="mt-4 w-full h-1 bg-gradient-to-r from-[#2c3e74] to-[#7E69AB] rounded-full"></div>
              </div>
              
              {/* Step 4 */}
              <div className="flex-shrink-0 w-64 md:w-auto text-center bg-white rounded-2xl p-6 shadow-lg border-2 border-[#2c3e74]/10 hover:border-[#2c3e74]/30 transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#2c3e74] to-[#7E69AB] text-white flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-lg">
                  4
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#2c3e74]">Strategic Presentation</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Curated presentation of premium candidates with detailed profiles and strategic recommendations.
                </p>
                <div className="mt-4 w-full h-1 bg-gradient-to-r from-[#2c3e74] to-[#7E69AB] rounded-full"></div>
              </div>
              
              {/* Step 5 */}
              <div className="flex-shrink-0 w-64 md:w-auto text-center bg-white rounded-2xl p-6 shadow-lg border-2 border-[#2c3e74]/10 hover:border-[#2c3e74]/30 transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#2c3e74] to-[#7E69AB] text-white flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-lg">
                  5
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#2c3e74]">Seamless Integration</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Comprehensive onboarding support and transition management ensuring successful integration.
                </p>
                <div className="mt-4 w-full h-1 bg-gradient-to-r from-[#2c3e74] to-[#7E69AB] rounded-full"></div>
              </div>
            </div>
            
            {/* Mobile scroll indicator */}
            <div className="flex justify-center mt-6 md:hidden">
              <p className="text-xs text-gray-500 flex items-center gap-2">
                <ArrowRight className="w-4 h-4" />
                Scroll horizontally to see all steps
              </p>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-[#2c3e74] mb-8 text-center">Our Strategic Methodology</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex justify-center mb-4">
                  <Brain size={48} className="text-[#7E69AB]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center text-[#2c3e74]">Intelligent Sourcing</h3>
                <p className="text-gray-600">
                  Advanced AI-driven talent identification beyond traditional job portals. Our proprietary database and industry expertise ensure precision matching for optimal organizational fit.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex justify-center mb-4">
                  <Target size={48} className="text-[#7E69AB]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center text-[#2c3e74]">Relentless Pursuit</h3>
                <p className="text-gray-600">
                  Unwavering commitment to excellence with focused approach to identifying exceptional talent. We persist until we deliver the perfect match for your organization's success.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex justify-center mb-4">
                  <Trophy size={48} className="text-[#7E69AB]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center text-[#2c3e74]">Outcome Excellence</h3>
                <p className="text-gray-600">
                  Multi-channel talent acquisition leveraging cutting-edge technology, social media intelligence, and strategic partnerships to deliver superior results efficiently.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-[#2c3e74] mb-12 text-center">Core Values & Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="flex bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-md bg-[#2c3e74]/10 flex items-center justify-center mr-4">
                  <Check className="text-[#2c3e74]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#2c3e74]">Uncompromising Integrity</h3>
                  <p className="text-gray-600">Maintaining the highest ethical standards in all client engagements and candidate interactions.</p>
                </div>
              </div>
              
              <div className="flex bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-md bg-[#2c3e74]/10 flex items-center justify-center mr-4">
                  <Check className="text-[#2c3e74]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#2c3e74]">Strategic Excellence</h3>
                  <p className="text-gray-600">Delivering exceptional results through innovative approaches and unwavering commitment to success.</p>
                </div>
              </div>
              
              <div className="flex bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-md bg-[#2c3e74]/10 flex items-center justify-center mr-4">
                  <Zap className="text-[#2c3e74]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#2c3e74]">Agile Efficiency</h3>
                  <p className="text-gray-600">Rapid response capabilities with streamlined processes for accelerated time-to-market delivery.</p>
                </div>
              </div>
              
              <div className="flex bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-md bg-[#2c3e74]/10 flex items-center justify-center mr-4">
                  <Heart className="text-[#2c3e74]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#2c3e74]">Purposeful Innovation</h3>
                  <p className="text-gray-600">Passionate dedication to transforming careers and organizations through strategic talent solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white w-full" ref={addToRefs}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-purple mb-4">Strategic Partnership Advantages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our unwavering commitment to excellence and transformational client success distinguishes us as the premier choice in HR services and strategic talent acquisition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            <div className="feature-card">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-purple/10 text-brand-purple">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Proven Expertise</h3>
              <p className="text-gray-600">
                Decades of combined excellence across diverse industries and comprehensive HR excellence domains.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-purple/10 text-brand-purple">
                <Check size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Regulatory Excellence</h3>
              <p className="text-gray-600">
                Comprehensive compliance framework ensuring all HR processes exceed regulatory requirements and industry standards.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-purple/10 text-brand-purple">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Strategic Customization</h3>
              <p className="text-gray-600">
                Tailored solutions designed specifically for your unique business objectives rather than standardized approaches.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-purple/10 text-brand-purple">
                <LineChart size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Quantifiable Impact</h3>
              <p className="text-gray-600">
                Advanced metrics and analytics capabilities enabling comprehensive tracking of service impact on business performance.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 w-full" ref={addToRefs}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-purple mb-4">Client Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how organizations have achieved transformational workforce management excellence through our strategic partnerships.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <TestimonialsSlider />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-brand-purple text-white w-full" ref={addToRefs}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Transform Your Workforce Strategy Today</h2>
              <p className="text-lg opacity-90 mb-6">
                Partner with industry leaders to revolutionize your talent acquisition and HR excellence for exceptional business outcomes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="bg-white text-brand-purple hover:bg-gray-100 button-hover">
                    Begin Strategic Partnership
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-end">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 max-w-sm">
                <h3 className="text-xl font-semibold mb-4">Executive Consultation</h3>
                <p className="mb-4">
                  Schedule a complimentary 30-minute strategic consultation with our senior HR experts to explore your specific challenges.
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
