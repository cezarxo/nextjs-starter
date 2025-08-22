"use client";

import {
  AlertCircle,
  ArrowLeft,
  CheckCircle,
  Chrome,
  Eye,
  EyeOff,
  Github,
  Lock,
  Mail,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleCredentialsSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid credentials. Please try again.");
      } else {
        setSuccess("Sign in successful! Redirecting...");
        setTimeout(() => {
          router.push("/dashboard");
        }, 1500);
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignIn = async (provider: string) => {
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const result = await signIn(provider, {
        callbackUrl: "/dashboard",
        redirect: false,
      });

      if (result?.error) {
        setError(`Failed to sign in with ${provider}. Please try again.`);
      } else {
        setSuccess(`Sign in with ${provider} successful! Redirecting...`);
        setTimeout(() => {
          router.push("/dashboard");
        }, 1500);
      }
    } catch {
      setError(`An error occurred with ${provider}. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">
            Sign in to your account to continue
          </p>
        </div>

        {/* Sign In Card */}
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Choose your preferred sign in method
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Social Login Buttons */}
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => handleSocialSignIn("google")}
                disabled={isLoading}
              >
                <Chrome className="mr-2 h-4 w-4" />
                Continue with Google
              </Button>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => handleSocialSignIn("github")}
                disabled={isLoading}
              >
                <Github className="mr-2 h-4 w-4" />
                Continue with GitHub
              </Button>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => handleSocialSignIn("twitter")}
                disabled={isLoading}
              >
                <Twitter className="mr-2 h-4 w-4" />
                Continue with Twitter
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Credentials Form */}
            <form onSubmit={handleCredentialsSignIn} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10"
                    required
                    disabled={isLoading}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            {/* Demo Credentials */}
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold text-sm mb-2">Demo Credentials</h4>
              <div className="space-y-1 text-xs text-muted-foreground">
                <div>
                  Email:{" "}
                  <code className="bg-background px-1 rounded">
                    admin@example.com
                  </code>
                </div>
                <div>
                  Password:{" "}
                  <code className="bg-background px-1 rounded">admin123</code>
                </div>
              </div>
            </div>

            {/* Error/Success Messages */}
            {error && (
              <div className="flex items-center space-x-2 text-sm text-destructive bg-destructive/10 p-3 rounded-lg">
                <AlertCircle className="h-4 w-4" />
                <span>{error}</span>
              </div>
            )}

            {success && (
              <div className="flex items-center space-x-2 text-sm text-green-600 bg-green-50 p-3 rounded-lg">
                <CheckCircle className="h-4 w-4" />
                <span>{success}</span>
              </div>
            )}

            {/* Links */}
            <div className="text-center space-y-2">
              <div className="text-sm">
                Don&apos;t have an account?{" "}
                <Link
                  href="/auth/signup"
                  className="text-primary hover:underline font-medium"
                >
                  Sign up
                </Link>
              </div>
              <div className="text-sm">
                <Link
                  href="/auth/forgot-password"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="mt-8 text-center">
          <Badge variant="secondary" className="mb-4">
            NextAuth.js Integration
          </Badge>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div>
              <h4 className="font-semibold text-foreground mb-1">
                Social Login
              </h4>
              <p>Google, GitHub, Twitter</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Secure</h4>
              <p>JWT-based sessions</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">
                Customizable
              </h4>
              <p>Easy to extend</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
