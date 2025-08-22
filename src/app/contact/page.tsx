import {
  BookOpen,
  Bug,
  ExternalLink,
  Github,
  Lightbulb,
  Mail,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Get Help & Support</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Need help with the Next.js starter template? Have questions about
          setup, configuration, or want to contribute? We&apos;re here to help!
        </p>
      </div>

      {/* Support Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-blue-500" />
              <CardTitle>Documentation</CardTitle>
            </div>
            <CardDescription>
              Comprehensive guides and tutorials
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Start with our detailed documentation covering setup,
              configuration, and best practices for the Next.js starter
              template.
            </p>
            <Button asChild className="w-full">
              <Link href="/components">
                <BookOpen className="mr-2 h-4 w-4" />
                View Docs
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Github className="h-5 w-5 text-green-500" />
              <CardTitle>GitHub Issues</CardTitle>
            </div>
            <CardDescription>Report bugs and request features</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Found a bug or have a feature request? Create an issue on our
              GitHub repository for the fastest response.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="https://github.com" target="_blank">
                <Github className="mr-2 h-4 w-4" />
                Open Issue
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5 text-purple-500" />
              <CardTitle>Community</CardTitle>
            </div>
            <CardDescription>Join our developer community</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Connect with other developers using this starter template. Share
              tips, ask questions, and collaborate on improvements.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="https://discord.gg" target="_blank">
                <MessageCircle className="mr-2 h-4 w-4" />
                Join Discord
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Bug className="h-5 w-5 text-red-500" />
              <CardTitle>Bug Reports</CardTitle>
            </div>
            <CardDescription>Help us improve the template</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Encountered an issue? Detailed bug reports help us fix problems
              faster and improve the template for everyone.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="https://github.com/issues" target="_blank">
                <Bug className="mr-2 h-4 w-4" />
                Report Bug
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              <CardTitle>Feature Requests</CardTitle>
            </div>
            <CardDescription>Suggest improvements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Have an idea for a new feature or improvement? We&apos;d love to
              hear your suggestions to make this starter template even better.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="https://github.com/discussions" target="_blank">
                <Lightbulb className="mr-2 h-4 w-4" />
                Suggest Feature
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-indigo-500" />
              <CardTitle>Direct Contact</CardTitle>
            </div>
            <CardDescription>Get in touch directly</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              For urgent matters or specific questions that don&apos;t fit other
              categories, send us a direct message.
            </p>
            <Button asChild className="w-full">
              <Link href="#contact-form">
                <Mail className="mr-2 h-4 w-4" />
                Send Message
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Help Section */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Quick Help & Common Questions</CardTitle>
          <CardDescription>
            Find answers to frequently asked questions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold mb-2">How do I get started?</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Clone the repository, run{" "}
                <code className="bg-muted px-1 rounded">bun install</code>, then{" "}
                <code className="bg-muted px-1 rounded">bun run dev</code> to
                start the development server.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold mb-2">
                How do I add new shadcn/ui components?
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                Use{" "}
                <code className="bg-muted px-1 rounded">
                  bunx shadcn@latest add [component-name]
                </code>
                to install new components from the official registry.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold mb-2">
                How do I customize the theme?
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                Modify the CSS variables in{" "}
                <code className="bg-muted px-1 rounded">
                  src/styles/globals.css
                </code>
                and use the ThemeToggle component for dark/light mode switching.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold mb-2">
                How do I deploy this template?
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                Use <code className="bg-muted px-1 rounded">bun run build</code>{" "}
                to build for production, then deploy to Vercel, Netlify, or any
                other hosting platform.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Form */}
      <Card id="contact-form">
        <CardHeader>
          <CardTitle>Send Us a Message</CardTitle>
          <CardDescription>
            Have a specific question or need personalized help? Fill out the
            form below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="What's this about?" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Describe your question or issue in detail..."
                rows={5}
              />
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="newsletter" className="rounded" />
              <Label htmlFor="newsletter" className="text-sm">
                Subscribe to updates about new features and improvements
              </Label>
            </div>

            <Button type="submit" className="w-full">
              <Mail className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Additional Resources</CardTitle>
          <CardDescription>More ways to get help and learn</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Official Documentation</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  •{" "}
                  <Link
                    href="https://nextjs.org/docs"
                    target="_blank"
                    className="text-primary hover:underline"
                  >
                    Next.js Documentation
                  </Link>
                </li>
                <li>
                  •{" "}
                  <Link
                    href="https://ui.shadcn.com"
                    target="_blank"
                    className="text-primary hover:underline"
                  >
                    shadcn/ui Components
                  </Link>
                </li>
                <li>
                  •{" "}
                  <Link
                    href="https://tailwindcss.com/docs"
                    target="_blank"
                    className="text-primary hover:underline"
                  >
                    Tailwind CSS Guide
                  </Link>
                </li>
                <li>
                  •{" "}
                  <Link
                    href="https://tanstack.com/query"
                    target="_blank"
                    className="text-primary hover:underline"
                  >
                    TanStack Query Docs
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Community & Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  •{" "}
                  <Link
                    href="https://github.com"
                    target="_blank"
                    className="text-primary hover:underline"
                  >
                    GitHub Repository
                  </Link>
                </li>
                <li>
                  •{" "}
                  <Link
                    href="https://discord.gg"
                    target="_blank"
                    className="text-primary hover:underline"
                  >
                    Discord Community
                  </Link>
                </li>
                <li>
                  •{" "}
                  <Link
                    href="https://stackoverflow.com"
                    target="_blank"
                    className="text-primary hover:underline"
                  >
                    Stack Overflow
                  </Link>
                </li>
                <li>
                  •{" "}
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    className="text-primary hover:underline"
                  >
                    Follow Updates
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
