import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import logo from "@/assets/images/logo.svg"; // Adjust path if needed

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
  // Local state for auth since we removed Privy
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [accessToken, setAccessToken] = useState<string>("");
  const [error, setError] = useState<string>("");

  const [walletAddress, setWalletAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const API_BASE_URL = 'https://api.tapfolio.quest';

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        // Store the access token
        const token = tokenResponse.access_token;
        setAccessToken(token);
        console.log("Access Token:", token);
        
        // Step 1: Verify token with backend
        const verifyResponse = await fetch(`${API_BASE_URL}/api/early-access/verify`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ accessToken: token }),
        });

        if (!verifyResponse.ok) {
          throw new Error('Token verification failed');
        }

        const verifyData = await verifyResponse.json();
        console.log("Verification response:", verifyData);
        
        // Step 2: Get user info from Google
        const userInfo = await fetch(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          { headers: { Authorization: `Bearer ${token}` } },
        ).then(res => res.json());
        
        console.log("User Info:", userInfo);
        setUser(userInfo);
        setAuthenticated(true);
        
        // Step 3: Check if user already has wallet address registered
        const statusResponse = await fetch(`${API_BASE_URL}/api/early-access/status`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (statusResponse.ok) {
          const statusData = await statusResponse.json();
          console.log("Status response:", statusData);
          
          // Check if user already has wallet address using the actual API format
          if (statusData.success && statusData.data?.walletAddress) {
            setSubmitted(true);
            setWalletAddress(statusData.data.walletAddress);
          }
        }
        
        setError("");
      } catch (error: any) {
        console.error('Failed to authenticate:', error);
        setError(error.message || 'Authentication failed. Please try again.');
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

  const logout = () => {
    setAuthenticated(false);
    setUser(null);
    setAccessToken("");
    setWalletAddress("");
    setSubmitted(false);
    setError("");
  };

  const handleSubmitWallet = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      // Submit wallet address to backend
      const response = await fetch(`${API_BASE_URL}/api/early-access/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accessToken: accessToken,
          walletAddress: walletAddress,
        }),
      });

      const data = await response.json();

      // Check if the response indicates failure
      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Submission failed');
      }

      console.log("Submission successful:", data);
      
      setIsSubmitting(false);
      setSubmitted(true);
    } catch (error: any) {
      console.error('Error submitting wallet:', error);
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

            {!authenticated ? (
                <>
                    <DialogHeader>
                        <DialogTitle className="text-center text-xl font-semibold">Limited Access for Eldora Beta Test</DialogTitle>
                        <p className="text-center text-sm text-gray-600 mt-3 px-2">
                            Secure your spot to get early access to Eldora’s seamless all-in-1 RWA investment experience.
                        </p>
                    </DialogHeader>

                    <div className="w-full">
                        {/* Google Button */}
                        <button 
                            onClick={handleGoogleLogin}
                            className="flex items-center justify-center w-full h-12 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors gap-3 font-medium text-gray-700"
                        >
                            <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.11c-.22-.66-.35-1.36-.35-2.11s.13-1.45.35-2.11V7.05H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.95l3.66-2.84z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84c.87-2.6 3.3-4.51 6.16-4.51z" fill="#EA4335" />
                            </svg>
                            Google
                        </button>
                        
                        {/* Error Message */}
                        {error && (
                            <div className="w-full p-3 bg-red-50 border border-red-200 rounded-lg">
                                <p className="text-sm text-red-600 text-center">{error}</p>
                            </div>
                        )}
                    </div>
                </>
            ) : !submitted ? (
                <>
                    <DialogHeader>
                        <DialogTitle className="text-center text-xl font-semibold">Early Access</DialogTitle>
                        <p className="text-center text-sm text-gray-500">Enter your wallet address (EVM) to join the waitlist.</p>
                        {user?.email && (
                            <p className="text-center text-xs text-gray-400 mt-2">Signed in as: {user.email}</p>
                        )}
                    </DialogHeader>

                    <form onSubmit={handleSubmitWallet} className="w-full space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="wallet" className="text-sm font-medium text-gray-700">Wallet Address</label>
                            <StyledInput 
                                id="wallet"
                                placeholder="0x..." 
                                className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                                value={walletAddress}
                                onChange={(e) => setWalletAddress(e.target.value)}
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full h-12 bg-black text-white hover:bg-gray-800 rounded-lg" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Join Waitlist"}
                        </Button>
                        
                        {/* Error Message */}
                        {error && (
                            <div className="w-full p-3 bg-red-50 border border-red-200 rounded-lg">
                                <p className="text-sm text-red-600 text-center">{error}</p>
                            </div>
                        )}
                        
                        <div className="text-center">
                            <button type="button" onClick={logout} className="text-xs text-gray-400 hover:text-gray-600">
                                Sign out
                            </button>
                        </div>
                    </form>
                </>
            ) : (
                <div className="text-center space-y-4 py-6">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">You're on the list!</h3>
                        <p className="text-sm text-gray-500">We'll notify you when early access opens.</p>
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
