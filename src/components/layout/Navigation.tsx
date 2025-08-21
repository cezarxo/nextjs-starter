"use client";

import { Gavel, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

export default function Navigation() {
  return (
    <nav className="nav-blur sticky top-0 z-50 border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Logo size="lg" href="/" />

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/auctions"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-105 relative group"
            >
              Live Auctions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
            </Link>
            <Link
              href="/vehicles"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-105 relative group"
            >
              Vehicles
              <span className="absolute -bottom-1 left-0 w-0 h-0 bg-primary transition-all duration-200 group-hover:w-full" />
            </Link>
            <Link
              href="/shipping"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-105 relative group"
            >
              Shipping
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-105 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-105 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="button-glow border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              <Link href="/auctions" className="flex items-center space-x-2">
                <Gavel className="h-4 w-4" />
                <span>View Auctions</span>
              </Link>
            </Button>
            <Button
              size="sm"
              asChild
              className="button-glow bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Get Quote</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
