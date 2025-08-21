import { Car, Home, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center text-muted-foreground mb-6">
          <Car className="h-8 w-8" />
        </div>

        <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Page Not Found
        </h2>

        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist. It might have been moved,
          deleted, or you entered the wrong URL.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Button asChild>
            <Link href="/" className="flex items-center space-x-2">
              <Home className="h-4 w-4" />
              <span>Go Home</span>
            </Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="/vehicles" className="flex items-center space-x-2">
              <Search className="h-4 w-4" />
              <span>Browse Vehicles</span>
            </Link>
          </Button>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>Popular pages:</p>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            <Link href="/auctions" className="text-primary hover:underline">
              Live Auctions
            </Link>
            <span>•</span>
            <Link href="/shipping" className="text-primary hover:underline">
              Shipping Services
            </Link>
            <span>•</span>
            <Link href="/about" className="text-primary hover:underline">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
