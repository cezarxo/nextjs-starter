import { ArrowRight, Code, ExternalLink, Info, Zap } from "lucide-react";
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

export default function InterceptedPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <Badge variant="secondary" className="mb-4">
          Intercepted Routes Example
        </Badge>
        <h1 className="text-4xl font-bold mb-4">Intercepted Routes</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          This page demonstrates intercepted routes in Next.js 15. Intercepted
          routes allow you to show a route in the current layout while keeping
          the URL unchanged.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-blue-500" />
              <CardTitle>Modal-like Experience</CardTitle>
            </div>
            <CardDescription>Show routes without navigation</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Intercepted routes create a modal-like experience where content
              appears in the current layout without changing the URL.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Code className="h-5 w-5 text-green-500" />
              <CardTitle>URL Preservation</CardTitle>
            </div>
            <CardDescription>Keep the current URL intact</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              The URL remains unchanged while showing different content, perfect
              for overlays and modals.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Info className="h-5 w-5 text-purple-500" />
              <CardTitle>Seamless UX</CardTitle>
            </div>
            <CardDescription>Smooth user experience</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Users can navigate back and forth without losing context, creating
              a more intuitive experience.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* How It Works */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>How Intercepted Routes Work</CardTitle>
          <CardDescription>
            Understanding the structure and implementation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">File Structure</h4>
              <div className="bg-muted p-3 rounded-lg space-y-1">
                <div className="text-sm font-mono">app/intercepted/</div>
                <div className="text-sm font-mono ml-4">
                  ├── page.tsx (main page)
                </div>
                <div className="text-sm font-mono ml-4">├── photo/</div>
                <div className="text-sm font-mono ml-8">
                  │ ├── page.tsx (photo page)
                </div>
                <div className="text-sm font-mono ml-8">│ └── @modal/</div>
                <div className="text-sm font-mono ml-12">
                  │ └── (.)photo/[id]/page.tsx (intercepted)
                </div>
                <div className="text-sm font-mono ml-4">└── layout.tsx</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Interception Syntax</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Use parentheses with dots to intercept routes:
              </p>
              <div className="bg-muted p-3 rounded-lg space-y-1">
                <div className="text-sm font-mono">
                  (.)photo/[id] → Intercepts photo/[id]
                </div>
                <div className="text-sm font-mono">
                  (..)photo/[id] → Intercepts parent route
                </div>
                <div className="text-sm font-mono">
                  (...)photo/[id] → Intercepts root route
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Use Cases</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  • <strong>Photo Galleries:</strong> Show full-size images in
                  overlay
                </li>
                <li>
                  • <strong>Product Views:</strong> Quick product details
                  without navigation
                </li>
                <li>
                  • <strong>User Profiles:</strong> Show user info in current
                  context
                </li>
                <li>
                  • <strong>Settings Panels:</strong> Quick access to
                  configuration
                </li>
                <li>
                  • <strong>Notifications:</strong> Show alerts without page
                  change
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Try Intercepted Routes</CardTitle>
          <CardDescription>
            Experience how intercepted routes work
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Click the links below to see intercepted routes in action. Notice
              how the content changes without the URL changing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button asChild variant="outline" className="w-full">
                <Link href="/intercepted/photo/1">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Photo 1
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/intercepted/photo/2">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Photo 2
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/intercepted/photo/3">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Photo 3
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              These links will show the photo content in the current layout
              without changing the URL.
            </p>
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
