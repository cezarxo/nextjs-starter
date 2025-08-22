import { ArrowRight, Code, Info, Layers, Zap } from "lucide-react";
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

export default function ParallelPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <Badge variant="secondary" className="mb-4">
          Parallel Routes Example
        </Badge>
        <h1 className="text-4xl font-bold mb-4">Parallel Routes</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          This page demonstrates parallel routes in Next.js 15. Multiple routes
          can render simultaneously in the same view, enabling complex layouts
          and modals.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-blue-500" />
              <CardTitle>Simultaneous Rendering</CardTitle>
            </div>
            <CardDescription>
              Multiple routes render at the same time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Parallel routes allow you to render multiple pages simultaneously,
              creating complex layouts where different sections can load
              independently.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Layers className="h-5 w-5 text-green-500" />
              <CardTitle>Slot-based Architecture</CardTitle>
            </div>
            <CardDescription>
              Use @slots to define parallel routes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Create slots using @folder names. Each slot can have its own
              loading, error, and not-found states.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Code className="h-5 w-5 text-purple-500" />
              <CardTitle>Independent Loading</CardTitle>
            </div>
            <CardDescription>
              Each route loads and updates independently
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Routes can have different loading states, error boundaries, and
              update independently without affecting other routes.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Parallel Routes Information */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>How Parallel Routes Work</CardTitle>
          <CardDescription>
            Understanding the structure and benefits of parallel routes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">File Structure</h4>
              <div className="bg-muted p-3 rounded-lg space-y-1">
                <div className="text-sm font-mono">app/parallel/</div>
                <div className="text-sm font-mono ml-4">
                  ├── page.tsx (default slot)
                </div>
                <div className="text-sm font-mono ml-4">├── @modal/</div>
                <div className="text-sm font-mono ml-8">
                  │ └── page.tsx (modal slot)
                </div>
                <div className="text-sm font-mono ml-4">├── @sidebar/</div>
                <div className="text-sm font-mono ml-8">
                  │ └── page.tsx (sidebar slot)
                </div>
                <div className="text-sm font-mono ml-4">
                  └── layout.tsx (defines slots)
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Slot Definition</h4>
              <p className="text-sm text-muted-foreground mb-3">
                In the layout.tsx file, you define where each slot renders using
                the
                <code className="bg-muted px-1 rounded">@modal</code> and
                <code className="bg-muted px-1 rounded">@sidebar</code> props.
              </p>
              <div className="bg-muted p-3 rounded-lg">
                <code className="text-sm">
                  {`export default function Layout({ children, modal, sidebar }) {
  return (
    <div>
      {sidebar}
      {children}
      {modal}
    </div>
  );
}`}
                </code>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">URL Structure</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Main Page:</span>
                  <Badge variant="outline">/parallel</Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Modal Slot:</span>
                  <Badge variant="outline">/parallel/@modal</Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Sidebar Slot:</span>
                  <Badge variant="outline">/parallel/@sidebar</Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Each slot can have its own route structure and can be accessed
                independently.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Use Cases</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  • <strong>Modals:</strong> Show dialogs without navigation
                </li>
                <li>
                  • <strong>Sidebars:</strong> Independent navigation panels
                </li>
                <li>
                  • <strong>Dashboards:</strong> Multiple widgets loading
                  independently
                </li>
                <li>
                  • <strong>Split Views:</strong> Different content in different
                  areas
                </li>
                <li>
                  • <strong>Conditional UI:</strong> Show/hide sections based on
                  state
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Demo */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Try It Out</CardTitle>
          <CardDescription>
            Experience parallel routes in action
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Click the button below to see the modal slot render in parallel
              with this page. Notice how the modal appears without navigating
              away from this page.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="/parallel/@modal">
                  <Info className="mr-2 h-4 w-4" />
                  Open Modal Slot
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/dashboard">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Go to Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="text-center">
        <Button variant="outline" asChild>
          <Link href="/dashboard">
            <ArrowRight className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
}
