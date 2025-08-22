import {
  Code,
  Database,
  ExternalLink,
  Github,
  Globe,
  Palette,
  Shield,
  Zap,
} from "lucide-react";
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

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">About This Starter</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A comprehensive Next.js 15 starter template with modern tooling,
          beautiful UI components, and production-ready configuration.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-blue-500" />
              <CardTitle>Next.js 15</CardTitle>
            </div>
            <CardDescription>
              Latest features with App Router, Server Components, and Turbopack
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Badge variant="secondary">App Router</Badge>
              <Badge variant="secondary">Server Components</Badge>
              <Badge variant="secondary">Turbopack</Badge>
              <Badge variant="secondary">TypeScript</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Palette className="h-5 w-5 text-green-500" />
              <CardTitle>Design System</CardTitle>
            </div>
            <CardDescription>
              Beautiful shadcn/ui components with Tailwind CSS v4
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Badge variant="secondary">shadcn/ui</Badge>
              <Badge variant="secondary">Tailwind CSS v4</Badge>
              <Badge variant="secondary">Dark Mode</Badge>
              <Badge variant="secondary">Responsive</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Code className="h-5 w-5 text-purple-500" />
              <CardTitle>Developer Experience</CardTitle>
            </div>
            <CardDescription>
              Modern tooling for efficient development
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Badge variant="secondary">Biome</Badge>
              <Badge variant="secondary">ESLint</Badge>
              <Badge variant="secondary">Prettier</Badge>
              <Badge variant="secondary">Husky</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Database className="h-5 w-5 text-orange-500" />
              <CardTitle>State Management</CardTitle>
            </div>
            <CardDescription>
              Powerful data fetching and state management
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Badge variant="secondary">TanStack Query</Badge>
              <Badge variant="secondary">React Query</Badge>
              <Badge variant="secondary">Axios</Badge>
              <Badge variant="secondary">WebSockets</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-red-500" />
              <CardTitle>Deployment Ready</CardTitle>
            </div>
            <CardDescription>
              Production-ready configuration and deployment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Badge variant="secondary">Docker</Badge>
              <Badge variant="secondary">Vercel</Badge>
              <Badge variant="secondary">Netlify</Badge>
              <Badge variant="secondary">CI/CD</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-indigo-500" />
              <CardTitle>Best Practices</CardTitle>
            </div>
            <CardDescription>
              Industry-standard patterns and security
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Badge variant="secondary">Security</Badge>
              <Badge variant="secondary">Performance</Badge>
              <Badge variant="secondary">Accessibility</Badge>
              <Badge variant="secondary">SEO</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tech Stack */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Technology Stack</CardTitle>
          <CardDescription>
            Everything you need to build modern web applications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">Frontend</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>• Next.js 15.5.0</div>
                <div>• React 18</div>
                <div>• TypeScript 5</div>
                <div>• Tailwind CSS v4</div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">UI Components</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>• shadcn/ui</div>
                <div>• Radix UI</div>
                <div>• Lucide Icons</div>
                <div>• Framer Motion</div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">Development</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>• Bun Package Manager</div>
                <div>• Biome Formatter</div>
                <div>• ESLint</div>
                <div>• Prettier</div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">Infrastructure</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>• Docker</div>
                <div>• GitHub Actions</div>
                <div>• Vercel/Netlify</div>
                <div>• Environment Config</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Getting Started */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
          <CardDescription>Quick setup guide for developers</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2">1. Install Dependencies</h4>
            <code className="bg-background px-2 py-1 rounded text-sm">
              bun install
            </code>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2">2. Run Development Server</h4>
            <code className="bg-background px-2 py-1 rounded text-sm">
              bun run dev
            </code>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2">3. Build for Production</h4>
            <code className="bg-background px-2 py-1 rounded text-sm">
              bun run build
            </code>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg">
          <Link href="/components">
            <Code className="mr-2 h-4 w-4" />
            View Components
          </Link>
        </Button>
        <Button variant="outline" asChild size="lg">
          <Link href="https://github.com" target="_blank">
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
