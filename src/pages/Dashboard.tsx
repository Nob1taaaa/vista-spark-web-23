
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  Briefcase, 
  Building, 
  FileText, 
  Users, 
  Calendar 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const userData = localStorage.getItem('user') 
    ? JSON.parse(localStorage.getItem('user') || '{}') 
    : null;

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    
    if (!isAuthenticated) {
      toast({
        title: 'Authentication required',
        description: 'Please login to access the dashboard',
        variant: 'destructive',
      });
      navigate('/login');
    }
  }, [navigate, toast]);
  
  if (!userData) {
    return null; // Will redirect via the useEffect
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-28">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-brand-purple mb-2 animate-fade-in">
            Welcome, {userData.name || 'User'}!
          </h1>
          <p className="text-gray-600 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Manage your TruTalenza services and view your dashboard.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="card-hover animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="text-brand-purple" size={20} />
                My Services
              </CardTitle>
              <CardDescription>
                View and manage your active services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
                  <span>Talent Acquisition</span>
                  <span className="text-green-600 text-sm font-medium">Active</span>
                </li>
                <li className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
                  <span>HR Consulting</span>
                  <span className="text-amber-600 text-sm font-medium">Pending</span>
                </li>
              </ul>
              <Button variant="ghost" className="w-full mt-4 hover-effect">
                View All Services
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-hover animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="text-brand-purple" size={20} />
                Recent Documents
              </CardTitle>
              <CardDescription>
                Access your recent documents and reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
                  <span>Q2 HR Report</span>
                  <span className="text-gray-500 text-sm">2 days ago</span>
                </li>
                <li className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
                  <span>Compliance Policy</span>
                  <span className="text-gray-500 text-sm">1 week ago</span>
                </li>
              </ul>
              <Button variant="ghost" className="w-full mt-4 hover-effect">
                View All Documents
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-hover animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="text-brand-purple" size={20} />
                Upcoming Meetings
              </CardTitle>
              <CardDescription>
                Your scheduled consultations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
                  <div>
                    <p className="font-medium">Strategy Session</p>
                    <p className="text-sm text-gray-500">HR Consulting</p>
                  </div>
                  <span className="text-sm">Tomorrow, 2:00 PM</span>
                </li>
                <li className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
                  <div>
                    <p className="font-medium">Quarterly Review</p>
                    <p className="text-sm text-gray-500">Performance</p>
                  </div>
                  <span className="text-sm">Apr 16, 10:00 AM</span>
                </li>
              </ul>
              <Button variant="ghost" className="w-full mt-4 hover-effect">
                View Calendar
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-hover animate-scale-in" style={{ animationDelay: '0.5s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="text-brand-purple" size={20} />
                Talent Pipeline
              </CardTitle>
              <CardDescription>
                View your current recruitment processes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Total Candidates</span>
                  <span className="font-medium">24</span>
                </div>
                <div className="flex justify-between">
                  <span>In Interview Process</span>
                  <span className="font-medium">8</span>
                </div>
                <div className="flex justify-between">
                  <span>Ready for Hire</span>
                  <span className="font-medium">3</span>
                </div>
              </div>
              <Button variant="ghost" className="w-full mt-4 hover-effect">
                View Candidates
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-hover animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="text-brand-purple" size={20} />
                Company Profile
              </CardTitle>
              <CardDescription>
                Your organization information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Company Name</span>
                  <span className="font-medium">Demo Company</span>
                </div>
                <div className="flex justify-between">
                  <span>Industry</span>
                  <span className="font-medium">Technology</span>
                </div>
                <div className="flex justify-between">
                  <span>Employees</span>
                  <span className="font-medium">50-100</span>
                </div>
              </div>
              <Button variant="ghost" className="w-full mt-4 hover-effect">
                Edit Profile
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-hover animate-scale-in" style={{ animationDelay: '0.7s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="text-brand-purple" size={20} />
                Account Settings
              </CardTitle>
              <CardDescription>
                Manage your account preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Email</span>
                  <span className="text-sm text-gray-600">{userData.email || 'user@example.com'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Notifications</span>
                  <span className="text-green-600 text-sm font-medium">Enabled</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Two-Factor Authentication</span>
                  <span className="text-amber-600 text-sm font-medium">Not Set</span>
                </div>
              </div>
              <Button variant="ghost" className="w-full mt-4 hover-effect">
                Manage Account
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
