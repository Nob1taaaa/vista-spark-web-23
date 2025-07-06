/**
 * Gmail API Service with OAuth 2.0 Authentication
 * Secure frontend-only implementation using Google's OAuth flow
 */

export interface GmailConfig {
  clientId: string;
  redirectUri: string;
  scopes: string[];
}

export interface EmailMessage {
  id: string;
  threadId: string;
  subject: string;
  from: string;
  to: string;
  snippet: string;
  date: string;
  body?: string;
}

export interface SendEmailRequest {
  to: string;
  subject: string;
  body: string;
  isHtml?: boolean;
}

class GmailService {
  private config: GmailConfig;
  private accessToken: string | null = null;

  constructor() {
    this.config = {
      clientId: '173770438701-j2i9odcd5ujd9pc50klbbjvmthsj8a1k.apps.googleusercontent.com',
      redirectUri: window.location.origin,
      scopes: [
        'https://www.googleapis.com/auth/gmail.readonly',
        'https://www.googleapis.com/auth/gmail.send',
        'https://www.googleapis.com/auth/gmail.modify'
      ]
    };
  }

  /**
   * Initialize Gmail OAuth authentication
   */
  async authenticate(): Promise<boolean> {
    try {
      // Check if we already have a valid token
      const storedToken = localStorage.getItem('gmail_access_token');
      const tokenExpiry = localStorage.getItem('gmail_token_expiry');
      
      if (storedToken && tokenExpiry && new Date().getTime() < parseInt(tokenExpiry)) {
        this.accessToken = storedToken;
        return true;
      }

      // Start OAuth flow
      const authUrl = this.buildAuthUrl();
      const authWindow = window.open(authUrl, 'gmail-auth', 'width=500,height=600');
      
      return new Promise((resolve) => {
        const checkClosed = setInterval(() => {
          if (authWindow?.closed) {
            clearInterval(checkClosed);
            // Check if authentication was successful
            const token = localStorage.getItem('gmail_access_token');
            if (token) {
              this.accessToken = token;
              resolve(true);
            } else {
              resolve(false);
            }
          }
        }, 1000);
      });
    } catch (error) {
      console.error('Gmail authentication failed:', error);
      return false;
    }
  }

  /**
   * Build OAuth authorization URL
   */
  private buildAuthUrl(): string {
    const params = new URLSearchParams({
      client_id: this.config.clientId,
      redirect_uri: this.config.redirectUri,
      scope: this.config.scopes.join(' '),
      response_type: 'token',
      access_type: 'online'
    });

    return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
  }

  /**
   * Handle OAuth callback and extract access token
   */
  handleAuthCallback(): boolean {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const accessToken = params.get('access_token');
    const expiresIn = params.get('expires_in');

    if (accessToken && expiresIn) {
      this.accessToken = accessToken;
      const expiryTime = new Date().getTime() + (parseInt(expiresIn) * 1000);
      
      localStorage.setItem('gmail_access_token', accessToken);
      localStorage.setItem('gmail_token_expiry', expiryTime.toString());
      
      // Clean up URL hash
      window.history.replaceState({}, document.title, window.location.pathname);
      return true;
    }

    return false;
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return !!this.accessToken;
  }

  /**
   * Sign out user
   */
  signOut(): void {
    this.accessToken = null;
    localStorage.removeItem('gmail_access_token');
    localStorage.removeItem('gmail_token_expiry');
  }

  /**
   * Make authenticated request to Gmail API
   */
  private async makeRequest(endpoint: string, options: RequestInit = {}): Promise<any> {
    if (!this.accessToken) {
      throw new Error('Not authenticated. Please sign in first.');
    }

    const response = await fetch(`https://gmail.googleapis.com/gmail/v1/${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${this.accessToken}`,
        'Content-Type': 'application/json',
        ...options.headers
      }
    });

    if (!response.ok) {
      throw new Error(`Gmail API error: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Get list of email messages
   */
  async getMessages(maxResults: number = 10): Promise<EmailMessage[]> {
    try {
      const response = await this.makeRequest(`users/me/messages?maxResults=${maxResults}`);
      
      if (!response.messages) {
        return [];
      }

      // Get full message details
      const messages = await Promise.all(
        response.messages.map(async (msg: any) => {
          const fullMessage = await this.makeRequest(`users/me/messages/${msg.id}`);
          return this.parseMessage(fullMessage);
        })
      );

      return messages;
    } catch (error) {
      console.error('Failed to get messages:', error);
      throw error;
    }
  }

  /**
   * Send an email
   */
  async sendEmail(email: SendEmailRequest): Promise<boolean> {
    try {
      const message = this.createEmailMessage(email);
      
      await this.makeRequest('users/me/messages/send', {
        method: 'POST',
        body: JSON.stringify({ raw: message })
      });

      return true;
    } catch (error) {
      console.error('Failed to send email:', error);
      throw error;
    }
  }

  /**
   * Parse Gmail message response
   */
  private parseMessage(message: any): EmailMessage {
    const headers = message.payload.headers;
    const getHeader = (name: string) => 
      headers.find((h: any) => h.name.toLowerCase() === name.toLowerCase())?.value || '';

    return {
      id: message.id,
      threadId: message.threadId,
      subject: getHeader('Subject'),
      from: getHeader('From'),
      to: getHeader('To'),
      snippet: message.snippet,
      date: new Date(parseInt(message.internalDate)).toISOString(),
      body: this.extractMessageBody(message.payload)
    };
  }

  /**
   * Extract message body from payload
   */
  private extractMessageBody(payload: any): string {
    if (payload.body?.data) {
      return atob(payload.body.data.replace(/-/g, '+').replace(/_/g, '/'));
    }

    if (payload.parts) {
      for (const part of payload.parts) {
        if (part.mimeType === 'text/plain' && part.body?.data) {
          return atob(part.body.data.replace(/-/g, '+').replace(/_/g, '/'));
        }
      }
    }

    return '';
  }

  /**
   * Create email message in RFC 2822 format
   */
  private createEmailMessage(email: SendEmailRequest): string {
    const boundary = '----boundary' + Date.now();
    const contentType = email.isHtml ? 'text/html' : 'text/plain';
    
    const message = [
      `To: ${email.to}`,
      `Subject: ${email.subject}`,
      `Content-Type: ${contentType}; charset=utf-8`,
      '',
      email.body
    ].join('\r\n');

    return btoa(message).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }
}

export const gmailService = new GmailService();
export default gmailService;