import {
  Activity,
  ArrowLeft,
  Calendar,
  Edit,
  Mail,
  MapPin,
  Phone,
  Shield,
  Trash2,
  User,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
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
import { Separator } from "@/components/ui/separator";

// Mock user data - in a real app, this would come from an API
const users = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
    avatar: "/api/placeholder/100/100",
    lastActive: "2 hours ago",
    location: "New York, NY",
    phone: "+1 (555) 123-4567",
    joinDate: "Jan 15, 2024",
    bio: "Senior software engineer with 8+ years of experience in full-stack development. Passionate about building scalable applications and mentoring junior developers.",
    department: "Engineering",
    manager: "Sarah Johnson",
    permissions: ["read", "write", "delete", "admin"],
    recentActivity: [
      { action: "Logged in", timestamp: "2 hours ago", ip: "192.168.1.100" },
      {
        action: "Updated profile",
        timestamp: "1 day ago",
        ip: "192.168.1.100",
      },
      {
        action: "Created new project",
        timestamp: "3 days ago",
        ip: "192.168.1.100",
      },
    ],
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    role: "User",
    status: "Active",
    avatar: "/api/placeholder/100/100",
    lastActive: "1 day ago",
    location: "San Francisco, CA",
    phone: "+1 (555) 234-5678",
    joinDate: "Feb 3, 2024",
    bio: "Product manager with expertise in agile methodologies and user experience design. Focused on delivering customer-centric solutions.",
    department: "Product",
    manager: "Michael Chen",
    permissions: ["read", "write"],
    recentActivity: [
      { action: "Logged in", timestamp: "1 day ago", ip: "10.0.0.50" },
      {
        action: "Updated project status",
        timestamp: "2 days ago",
        ip: "10.0.0.50",
      },
    ],
  },
];

interface UserPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function UserPage({ params }: UserPageProps) {
  const { id } = await params;
  const user = users.find((u) => u.id === id);

  if (!user) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/dashboard/users">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Users
              </Link>
            </Button>
            <div>
              <h1 className="text-4xl font-bold mb-2">{user.name}</h1>
              <p className="text-xl text-muted-foreground">
                User ID: {user.id} - This demonstrates dynamic routing with [id]
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" asChild>
              <Link href={`/dashboard/users/${user.id}/edit`}>
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </Link>
            </Button>
            <Button variant="destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* User Profile */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="text-2xl">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl">{user.name}</CardTitle>
              <CardDescription>{user.email}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Role</span>
                <Badge
                  variant={user.role === "Admin" ? "destructive" : "secondary"}
                >
                  {user.role}
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Status</span>
                <Badge
                  variant={user.status === "Active" ? "default" : "outline"}
                >
                  {user.status}
                </Badge>
              </div>

              <Separator />

              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{user.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Joined {user.joinDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span>Department: {user.department}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  <span>Manager: {user.manager}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* User Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Bio */}
          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{user.bio}</p>
            </CardContent>
          </Card>

          {/* Permissions */}
          <Card>
            <CardHeader>
              <CardTitle>Permissions</CardTitle>
              <CardDescription>
                User access levels and capabilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {user.permissions.map((permission) => (
                  <Badge key={permission} variant="outline">
                    {permission}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                User&apos;s latest actions and login history
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {user.recentActivity.map((activity, index) => (
                  <div
                    key={`${user.id}-activity-${index}`}
                    className="flex items-center justify-between p-3 bg-muted rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <Activity className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{activity.action}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{activity.timestamp}</span>
                      <span>IP: {activity.ip}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Route Information */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Dynamic Route Structure</CardTitle>
          <CardDescription>
            This page demonstrates dynamic routing with [id] parameter
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="font-medium">Current Route:</span>
              <Badge variant="outline">/dashboard/users/{user.id}</Badge>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-medium">Dynamic Parameter:</span>
              <Badge variant="outline">[id] = {user.id}</Badge>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-medium">File Structure:</span>
              <Badge variant="outline">app/dashboard/users/[id]/page.tsx</Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              The [id] folder creates a dynamic route that captures the user ID
              from the URL. This allows you to create a single page component
              that handles multiple user IDs.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
