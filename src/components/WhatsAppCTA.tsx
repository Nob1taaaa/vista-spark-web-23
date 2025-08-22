import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Sparkles, Star, ArrowRight } from 'lucide-react';

const WhatsAppCTA = ({ className = '' }: { className?: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppContact = () => {
    const phoneNumber = '916398807772'; // Include country code without +
    const message = encodeURIComponent("Hello TruTalenza! I'm interested in your workforce solutions. Let's discuss how you can help my organization.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className={className}>
      {!isExpanded ? (
        <Button 
          onClick={() => setIsExpanded(true)}
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
        >
          <MessageCircle className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
          Get Started Now
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      ) : (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 animate-scale-in shadow-xl">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-500 mb-4 shadow-lg">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Let's Connect!</h3>
            <p className="text-gray-600">Ready to transform your workforce?</p>
          </div>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-center text-gray-700 bg-white/60 rounded-lg p-3">
              <Sparkles className="w-5 h-5 mr-3 text-green-500" />
              <span className="text-sm font-medium">Instant Response Guaranteed</span>
            </div>
            <div className="flex items-center justify-center text-gray-700 bg-white/60 rounded-lg p-3">
              <Phone className="w-5 h-5 mr-3 text-green-500" />
              <span className="text-sm font-medium">Free Consultation Available</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <Button
              onClick={handleWhatsAppContact}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Start WhatsApp Chat
            </Button>
            
            <Button
              onClick={() => setIsExpanded(false)}
              variant="ghost"
              className="w-full text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-all duration-300"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppCTA;