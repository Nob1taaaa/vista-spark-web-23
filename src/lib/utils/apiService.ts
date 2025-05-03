
/**
 * API Service Utility
 * 
 * This file provides base API functions for making HTTP requests.
 * To use this, connect to Supabase or customize this to work with your API.
 */

export interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  status: number;
}

export interface ApiRequestOptions {
  headers?: Record<string, string>;
  params?: Record<string, string>;
  body?: any;
}

/**
 * Base function for making API GET requests.
 */
export async function apiGet<T = any>(
  endpoint: string,
  options: ApiRequestOptions = {}
): Promise<ApiResponse<T>> {
  try {
    // Build URL with query parameters
    const url = new URL(endpoint, window.location.origin);
    if (options.params) {
      Object.entries(options.params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }
    
    // Make the request
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    
    // Parse the response
    const responseData = await response.json().catch(() => null);
    
    return {
      data: responseData,
      status: response.status,
    };
  } catch (error) {
    console.error(`API GET error for ${endpoint}:`, error);
    return {
      error: 'Failed to fetch data',
      status: 500,
    };
  }
}

/**
 * Base function for making API POST requests.
 */
export async function apiPost<T = any>(
  endpoint: string,
  data: any,
  options: ApiRequestOptions = {}
): Promise<ApiResponse<T>> {
  try {
    // Make the request
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: JSON.stringify(data),
    });
    
    // Parse the response
    const responseData = await response.json().catch(() => null);
    
    return {
      data: responseData,
      status: response.status,
    };
  } catch (error) {
    console.error(`API POST error for ${endpoint}:`, error);
    return {
      error: 'Failed to submit data',
      status: 500,
    };
  }
}

/**
 * Base function for making API PUT requests.
 */
export async function apiPut<T = any>(
  endpoint: string,
  data: any,
  options: ApiRequestOptions = {}
): Promise<ApiResponse<T>> {
  try {
    // Make the request
    const response = await fetch(endpoint, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: JSON.stringify(data),
    });
    
    // Parse the response
    const responseData = await response.json().catch(() => null);
    
    return {
      data: responseData,
      status: response.status,
    };
  } catch (error) {
    console.error(`API PUT error for ${endpoint}:`, error);
    return {
      error: 'Failed to update data',
      status: 500,
    };
  }
}

/**
 * Base function for making API DELETE requests.
 */
export async function apiDelete<T = any>(
  endpoint: string,
  options: ApiRequestOptions = {}
): Promise<ApiResponse<T>> {
  try {
    // Make the request
    const response = await fetch(endpoint, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
    });
    
    // Parse the response
    const responseData = await response.json().catch(() => null);
    
    return {
      data: responseData,
      status: response.status,
    };
  } catch (error) {
    console.error(`API DELETE error for ${endpoint}:`, error);
    return {
      error: 'Failed to delete data',
      status: 500,
    };
  }
}

export default {
  apiGet,
  apiPost,
  apiPut,
  apiDelete
};
