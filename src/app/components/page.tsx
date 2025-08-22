"use client";

import {
  AlertCircle,
  Bell,
  Calendar,
  Check,
  ChevronDown,
  Download,
  Heart,
  Info,
  Mail,
  Plus,
  Settings,
  Star,
  User,
} from "lucide-react";
import { useState } from "react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Separator,
  Skeleton,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
} from "@/components/ui";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function ComponentsPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Component Showcase</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Explore all the beautiful shadcn/ui components available in this
          starter template. Each component is fully accessible, customizable,
          and built with modern design principles.
        </p>
      </div>

      {/* Component Sections */}
      <Tabs defaultValue="buttons" className="space-y-8">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
          <TabsTrigger value="buttons">Buttons</TabsTrigger>
          <TabsTrigger value="inputs">Inputs</TabsTrigger>
          <TabsTrigger value="layout">Layout</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
          <TabsTrigger value="navigation">Navigation</TabsTrigger>
          <TabsTrigger value="data">Data</TabsTrigger>
          <TabsTrigger value="overlay">Overlay</TabsTrigger>
          <TabsTrigger value="misc">Misc</TabsTrigger>
        </TabsList>

        {/* Buttons Tab */}
        <TabsContent value="buttons">
          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
              <CardDescription>
                Different button variants and sizes for various use cases.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Variants</h3>
                <div className="flex flex-wrap gap-2">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">Sizes</h3>
                <div className="flex flex-wrap items-center gap-2">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">With Icons</h3>
                <div className="flex flex-wrap gap-2">
                  <Button>
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </Button>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                  <Button variant="secondary">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">States</h3>
                <div className="flex flex-wrap gap-2">
                  <Button disabled>Disabled</Button>
                  <Button disabled={isLoading}>
                    {isLoading ? "Loading..." : "Click me"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Inputs Tab */}
        <TabsContent value="inputs">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Form Controls</CardTitle>
                <CardDescription>
                  Input fields, textareas, and form elements.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here"
                    rows={3}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>

                <Button onClick={handleSubmit} className="w-full">
                  Submit Form
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Interactive Elements</CardTitle>
                <CardDescription>
                  Buttons, toggles, and interactive components.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Theme Toggle</Label>
                  <ThemeToggle />
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label>Popover Example</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="justify-between">
                        Open popover
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="font-medium">Popover Content</h4>
                        <p className="text-sm text-muted-foreground">
                          This is a popover with some content inside.
                        </p>
                        <div className="flex gap-2">
                          <Button size="sm">Action</Button>
                          <Button size="sm" variant="outline">
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label>Dialog Example</Label>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Are you sure?</DialogTitle>
                        <DialogDescription>
                          This action cannot be undone. This will permanently
                          delete your data.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex justify-end gap-2">
                        <Button variant="outline">Cancel</Button>
                        <Button variant="destructive">Delete</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Layout Tab */}
        <TabsContent value="layout">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Cards</CardTitle>
                <CardDescription>
                  Flexible containers for content with headers, bodies, and
                  footers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Simple Card</CardTitle>
                      <CardDescription>
                        A basic card with title and description.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        This is the main content of the card.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Card with Footer</CardTitle>
                      <CardDescription>
                        A card that includes a footer section.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        This card has a footer with actions.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm">
                        Action
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Interactive Card</CardTitle>
                      <CardDescription>
                        A card with interactive elements.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-2">
                        <Avatar>
                          <AvatarImage src="/api/placeholder/40/40" />
                          <AvatarFallback>UN</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">User Name</p>
                          <p className="text-xs text-muted-foreground">
                            @username
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="justify-between">
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="sm">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Star className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button size="sm">Follow</Button>
                    </CardFooter>
                  </Card>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Separator</CardTitle>
                <CardDescription>
                  Visual dividers to separate content sections.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>Content above separator</p>
                  <Separator />
                  <p>Content below separator</p>
                  <div className="flex items-center space-x-4">
                    <span>Item 1</span>
                    <Separator orientation="vertical" className="h-4" />
                    <span>Item 2</span>
                    <Separator orientation="vertical" className="h-4" />
                    <span>Item 3</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Feedback Tab */}
        <TabsContent value="feedback">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Alerts</CardTitle>
                <CardDescription>
                  Important messages and notifications for users.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Information</AlertTitle>
                  <AlertDescription>
                    This is an informational alert with useful details.
                  </AlertDescription>
                </Alert>

                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Something went wrong. Please try again later.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Badges</CardTitle>
                <CardDescription>
                  Small status indicators and labels.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <Badge variant="secondary">With Icon</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Loading States</CardTitle>
                <CardDescription>
                  Skeleton loaders and loading indicators.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-4 w-[150px]" />
                </div>

                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Navigation Tab */}
        <TabsContent value="navigation">
          <Card>
            <CardHeader>
              <CardTitle>Tabs</CardTitle>
              <CardDescription>
                Organize content into multiple panels.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="tab1" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Tab 1 Content</CardTitle>
                      <CardDescription>
                        This is the content for the first tab.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="tab2" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Tab 2 Content</CardTitle>
                      <CardDescription>
                        This is the content for the second tab.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="tab3" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Tab 3 Content</CardTitle>
                      <CardDescription>
                        This is the content for the third tab.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Data Tab */}
        <TabsContent value="data">
          <Card>
            <CardHeader>
              <CardTitle>Avatar</CardTitle>
              <CardDescription>
                User profile pictures and placeholder avatars.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/api/placeholder/40/40" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="/nonexistent.jpg" />
                  <AvatarFallback>FB</AvatarFallback>
                </Avatar>
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/api/placeholder/64/64" />
                  <AvatarFallback>LG</AvatarFallback>
                </Avatar>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Overlay Tab */}
        <TabsContent value="overlay">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Dialog</CardTitle>
                <CardDescription>
                  Modal dialogs for important actions and confirmations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Confirm Action</DialogTitle>
                      <DialogDescription>
                        Are you sure you want to proceed with this action? This
                        cannot be undone.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline">Cancel</Button>
                      <Button>Confirm</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Popover</CardTitle>
                <CardDescription>
                  Floating content panels triggered by user interaction.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="space-y-3">
                      <h4 className="font-medium">Quick Settings</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="notifications" />
                          <Label htmlFor="notifications">
                            Enable notifications
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="updates" />
                          <Label htmlFor="updates">Auto-updates</Label>
                        </div>
                      </div>
                      <Button size="sm" className="w-full">
                        Save Changes
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Misc Tab */}
        <TabsContent value="misc">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Theme Toggle</CardTitle>
                <CardDescription>
                  Switch between light, dark, and system themes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span>Current theme toggle:</span>
                  <ThemeToggle />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Combined Elements</CardTitle>
                <CardDescription>
                  Multiple components working together.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src="/api/placeholder/40/40" />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">Alex Brown</span>
                      <Badge variant="secondary">Pro</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Product Designer
                    </p>
                  </div>
                  <Button size="sm">
                    <Bell className="h-4 w-4 mr-2" />
                    Follow
                  </Button>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Last active: 2 hours ago</span>
                  </div>
                  <Badge variant="outline">
                    <Check className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
