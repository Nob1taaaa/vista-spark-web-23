
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BookConsultation from '@/components/BookConsultation';

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
      style={{ background: isPurple ? '#382c74' : '#2c3e74' }}
    >
      <div className="py-16 px-6 flex-grow flex items-center justify-center">
        <div className="max-w-xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="animate-fade-in text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                {title}
              </h1>
              <p className="text-base md:text-lg opacity-90 mb-8 text-white">
                {description}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-white text-[#382c74] hover:bg-gray-100 button-hover">
                    <span>Get in Touch</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <BookConsultation className="inline-block" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Functionality section moved below */}
      <div className="w-full bg-white/10 backdrop-blur-sm py-10 px-6">
        <div className="max-w-xl mx-auto">
          {isPurple ? (
            <div className="rounded-xl overflow-hidden">
              <img 
                src="/lovable-uploads/0b1d6e0f-09aa-4a04-aa95-baab9945de9e.png" 
                alt="TruTalenza Services" 
                className="w-full h-auto rounded shadow-lg"
              />
            </div>
          ) : (
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-4 text-center">Our HR Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/20 p-4 rounded-lg transform transition-all duration-300 hover:translate-y-[-5px]">
                  <h3 className="font-medium text-white text-lg">Payroll Processing</h3>
                  <p className="text-sm text-white/90">Streamlined and accurate payroll management</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg transform transition-all duration-300 hover:translate-y-[-5px]">
                  <h3 className="font-medium text-white text-lg">Compliance Management</h3>
                  <p className="text-sm text-white/90">Stay updated with all regulatory requirements</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg transform transition-all duration-300 hover:translate-y-[-5px]">
                  <h3 className="font-medium text-white text-lg">Employee Engagement</h3>
                  <p className="text-sm text-white/90">Boost workplace morale and productivity</p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg transform transition-all duration-300 hover:translate-y-[-5px]">
                  <h3 className="font-medium text-white text-lg">Strategic HR Planning</h3>
                  <p className="text-sm text-white/90">Align HR initiatives with business goals</p>
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
