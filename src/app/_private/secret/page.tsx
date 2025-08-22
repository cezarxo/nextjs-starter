import { AlertTriangle, ArrowRight, Eye, Lock, Shield } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SecretPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <Badge variant="destructive" className="mb-4">
          Private Folder Example
        </Badge>
        <h1 className="text-4xl font-bold mb-4">Secret Page</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          This page demonstrates private folders in Next.js 15. Folders starting
          with an underscore are not included in the routing system.
        </p>
      </div>

      {/* Warning */}
      <Card className="mb-8 border-destructive">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <CardTitle className="text-destructive">Important Note</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            This page is accessible because we&apos;re directly linking to it,
            but the
            <code className="bg-muted px-1 rounded">_private</code> folder
            structure demonstrates how to organize code that shouldn&apos;t be
            part of your public routes.
          </p>
        </CardContent>
      </Card>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Lock className="h-5 w-5 text-red-500" />
              <CardTitle>Not Routed</CardTitle>
            </div>
            <CardDescription>Excluded from routing system</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Folders starting with underscore are not included in the Next.js
              routing system, making them perfect for organizing utility code.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Eye className="h-5 w-5 text-blue-500" />
              <CardTitle>Code Organization</CardTitle>
            </div>
            <CardDescription>Better project structure</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Use private folders to organize components, utilities, and other
              code that shouldn&apos;t create public routes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-500" />
              <CardTitle>Security by Design</CardTitle>
            </div>
            <CardDescription>Prevent accidental exposure</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Private folders help prevent accidentally exposing internal code
              through the routing system.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* How It Works */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>How Private Folders Work</CardTitle>
          <CardDescription>
            Understanding the structure and benefits
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Naming Convention</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Any folder that starts with an underscore (
                <code className="bg-muted px-1 rounded">_</code>) is considered
                private and is excluded from the routing system.
              </p>
              <div className="bg-muted p-3 rounded-lg space-y-1">
                <div className="text-sm font-mono">_private/ → Not routed</div>
                <div className="text-sm font-mono">
                  _components/ → Not routed
                </div>
                <div className="text-sm font-mono">_utils/ → Not routed</div>
                <div className="text-sm font-mono">_lib/ → Not routed</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">File Structure Example</h4>
              <div className="bg-muted p-3 rounded-lg space-y-1">
                <div className="text-sm font-mono">app/</div>
                <div className="text-sm font-mono ml-4">├── _private/</div>
                <div className="text-sm font-mono ml-8">│ ├── secret/</div>
                <div className="text-sm font-mono ml-12">
                  │ │ └── page.tsx (NOT accessible via /secret)
                </div>
                <div className="text-sm font-mono ml-8">│ └── utils/</div>
                <div className="text-sm font-mono ml-12">│ └── helper.ts</div>
                <div className="text-sm font-mono ml-4">├── dashboard/</div>
                <div className="text-sm font-mono ml-8">
                  │ └── page.tsx (accessible via /dashboard)
                </div>
                <div className="text-sm font-mono ml-4">
                  └── page.tsx (accessible via /)
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Common Use Cases</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  • <strong>Utility Functions:</strong> Helper functions and
                  utilities
                </li>
                <li>
                  • <strong>Internal Components:</strong> Components not meant
                  for public use
                </li>
                <li>
                  • <strong>Type Definitions:</strong> TypeScript interfaces and
                  types
                </li>
                <li>
                  • <strong>Constants:</strong> Application constants and
                  configuration
                </li>
                <li>
                  • <strong>Test Files:</strong> Test utilities and mocks
                </li>
                <li>
                  • <strong>Build Scripts:</strong> Build-time utilities
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Current Route Status</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">File Location:</span>
                  <Badge variant="outline">app/_private/secret/page.tsx</Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Route Status:</span>
                  <Badge variant="destructive">NOT ROUTED</Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Accessibility:</span>
                  <Badge variant="outline">Direct link only</Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                This page is only accessible because we&apos;re directly linking
                to it. In a real application, users couldn&apos;t navigate to{" "}
                <code className="bg-muted px-1 rounded">/secret</code>.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="text-center">
        <Button asChild>
          <Link href="/dashboard">
            <ArrowRight className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
}
