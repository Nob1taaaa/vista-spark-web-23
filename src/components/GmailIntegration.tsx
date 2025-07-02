import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Send, 
  RefreshCw, 
  LogIn, 
  LogOut, 
  Loader2,
  CheckCircle,
  AlertCircle,
  Inbox,
  PenTool
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import gmailService, { EmailMessage, SendEmailRequest } from '@/lib/utils/gmailService';

const GmailIntegration = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<EmailMessage[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<EmailMessage | null>(null);
  const { toast } = useToast();

  // Send email form state
  const [emailForm, setEmailForm] = useState<SendEmailRequest>({
    to: '',
    subject: '',
    body: '',
    isHtml: false
  });

  useEffect(() => {
    // Check if user is already authenticated
    setIsAuthenticated(gmailService.isAuthenticated());
    
    // Handle OAuth callback if present
    if (window.location.hash.includes('access_token')) {
      const success = gmailService.handleAuthCallback();
      if (success) {
        setIsAuthenticated(true);
        toast({
          title: 'Gmail Connected!',
          description: 'Successfully authenticated with Gmail.',
        });
      }
    }
  }, [toast]);

  const handleAuthenticate = async () => {
    setIsLoading(true);
    try {
      const success = await gmailService.authenticate();
      if (success) {
        setIsAuthenticated(true);
        toast({
          title: 'Gmail Connected!',
          description: 'Successfully authenticated with Gmail.',
        });
      } else {
        toast({
          title: 'Authentication Failed',
          description: 'Failed to connect to Gmail. Please try again.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Authentication Error',
        description: 'An error occurred during authentication.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = () => {
    gmailService.signOut();
    setIsAuthenticated(false);
    setMessages([]);
    setSelectedMessage(null);
    toast({
      title: 'Signed Out',
      description: 'Successfully signed out from Gmail.',
    });
  };

  const loadMessages = async () => {
    if (!isAuthenticated) return;
    
    setIsLoading(true);
    try {
      const emailMessages = await gmailService.getMessages(20);
      setMessages(emailMessages);
      toast({
        title: 'Emails Loaded',
        description: `Loaded ${emailMessages.length} emails.`,
      });
    } catch (error) {
      toast({
        title: 'Failed to Load Emails',
        description: 'Could not retrieve emails. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendEmail = async () => {
    if (!emailForm.to || !emailForm.subject || !emailForm.body) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    try {
      await gmailService.sendEmail(emailForm);
      setEmailForm({ to: '', subject: '', body: '', isHtml: false });
      toast({
        title: 'Email Sent!',
        description: 'Your email has been sent successfully.',
      });
    } catch (error) {
      toast({
        title: 'Failed to Send Email',
        description: 'Could not send email. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl">Connect Gmail</CardTitle>
          <CardDescription>
            Securely connect your Gmail account to manage emails
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-blue-900 mb-1">Secure OAuth 2.0</p>
                <p className="text-blue-700">
                  Your credentials are never stored on our servers. 
                  Authentication happens directly with Google.
                </p>
              </div>
            </div>
          </div>
          
          <Button 
            onClick={handleAuthenticate} 
            disabled={isLoading}
            className="w-full bg-red-600 hover:bg-red-700"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Connecting...
              </>
            ) : (
              <>
                <LogIn className="w-4 h-4 mr-2" />
                Connect Gmail Account
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl">Gmail Integration</CardTitle>
                <CardDescription>Manage your emails directly from here</CardDescription>
              </div>
            </div>
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Main Content */}
      <Tabs defaultValue="inbox" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="inbox" className="flex items-center gap-2">
            <Inbox className="w-4 h-4" />
            Inbox
          </TabsTrigger>
          <TabsTrigger value="compose" className="flex items-center gap-2">
            <PenTool className="w-4 h-4" />
            Compose
          </TabsTrigger>
        </TabsList>

        <TabsContent value="inbox" className="space-y-4">
          <div className="flex items-center gap-2">
            <Button onClick={loadMessages} disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <RefreshCw className="w-4 h-4 mr-2" />
              )}
              Load Emails
            </Button>
            {messages.length > 0 && (
              <span className="text-sm text-gray-600">
                {messages.length} emails loaded
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Email List */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Email List</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="max-h-96 overflow-y-auto">
                  {messages.length === 0 ? (
                    <div className="p-4 text-center text-gray-500">
                      No emails loaded. Click "Load Emails" to fetch your messages.
                    </div>
                  ) : (
                    messages.map((message) => (
                      <div
                        key={message.id}
                        className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors ${
                          selectedMessage?.id === message.id ? 'bg-blue-50' : ''
                        }`}
                        onClick={() => setSelectedMessage(message)}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">{message.subject}</p>
                            <p className="text-xs text-gray-600 truncate">{message.from}</p>
                          </div>
                          <span className="text-xs text-gray-500 flex-shrink-0">
                            {new Date(message.date).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{message.snippet}</p>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Email Detail */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Email Details</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedMessage ? (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-lg mb-2">{selectedMessage.subject}</h3>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p><span className="font-medium">From:</span> {selectedMessage.from}</p>
                        <p><span className="font-medium">To:</span> {selectedMessage.to}</p>
                        <p><span className="font-medium">Date:</span> {new Date(selectedMessage.date).toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <p className="text-sm whitespace-pre-wrap">
                        {selectedMessage.body || selectedMessage.snippet}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-500 py-8">
                    Select an email to view its details
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="compose" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Compose Email</CardTitle>
              <CardDescription>Send a new email through your Gmail account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">To</label>
                <Input
                  type="email"
                  placeholder="recipient@example.com"
                  value={emailForm.to}
                  onChange={(e) => setEmailForm({ ...emailForm, to: e.target.value })}
                />
              </div>
              
              <div>
                <label className="text-sm font-medium">Subject</label>
                <Input
                  placeholder="Email subject"
                  value={emailForm.subject}
                  onChange={(e) => setEmailForm({ ...emailForm, subject: e.target.value })}
                />
              </div>
              
              <div>
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  placeholder="Type your message here..."
                  className="min-h-32"
                  value={emailForm.body}
                  onChange={(e) => setEmailForm({ ...emailForm, body: e.target.value })}
                />
              </div>

              <Button 
                onClick={handleSendEmail} 
                disabled={isLoading}
                className="w-full bg-red-600 hover:bg-red-700"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Email
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GmailIntegration;