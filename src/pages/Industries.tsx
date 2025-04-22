
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Award, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Industries = () => {
  const industries = [
    {
      title: 'IT & ITES',
      description: 'Specialized recruitment and compliance solutions for technology companies seeking top talent in a competitive market.',
      features: [
        'Tech talent acquisition specialists',
        'Contract IT staffing solutions',
        'Remote tech team building',
        'IT skills assessment frameworks',
      ],
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: 'BFSI',
      description: 'HR services tailored for banking, financial services, and insurance sectors with focus on regulatory compliance and specialized skills.',
      features: [
        'Risk and compliance officer recruitment',
        'Financial analyst talent pipeline',
        'Banking operations specialists',
        'Insurance domain experts',
      ],
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: 'Healthcare',
      description: 'Comprehensive regulatory and staffing compliance solutions for healthcare providers and pharmaceutical companies.',
      features: [
        'Healthcare professional credentialing',
        'Medical staff recruitment',
        'Healthcare compliance training',
        'Clinical workforce management',
      ],
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: 'Manufacturing',
      description: 'Support for both blue-collar and white-collar workforce management in manufacturing environments.',
      features: [
        'Production staff recruitment',
        'Engineering talent acquisition',
        'Safety compliance programs',
        'Shift management solutions',
      ],
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: 'Retail',
      description: 'High-volume workforce solutions for retail operations with focus on scalability and seasonal adjustments.',
      features: [
        'Retail staff recruitment',
        'Store management talent',
        'Seasonal workforce planning',
        'Customer service training',
      ],
      icon: <Award className="h-8 w-8" />
    },
    {
      title: 'Education',
      description: 'Complete HR outsourcing for educational institutions, from K-12 to higher education and EdTech companies.',
      features: [
        'Teacher and faculty recruitment',
        'Educational administration staffing',
        'Student services personnel',
        'EdTech talent sourcing',
      ],
      icon: <Award className="h-8 w-8" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-brand-purple text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-lg opacity-90 mb-8">
              Our expertise spans across multiple sectors with specialized recruitment
              and HR solutions tailored to industry-specific needs.
            </p>
          </div>
        </div>
      </section>
      
      {/* Industries List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-brand-purple"
              >
                <div className="mb-4 text-brand-purple">
                  {industry.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-brand-purple">
                  {industry.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {industry.description}
                </p>
                <ul className="space-y-2">
                  {industry.features.map((feature, idx) => (
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
                <h2 className="text-3xl font-bold mb-4">Find industry-specific solutions</h2>
                <p className="text-lg opacity-90 mb-8 md:mb-0">
                  Let our experts help you navigate the unique HR challenges of your industry.
                </p>
              </div>
              <div>
                <Link to="/contact">
                  <Button className="bg-white text-brand-purple hover:bg-gray-100">
                    Get Started Today
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

export default Industries;
