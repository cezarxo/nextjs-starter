import {
  Calendar,
  Filter,
  MapPin,
  MoreHorizontal,
  Phone,
  Plus,
  Search,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// Mock user data
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
    avatar: "/api/placeholder/40/40",
    lastActive: "2 hours ago",
    location: "New York, NY",
    phone: "+1 (555) 123-4567",
    joinDate: "Jan 15, 2024",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    role: "User",
    status: "Active",
    avatar: "/api/placeholder/40/40",
    lastActive: "1 day ago",
    location: "San Francisco, CA",
    phone: "+1 (555) 234-5678",
    joinDate: "Feb 3, 2024",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "m.chen@example.com",
    role: "Moderator",
    status: "Inactive",
    avatar: "/api/placeholder/40/40",
    lastActive: "1 week ago",
    location: "Seattle, WA",
    phone: "+1 (555) 345-6789",
    joinDate: "Dec 20, 2023",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    role: "User",
    status: "Active",
    avatar: "/api/placeholder/40/40",
    lastActive: "3 hours ago",
    location: "Austin, TX",
    phone: "+1 (555) 456-7890",
    joinDate: "Mar 1, 2024",
  },
  {
    id: 5,
    name: "David Wilson",
    email: "d.wilson@example.com",
    role: "User",
    status: "Active",
    avatar: "/api/placeholder/40/40",
    lastActive: "5 hours ago",
    location: "Chicago, IL",
    phone: "+1 (555) 567-8901",
    joinDate: "Jan 28, 2024",
  },
];

export default function UsersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Users</h1>
            <p className="text-xl text-muted-foreground">
              Manage user accounts and permissions. This demonstrates nested
              routing.
            </p>
          </div>
          <Button asChild>
            <Link href="/dashboard/users/new">
              <Plus className="mr-2 h-4 w-4" />
              Add User
            </Link>
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Search & Filters</CardTitle>
          <CardDescription>
            Find users by name, email, role, or status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search users..." className="pl-10" />
              </div>
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <Card key={user.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{user.name}</CardTitle>
                    <CardDescription>{user.email}</CardDescription>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Role</span>
                <Badge
                  variant={
                    user.role === "Admin"
                      ? "destructive"
                      : user.role === "Moderator"
                        ? "default"
                        : "secondary"
                  }
                >
                  {user.role}
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Status</span>
                <Badge
                  variant={user.status === "Active" ? "default" : "outline"}
                >
                  {user.status}
                </Badge>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="h-3 w-3" />
                  <span>{user.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>Joined {user.joinDate}</span>
                </div>
              </div>

              <div className="pt-2 border-t">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                  <span>Last Active</span>
                  <span>{user.lastActive}</span>
                </div>
                <Button asChild className="w-full">
                  <Link href={`/dashboard/users/${user.id}`}>View Details</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Route Information */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Nested Route Structure</CardTitle>
          <CardDescription>
            This page demonstrates nested routing: /dashboard/users
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="font-medium">Current Route:</span>
              <Badge variant="outline">/dashboard/users</Badge>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-medium">Parent Route:</span>
              <Badge variant="outline">/dashboard</Badge>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-medium">Child Routes:</span>
              <Badge variant="outline">/dashboard/users/[id]</Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Click on &ldquo;View Details&rdquo; to see dynamic routing in
              action with user IDs.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
