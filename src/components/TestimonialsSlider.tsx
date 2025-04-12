
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  position: string;
  content: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jennifer Lee",
    company: "TechFusion Inc.",
    position: "HR Director",
    content: "TruTalenza has been instrumental in helping us build our engineering team. Their understanding of the tech industry and talent market is exceptional. We've seen a 40% reduction in time-to-hire since partnering with them.",
    rating: 5,
    image: "/lovable-uploads/5f0df653-072c-4026-bb24-2fdf6d2dacd8.png"
  },
  {
    id: 2,
    name: "Rajiv Mehta",
    company: "Global Finance Partners",
    position: "COO",
    content: "Working with TruTalenza has transformed our recruitment process. Their team took the time to understand our company culture and has consistently delivered candidates who are not just qualified but also align with our values.",
    rating: 5,
    image: "/lovable-uploads/5f0df653-072c-4026-bb24-2fdf6d2dacd8.png"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    company: "MediCare Solutions",
    position: "Talent Acquisition Manager",
    content: "The compliance expertise that TruTalenza brings to the table has been invaluable for our healthcare organization. They've helped us navigate complex regulatory requirements while finding top talent in a competitive market.",
    rating: 4,
    image: "/lovable-uploads/5f0df653-072c-4026-bb24-2fdf6d2dacd8.png"
  },
  {
    id: 4,
    name: "Michael Rodriguez",
    company: "Retail Innovations",
    position: "CEO",
    content: "As we scaled our business from 50 to 200 employees, TruTalenza provided the HR infrastructure and talent pipeline we needed. Their workforce management solutions are comprehensive and tailored to our industry needs.",
    rating: 5,
    image: "/lovable-uploads/5f0df653-072c-4026-bb24-2fdf6d2dacd8.png"
  },
];

const TestimonialsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative">
        {/* Testimonial content */}
        <div className="min-h-[400px] p-8 md:p-12 flex flex-col justify-between">
          <div>
            {/* Ratings */}
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  size={20} 
                  className={`${i < testimonials[activeIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} mr-1`} 
                />
              ))}
            </div>
            
            {/* Quote */}
            <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              <p className="text-lg text-gray-700 italic mb-6">
                "{testimonials[activeIndex].content}"
              </p>
            </div>
          </div>
          
          {/* Author info */}
          <div className="flex items-center">
            {testimonials[activeIndex].image && (
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-brand-purple">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div>
              <h4 className="font-bold text-gray-900">{testimonials[activeIndex].name}</h4>
              <p className="text-sm text-gray-600">
                {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
              </p>
            </div>
          </div>
        </div>
        
        {/* Navigation buttons */}
        <div className="absolute right-8 bottom-8 flex space-x-2">
          <button 
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full bg-brand-purple flex items-center justify-center hover:bg-brand-lightPurple transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="text-white" />
          </button>
        </div>
      </div>
      
      {/* Indicators */}
      <div className="bg-gray-50 px-8 py-4 flex justify-center">
        {testimonials.map((_, index) => (
          <button 
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full mx-1 transition-all ${
              activeIndex === index ? 'bg-brand-purple w-6' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider;
