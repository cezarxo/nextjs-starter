"use client";

import { LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function UserProfile() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center space-x-2">
        <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />
        <div className="h-4 w-20 bg-muted rounded animate-pulse" />
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="sm" asChild>
          <Link href="/auth/signin">Sign In</Link>
        </Button>
        <Button size="sm" asChild>
          <Link href="/auth/signup">Sign Up</Link>
        </Button>
      </div>
    );
  }

  if (!session?.user) {
    return null;
  }

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  const getUserInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={session.user.image || ""}
              alt={session.user.name || ""}
            />
            <AvatarFallback>
              {session.user.name ? getUserInitials(session.user.name) : "U"}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {session.user.name}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {session.user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href="/dashboard" className="cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/profile" className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span>Profile Settings</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="cursor-pointer text-destructive focus:text-destructive"
          onClick={handleSignOut}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sign Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
