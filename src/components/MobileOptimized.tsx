
import React, { Suspense } from 'react';

interface MobileOptimizedProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const MobileOptimized: React.FC<MobileOptimizedProps> = ({ 
  children, 
  fallback = <div className="animate-pulse bg-gray-200 h-20 rounded"></div> 
}) => {
  return (
    <Suspense fallback={fallback}>
      <div className="mobile-container mobile-section">
        {children}
      </div>
    </Suspense>
  );
};

export default MobileOptimized;
