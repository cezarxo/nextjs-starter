import { Code, Home, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center text-muted-foreground mb-6">
          <Code className="h-8 w-8" />
        </div>

        <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Page Not Found
        </h2>

        <p className="text-muted-foreground mb-8">
          The page you&apos;re looking for doesn&apos;t exist. It might have
          been moved, deleted, or you entered the wrong URL.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Button asChild>
            <Link href="/" className="flex items-center space-x-2">
              <Home className="h-4 w-4" />
              <span>Go Home</span>
            </Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="/components" className="flex items-center space-x-2">
              <Search className="h-4 w-4" />
              <span>View Components</span>
            </Link>
          </Button>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>Popular pages:</p>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            <Link href="/dashboard" className="text-primary hover:underline">
              Dashboard
            </Link>
            <span>•</span>
            <Link href="/features" className="text-primary hover:underline">
              Features
            </Link>
            <span>•</span>
            <Link href="/about" className="text-primary hover:underline">
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
