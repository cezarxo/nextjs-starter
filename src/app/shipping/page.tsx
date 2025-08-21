import {
  Clock,
  DollarSign,
  FileText,
  MapPin,
  Plane,
  Shield,
  Ship,
  Truck,
} from "lucide-react";
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

export default function ShippingPage() {
  const shippingServices = [
    {
      icon: <Ship className="h-8 w-8" />,
      title: "Ocean Freight",
      description: "Most cost-effective option for vehicle shipping",
      duration: "25-35 days",
      cost: "From $2,500",
      features: [
        "Container shipping",
        "Roll-on/Roll-off",
        "Insurance included",
      ],
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: "Air Freight",
      description: "Fastest shipping option for urgent deliveries",
      duration: "3-7 days",
      cost: "From $8,000",
      features: ["Express delivery", "Door-to-door", "Priority handling"],
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Land Transport",
      description: "Reliable ground transportation within regions",
      duration: "5-15 days",
      cost: "From $1,500",
      features: [
        "Enclosed transport",
        "Real-time tracking",
        "Professional drivers",
      ],
    },
  ];

  const shippingSteps = [
    {
      step: "01",
      title: "Vehicle Inspection",
      description: "Our team inspects and documents your vehicle's condition",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      step: "02",
      title: "Documentation",
      description:
        "We handle all import/export paperwork and customs clearance",
      icon: <FileText className="h-6 w-6" />,
    },
    {
      step: "03",
      title: "Shipping & Tracking",
      description: "Your vehicle is shipped with real-time tracking updates",
      icon: <Truck className="h-6 w-6" />,
    },
    {
      step: "04",
      title: "Delivery",
      description: "Door-to-door delivery to your location in the UAE",
      icon: <MapPin className="h-6 w-6" />,
    },
  ];

  const locations = [
    {
      country: "United States",
      cities: ["Miami", "Los Angeles", "New York", "Chicago", "Houston"],
      ports: ["Port of Miami", "Port of Los Angeles", "Port of New York"],
    },
    {
      country: "Canada",
      cities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Edmonton"],
      ports: ["Port of Vancouver", "Port of Montreal", "Port of Halifax"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Global Car Shipping
            <span className="block text-primary">USA & Canada to UAE</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Professional vehicle shipping services with door-to-door delivery.
            We handle everything from pickup to customs clearance to final
            delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact" className="flex items-center space-x-2">
                <Truck className="h-5 w-5" />
                <span>Get Shipping Quote</span>
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/auctions" className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Browse Vehicles</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Shipping Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Shipping Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {shippingServices.map((service) => (
              <Card
                key={service.title}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-center space-x-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4" />
                      <span>{service.cost}</span>
                    </div>
                  </div>
                  <ul className="text-sm space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {shippingSteps.map((step) => (
              <Card key={step.step} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mb-4">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Service Locations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location) => (
              <Card key={location.country}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>{location.country}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Major Cities</h4>
                    <div className="flex flex-wrap gap-2">
                      {location.cities.map((city) => (
                        <Badge key={city} variant="outline">
                          {city}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Ports</h4>
                    <div className="space-y-1">
                      {location.ports.map((port) => (
                        <p key={port} className="text-sm text-muted-foreground">
                          {port}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Ship Your Vehicle?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free shipping quote and let us handle the logistics while you
            focus on finding your perfect vehicle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/auctions">Browse Vehicles</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
