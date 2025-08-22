
/**
 * Utilities Index
 * 
 * This file exports all utility functions from the various service files.
 * Import services from here to use them in your components.
 */

import { cn } from '../utils';
import * as authService from './authService';
import * as bookingService from './bookingService';
import * as contentService from './contentService';
import * as apiService from './apiService';

// Re-export everything
export {
  cn,
  authService,
  bookingService,
  contentService,
  apiService
};

// Example of how to use these utilities in your components:
/*
import { authService } from '@/lib/utils';

const handleLogin = async (credentials) => {
  const success = await authService.login(credentials);
  if (success) {
    // Show success message
  } else {
    // Show error message
  }
};
*/
