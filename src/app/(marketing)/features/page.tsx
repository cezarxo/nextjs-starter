import {
  ArrowRight,
  Check,
  Code,
  Database,
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

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lightning Fast",
    description:
      "Built with Next.js 15 and Turbopack for incredible performance",
    benefits: [
      "Instant page loads",
      "Optimized bundles",
      "Smart caching",
      "Edge runtime ready",
    ],
    color: "text-blue-500",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Enterprise Security",
    description: "Production-ready security features and best practices",
    benefits: [
      "CSRF protection",
      "XSS prevention",
      "Secure headers",
      "Authentication ready",
    ],
    color: "text-green-500",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Beautiful Design",
    description: "Modern UI components with shadcn/ui and Tailwind CSS v4",
    benefits: [
      "Consistent design system",
      "Dark mode support",
      "Responsive layouts",
      "Accessible components",
    ],
    color: "text-purple-500",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Developer Experience",
    description: "Built for developers with modern tooling and workflows",
    benefits: [
      "TypeScript support",
      "Hot reloading",
      "ESLint + Biome",
      "Git hooks",
    ],
    color: "text-orange-500",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Data Management",
    description: "Powerful state management with TanStack Query",
    benefits: [
      "Server state sync",
      "Real-time updates",
      "Optimistic updates",
      "Background refetching",
    ],
    color: "text-red-500",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Global Ready",
    description: "Internationalization and deployment ready",
    benefits: [
      "Multi-language support",
      "Vercel deployment",
      "Docker support",
      "CI/CD pipeline",
    ],
    color: "text-indigo-500",
  },
];

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <Badge variant="secondary" className="mb-4">
          Route Groups Example
        </Badge>
        <h1 className="text-4xl font-bold mb-4">Features</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          This page demonstrates route groups with the (marketing) folder
          structure. Route groups don&apos;t affect the URL but help organize
          your code.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {features.map((feature) => (
          <Card
            key={`feature-${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
            className="hover:shadow-lg transition-shadow"
          >
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 rounded-lg bg-muted ${feature.color}`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </div>
              <CardDescription className="text-base">
                {feature.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li
                    key={`${feature.title.toLowerCase().replace(/\s+/g, "-")}-benefit-${benefitIndex}`}
                    className="flex items-center space-x-2 text-sm"
                  >
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Route Group Information */}
      <Card>
        <CardHeader>
          <CardTitle>Route Groups Explained</CardTitle>
          <CardDescription>
            Understanding how route groups work in Next.js 15
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">What are Route Groups?</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Route groups allow you to organize your routes into logical
                groups without affecting the URL structure. They are created by
                wrapping folder names in parentheses.
              </p>
              <div className="bg-muted p-3 rounded-lg">
                <code className="text-sm">
                  app/(marketing)/features/page.tsx → /features
                </code>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">File Structure</h4>
              <div className="bg-muted p-3 rounded-lg space-y-1">
                <div className="text-sm font-mono">app/</div>
                <div className="text-sm font-mono ml-4">├── (marketing)/</div>
                <div className="text-sm font-mono ml-8">├── features/</div>
                <div className="text-sm font-mono ml-12">│ └── page.tsx</div>
                <div className="text-sm font-mono ml-8">├── about/</div>
                <div className="text-sm font-mono ml-12">│ └── page.tsx</div>
                <div className="text-sm font-mono ml-8">└── contact/</div>
                <div className="text-sm font-mono ml-12"> └── page.tsx</div>
                <div className="text-sm font-mono">├── (dashboard)/</div>
                <div className="text-sm font-mono ml-8">├── dashboard/</div>
                <div className="text-sm font-mono ml-12">│ └── page.tsx</div>
                <div className="text-sm font-mono ml-8">└── users/</div>
                <div className="text-sm font-mono ml-12"> └── page.tsx</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Benefits of Route Groups</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  • <strong>Organization:</strong> Group related routes together
                </li>
                <li>
                  • <strong>Layouts:</strong> Different layouts for different
                  sections
                </li>
                <li>
                  • <strong>Code Splitting:</strong> Better bundle organization
                </li>
                <li>
                  • <strong>Team Work:</strong> Multiple teams can work on
                  different sections
                </li>
                <li>
                  • <strong>URL Cleanliness:</strong> No impact on actual URLs
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Current Route</h4>
              <div className="flex items-center space-x-2">
                <span className="font-medium">URL:</span>
                <Badge variant="outline">/features</Badge>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <span className="font-medium">File:</span>
                <Badge variant="outline">
                  app/(marketing)/features/page.tsx
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Notice how the URL is{" "}
                <code className="bg-muted px-1 rounded">/features</code> even
                though the file is in
                <code className="bg-muted px-1 rounded">
                  (marketing)/features/
                </code>
                . The parentheses create a logical group without affecting the
                URL structure.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="mt-8 text-center">
        <Button asChild>
          <Link href="/dashboard">
            <ArrowRight className="mr-2 h-4 w-4" />
            Go to Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
}
