
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "2025 HR Compliance Updates Every Business Should Know",
    excerpt: "Stay ahead of regulatory changes with our comprehensive guide to the latest compliance requirements affecting businesses in 2025.",
    author: "Sarah Johnson",
    date: "April 10, 2025",
    readTime: "5 min read",
    category: "Compliance",
    image: "/lovable-uploads/5f0df653-072c-4026-bb24-2fdf6d2dacd8.png"
  },
  {
    id: 2,
    title: "Effective Strategies for Remote Workforce Management",
    excerpt: "Discover proven techniques for managing remote teams effectively while maintaining productivity and company culture.",
    author: "Michael Chen",
    date: "April 5, 2025",
    readTime: "7 min read",
    category: "Workforce Management",
    image: "/lovable-uploads/5f0df653-072c-4026-bb24-2fdf6d2dacd8.png"
  },
  {
    id: 3,
    title: "Building an Inclusive Recruitment Process",
    excerpt: "Learn how to create a recruitment strategy that embraces diversity and attracts top talent from all backgrounds.",
    author: "Priya Sharma",
    date: "March 28, 2025",
    readTime: "6 min read",
    category: "Recruitment",
    image: "/lovable-uploads/5f0df653-072c-4026-bb24-2fdf6d2dacd8.png"
  },
  {
    id: 4,
    title: "The Future of Employee Benefits in 2025 and Beyond",
    excerpt: "Explore emerging trends in employee benefits packages and how companies are adapting to meet changing workforce expectations.",
    author: "David Wilson",
    date: "March 20, 2025",
    readTime: "4 min read",
    category: "HR Strategy",
    image: "/lovable-uploads/5f0df653-072c-4026-bb24-2fdf6d2dacd8.png"
  },
  {
    id: 5,
    title: "Essential Skills for HR Professionals in the AI Era",
    excerpt: "Discover the key competencies HR professionals need to develop as artificial intelligence transforms the workplace.",
    author: "Lisa Rodriguez",
    date: "March 15, 2025",
    readTime: "8 min read",
    category: "Career Development",
    image: "/lovable-uploads/5f0df653-072c-4026-bb24-2fdf6d2dacd8.png"
  }
];

const Blog = () => {
  const [filter, setFilter] = useState<string>('all');
  const featuredRef = useRef<HTMLDivElement>(null);
  
  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (featuredRef.current) {
      observer.observe(featuredRef.current);
    }
    
    const blogItems = document.querySelectorAll('.blog-item');
    blogItems.forEach((item) => {
      observer.observe(item as Element);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  const filteredPosts = filter === 'all' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category.toLowerCase() === filter.toLowerCase());
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero section */}
      <section className="bg-brand-purple text-white pt-28 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Insights, trends, and expert advice on talent acquisition, workforce management, and HR consulting.
          </p>
        </div>
      </section>
      
      {/* Featured article */}
      <section className="py-12" ref={featuredRef}>
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-64 md:h-auto">
                <img 
                  src={BLOG_POSTS[0].image} 
                  alt="Featured article" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="inline-block bg-brand-purple/10 text-brand-purple px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {BLOG_POSTS[0].category}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                    {BLOG_POSTS[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {BLOG_POSTS[0].excerpt}
                  </p>
                </div>
                <div>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User size={16} className="mr-1" />
                    <span className="mr-4">{BLOG_POSTS[0].author}</span>
                    <Calendar size={16} className="mr-1" />
                    <span className="mr-4">{BLOG_POSTS[0].date}</span>
                    <Clock size={16} className="mr-1" />
                    <span>{BLOG_POSTS[0].readTime}</span>
                  </div>
                  <Button className="bg-brand-purple hover:bg-brand-lightPurple inline-flex items-center">
                    Read Full Article
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Category filters */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Button 
              variant={filter === 'all' ? 'default' : 'outline'} 
              onClick={() => setFilter('all')}
              className="rounded-full"
            >
              All Posts
            </Button>
            <Button 
              variant={filter === 'compliance' ? 'default' : 'outline'} 
              onClick={() => setFilter('compliance')}
              className="rounded-full"
            >
              Compliance
            </Button>
            <Button 
              variant={filter === 'recruitment' ? 'default' : 'outline'} 
              onClick={() => setFilter('recruitment')}
              className="rounded-full"
            >
              Recruitment
            </Button>
            <Button 
              variant={filter === 'workforce management' ? 'default' : 'outline'} 
              onClick={() => setFilter('workforce management')}
              className="rounded-full"
            >
              Workforce Management
            </Button>
            <Button 
              variant={filter === 'hr strategy' ? 'default' : 'outline'} 
              onClick={() => setFilter('hr strategy')}
              className="rounded-full"
            >
              HR Strategy
            </Button>
          </div>
        </div>
      </section>
      
      {/* Blog posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <div 
                key={post.id} 
                className="blog-item opacity-0 translate-y-10 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="inline-block bg-brand-purple/10 text-brand-purple px-3 py-1 rounded-full text-sm font-medium mb-3 self-start">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <div className="text-sm text-gray-500">
                      <span className="mr-4">{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link to={`/blog/${post.id}`} className="text-brand-purple hover:text-brand-lightPurple inline-flex items-center">
                      Read more
                      <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter sign-up */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-brand-purple mb-4">Stay Updated with Industry Insights</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest trends, insights, and best practices in HR and talent management.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
              <Button className="bg-brand-purple hover:bg-brand-lightPurple">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
