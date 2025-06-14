
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Check, Users, FileText, Calculator, TrendingUp, Lock, BarChart3, Database, Target, BookOpen, Search, Award, Zap, DollarSign, Settings, Layers, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const hrServices = [
    {
      title: 'Labour Law Support',
      description: 'Assistance with registrations, licenses, and document filing',
      icon: <FileText className="h-8 w-8" />
    },
    {
      title: 'Attendance & Leave Management',
      description: 'Accurate tracking of employee attendance and leave records',
      icon: <Users className="h-8 w-8" />
    },
    {
      title: 'LWF, PT Bonus, Gratuity',
      description: 'Compliance with LWF & PT regulations, bonus calculations, and gratuity management',
      icon: <Calculator className="h-8 w-8" />
    },
    {
      title: 'TDS Management',
      description: 'Timely and accurate TDS deductions, remittance, and reporting',
      icon: <TrendingUp className="h-8 w-8" />
    },
    {
      title: 'Acts',
      description: 'Adherence to labour laws, including the Minimum Wages Act, Payment of Wages, Maternity & Posh',
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: 'EPF & ESIC',
      description: 'Manage employee registration and monthly challan submission, Periodic audit, to ensure compliance',
      icon: <CheckCircle className="h-8 w-8" />
    }
  ];

  const technologyServices = [
    {
      title: 'Secure Payroll Processing',
      description: 'Advanced platforms ensure secure and efficient payroll processing',
      icon: <Lock className="h-8 w-8" />
    },
    {
      title: 'Real-Time Reporting',
      description: 'Real-time reporting for payroll and compliance tracking',
      icon: <BarChart3 className="h-8 w-8" />
    },
    {
      title: 'Data Security & Confidentiality',
      description: 'Data security and confidentiality are paramount',
      icon: <Database className="h-8 w-8" />
    }
  ];

  const workforceServices = [
    {
      title: 'Workforce Management',
      description: 'Scalable solutions for large teams and project-based hiring',
      icon: <Users className="h-8 w-8" />
    },
    {
      title: 'Training & Development',
      description: 'Upskilling employees with industry-leading programs',
      icon: <BookOpen className="h-8 w-8" />
    },
    {
      title: 'Executive Search',
      description: 'Recruiting top-level management and specialized roles',
      icon: <Search className="h-8 w-8" />
    }
  ];

  const whyChooseUs = [
    {
      title: 'Expertise & Experience',
      icon: <Award className="h-6 w-6" />
    },
    {
      title: 'Compliance-Driven Approach',
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: 'Customized Solutions',
      icon: <Settings className="h-6 w-6" />
    },
    {
      title: 'Cost & Time Efficiency',
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      title: 'Technology-Enabled HR',
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: 'Scalability & Flexibility',
      icon: <Layers className="h-6 w-6" />
    }
  ];

  const additionalFeatures = [
    {
      title: 'Dedicated Teams',
      icon: <Target className="h-6 w-6" />
    },
    {
      title: 'Advanced Technology',
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: 'Cost-Effective Solutions',
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      title: 'Customization',
      icon: <Settings className="h-6 w-6" />
    },
    {
      title: 'Efficiency',
      icon: <TrendingUp className="h-6 w-6" />
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
      
      {/* HR Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-purple">HR Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive HR solutions to streamline your business operations and ensure compliance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hrServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-brand-purple"
              >
                <div className="mb-4 text-brand-purple">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-purple">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology-Driven Efficiency Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-purple">Technology-Driven Efficiency</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Leveraging cutting-edge technology to deliver efficient and secure HR solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologyServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="mb-4 text-brand-purple flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-purple">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workforce Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-purple">Workforce Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive workforce management and talent acquisition solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workforceServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="mb-4 text-brand-purple flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-purple">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-purple">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover what sets us apart in delivering exceptional HR and workforce solutions
            </p>
          </div>
          
          {/* Main Why Choose Us Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {whyChooseUs.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border border-gray-100"
              >
                <div className="mb-4 text-brand-purple flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-brand-purple">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="bg-gradient-to-r from-brand-purple to-brand-lightPurple rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Additional Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {additionalFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm"
                >
                  <div className="mb-2 flex justify-center">
                    {feature.icon}
                  </div>
                  <h4 className="text-sm font-medium">
                    {feature.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
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
