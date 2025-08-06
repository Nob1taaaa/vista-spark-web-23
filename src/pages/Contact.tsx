
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Loader2,
  CheckCircle,
  MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { sendContactEmail } from '@/lib/utils/emailjsService';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    
    try {
      // Send email using EmailJS
      const success = await sendContactEmail({
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message
      });
      
      if (success) {
        setIsLoading(false);
        setIsSubmitted(true);
        
        toast({
          title: 'Message sent!',
          description: 'We will get back to you as soon as possible.',
        });
        
        // Reset form after 2 seconds
        setTimeout(() => {
          form.reset();
          setIsSubmitted(false);
        }, 2000);
      } else {
        throw new Error('Failed to send email via EmailJS');
      }

    } catch (error) {
      console.error('Failed to send email:', error);
      setIsLoading(false);
      
      toast({
        title: 'Error sending message',
        description: 'Please try again or contact us directly via email.',
        variant: 'destructive',
      });
    }
  };
  
  const handleWhatsAppContact = () => {
    // Format: https://wa.me/phoneNumber?text=urlencodedtext
    const phoneNumber = '916398807772'; // Include country code without +
    const message = encodeURIComponent("Hello TruTalenza, I'd like to discuss your services.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };
  
  const handleEmailContact = () => {
    window.location.href = 'mailto:truvisory@gmail.com?subject=Inquiry about TruTalenza Services';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-brand-purple text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Contact Us</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Have questions or ready to elevate your workforce management? 
              We're here to help you every step of the way.
            </p>
          </div>
        </div>
        
        {/* Contact Info + Form Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-4 space-y-8">
              <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-2xl font-bold text-brand-purple mb-6">
                  Get in Touch
                </h2>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-brand-purple/10 rounded-full p-3 text-brand-purple">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">Phone</h3>
                      <p className="text-gray-600">+91 6398807772</p>
                      <Button 
                        onClick={handleWhatsAppContact} 
                        variant="outline" 
                        size="sm"
                        className="mt-2 text-green-600 border-green-600 hover:bg-green-50 button-hover"
                      >
                        <MessageSquare size={16} className="mr-2" />
                        Contact via WhatsApp
                      </Button>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="bg-brand-purple/10 rounded-full p-3 text-brand-purple">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">Email</h3>
                      <p className="text-gray-600 mb-1">truvisory@gmail.com</p>
                      <p className="text-gray-600">trutalenza@gmail.com</p>
                      <Button 
                        onClick={handleEmailContact} 
                        variant="outline" 
                        size="sm"
                        className="mt-2 hover-effect"
                      >
                        <Mail size={16} className="mr-2" />
                        Send Email
                      </Button>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="bg-brand-purple/10 rounded-full p-3 text-brand-purple">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">Location</h3>
                      <p className="text-gray-600">New Delhi, India</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="bg-brand-purple/10 rounded-full p-3 text-brand-purple">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">Office Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday - Sunday: Closed</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-8 animate-slide-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-brand-purple mb-6">
                  Send Us a Message
                </h2>
                
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-scale-in">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <CheckCircle size={40} />
                    </div>
                    <h3 className="text-xl font-medium">Message Sent!</h3>
                    <p className="text-gray-600 max-w-md">
                      Thank you for contacting us. We've received your message and will respond as soon as possible.
                    </p>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="John Doe" 
                                  {...field} 
                                  className="hover-effect focus:border-brand-purple"
                                  disabled={isLoading}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email address</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="name@example.com" 
                                  {...field} 
                                  type="email"
                                  className="hover-effect focus:border-brand-purple"
                                  disabled={isLoading}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="+91 98765 43210" 
                                  {...field} 
                                  className="hover-effect focus:border-brand-purple"
                                  disabled={isLoading}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="How can we help you?" 
                                  {...field} 
                                  className="hover-effect focus:border-brand-purple"
                                  disabled={isLoading}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please provide details about your inquiry..." 
                                {...field} 
                                className="resize-none min-h-[120px] hover-effect focus:border-brand-purple"
                                disabled={isLoading}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        className="w-full md:w-auto bg-brand-purple hover:bg-brand-lightPurple button-hover"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <span className="flex items-center justify-center gap-2">
                            <Loader2 size={18} className="animate-spin" />
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            <Send size={18} />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </form>
                  </Form>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Map or Additional Info Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-brand-purple mb-8 text-center animate-fade-in">
              Frequently Asked Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm animate-slide-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="font-medium text-lg mb-2">How quickly can you provide candidates?</h3>
                <p className="text-gray-600">
                  Depending on the position and requirements, we typically present qualified candidates within 5-10 business days after finalizing the role details.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm animate-slide-in" style={{ animationDelay: '0.3s' }}>
                <h3 className="font-medium text-lg mb-2">Do you offer remote workforce solutions?</h3>
                <p className="text-gray-600">
                  Yes, we specialize in both on-site and remote workforce solutions, helping companies build effective distributed teams.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm animate-slide-in" style={{ animationDelay: '0.4s' }}>
                <h3 className="font-medium text-lg mb-2">What industries do you specialize in?</h3>
                <p className="text-gray-600">
                  We serve multiple sectors including IT, Healthcare, Finance, Retail, Manufacturing, Education, and more with specialized expertise in each.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm animate-slide-in" style={{ animationDelay: '0.5s' }}>
                <h3 className="font-medium text-lg mb-2">How do you ensure candidate quality?</h3>
                <p className="text-gray-600">
                  Our rigorous screening process includes skills assessments, background verification, and multi-stage interviews to ensure only qualified candidates are presented.
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
