
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare,
  Star,
  Users,
  Target,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  const handleWhatsAppContact = () => {
    const phoneNumber = '916398807772'; // Include country code without +
    const message = encodeURIComponent("Hello TruTalenza! I'm interested in learning more about your workforce solutions. Let's discuss how you can help my organization achieve its goals.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-brand-purple via-brand-blue to-brand-darkPurple text-white py-24 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Let's Connect</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-white/50 to-white/80 mx-auto mb-6"></div>
            <p className="text-xl opacity-95 max-w-3xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '0.1s' }}>
              Ready to revolutionize your workforce management? Connect with our expert team instantly through WhatsApp for personalized solutions.
            </p>
          </div>
        </div>
        
        {/* Main Contact Section */}
        <div className="gradient-bg py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* WhatsApp CTA Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 text-center animate-scale-in">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-500 mb-6 shadow-lg animate-glow">
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Start Your Journey Today</h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Get instant responses and personalized workforce solutions. Our experts are ready to help you succeed.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="flex flex-col items-center p-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Instant Response</span>
                  </div>
                  <div className="flex flex-col items-center p-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Expert Guidance</span>
                  </div>
                  <div className="flex flex-col items-center p-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                      <Target className="w-6 h-6 text-purple-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Custom Solutions</span>
                  </div>
                </div>
                
                <Button 
                  onClick={handleWhatsAppContact}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <MessageSquare className="mr-3 h-5 w-5" />
                  Connect on WhatsApp Now
                </Button>
              </div>
              
              {/* Contact Information */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center animate-slide-in">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 mb-6 shadow-lg">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Phone</h3>
                  <p className="text-gray-600 font-medium mb-4">+91 6398807772</p>
                  <p className="text-sm text-gray-500">Available 24/7</p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center animate-slide-in" style={{ animationDelay: '0.1s' }}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 mb-6 shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Location</h3>
                  <p className="text-gray-600 font-medium mb-4">Yamuna Expy, Sector 17A, Uttar Pradesh 203201</p>
                  <p className="text-sm text-gray-500">Serving globally</p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center animate-slide-in" style={{ animationDelay: '0.2s' }}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 mb-6 shadow-lg">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Business Hours</h3>
                  <p className="text-gray-600 font-medium mb-2">Mon - Fri: 9AM - 6PM</p>
                  <p className="text-sm text-gray-500">Weekend support available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Success Stories */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-brand-darkPurple mb-12">
              Why Choose TruTalenza?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-2xl shadow-lg animate-slide-in">
                <div className="flex items-center mb-4">
                  <Star className="w-6 h-6 text-yellow-500 mr-2" />
                  <Star className="w-6 h-6 text-yellow-500 mr-2" />
                  <Star className="w-6 h-6 text-yellow-500 mr-2" />
                  <Star className="w-6 h-6 text-yellow-500 mr-2" />
                  <Star className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Lightning Fast Response</h3>
                <p className="text-gray-600">
                  Get instant responses to your queries and personalized solutions within hours, not days.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg animate-slide-in" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center mb-4">
                  <Star className="w-6 h-6 text-yellow-500 mr-2" />
                  <Star className="w-6 h-6 text-yellow-500 mr-2" />
                  <Star className="w-6 h-6 text-yellow-500 mr-2" />
                  <Star className="w-6 h-6 text-yellow-500 mr-2" />
                  <Star className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Expert Guidance</h3>
                <p className="text-gray-600">
                  Work directly with senior HR strategists who understand your industry's unique challenges.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-lg animate-slide-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center mb-4">
                  <Star className="w-6 h-6 text-yellow-500 mr-2" />
                  <Star className="w-6 h-6 text-yellow-500 mr-2" />
                  <Star className="w-6 h-6 text-yellow-500 mr-2" />
                  <Star className="w-6 h-6 text-yellow-500 mr-2" />
                  <Star className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Proven Results</h3>
                <p className="text-gray-600">
                  Join hundreds of satisfied clients who've transformed their workforce with our solutions.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-2xl shadow-lg animate-slide-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center mb-4">
                  <Star className="w-6 h-6 text-yellow-500 mr-2" />
                  <Star className="w-6 h-6 text-yellow-500 mr-2" />
                  <Star className="w-6 h-6 text-yellow-500 mr-2" />
                  <Star className="w-6 h-6 text-yellow-500 mr-2" />
                  <Star className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Custom Solutions</h3>
                <p className="text-gray-600">
                  Every solution is tailored specifically to your organization's goals and requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
