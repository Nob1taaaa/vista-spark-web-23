
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Calendar, Phone, User } from 'lucide-react';
import { sendConsultationConfirmation } from '@/lib/utils/emailService';

const BookConsultation = ({ className = '' }: { className?: string }) => {
  const { toast } = useToast();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('BookConsultation: Form submitted with data:', formData);
    
    try {
      // Send consultation email via Supabase Edge Function
      const success = await sendConsultationConfirmation(formData);
      console.log('BookConsultation: Email send result:', success);
      
      if (success) {
        toast({
          title: "Consultation Booked!",
          description: "We'll contact you shortly to confirm your appointment.",
        });
        
        // Reset form and close it
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          message: '',
        });
        setIsFormOpen(false);
      } else {
        throw new Error('Failed to send consultation request');
      }
    } catch (error) {
      console.error('Failed to book consultation:', error);
      toast({
        title: "Error",
        description: "Failed to book consultation. Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };
  
  return (
    <div className={className}>
      {!isFormOpen ? (
        <Button 
          onClick={() => setIsFormOpen(true)}
          className="bg-brand-purple hover:bg-brand-lightPurple button-hover"
        >
          <Calendar className="mr-2 h-4 w-4" />
          Book a Consultation
        </Button>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-6 animate-scale-in">
          <h3 className="text-xl font-bold text-brand-purple mb-4">Book Your Consultation</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name*
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number*
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Date*
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Time*
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                >
                  <option value="">Select a time</option>
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                  <option value="5:00 PM">5:00 PM</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Brief Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                ></textarea>
              </div>
            </div>
            
            <div className="flex justify-end space-x-2 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsFormOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-brand-purple hover:bg-brand-lightPurple"
              >
                Book Consultation
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default BookConsultation;
