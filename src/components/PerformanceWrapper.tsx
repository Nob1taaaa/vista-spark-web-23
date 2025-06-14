
import React, { memo } from 'react';

interface PerformanceWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const PerformanceWrapper = memo<PerformanceWrapperProps>(({ children, className = "" }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
});

PerformanceWrapper.displayName = 'PerformanceWrapper';

export default PerformanceWrapper;
