
import React, { lazy, Suspense } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, TrendingUp, Shield, Clock, Award, Zap, Target, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileOptimized from "@/components/MobileOptimized";

// Lazy load heavy components
const TestimonialsSlider = lazy(() => import("@/components/TestimonialsSlider"));

const LoadingCard = () => (
  <div className="animate-pulse bg-gray-200 h-32 rounded-lg"></div>
);

const Services = () => {
  const services = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Recruitment & Talent Acquisition",
      description: "Strategic hiring solutions to find the right talent for your organization.",
      features: ["Executive Search", "Volume Recruitment", "Talent Pipeline Development"]
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "HR Consulting",
      description: "Comprehensive HR advisory services to optimize your people strategy.",
      features: ["HR Strategy", "Process Optimization", "Compliance Management"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Payroll & Benefits",
      description: "Complete payroll management and benefits administration services.",
      features: ["Payroll Processing", "Benefits Management", "Tax Compliance"]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Workforce Solutions",
      description: "International HR solutions for expanding businesses.",
      features: ["Global Compliance", "International Payroll", "Remote Team Management"]
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Initial Consultation",
      description: "Understanding your unique business needs and challenges."
    },
    {
      number: "2", 
      title: "Strategy Development",
      description: "Creating customized HR solutions tailored to your goals."
    },
    {
      number: "3",
      title: "Implementation",
      description: "Executing the strategy with precision and attention to detail."
    },
    {
      number: "4",
      title: "Ongoing Support",
      description: "Continuous monitoring and optimization for lasting success."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navbar />
      
      {/* Hero Section - Optimized for mobile */}
      <section className="pt-20 pb-8 sm:pb-12">
        <MobileOptimized>
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4 text-brand-purple border-brand-purple">
              Professional HR Services
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Transform Your <span className="text-brand-purple">Workforce</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Comprehensive HR solutions designed to help your business thrive in today's competitive landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="mobile-button bg-brand-purple hover:bg-brand-purple/90">
                Get Started Today
              </Button>
              <Button variant="outline" size="lg" className="mobile-button">
                View Our Process
              </Button>
            </div>
          </div>
        </MobileOptimized>
      </section>

      {/* Services Grid - Mobile Optimized */}
      <section className="py-8 sm:py-12">
        <MobileOptimized>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive HR solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="mobile-grid mobile-grid-2 lg:grid-cols-2 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <Card key={index} className="mobile-card hover:shadow-lg group">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-brand-purple/10 rounded-lg text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm sm:text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </MobileOptimized>
      </section>

      {/* Process Section - Simplified for mobile */}
      <section className="py-8 sm:py-12 bg-white/50">
        <MobileOptimized>
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Our Strategic Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A proven methodology that delivers results for businesses of all sizes.
            </p>
          </div>
          
          <div className="process-timeline max-w-2xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="process-number">
                  {step.number}
                </div>
                <div className="process-content">
                  <h3 className="process-title">{step.title}</h3>
                  <p className="process-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </MobileOptimized>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12">
        <MobileOptimized>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your HR?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <Button size="lg" className="mobile-button bg-brand-purple hover:bg-brand-purple/90">
              Schedule Consultation
            </Button>
          </div>
        </MobileOptimized>
      </section>

      {/* Testimonials - Lazy loaded */}
      <section className="py-8 sm:py-12 bg-white/50">
        <MobileOptimized fallback={<LoadingCard />}>
          <Suspense fallback={<LoadingCard />}>
            <TestimonialsSlider />
          </Suspense>
        </MobileOptimized>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
