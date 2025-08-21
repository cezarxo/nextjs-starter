import { Car, Clock, Gavel, Globe, MapPin, Shield, Truck } from "lucide-react";
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

export default function HomePage() {
  const featuredVehicles = [
    {
      id: "1",
      name: "2020 BMW X5 xDrive40i",
      image: "/api/placeholder/400/300",
      price: "$45,000",
      location: "Toronto, Canada",
      auctionEnds: "2 days",
      bids: 12,
      status: "Live",
    },
    {
      id: "2",
      name: "2019 Mercedes-Benz C-Class",
      image: "/api/placeholder/400/300",
      price: "$38,500",
      location: "Miami, USA",
      auctionEnds: "1 day",
      bids: 8,
      status: "Live",
    },
    {
      id: "3",
      name: "2021 Audi Q7 Premium",
      image: "/api/placeholder/400/300",
      price: "$52,000",
      location: "Vancouver, Canada",
      auctionEnds: "3 days",
      bids: 15,
      status: "Live",
    },
  ];

  const features = [
    {
      icon: <Gavel className="h-8 w-8" />,
      title: "Live Auctions",
      description: "Real-time bidding on premium vehicles from USA & Canada",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Global Shipping",
      description: "Door-to-door delivery from North America to UAE",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Guaranteed",
      description: "All vehicles inspected and certified before auction",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Online & Onsite",
      description: "Bid from anywhere or join us at our auction centers",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-bg py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
              Premium Used Car
              <span className="block gradient-text mt-2">Auctions</span>
              <span className="block text-2xl md:text-3xl text-muted-foreground font-normal mt-4">
                USA & Canada to UAE
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover exceptional vehicles through our live auctions. We source
              premium used cars from North America and deliver them directly to
              the UAE with our comprehensive shipping service.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                asChild
                className="button-glow bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/70 text-lg px-8 py-6 h-auto"
              >
                <Link href="/auctions" className="flex items-center space-x-3">
                  <Gavel className="h-6 w-6" />
                  <span>View Live Auctions</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="button-glow border-primary/40 hover:border-primary hover:bg-primary/10 text-lg px-8 py-6 h-auto"
              >
                <Link href="/shipping" className="flex items-center space-x-3">
                  <Truck className="h-6 w-6" />
                  <span>Learn About Shipping</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">Marhaba</span> Auction?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide the most comprehensive and reliable car auction
              experience in the region
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="text-center border-0 shadow-lg card-hover bg-white/50 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <div className="group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicles Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Vehicles</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover premium vehicles available for auction right now
            </p>
            <Button
              variant="outline"
              asChild
              className="button-glow border-primary/40 hover:border-primary hover:bg-primary/10"
            >
              <Link href="/vehicles">View All Vehicles</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVehicles.map((vehicle) => (
              <Card
                key={vehicle.id}
                className="overflow-hidden card-hover bg-white/50 backdrop-blur-sm border-0 shadow-lg"
              >
                <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted/30 flex items-center justify-center relative overflow-hidden">
                  <Car className="h-20 w-20 text-primary/60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-bold">
                      {vehicle.name}
                    </CardTitle>
                    <Badge
                      variant={
                        vehicle.status === "Live" ? "default" : "secondary"
                      }
                      className="bg-primary text-primary-foreground"
                    >
                      {vehicle.status}
                    </Badge>
                  </div>
                  <CardDescription className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{vehicle.location}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold gradient-text">
                        {vehicle.price}
                      </span>
                      <div className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                        <Clock className="h-4 w-4 inline mr-1" />
                        {vehicle.auctionEnds}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="bg-muted/50 px-3 py-1 rounded-full">
                        {vehicle.bids} bids
                      </span>
                      <Button
                        size="sm"
                        asChild
                        className="button-glow bg-gradient-to-r from-primary to-primary/90"
                      >
                        <Link href={`/auctions/${vehicle.id}`}>Place Bid</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Ready to Start Bidding?
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-95 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who have found their perfect
            vehicle through Marhaba Auction.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="button-glow bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto"
            >
              <Link href="/auctions">Browse Auctions</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="button-glow border-white/30 hover:border-white hover:bg-white/20 text-lg px-8 py-6 h-auto"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
