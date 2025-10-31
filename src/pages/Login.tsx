import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast"; // Assuming this is your Toaster hook
import { Sprout } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
// 🔑 Import your Firebase Authentication Service functions
import { signInUser, signUpUser } from '../services/authService'; 


const Login = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { toast } = useToast();

  // --- 1. Add State for Form and UI ---
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false); // To toggle between Sign In and Sign Up
  const [loading, setLoading] = useState(false); // To disable button during API call

  // --- 2. Update Submission Handler ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSigningUp) {
        // --- Firebase Sign Up Logic ---
        await signUpUser(email, password);
        toast({
          title: t('authSuccess'), // "Success!"
          description: t('signupSuccess'), // "Account created. Welcome to AgriSense AI."
        });
      } else {
        // --- Firebase Sign In Logic ---
        await signInUser(email, password);
        toast({
          title: t('authSuccess'), // "Success!"
          description: t('loginSuccess'), // "You have successfully logged in."
        });
      }
      
      // The ProtectedRoutes component will detect the successful login
      // via the useAuth hook and automatically redirect the user to '/'.
      navigate('/'); 

    } catch (error: any) {
      // --- Handle Firebase Errors ---
      const errorMessage = error.message.replace('Firebase: Error (auth/', '').replace(').', '').replace(/-/g, ' ');
      toast({
        title: t('authFailed'), // "Login Failed" or "Sign Up Failed"
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/10 via-background to-background px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <img
                src="/favicon.png" 
                alt="AgriSense AI Logo" 
                className="w-10 h-10" 
              />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {t('appName')}
          </CardTitle>
          <CardDescription>
            {isSigningUp ? t('signupDescription') : t('loginDescription')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Email Input - Connected to State */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            {/* Password Input - Connected to State */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            {/* Submit Button - Dynamic Text and Disabled State */}
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90"
              disabled={loading}
            >
              {loading ? t('processing') : isSigningUp ? t('signUp') : t('login')}
            </Button>
            
            {/* Toggle Sign In/Sign Up */}
            <div className="text-center text-sm text-muted-foreground">
              {isSigningUp ? (
                // Sign Up Mode: Show link to Sign In
                <>
                  {t('alreadyHaveAccount')}{' '}
                  <button 
                    type="button" 
                    onClick={() => setIsSigningUp(false)} 
                    className="text-primary hover:underline font-medium"
                  >
                    {t('login')}
                  </button>
                </>
              ) : (
                // Sign In Mode: Show link to Sign Up
                <>
                  {t('dontHaveAccount')}{' '}
                  <button 
                    type="button" 
                    onClick={() => setIsSigningUp(true)} 
                    className="text-primary hover:underline font-medium"
                  >
                    {t('signUp')}
                  </button>
                </>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;