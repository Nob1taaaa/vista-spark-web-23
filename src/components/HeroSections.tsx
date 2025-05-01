
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
      
      {/* Functionality section moved below */}
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
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm shadow-lg transform transition-all duration-300 hover:bg-white/10">
              <h2 className="text-2xl font-bold text-white mb-4 text-center animate-shine">Our HR Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Payroll Processing', 'Compliance Management', 'Employee Engagement', 'Strategic HR Planning'].map((service, index) => (
                  <HoverCard key={index}>
                    <HoverCardTrigger asChild>
                      <Card className="bg-white/20 p-4 rounded-lg transform transition-all duration-300 hover:translate-y-[-5px] hover:bg-white/30 hover:shadow-lg cursor-pointer group overflow-hidden">
                        <CardContent className="p-0">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                          <h3 className="font-medium text-white text-lg group-hover:text-white/95">{service}</h3>
                          <p className="text-sm text-white/90 group-hover:text-white/95">
                            {index === 0 && "Streamlined and accurate payroll management"}
                            {index === 1 && "Stay updated with all regulatory requirements"}
                            {index === 2 && "Boost workplace morale and productivity"}
                            {index === 3 && "Align HR initiatives with business goals"}
                          </p>
                        </CardContent>
                      </Card>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 bg-white/90 backdrop-blur-md border-none shadow-xl animate-scale-in">
                      <div className="flex justify-between space-x-4">
                        <div>
                          <h4 className="text-sm font-semibold">{service}</h4>
                          <p className="text-sm">
                            {index === 0 && "Our payroll processing services ensure timely and accurate payment processing while maintaining compliance with tax regulations."}
                            {index === 1 && "We help you navigate complex regulatory landscapes to ensure your business remains fully compliant with all applicable laws."}
                            {index === 2 && "Create a positive work environment that fosters employee satisfaction, productivity, and long-term retention."}
                            {index === 3 && "Develop HR strategies that directly support and enhance your overall business objectives and growth plans."}
                          </p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
