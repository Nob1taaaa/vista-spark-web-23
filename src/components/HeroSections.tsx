
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Target, Trophy, Building, Hospital, Banknote, Store, Check, Zap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WhatsAppCTA from '@/components/WhatsAppCTA';
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
      className="min-h-[100vh] w-full flex flex-col pt-16 sm:pt-20 relative overflow-hidden"
      style={{ 
        background: isPurple ? 
          'linear-gradient(135deg, #7c3aed 0%, #6366f1 50%, #3b82f6 100%)' : 
          'linear-gradient(135deg, #7c3aed 0%, #6366f1 50%, #3b82f6 100%)'
      }}
    >
      <div className="mobile-section flex-grow flex items-center justify-center">
        <div className="w-full max-w-xl mx-auto mobile-container">
          <div className="flex flex-col items-center">
            <div className="animate-fade-in text-center mb-8 sm:mb-12 w-full">
              <h1 className="font-bold mb-3 sm:mb-4 text-white drop-shadow-md animate-pulse-slow">
                {title}
              </h1>
              <p className="mobile-text opacity-90 mb-6 sm:mb-8 text-white animate-slide-in leading-relaxed px-2 sm:px-0">
                {description}
              </p>
              <div className="mobile-flex justify-center animate-scale-in">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button className="mobile-button bg-white/95 text-[#1a1b3a] hover:bg-white hover:text-[#2c2947] shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-3px] w-full sm:w-auto font-semibold">
                    <span>Begin Strategic Partnership</span>
                    <ArrowRight className="ml-2 h-4 w-4 animate-bounce-slow" />
                  </Button>
                </Link>
                <div className="w-full sm:w-auto">
                  <WhatsAppCTA className="inline-block transform transition-transform hover:scale-105 w-full sm:w-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Services section below - Mobile Optimized */}
      <div className="w-full bg-white/10 backdrop-blur-sm py-6 sm:py-10 mobile-container">
        <div className="w-full max-w-xl mx-auto">
          <div className="bg-white/5 rounded-xl p-4 sm:p-6 backdrop-blur-sm shadow-lg transform transition-all duration-300 hover:bg-white/10">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center animate-shine">
              {isPurple ? "Strategic Workforce Solutions" : "Comprehensive HR Excellence"}
            </h2>
            <div className="mobile-grid-2">
              {isPurple ? (
                // TruTalenza Services
                [
                  {
                    title: 'Executive Search',
                    description: 'Strategic C-suite & leadership recruitment',
                    icon: <Brain className="h-4 w-4 sm:h-5 sm:w-5" />
                  },
                  {
                    title: 'Talent Acquisition',
                    description: 'Premium talent identification & placement',
                    icon: <Trophy className="h-4 w-4 sm:h-5 sm:w-5" />
                  },
                  {
                    title: 'Workforce Solutions',
                    description: 'Strategic workforce optimization & management',
                    icon: <Building className="h-4 w-4 sm:h-5 sm:w-5" />
                  },
                  {
                    title: 'Industry Specialization',
                    description: 'Sector-specific recruitment excellence',
                    icon: <Store className="h-4 w-4 sm:h-5 sm:w-5" />
                  }
                ].map((service, index) => (
                  <HoverCard key={index}>
                    <HoverCardTrigger asChild>
                      <Card className="bg-white/20 p-3 sm:p-4 rounded-lg transform transition-all duration-300 hover:translate-y-[-5px] hover:bg-white/30 hover:shadow-lg cursor-pointer group overflow-hidden h-full touch-target">
                        <CardContent className="p-0">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                          <div className="flex flex-col sm:flex-row items-start sm:items-center mb-2 gap-2 sm:gap-0">
                            <div className="mr-0 sm:mr-2 text-white/90 group-hover:text-white">
                              {service.icon}
                            </div>
                            <h3 className="font-medium text-white text-sm sm:text-lg group-hover:text-white/95">{service.title}</h3>
                          </div>
                          <p className="text-xs sm:text-sm text-white/90 group-hover:text-white/95 leading-relaxed">
                            {service.description}
                          </p>
                        </CardContent>
                      </Card>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 bg-white/90 backdrop-blur-md border-none shadow-xl animate-scale-in">
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
                // TruVisory Services
                [
                  {
                    title: 'Strategic Payroll', 
                    description: 'Advanced payroll & compensation management',
                    icon: <Banknote className="h-4 w-4 sm:h-5 sm:w-5" />
                  },
                  {
                    title: 'Compliance Excellence', 
                    description: 'Comprehensive regulatory compliance solutions',
                    icon: <Check className="h-4 w-4 sm:h-5 sm:w-5" />
                  },
                  {
                    title: 'Employee Excellence', 
                    description: 'Advanced engagement & productivity solutions',
                    icon: <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                  },
                  {
                    title: 'Strategic HR Planning', 
                    description: 'Organizational alignment & growth strategies',
                    icon: <Target className="h-4 w-4 sm:h-5 sm:w-5" />
                  }
                ].map((service, index) => (
                  <HoverCard key={index}>
                    <HoverCardTrigger asChild>
                      <Card className="bg-white/20 p-3 sm:p-4 rounded-lg transform transition-all duration-300 hover:translate-y-[-5px] hover:bg-white/30 hover:shadow-lg cursor-pointer group overflow-hidden h-full touch-target">
                        <CardContent className="p-0">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                          <div className="flex flex-col sm:flex-row items-start sm:items-center mb-2 gap-2 sm:gap-0">
                            <div className="mr-0 sm:mr-2 text-white/90 group-hover:text-white">
                              {service.icon}
                            </div>
                            <h3 className="font-medium text-white text-sm sm:text-lg group-hover:text-white/95">{service.title}</h3>
                          </div>
                          <p className="text-xs sm:text-sm text-white/90 group-hover:text-white/95 leading-relaxed">
                            {service.description}
                          </p>
                        </CardContent>
                      </Card>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 bg-white/90 backdrop-blur-md border-none shadow-xl animate-scale-in">
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
