import {
  Activity,
  ArrowRight,
  BarChart3,
  Calendar,
  FileText,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { authOptions } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/signin");
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
        <p className="text-xl text-muted-foreground">
          Welcome back, {session.user?.name}! This demonstrates nested routing
          with Next.js 15 and protected routes.
        </p>
        <div className="flex items-center space-x-2 mt-2">
          <Badge variant="secondary">
            <Shield className="h-3 w-3 mr-1" />
            Protected Route
          </Badge>
          <Badge variant="outline">Server Component</Badge>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+20.1%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+15.3%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Projects
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-blue-600">+2</span> from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Tasks Completed
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+8.2%</span> from last week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-blue-500" />
              <CardTitle>Users</CardTitle>
            </div>
            <CardDescription>
              Manage user accounts and permissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Total Users
                </span>
                <Badge variant="secondary">2,847</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Active Users
                </span>
                <Badge variant="default">2,123</Badge>
              </div>
              <Button asChild className="w-full mt-4">
                <Link href="/dashboard/users">
                  View Users
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-green-500" />
              <CardTitle>Projects</CardTitle>
            </div>
            <CardDescription>
              Track project progress and milestones
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Active Projects
                </span>
                <Badge variant="secondary">12</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Completed</span>
                <Badge variant="default">8</Badge>
              </div>
              <Button asChild className="w-full mt-4">
                <Link href="/dashboard/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-purple-500" />
              <CardTitle>Analytics</CardTitle>
            </div>
            <CardDescription>
              View detailed analytics and reports
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Page Views
                </span>
                <Badge variant="secondary">45.2K</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Bounce Rate
                </span>
                <Badge variant="destructive">23.4%</Badge>
              </div>
              <Button asChild className="w-full mt-4">
                <Link href="/dashboard/analytics">
                  View Analytics
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Route Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Next.js 15 Routing Examples</CardTitle>
          <CardDescription>
            This dashboard demonstrates various routing patterns available in
            Next.js 15
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold">Nested Routes</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  •{" "}
                  <Link
                    href="/dashboard/users"
                    className="text-primary hover:underline"
                  >
                    /dashboard/users
                  </Link>{" "}
                  - User management
                </li>
                <li>
                  •{" "}
                  <Link
                    href="/dashboard/projects"
                    className="text-primary hover:underline"
                  >
                    /dashboard/projects
                  </Link>{" "}
                  - Project tracking
                </li>
                <li>
                  •{" "}
                  <Link
                    href="/dashboard/analytics"
                    className="text-primary hover:underline"
                  >
                    /dashboard/analytics
                  </Link>{" "}
                  - Analytics dashboard
                </li>
                <li>
                  •{" "}
                  <Link
                    href="/dashboard/settings"
                    className="text-primary hover:underline"
                  >
                    /dashboard/settings
                  </Link>{" "}
                  - User settings
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Dynamic Routes</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  •{" "}
                  <Link
                    href="/dashboard/users/1"
                    className="text-primary hover:underline"
                  >
                    /dashboard/users/[id]
                  </Link>{" "}
                  - User details
                </li>
                <li>
                  •{" "}
                  <Link
                    href="/dashboard/projects/abc-123"
                    className="text-primary hover:underline"
                  >
                    /dashboard/projects/[slug]
                  </Link>{" "}
                  - Project details
                </li>
                <li>
                  •{" "}
                  <Link
                    href="/dashboard/analytics/2024/01"
                    className="text-primary hover:underline"
                  >
                    /dashboard/analytics/[year]/[month]
                  </Link>{" "}
                  - Monthly analytics
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
