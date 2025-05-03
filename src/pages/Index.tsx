import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  LineChart, 
  Target, 
  Clock,
  Check,
  Brain,
  Trophy,
  Building,
  Hospital,
  Banknote,
  Store,
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
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
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
      
      {/* TruTalenza detailed content sections */}
      <section className="py-16 bg-white w-full" ref={addToRefs}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#382c74] mb-4">Why Choose TruTalenza?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center p-4 md:p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#382c74]/10 text-[#382c74] mb-4">
                <h2 className="text-3xl font-bold">1</h2>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#382c74]">Expertise</h3>
              <p className="text-gray-600">
                A dedicated team of recruitment specialists with in-depth industry knowledge.
              </p>
            </div>
            
            <div className="text-center p-4 md:p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#382c74]/10 text-[#382c74] mb-4">
                <h2 className="text-3xl font-bold">2</h2>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#382c74]">Customization</h3>
              <p className="text-gray-600">
                Tailored solutions to meet the specific needs of your business.
              </p>
            </div>
            
            <div className="text-center p-4 md:p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#382c74]/10 text-[#382c74] mb-4">
                <h2 className="text-3xl font-bold">3</h2>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#382c74]">Efficiency</h3>
              <p className="text-gray-600">
                Extensive candidate database and cutting-edge technology to streamline the hiring process.
              </p>
            </div>
            
            <div className="text-center p-4 md:p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#382c74]/10 text-[#382c74] mb-4">
                <h2 className="text-3xl font-bold">4</h2>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#382c74]">Diversity</h3>
              <p className="text-gray-600">
                Commitment to diversity and inclusion in the workforce.
              </p>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-[#382c74] mb-8 text-center">Our Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="p-4 md:p-6 bg-[#F5F7FF] rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-[#382c74]">Top Management</h3>
                <p className="text-gray-600">
                  We specialize in recruiting top-level executives.
                </p>
              </div>
              
              <div className="p-4 md:p-6 bg-[#F5F7FF] rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-[#382c74]">Healthcare/Pharma</h3>
                <p className="text-gray-600">
                  We have deep expertise in the healthcare and pharmaceutical industries.
                </p>
              </div>
              
              <div className="p-4 md:p-6 bg-[#F5F7FF] rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-[#382c74]">BFSI</h3>
                <p className="text-gray-600">
                  We provide recruitment solutions for the banking, financial services, and insurance sectors.
                </p>
              </div>
              
              <div className="p-4 md:p-6 bg-[#F5F7FF] rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-[#382c74]">Retail</h3>
                <p className="text-gray-600">
                  We assist retailers in finding the best talent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* TruVisory detailed content sections */}
      <section className="py-16 bg-[#F5F7FF] w-full" ref={addToRefs}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2c3e74] mb-4">Our Approach</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-center mb-4">
                <Brain size={48} className="text-[#7E69AB]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-[#2c3e74]">Smart</h3>
              <p className="text-gray-600">
                We don't rely on job portals to search professionals. Our recruiters have extensive experience in the industries we serve. We have created a powerful database for all levels. Every candidate is thoroughly scrutinized by our professionals for best fitment.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-center mb-4">
                <Target size={48} className="text-[#7E69AB]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-[#2c3e74]">Tenacious</h3>
              <p className="text-gray-600">
                We are focused in our approach to identify the best talent and never put the search on the back burner and leave no stone unturned to find the right talent to fit your organization. We do not stop till the mission is accomplished.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-center mb-4">
                <Trophy size={48} className="text-[#7E69AB]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-[#2c3e74]">Result Oriented</h3>
              <p className="text-gray-600">
                We make best use of all the available resources viz. Portals, social media tools, excellent referral program, robust internal database to recruit the finest talents in the shortest possible time without compromising the quality of candidates.
              </p>
            </div>
          </div>
          
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-[#2c3e74] mb-12 text-center">Our Process</h2>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#7E69AB]/30"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center mb-16">
                  <div className="md:w-1/2 px-4 mb-4 md:mb-0 md:text-right">
                    <h3 className="text-xl font-semibold mb-2 text-[#2c3e74]">Understanding Needs</h3>
                    <p className="text-gray-600">
                      We carefully analyze your requirements and identify the ideal candidate profile.
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#2c3e74] text-white flex items-center justify-center font-bold z-10 mx-4">1</div>
                  <div className="md:w-1/2 px-4 md:text-left"></div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center mb-16">
                  <div className="md:w-1/2 px-4 mb-4 md:mb-0 md:text-right"></div>
                  <div className="w-10 h-10 rounded-full bg-[#2c3e74] text-white flex items-center justify-center font-bold z-10 mx-4">2</div>
                  <div className="md:w-1/2 px-4 md:text-left">
                    <h3 className="text-xl font-semibold mb-2 text-[#2c3e74]">Candidate Sourcing</h3>
                    <p className="text-gray-600">
                      We leverage our extensive network and advanced search techniques to find qualified candidates.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center mb-16">
                  <div className="md:w-1/2 px-4 mb-4 md:mb-0 md:text-right">
                    <h3 className="text-xl font-semibold mb-2 text-[#2c3e74]">Candidate Screening</h3>
                    <p className="text-gray-600">
                      We conduct thorough interviews and assessments to evaluate candidates' skills and experience.
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#2c3e74] text-white flex items-center justify-center font-bold z-10 mx-4">3</div>
                  <div className="md:w-1/2 px-4 md:text-left"></div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center mb-16">
                  <div className="md:w-1/2 px-4 mb-4 md:mb-0 md:text-right"></div>
                  <div className="w-10 h-10 rounded-full bg-[#2c3e74] text-white flex items-center justify-center font-bold z-10 mx-4">4</div>
                  <div className="md:w-1/2 px-4 md:text-left">
                    <h3 className="text-xl font-semibold mb-2 text-[#2c3e74]">Candidate Presentation</h3>
                    <p className="text-gray-600">
                      We present a shortlist of highly qualified candidates who meet your specific needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 px-4 mb-4 md:mb-0 md:text-right">
                    <h3 className="text-xl font-semibold mb-2 text-[#2c3e74]">Placement & Onboarding</h3>
                    <p className="text-gray-600">
                      We facilitate the hiring process and ensure a smooth transition for the new employee.
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#2c3e74] text-white flex items-center justify-center font-bold z-10 mx-4">5</div>
                  <div className="md:w-1/2 px-4 md:text-left"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-[#2c3e74] mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="flex bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-md bg-[#2c3e74]/10 flex items-center justify-center mr-4">
                  <Check className="text-[#2c3e74]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#2c3e74]">Integrity</h3>
                  <p className="text-gray-600">We uphold ethical standards in all our operations.</p>
                </div>
              </div>
              
              <div className="flex bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-md bg-[#2c3e74]/10 flex items-center justify-center mr-4">
                  <Check className="text-[#2c3e74]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#2c3e74]">Commitment</h3>
                  <p className="text-gray-600">We are dedicated to delivering exceptional service.</p>
                </div>
              </div>
              
              <div className="flex bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-md bg-[#2c3e74]/10 flex items-center justify-center mr-4">
                  <Zap className="text-[#2c3e74]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#2c3e74]">Speed</h3>
                  <p className="text-gray-600">We strive for efficiency and timely results.</p>
                </div>
              </div>
              
              <div className="flex bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-md bg-[#2c3e74]/10 flex items-center justify-center mr-4">
                  <Heart className="text-[#2c3e74]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#2c3e74]">Passion</h3>
                  <p className="text-gray-600">We are passionate about connecting talent with opportunity.</p>
                </div>
              </div>
            </div>
          </div>

          {/* New TruVisory HR Services Sections */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-[#2c3e74] mb-12 text-center">TruVisory HR Services</h2>
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-16">
              {/* Training & Development */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#e9f5f2] flex items-center justify-center mr-3">
                    <span className="text-[#2c3e74] text-2xl font-bold">5</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#2c3e74]">Training & Development</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#2c3e74] mr-2">•</span>
                    <span className="text-gray-700">Leadership & soft skills training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2c3e74] mr-2">•</span>
                    <span className="text-gray-700">Compliance & regulatory training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2c3e74] mr-2">•</span>
                    <span className="text-gray-700">Customized learning & development programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2c3e74] mr-2">•</span>
                    <span className="text-gray-700">HR workshops & industry best practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2c3e74] mr-2">•</span>
                    <span className="text-gray-700">E-learning solutions & virtual training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2c3e74] mr-2">•</span>
                    <span className="text-gray-700">Performance coaching & mentoring programs</span>
                  </li>
                </ul>
              </div>
              
              {/* HR Technology Solutions */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#e9f5f2] flex items-center justify-center mr-3">
                    <span className="text-[#2c3e74] text-2xl font-bold">6</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#2c3e74]">HR Technology Solutions</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#2c3e74] mr-2">•</span>
                    <span className="text-gray-700">HRMS & attendance management system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2c3e74] mr-2">•</span>
                    <span className="text-gray-700">Automated leave & payroll management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2c3e74] mr-2">•</span>
                    <span className="text-gray-700">Employee self-service portals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2c3e74] mr-2">•</span>
                    <span className="text-gray-700">Analytics & HR dashboards for data-driven decision-making</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2c3e74] mr-2">•</span>
                    <span className="text-gray-700">AI-driven workforce management solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2c3e74] mr-2">•</span>
                    <span className="text-gray-700">Cloud-based HR integrations</span>
                  </li>
                </ul>
              </div>
              
              {/* Benefits Administration */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#e9f5f2] flex items-center justify-center mr-3">
                    <span className="text-[#2c3e74] text-2xl font-bold">7</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#2c3e74]">Benefits Administration</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#2c3e74] mr-2">•</span>
                    <span className="text-gray-700">Provident fund & gratuity management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2c3e74] mr-2">•</span>
                    <span className="text-gray-700">Medical & health insurance facilitation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2c3e74] mr-2">•</span>
                    <span className="text-gray-700">Employee wellness programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2c3e74] mr-2">•</span>
                    <span className="text-gray-700">Leave & holiday policy management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2c3e74] mr-2">•</span>
                    <span className="text-gray-700">Employee assistance programs (EAP)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2c3e74] mr-2">•</span>
                    <span className="text-gray-700">Flexible benefits plan administration</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-[#2c3e74] mb-12 text-center">Why Choose Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#e9f5f2] flex items-center justify-center mr-3">
                      <span className="text-[#2c3e74] text-2xl font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#2c3e74]">Expertise & Experience</h3>
                  </div>
                  <p className="text-gray-700">Industry leaders with in-depth HR knowledge</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#e9f5f2] flex items-center justify-center mr-3">
                      <span className="text-[#2c3e74] text-2xl font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#2c3e74]">Compliance-Driven Approach</h3>
                  </div>
                  <p className="text-gray-700">100% statutory compliance and risk mitigation</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#e9f5f2] flex items-center justify-center mr-3">
                      <span className="text-[#2c3e74] text-2xl font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#2c3e74]">Customized Solutions</h3>
                  </div>
                  <p className="text-gray-700">Tailored HR outsourcing for startups, SMEs, and enterprises</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#e9f5f2] flex items-center justify-center mr-3">
                      <span className="text-[#2c3e74] text-2xl font-bold">4</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#2c3e74]">Cost & Time Efficiency</h3>
                  </div>
                  <p className="text-gray-700">Reduce HR overheads and administrative burdens</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#e9f5f2] flex items-center justify-center mr-3">
                      <span className="text-[#2c3e74] text-2xl font-bold">5</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#2c3e74]">Technology-Enabled HR</h3>
                  </div>
                  <p className="text-gray-700">AI, HRMS, and automation for digital transformation</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#e9f5f2] flex items-center justify-center mr-3">
                      <span className="text-[#2c3e74] text-2xl font-bold">6</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#2c3e74]">Scalability & Flexibility</h3>
                  </div>
                  <p className="text-gray-700">Solutions adaptable for businesses of all sizes</p>
                </div>
              </div>
            </div>
            
            {/* Timeline and Payment Terms */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-[#2c3e74] mb-12 text-center">Timeline and Payment Terms</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                <div className="bg-white rounded-xl p-8 shadow-md">
                  <h3 className="text-2xl font-bold text-[#2c3e74] mb-6">Timeline</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-[#2c3e74] mr-2">•</span>
                      <span className="text-gray-700">Week 1: Initial consultation and planning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2c3e74] mr-2">•</span>
                      <span className="text-gray-700">Week 2-4: Implementation of HR & accounting services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2c3e74] mr-2">•</span>
                      <span className="text-gray-700">Ongoing: Monthly and quarterly support</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-md">
                  <h3 className="text-2xl font-bold text-[#2c3e74] mb-6">Payment Terms</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-[#2c3e74] mr-2">•</span>
                      <span className="text-gray-700">No advance payment required</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2c3e74] mr-2">•</span>
                      <span className="text-gray-700">100% payment upon completion of service month</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#2c3e74] mr-2">•</span>
                      <span className="text-gray-700">Payment via bank transfer; monthly invoices provided</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section - visible regardless of active section */}
      <section className="py-16 bg-white w-full" ref={addToRefs}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-purple mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence and client success sets us apart in the HR services and talent acquisition industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
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
      <section className="py-16 bg-gray-50 w-full" ref={addToRefs}>
        <div className="container mx-auto px-4 max-w-7xl">
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
      <section className="py-16 bg-brand-purple text-white w-full" ref={addToRefs}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
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
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 max-w-sm">
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
