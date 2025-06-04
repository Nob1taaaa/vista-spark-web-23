
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: 'Strategic Talent Acquisition',
      description: 'Advanced recruitment services across multiple industries, sourcing exceptional candidates for both permanent and strategic temporary positions with comprehensive market intelligence.',
      features: [
        'Executive search and strategic headhunting',
        'Large-scale recruitment for enterprise projects',
        'Specialized talent for niche and critical roles',
        'Contract and strategic temporary staffing solutions',
      ],
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: 'Strategic HR Consulting',
      description: 'Comprehensive expertise in developing tailored HR strategies that enhance workforce efficiency, ensure regulatory compliance, and transform organizational culture for sustainable growth.',
      features: [
        'Strategic HR policy development and implementation',
        'Advanced employee engagement and retention programs',
        'Performance management and optimization systems',
        'Organizational culture transformation initiatives',
      ],
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: 'Comprehensive Workforce Management',
      description: 'Advanced solutions for managing large-scale workforces, including strategic contingent staffing, project-based hiring, and comprehensive workforce optimization strategies.',
      features: [
        'Strategic workforce planning and optimization',
        'Advanced contractor management systems',
        'Comprehensive payroll and benefits administration',
        'Regulatory compliance and strategic risk management',
      ],
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: 'Leadership Development & Training',
      description: 'Premium customized programs designed to enhance leadership capabilities, empowering employees with advanced industry knowledge and strategic tools for organizational success.',
      features: [
        'Executive leadership development programs',
        'Advanced technical skills and competency training',
        'Comprehensive onboarding and orientation programs',
        'Strategic team building and leadership workshops',
      ],
      icon: <Shield className="h-8 w-8" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-brand-purple text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Strategic Service Portfolio</h1>
            <p className="text-lg opacity-90 mb-8">
              Comprehensive workforce solutions and strategic talent acquisition services designed to optimize your business objectives.
              We partner with organizations to maximize talent potential and drive competitive advantage across diverse industries.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-brand-purple"
              >
                <div className="mb-4 text-brand-purple">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-brand-purple">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-brand-purple to-brand-lightPurple rounded-xl p-8 md:p-12 text-white">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:max-w-2xl">
                <h2 className="text-3xl font-bold mb-4">Ready to transform your strategic workforce capabilities?</h2>
                <p className="text-lg opacity-90 mb-8 md:mb-0">
                  Partner with TruTalenza for innovative HR solutions that drive exceptional growth and sustainable competitive advantage.
                </p>
              </div>
              <div>
                <Link to="/contact">
                  <Button className="bg-white text-brand-purple hover:bg-gray-100">
                    Begin Strategic Partnership
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

export default Services;
