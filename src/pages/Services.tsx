
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: 'Talent Acquisition',
      description: 'We provide recruitment services across multiple industries, sourcing the best candidates for both permanent and temporary positions.',
      features: [
        'Executive search and headhunting',
        'Mass recruitment for large-scale projects',
        'Specialized talent for niche roles',
        'Contract and temporary staffing',
      ],
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: 'HR Consulting',
      description: 'Our expertise in creating tailored HR strategies helps improve workforce efficiency, compliance, and company culture.',
      features: [
        'HR policy development and implementation',
        'Employee engagement programs',
        'Performance management systems',
        'Workplace culture transformation',
      ],
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: 'Workforce Management',
      description: 'We offer comprehensive solutions for managing large-scale workforces, including contingent staffing and project-based hiring.',
      features: [
        'Workforce planning and optimization',
        'Contractor management systems',
        'Payroll and benefits administration',
        'Compliance and risk management',
      ],
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: 'Training & Development',
      description: 'Our customized programs help upskill employees, empowering them with industry knowledge and tools for success.',
      features: [
        'Leadership development programs',
        'Technical skills training',
        'Onboarding and orientation programs',
        'Team building and soft skills workshops',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg opacity-90 mb-8">
              Comprehensive workforce solutions tailored to your business needs.
              We help organizations optimize their talent acquisition and management.
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
                <h2 className="text-3xl font-bold mb-4">Ready to transform your workforce?</h2>
                <p className="text-lg opacity-90 mb-8 md:mb-0">
                  Partner with TruTalenza for innovative HR solutions that drive growth and success.
                </p>
              </div>
              <div>
                <Link to="/contact">
                  <Button className="bg-white text-brand-purple hover:bg-gray-100">
                    Contact Us Today
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
