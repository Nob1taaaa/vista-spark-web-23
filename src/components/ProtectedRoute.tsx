
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { authService } from '@/lib/utils'; 

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    const isAuthenticated = authService.isAuthenticated();
    
    if (!isAuthenticated) {
      toast({
        title: 'Authentication required',
        description: 'Please login to access this page',
        variant: 'destructive',
      });
      navigate('/login');
    }
  }, [navigate, toast]);

  return <>{children}</>;
};

export default ProtectedRoute;
