import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import logo from "@/assets/images/logo.svg";

// Fallback Input if not available
const StyledInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...props}
    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
  />
);

interface EarlyAccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EarlyAccessModal({ open, onOpenChange }: EarlyAccessModalProps) {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  // const API_BASE_URL = 'https://api.tapfolio.quest';
  const API_BASE_URL = 'http://localhost:3000';

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setIsSubmitting(true);
      try {
        const token = tokenResponse.access_token;
        console.log("Access Token:", token);
        
        // Get user info from Google
        const userInfo = await fetch(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          { headers: { Authorization: `Bearer ${token}` } },
        ).then(res => res.json());
        
        console.log("User Info:", userInfo);
        
        // Submit to backend directly
        const submitResponse = await fetch(`${API_BASE_URL}/api/early-access/submit`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ accessToken: token }),
        });

        const submitData = await submitResponse.json();

        // Check if it's an error (but not "already registered")
        if (!submitResponse.ok || !submitData.success) {
          // If message contains "already registered", treat as success
          const isAlreadyRegistered = submitData.message?.toLowerCase().includes('already registered');
          
          if (!isAlreadyRegistered) {
            throw new Error(submitData.message || 'Submission failed');
          }
          // If already registered, continue to show success screen
        }

        console.log("Submission successful:", submitData);
        
        // Show success screen (for both new registration and already registered)
        setUser(userInfo);
        setSubmitted(true);
        setError("");
        setIsSubmitting(false);
      } catch (error: any) {
        console.error('Failed to authenticate:', error);
        setError(error.message || 'Authentication failed. Please try again.');
        setIsSubmitting(false);
      }
    },
    onError: errorResponse => {
      console.log(errorResponse);
      setError('Google login failed. Please try again.');
    },
  });

  const handleGoogleLogin = () => {
    setError("");
    googleLogin();
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput)) {
        throw new Error('Please enter a valid email address');
      }

      // Submit email directly to backend
      const submitResponse = await fetch(`${API_BASE_URL}/api/early-access/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailInput }),
      });

      const submitData = await submitResponse.json();

      if (!submitResponse.ok || !submitData.success) {
        throw new Error(submitData.message || 'Submission failed');
      }

      console.log("Submission successful:", submitData);
      
      // Show success screen
      setUser({ email: emailInput });
      setSubmitted(true);
      setError("");
      setIsSubmitting(false);
    } catch (error: any) {
      console.error('Email submission failed:', error);
      setError(error.message || 'Failed to submit. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px] p-0 overflow-hidden bg-white text-black border-none">
        <div className="p-6 flex flex-col items-center justify-center space-y-6">
            {/* Logo */}
            <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center">
                <img src={logo} alt="Eldora" className="w-10 h-10 object-contain" />
            </div>

            {!submitted ? (
                <>
                    <DialogHeader>
                        <DialogTitle className="text-center text-xl font-semibold">Limited Access for Eldora Beta Test</DialogTitle>
                        <p className="text-center text-sm text-gray-600 mt-3 px-2">
                            Secure your spot to get early access to Eldora's seamless all-in-1 RWA investment experience.
                        </p>
                    </DialogHeader>

                    <div className="w-full space-y-4">
                        {/* Email Input */}
                        <form onSubmit={handleEmailSubmit} className="space-y-3">
                            <div className="space-y-2">
                                <label htmlFor="email-input" className="text-sm font-medium text-gray-700">Email</label>
                                <StyledInput 
                                    id="email-input"
                                    type="email"
                                    placeholder="your@email.com" 
                                    className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                                    value={emailInput}
                                    onChange={(e) => setEmailInput(e.target.value)}
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                            <Button 
                                type="submit" 
                                className="w-full h-12 bg-black text-white hover:bg-gray-800 rounded-lg" 
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Submitting..." : "Continue with Email"}
                            </Button>
                        </form>
                        
                        {/* Divider */}
                        <div className="flex items-center gap-3 py-2">
                            <div className="flex-1 h-px bg-gray-200"></div>
                            <span className="text-xs text-gray-400 font-medium">OR</span>
                            <div className="flex-1 h-px bg-gray-200"></div>
                        </div>
                        
                        {/* Google Button */}
                        <button 
                            onClick={handleGoogleLogin}
                            disabled={isSubmitting}
                            className="flex items-center justify-center w-full h-12 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors gap-3 font-medium text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.11c-.22-.66-.35-1.36-.35-2.11s.13-1.45.35-2.11V7.05H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.95l3.66-2.84z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84c.87-2.6 3.3-4.51 6.16-4.51z" fill="#EA4335" />
                            </svg>
                            {isSubmitting ? "Submitting..." : "Continue with Google"}
                        </button>
                        
                        {/* Error Message */}
                        {error && (
                            <div className="w-full p-3 bg-red-50 border border-red-200 rounded-lg">
                                <p className="text-sm text-red-600 text-center">{error}</p>
                            </div>
                        )}
                    </div>
                </>
            ) : (
                <div className="text-center space-y-4 py-6">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">You're on the list!</h3>
                        <p className="text-sm text-gray-500">We'll notify you via <span className="font-bold text-black">{user?.email || 'email'}</span> when early access opens.</p>
                    </div>
                    <Button onClick={() => onOpenChange(false)} className="w-full h-12 bg-black text-white hover:bg-gray-800 rounded-lg">
                        Close
                    </Button>
                </div>
            )}

            <div className="text-center text-xs text-gray-300 mt-4">
                Protected by Google
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
