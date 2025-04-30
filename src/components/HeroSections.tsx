
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
      className="min-h-screen flex flex-col md:flex-row md:w-1/2"
      style={{ background: isPurple ? '#382c74' : '#2c3e74' }}
    >
      <div className="py-20 px-6 flex-grow flex items-center justify-center">
        <div className="max-w-xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="animate-fade-in text-center">
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
            
            <div className="mt-8 w-full">
              {isPurple ? (
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <img 
                    src="/lovable-uploads/0b1d6e0f-09aa-4a04-aa95-baab9945de9e.png" 
                    alt="TruTalenza Services" 
                    className="w-full h-auto rounded"
                  />
                </div>
              ) : (
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <h2 className="text-xl font-bold text-white mb-3">Our HR Services</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <h3 className="font-medium text-white">Payroll Processing</h3>
                      <p className="text-xs text-white/80">Streamlined and accurate payroll management</p>
                    </div>
                    <div className="bg-white/20 p-3 rounded-lg">
                      <h3 className="font-medium text-white">Compliance Management</h3>
                      <p className="text-xs text-white/80">Stay updated with all regulatory requirements</p>
                    </div>
                    <div className="bg-white/20 p-3 rounded-lg">
                      <h3 className="font-medium text-white">Employee Engagement</h3>
                      <p className="text-xs text-white/80">Boost workplace morale and productivity</p>
                    </div>
                    <div className="bg-white/20 p-3 rounded-lg">
                      <h3 className="font-medium text-white">Strategic HR Planning</h3>
                      <p className="text-xs text-white/80">Align HR initiatives with business goals</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
