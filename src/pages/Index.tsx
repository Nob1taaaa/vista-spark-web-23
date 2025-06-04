
import { useEffect, useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSections";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import { ArrowRight, Users, Target, TrendingUp, Award, CheckCircle, Star, Briefcase, Building, Banknote, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const [isVisible, setIsVisible] = useState({
    stats: false,
    services: false,
    process: false,
    testimonials: false,
    cta: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: 1000, label: 'Clients Served' },
    { number: 500, label: 'Projects Completed' },
    { number: 200, label: 'Years of Experience' },
    { number: 10, label: 'Awards Won' }
  ];

  const services = [
    { icon: <Briefcase size={24} />, title: 'Executive Leadership', description: 'Strategic executive search and C-suite recruitment for transformational leadership roles.' },
    { icon: <Building size={24} />, title: 'Healthcare & Life Sciences', description: 'Specialized talent acquisition in healthcare, pharmaceuticals, and biotechnology sectors.' },
    { icon: <Banknote size={24} />, title: 'Financial Services', description: 'Expert recruitment solutions for banking, financial services, and insurance organizations.' },
    { icon: <Store size={24} />, title: 'Technology & Innovation', description: 'Advanced talent solutions for technology companies and digital transformation initiatives.' }
  ];

  const processes = [
    { title: 'Strategic Discovery', description: 'Comprehensive analysis of organizational requirements and strategic talent profile development for optimal alignment.' },
    { title: 'Advanced Talent Intelligence', description: 'Multi-channel talent acquisition utilizing proprietary networks, AI-powered search algorithms, and strategic market intelligence.' },
    { title: 'Rigorous Assessment', description: 'Comprehensive candidate evaluation through structured interviews, competency assessments, and cultural fit analysis.' },
    { title: 'Strategic Presentation', description: 'Curated presentation of premium candidates with detailed profiles and strategic recommendations for informed decision-making.' },
    { title: 'Seamless Integration', description: 'Comprehensive onboarding support and transition management ensuring successful integration and immediate productivity.' }
  ];

  const testimonials = [
    {
      name: 'John Doe',
      company: 'Tech Innovations',
      quote: 'TruTalenza has been a game-changer for our organization. Their strategic talent acquisition solutions have helped us attract top talent and drive business growth.'
    },
    {
      name: 'Jane Smith',
      company: 'Healthcare Solutions',
      quote: 'TruVisory has provided us with exceptional HR consulting services. Their comprehensive workforce management solutions have helped us optimize our operations and ensure regulatory compliance.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* TruTalenza Hero */}
      <div className="animate-fade-in">
        <HeroSection 
          id="trutalenza"
          title="TruTalenza" 
          subtitle="Strategic Talent Acquisition Excellence"
          description="Empowering organizations with strategic talent acquisition solutions. We specialize in connecting exceptional professionals with visionary companies across diverse industries, driving sustainable growth through strategic workforce optimization."
        />
      </div>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div 
            id="stats" 
            data-animate
            className={`transition-all duration-1000 ${
              isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-brand-purple animate-shine">
              Driving Excellence Through Strategic Workforce Solutions
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="transform transition-all duration-500 hover:scale-110 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="bg-gradient-to-br from-brand-purple to-brand-lightPurple text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="text-3xl font-bold mb-2 animate-pulse-slow">{stat.number}</div>
                      <div className="text-sm opacity-90">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div 
            id="services" 
            data-animate
            className={`transition-all duration-1000 ${
              isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl font-bold text-center mb-4 text-brand-purple">
              Comprehensive Strategic Workforce Solutions
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Delivering exceptional talent acquisition and workforce optimization strategies tailored to your industry-specific requirements and organizational objectives.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="service-card card-glow tilt-card group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-purple/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="text-brand-purple mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-brand-purple group-hover:text-brand-lightPurple transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                  <div className="flex items-center text-brand-purple font-medium group-hover:translate-x-2 transition-transform duration-300">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:animate-bounce-slow" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div 
            id="process" 
            data-animate
            className={`transition-all duration-1000 ${
              isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-brand-purple">
              Strategic Engagement Process
            </h2>
            <div className="max-w-4xl mx-auto">
              {processes.map((process, index) => (
                <div 
                  key={index} 
                  className="flex items-start mb-8 group transform transition-all duration-500 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="timeline-point bg-brand-purple text-white mr-6 group-hover:bg-brand-lightPurple group-hover:shadow-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1 bg-gray-50 p-6 rounded-lg group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                    <h3 className="text-lg font-semibold text-brand-purple mb-2 group-hover:text-brand-lightPurple transition-colors duration-300">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {process.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div 
            id="testimonials" 
            data-animate
            className={`transition-all duration-1000 ${
              isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-brand-purple animate-shine">
              Client Success Stories
            </h2>
            <div className="transform transition-all duration-500 hover:scale-[1.02]">
              <TestimonialsSlider testimonials={testimonials} />
            </div>
          </div>
        </div>
      </section>

      {/* TruVisory Hero */}
      <div className="animate-fade-in">
        <HeroSection 
          id="truvisory"
          title="TruVisory" 
          subtitle="Advanced HR Consulting Excellence"
          description="Transforming organizations through strategic HR consulting and comprehensive workforce management solutions. We deliver innovative HR strategies that enhance operational efficiency, ensure regulatory compliance, and drive sustainable organizational growth."
        />
      </div>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div 
            id="cta" 
            data-animate
            className={`transition-all duration-1000 ${
              isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-gradient-to-r from-brand-purple to-brand-lightPurple rounded-xl p-8 md:p-12 text-white transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="md:flex md:items-center md:justify-between">
                  <div className="md:max-w-2xl">
                    <h2 className="text-3xl font-bold mb-4 animate-pulse-slow">
                      Ready to Transform Your Workforce Strategy?
                    </h2>
                    <p className="text-lg opacity-90 mb-8 md:mb-0">
                      Partner with us to unlock exceptional talent solutions and drive sustainable organizational growth through strategic workforce optimization.
                    </p>
                  </div>
                  <div className="transform transition-all duration-300 hover:scale-110">
                    <Link to="/contact">
                      <Button className="bg-white text-brand-purple hover:bg-gray-100 button-pulse">
                        Begin Strategic Partnership
                        <ArrowRight className="ml-2 h-4 w-4 animate-bounce-slow" />
                      </Button>
                    </Link>
                  </div>
                </div>
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
