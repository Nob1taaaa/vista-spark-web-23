import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Target, Trophy, Building, Hospital, Banknote, Store, Check, Zap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BookConsultation from '@/components/BookConsultation';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Card, CardContent } from "@/components/ui/card";

interface HeroSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
}

const HeroSection = ({ 
  id, 
  title, 
  subtitle, 
  description,
}: HeroSectionProps) => {
  const isPurple = id === 'trutalenza';
  
  return (
    <div 
      className="min-h-[100vh] w-full flex flex-col pt-20 relative overflow-hidden"
      style={{ 
        background: isPurple ? '#382c74' : '#2c3e74',
        backgroundImage: isPurple ? 
          'linear-gradient(135deg, #382c74 0%, #4a3c8a 100%)' : 
          'linear-gradient(135deg, #2c3e74 0%, #3c508a 100%)'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full animate-float"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-white/3 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-white/4 rounded-full animate-bounce-slow"></div>
      </div>

      <div className="py-16 px-4 md:px-6 flex-grow flex items-center justify-center relative z-10">
        <div className="w-full max-w-xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="animate-fade-in text-center mb-12 w-full">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-md animate-pulse-slow transform transition-all duration-700 hover:scale-105">
                {title}
              </h1>
              <p className="text-base md:text-lg opacity-90 mb-8 text-white animate-slide-in transform transition-all duration-500 hover:opacity-100">
                {description}
              </p>
              <div className="flex flex-wrap gap-4 justify-center animate-scale-in">
                <Link to="/contact">
                  <Button className="bg-white text-[#382c74] hover:bg-gray-100 button-hover shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-3px] transform">
                    <span>Begin Partnership</span>
                    <ArrowRight className="ml-2 h-4 w-4 animate-bounce-slow" />
                  </Button>
                </Link>
                <BookConsultation className="inline-block transform transition-transform hover:scale-105 hover:rotate-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced services section */}
      <div className="w-full bg-white/10 backdrop-blur-sm py-10 px-4 md:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        <div className="w-full max-w-xl mx-auto relative z-10">
          <div className="bg-white/5 rounded-xl p-4 md:p-6 backdrop-blur-sm shadow-lg transform transition-all duration-500 hover:bg-white/10 hover:scale-[1.02] hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6 text-center animate-shine transform transition-all duration-300 hover:scale-105">
              {isPurple ? "Strategic Workforce Solutions" : "Comprehensive HR Excellence"}
            </h2>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {isPurple ? (
                // TruTalenza Services with enhanced animations
                [
                  {
                    title: 'Executive Search',
                    description: 'Strategic C-suite & leadership recruitment',
                    icon: <Brain className="h-5 w-5" />
                  },
                  {
                    title: 'Talent Acquisition',
                    description: 'Premium talent identification & placement',
                    icon: <Trophy className="h-5 w-5" />
                  },
                  {
                    title: 'Workforce Solutions',
                    description: 'Strategic workforce optimization & management',
                    icon: <Building className="h-5 w-5" />
                  },
                  {
                    title: 'Industry Specialization',
                    description: 'Sector-specific recruitment excellence',
                    icon: <Store className="h-5 w-5" />
                  }
                ].map((service, index) => (
                  <HoverCard key={index}>
                    <HoverCardTrigger asChild>
                      <Card 
                        className="bg-white/20 p-3 md:p-4 rounded-lg transform transition-all duration-500 hover:translate-y-[-8px] hover:bg-white/30 hover:shadow-xl cursor-pointer group overflow-hidden h-full hover:rotate-1"
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        <CardContent className="p-0">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                          <div className="flex items-center mb-2">
                            <div className="mr-2 text-white/90 group-hover:text-white transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                              {service.icon}
                            </div>
                            <h3 className="font-medium text-white text-lg group-hover:text-white/95 transform group-hover:translate-x-1 transition-all duration-300">{service.title}</h3>
                          </div>
                          <p className="text-sm text-white/90 group-hover:text-white/95 transform group-hover:translate-x-2 transition-all duration-300">
                            {service.description}
                          </p>
                        </CardContent>
                      </Card>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 bg-white/95 backdrop-blur-md border-none shadow-2xl animate-scale-in transform transition-all duration-300">
                      <div className="flex justify-between space-x-4">
                        <div>
                          <h4 className="text-sm font-semibold">{service.title}</h4>
                          <p className="text-sm">
                            {index === 0 && "Specialized executive search services for C-suite and senior leadership positions requiring strategic vision and transformational capabilities."}
                            {index === 1 && "Premium talent acquisition strategies designed to identify and attract exceptional professionals aligned with organizational excellence."}
                            {index === 2 && "Comprehensive workforce optimization solutions designed for maximum operational efficiency and strategic growth acceleration."}
                            {index === 3 && "Deep industry expertise in healthcare, financial services, technology, and specialized sectors requiring domain knowledge."}
                          </p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))
              ) : (
                // TruVisory Services with enhanced animations
                [
                  {
                    title: 'Strategic Payroll', 
                    description: 'Advanced payroll & compensation management',
                    icon: <Banknote className="h-5 w-5" />
                  },
                  {
                    title: 'Compliance Excellence', 
                    description: 'Comprehensive regulatory compliance solutions',
                    icon: <Check className="h-5 w-5" />
                  },
                  {
                    title: 'Employee Excellence', 
                    description: 'Advanced engagement & productivity solutions',
                    icon: <Heart className="h-5 w-5" />
                  },
                  {
                    title: 'Strategic HR Planning', 
                    description: 'Organizational alignment & growth strategies',
                    icon: <Target className="h-5 w-5" />
                  }
                ].map((service, index) => (
                  <HoverCard key={index}>
                    <HoverCardTrigger asChild>
                      <Card 
                        className="bg-white/20 p-3 md:p-4 rounded-lg transform transition-all duration-500 hover:translate-y-[-8px] hover:bg-white/30 hover:shadow-xl cursor-pointer group overflow-hidden h-full hover:rotate-1"
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        <CardContent className="p-0">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                          <div className="flex items-center mb-2">
                            <div className="mr-2 text-white/90 group-hover:text-white transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                              {service.icon}
                            </div>
                            <h3 className="font-medium text-white text-lg group-hover:text-white/95 transform group-hover:translate-x-1 transition-all duration-300">{service.title}</h3>
                          </div>
                          <p className="text-sm text-white/90 group-hover:text-white/95 transform group-hover:translate-x-2 transition-all duration-300">
                            {service.description}
                          </p>
                        </CardContent>
                      </Card>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 bg-white/95 backdrop-blur-md border-none shadow-2xl animate-scale-in transform transition-all duration-300">
                      <div className="flex justify-between space-x-4">
                        <div>
                          <h4 className="text-sm font-semibold">{service.title}</h4>
                          <p className="text-sm">
                            {index === 0 && "Advanced payroll processing and compensation management services ensuring precision, compliance, and strategic financial optimization."}
                            {index === 1 && "Comprehensive regulatory compliance frameworks ensuring your organization exceeds all statutory requirements and industry standards."}
                            {index === 2 && "Strategic employee engagement initiatives designed to maximize satisfaction, productivity, and long-term organizational commitment."}
                            {index === 3 && "Strategic HR planning that seamlessly aligns workforce initiatives with core business objectives and growth strategies."}
                          </p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
