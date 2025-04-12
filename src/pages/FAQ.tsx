
import { useState } from 'react';
import { Check, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const FAQ = () => {
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "What services does TruTalenza provide?",
      answer: "TruTalenza provides a comprehensive range of HR services including talent acquisition, HR consulting, workforce management, and training & development. We work with businesses of all sizes to optimize their human resources operations.",
      category: "services"
    },
    {
      id: 2,
      question: "How does your recruitment process work?",
      answer: "Our recruitment process follows a structured approach: understanding client needs, candidate sourcing, comprehensive screening, presenting qualified candidates, and facilitating the hiring process. We tailor this process to each client's specific requirements and industry.",
      category: "recruitment"
    },
    {
      id: 3,
      question: "What industries do you specialize in?",
      answer: "We serve a wide range of industries including IT & ITES, BFSI (Banking, Finance, and Insurance), Healthcare & Pharmaceuticals, Retail & E-commerce, Manufacturing & Engineering, and Education & EdTech. Our consultants have specialized knowledge in these sectors.",
      category: "services"
    },
    {
      id: 4,
      question: "What makes TruTalenza different from other HR consulting firms?",
      answer: "TruTalenza stands out due to our expertise and experience, compliance-driven approach, and customized solutions. We build long-term partnerships with our clients and focus on delivering measurable results that align with their business objectives.",
      category: "company"
    },
    {
      id: 5,
      question: "How much does it cost to use your services?",
      answer: "Our pricing varies based on the scope of services required, company size, and specific needs. We offer flexible engagement models including project-based, retainer, and success-based fee structures. Contact us for a customized quote.",
      category: "pricing"
    },
    {
      id: 6,
      question: "How long does it typically take to fill a position?",
      answer: "The time to fill a position depends on factors like job complexity, seniority level, and market conditions. On average, our placements take 2-4 weeks for standard positions and 4-8 weeks for specialized or executive roles.",
      category: "recruitment"
    },
    {
      id: 7,
      question: "What HR compliance services do you offer?",
      answer: "Our compliance services include HR policy development, regulatory updates, compliance audits, documentation review, and training programs. We help ensure your business adheres to all relevant labor laws and regulations.",
      category: "services"
    },
    {
      id: 8,
      question: "Can you help with international hiring?",
      answer: "Yes, we provide international hiring solutions through our global network of partners. We can assist with cross-border recruitment, compliance with international labor laws, and developing global workforce strategies.",
      category: "recruitment"
    },
    {
      id: 9,
      question: "Do you offer HR training for our internal team?",
      answer: "Yes, we provide customized HR training programs for internal HR teams. Topics include recruitment best practices, compliance, performance management, leadership development, and more. All training is tailored to your organization's needs.",
      category: "services"
    },
    {
      id: 10,
      question: "What is your client retention rate?",
      answer: "We're proud to maintain a client retention rate of over 90%. This demonstrates our commitment to building lasting partnerships and consistently delivering value to our clients through our HR services.",
      category: "company"
    },
  ];
  
  const toggleQuestion = (id: number) => {
    if (openQuestions.includes(id)) {
      setOpenQuestions(openQuestions.filter(qId => qId !== id));
    } else {
      setOpenQuestions([...openQuestions, id]);
    }
  };
  
  const filteredFaqs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  const categories = ['all', 'services', 'recruitment', 'company', 'pricing'];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-brand-purple text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-lg opacity-90 mb-8 text-center max-w-3xl mx-auto">
            Find answers to common questions about our services, recruitment process, and HR solutions.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-white/70" />
              <input
                type="text"
                placeholder="Search for questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-full py-3 pl-12 pr-4 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <Button 
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'} 
                onClick={() => setSelectedCategory(category)}
                className="capitalize rounded-full"
              >
                {category === 'all' ? 'All Categories' : category}
              </Button>
            ))}
          </div>
          
          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => (
                <div 
                  key={faq.id} 
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <button 
                    onClick={() => toggleQuestion(faq.id)}
                    className="flex justify-between items-center w-full text-left p-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 pr-8">
                      {faq.question}
                    </h3>
                    <div className="text-brand-purple flex-shrink-0">
                      {openQuestions.includes(faq.id) ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </div>
                  </button>
                  
                  {openQuestions.includes(faq.id) && (
                    <div className="px-6 pb-6 text-gray-600 animate-fade-in">
                      <div className="pt-2 border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-2">No results found for "{searchQuery}"</p>
                <p className="text-sm text-gray-400">Try using different keywords or browsing by category</p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-brand-purple mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-8">
              Our team is ready to assist you with any specific queries about our services or how we can help your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-brand-purple hover:bg-brand-lightPurple px-6">
                Contact Us
              </Button>
              <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple/5">
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FAQ;
