
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Target, Trophy, Building, Hospital, Banknote, Store, Check, Zap, Heart, Shield, BarChart, Users, CalendarDays } from 'lucide-react';
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
      className="min-h-screen flex flex-col"
      style={{ 
        background: isPurple ? '#382c74' : '#2c3e74',
        backgroundImage: isPurple ? 
          'linear-gradient(135deg, #382c74 0%, #4a3c8a 100%)' : 
          'linear-gradient(135deg, #2c3e74 0%, #3c508a 100%)'
      }}
    >
      <div className="py-16 px-6 flex-grow flex items-center justify-center">
        <div className="max-w-xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="animate-fade-in text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-md animate-pulse-slow">
                {title}
              </h1>
              <p className="text-base md:text-lg opacity-90 mb-8 text-white animate-slide-in">
                {description}
              </p>
              <div className="flex flex-wrap gap-4 justify-center animate-scale-in">
                <Link to="/contact">
                  <Button className="bg-white text-[#382c74] hover:bg-gray-100 button-hover shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-3px]">
                    <span>Get in Touch</span>
                    <ArrowRight className="ml-2 h-4 w-4 animate-bounce-slow" />
                  </Button>
                </Link>
                <BookConsultation className="inline-block transform transition-transform hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* HR Services section with enhanced styling */}
      <div className="w-full bg-white/10 backdrop-blur-sm py-10 px-6">
        <div className="max-w-xl mx-auto">
          {isPurple ? (
            <div className="rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:rotate-1 cursor-pointer">
              <img 
                src="/lovable-uploads/0b1d6e0f-09aa-4a04-aa95-baab9945de9e.png" 
                alt="TruTalenza Services" 
                className="w-full h-auto rounded shadow-lg"
              />
            </div>
          ) : (
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-lg shadow-lg transform transition-all duration-300 hover:bg-white/15 overflow-hidden relative">
              {/* Decorative background element */}
              <div className="absolute -right-24 -bottom-24 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute -left-24 -top-24 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                  <span className="relative inline-block animate-shine">
                    Our HR Services
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white/0 via-white/70 to-white/0"></span>
                  </span>
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    {
                      title: 'Payroll Processing',
                      desc: 'Streamlined and accurate payroll management',
                      fullDesc: 'Our payroll processing services ensure timely and accurate payment processing while maintaining compliance with tax regulations.',
                      icon: <BarChart className="h-5 w-5 text-[#9b87f5]" />
                    },
                    {
                      title: 'Compliance Management',
                      desc: 'Stay updated with all regulatory requirements',
                      fullDesc: 'We help you navigate complex regulatory landscapes to ensure your business remains fully compliant with all applicable laws.',
                      icon: <Shield className="h-5 w-5 text-[#9b87f5]" />
                    },
                    {
                      title: 'Employee Engagement',
                      desc: 'Boost workplace morale and productivity',
                      fullDesc: 'Create a positive work environment that fosters employee satisfaction, productivity, and long-term retention.',
                      icon: <Users className="h-5 w-5 text-[#9b87f5]" />
                    },
                    {
                      title: 'Strategic HR Planning',
                      desc: 'Align HR initiatives with business goals',
                      fullDesc: 'Develop HR strategies that directly support and enhance your overall business objectives and growth plans.',
                      icon: <CalendarDays className="h-5 w-5 text-[#9b87f5]" />
                    }
                  ].map((service, index) => (
                    <HoverCard key={index} openDelay={100} closeDelay={200}>
                      <HoverCardTrigger asChild>
                        <Card 
                          className="group bg-gradient-to-br from-white/15 to-white/5 border-white/10 hover:border-white/30 p-4 rounded-lg overflow-hidden relative transition-all duration-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:translate-y-[-5px] cursor-pointer"
                        >
                          <CardContent className="p-0">
                            {/* Animated gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                            
                            <div className="flex items-center space-x-3 mb-2">
                              <div className="bg-white/10 rounded-full p-1.5 backdrop-blur-sm">
                                {service.icon}
                              </div>
                              <h3 className="font-semibold text-white text-lg group-hover:text-white/95">
                                {service.title}
                              </h3>
                            </div>
                            <p className="text-sm text-white/75 group-hover:text-white/90 transition-colors duration-300">
                              {service.desc}
                            </p>
                            
                            {/* Subtle indicator */}
                            <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="text-xs text-white/50 flex items-center">
                                <span>Learn more</span>
                                <ArrowRight className="ml-1 h-3 w-3" />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </HoverCardTrigger>
                      <HoverCardContent 
                        className="w-80 bg-gradient-to-br from-[#4a3c8a] to-[#382c74] text-white border-white/10 backdrop-blur-lg shadow-xl animate-scale-in p-5"
                      >
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="bg-white/15 rounded-full p-2">
                              {service.icon}
                            </div>
                            <h4 className="text-lg font-semibold">{service.title}</h4>
                          </div>
                          <p className="text-sm text-white/90 leading-relaxed">
                            {service.fullDesc}
                          </p>
                          <div className="pt-2 border-t border-white/10">
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-white/75">Trusted by 500+ businesses</span>
                              <Button variant="ghost" size="sm" className="text-xs text-white/90 hover:text-white hover:bg-white/10">
                                Learn more
                              </Button>
                            </div>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
                
                {/* Trust indicators */}
                <div className="mt-8 pt-4 border-t border-white/10 text-center">
                  <p className="text-xs text-white/70">
                    <span className="inline-block animate-pulse-slow">★★★★★</span> 
                    <span className="ml-2">Trusted by 500+ companies worldwide</span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
