
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeroSections from '../components/HeroSections';
import TestimonialsSlider from '../components/TestimonialsSlider';
import Footer from '../components/Footer';
import LoginModal from '../components/LoginModal';
import { authService } from '@/lib/utils';

const Index = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    // Check if user has seen the login popup before and is not already authenticated
    const hasSeenLoginPopup = localStorage.getItem('hasSeenLoginPopup');
    const isAuthenticated = authService.isAuthenticated();
    
    if (!hasSeenLoginPopup && !isAuthenticated) {
      // Show modal after a short delay for better UX
      const timer = setTimeout(() => {
        setShowLoginModal(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleLoginSuccess = () => {
    localStorage.setItem('hasSeenLoginPopup', 'true');
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  // Mock testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "HR Director",
      company: "Tech Corp",
      content: "TruTalenza helped us find exceptional talent that perfectly matched our company culture.",
      avatar: "/placeholder.svg"
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      company: "InnovateLab",
      content: "The quality of candidates and speed of hiring through TruTalenza exceeded our expectations.",
      avatar: "/placeholder.svg"
    },
    {
      name: "Emily Rodriguez",
      role: "Talent Acquisition Manager",
      company: "Global Solutions",
      content: "Their personalized approach to recruitment made all the difference in our hiring success.",
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSections />
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose TruTalenza?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with personalized service to deliver exceptional recruitment results.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Precision Matching",
                description: "Our AI-powered platform ensures perfect candidate-company alignment."
              },
              {
                icon: "⚡",
                title: "Fast Results",
                description: "Reduce time-to-hire by 60% with our streamlined process."
              },
              {
                icon: "🤝",
                title: "Personal Touch",
                description: "Dedicated consultants provide white-glove service throughout."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-brand-purple text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Companies Served" },
              { number: "10,000+", label: "Candidates Placed" },
              { number: "95%", label: "Success Rate" },
              { number: "24hrs", label: "Average Response Time" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="text-4xl font-bold">{stat.number}</div>
                <div className="text-brand-lightPurple">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSlider testimonials={testimonials} />
      <Footer />
      
      <LoginModal 
        isOpen={showLoginModal}
        onClose={handleCloseModal}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
};

export default Index;
