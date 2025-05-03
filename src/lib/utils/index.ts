
/**
 * Utilities Index
 * 
 * This file exports all utility functions from the various service files.
 * Import services from here to use them in your components.
 */

import { cn } from '../utils';
import * as authService from './authService';
import * as emailService from './emailService';
import * as bookingService from './bookingService';
import * as contentService from './contentService';
import * as apiService from './apiService';

// Re-export everything
export {
  cn,
  authService,
  emailService,
  bookingService,
  contentService,
  apiService
};

// Example of how to use these utilities in your components:
/*
import { emailService } from '@/lib/utils';

const handleFormSubmit = async (formData) => {
  const sent = await emailService.sendContactFormEmail(formData);
  if (sent) {
    // Show success message
  } else {
    // Show error message
  }
};
*/
