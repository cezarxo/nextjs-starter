"use client";

import {
  AlertTriangle,
  ArrowLeft,
  HelpCircle,
  Home,
  Mail,
  RefreshCw,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const getErrorDetails = (errorCode: string | null) => {
    switch (errorCode) {
      case "Configuration":
        return {
          title: "Server Configuration Error",
          description:
            "There is a problem with the server configuration. Please contact support.",
          severity: "high",
          solution:
            "This is a server-side issue that requires administrator attention.",
        };
      case "AccessDenied":
        return {
          title: "Access Denied",
          description: "You do not have permission to access this resource.",
          severity: "medium",
          solution:
            "Please contact your administrator if you believe this is an error.",
        };
      case "Verification":
        return {
          title: "Verification Failed",
          description: "The verification token has expired or is invalid.",
          severity: "medium",
          solution:
            "Please try signing in again or request a new verification link.",
        };
      case "Default":
        return {
          title: "Authentication Error",
          description: "An unexpected error occurred during authentication.",
          severity: "medium",
          solution:
            "Please try again or contact support if the problem persists.",
        };
      default:
        return {
          title: "Authentication Error",
          description:
            "Something went wrong during the authentication process.",
          severity: "medium",
          solution: "Please try again or contact support for assistance.",
        };
    }
  };

  const errorDetails = getErrorDetails(error);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold mb-2">Authentication Error</h1>
          <p className="text-muted-foreground">
            We encountered an issue while processing your request
          </p>
        </div>

        {/* Error Card */}
        <Card className="mb-8">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
            <CardTitle className="text-xl">{errorDetails.title}</CardTitle>
            <CardDescription className="text-base">
              {errorDetails.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Error Code */}
            {error && (
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Error Code:</span>
                  <Badge variant="secondary" className="font-mono">
                    {error}
                  </Badge>
                </div>
              </div>
            )}

            {/* Severity */}
            <div className="flex items-center justify-center space-x-2">
              <span className="text-sm text-muted-foreground">Severity:</span>
              <Badge
                variant={
                  errorDetails.severity === "high" ? "destructive" : "secondary"
                }
              >
                {errorDetails.severity === "high" ? "High" : "Medium"}
              </Badge>
            </div>

            <Separator />

            {/* Solution */}
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center">
                <HelpCircle className="h-4 w-4 mr-2" />
                What you can do:
              </h4>
              <p className="text-sm text-muted-foreground">
                {errorDetails.solution}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild variant="outline">
                <Link href="/auth/signin">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Try Again
                </Link>
              </Button>
              <Button asChild>
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Need Help?</CardTitle>
            <CardDescription className="text-center">
              Here are some resources that might help you resolve this issue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg border">
                <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h4 className="font-semibold mb-1">Check Status</h4>
                <p className="text-sm text-muted-foreground">
                  Verify if our services are running normally
                </p>
                <Button variant="link" size="sm" className="mt-2">
                  <Link href="/api/health">Check Status</Link>
                </Button>
              </div>

              <div className="text-center p-4 rounded-lg border">
                <HelpCircle className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h4 className="font-semibold mb-1">Documentation</h4>
                <p className="text-sm text-muted-foreground">
                  Browse our help documentation
                </p>
                <Button variant="link" size="sm" className="mt-2">
                  <Link href="/docs">View Docs</Link>
                </Button>
              </div>

              <div className="text-center p-4 rounded-lg border">
                <Mail className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h4 className="font-semibold mb-1">Contact Support</h4>
                <p className="text-sm text-muted-foreground">
                  Get help from our support team
                </p>
                <Button variant="link" size="sm" className="mt-2">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Solutions */}
        <div className="mt-8 text-center">
          <Badge variant="secondary" className="mb-4">
            Common Solutions
          </Badge>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div className="text-left">
              <h4 className="font-semibold text-foreground mb-1">
                Browser Issues
              </h4>
              <ul className="space-y-1">
                <li>• Clear browser cache and cookies</li>
                <li>• Try a different browser</li>
                <li>• Disable browser extensions</li>
              </ul>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-foreground mb-1">
                Network Issues
              </h4>
              <ul className="space-y-1">
                <li>• Check your internet connection</li>
                <li>• Try a different network</li>
                <li>• Disable VPN if using one</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
