
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BookConsultation from '@/components/BookConsultation';

interface HeroSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  isActive: boolean;
  onSectionChange: (id: string) => void;
}

const HeroSection = ({ 
  id, 
  title, 
  subtitle, 
  description, 
  isActive,
  onSectionChange
}: HeroSectionProps) => {
  return (
    <div 
      className={`min-h-screen flex flex-col transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none absolute inset-0'}`}
      style={{ background: id === 'trutalenza' ? '#382c74' : '#2c3e74' }}
    >
      <div className="pt-28 pb-16 flex-grow flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                {title}
              </h1>
              <p className="text-lg opacity-90 mb-8 max-w-2xl text-white">
                {description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="bg-white text-[#382c74] hover:bg-gray-100 button-hover">
                    <span>Get in Touch</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <BookConsultation className="inline-block" />
              </div>
              
              {/* Section switcher */}
              <div className="mt-12 flex space-x-4">
                <button 
                  className={`px-4 py-2 rounded-md transition-all ${id === 'trutalenza' && isActive ? 'bg-white text-[#382c74] font-medium' : 'bg-white/20 text-white hover:bg-white/30'}`}
                  onClick={() => onSectionChange('trutalenza')}
                >
                  TruTalenza
                </button>
                <button 
                  className={`px-4 py-2 rounded-md transition-all ${id === 'truvisory' && isActive ? 'bg-white text-[#2c3e74] font-medium' : 'bg-white/20 text-white hover:bg-white/30'}`}
                  onClick={() => onSectionChange('truvisory')}
                >
                  TruVisory
                </button>
              </div>
            </div>
            
            <div className="md:w-[600px] animate-fade-in">
              {id === 'trutalenza' ? (
                <div className="bg-white rounded-xl p-6 shadow-xl">
                  <img 
                    src="/lovable-uploads/0b1d6e0f-09aa-4a04-aa95-baab9945de9e.png" 
                    alt="TruTalenza Services" 
                    className="w-full h-auto rounded"
                  />
                </div>
              ) : (
                <div className="bg-white rounded-xl p-6 shadow-xl">
                  <h2 className="text-2xl font-bold text-[#2c3e74] mb-4">Our HR Services</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-[#2c3e74]">Payroll Processing</h3>
                      <p className="text-sm text-gray-600">Streamlined and accurate payroll management</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-[#2c3e74]">Compliance Management</h3>
                      <p className="text-sm text-gray-600">Stay updated with all regulatory requirements</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-[#2c3e74]">Employee Engagement</h3>
                      <p className="text-sm text-gray-600">Boost workplace morale and productivity</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-[#2c3e74]">Strategic HR Planning</h3>
                      <p className="text-sm text-gray-600">Align HR initiatives with business goals</p>
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
