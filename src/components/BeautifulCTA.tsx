import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Phone, User, ArrowRight, Sparkles, Star, CheckCircle } from 'lucide-react';

const BeautifulCTA = ({ className = '' }: { className?: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={className}>
      {!isExpanded ? (
        <Button 
          onClick={() => setIsExpanded(true)}
          className="bg-gradient-to-r from-white/20 to-white/30 hover:from-white/30 hover:to-white/40 text-white border border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300 group shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <Sparkles className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
          Schedule Consultation
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      ) : (
        <div className="bg-gradient-to-br from-white/15 to-white/25 backdrop-blur-md rounded-2xl p-6 animate-scale-in border border-white/20 shadow-2xl">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-500/20 mb-4 backdrop-blur-sm">
              <Star className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Premium Consultation</h3>
            <p className="text-white/90">Connect with our senior HR strategists</p>
          </div>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-center text-white/90">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
              <span className="text-sm">30-minute strategic assessment</span>
            </div>
            <div className="flex items-center text-white/90">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
              <span className="text-sm">Custom workforce solutions</span>
            </div>
            <div className="flex items-center text-white/90">
              <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
              <span className="text-sm">Industry expertise insights</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
              <Button
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Schedule
              </Button>
            </div>
            
            <Button
              onClick={() => setIsExpanded(false)}
              variant="ghost"
              className="w-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BeautifulCTA;