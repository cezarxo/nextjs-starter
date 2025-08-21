import {
  Award,
  Car,
  Gavel,
  Globe,
  Shield,
  TrendingUp,
  Users,
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

export default function AboutPage() {
  const stats = [
    {
      icon: <Car className="h-8 w-8" />,
      number: "10,000+",
      label: "Vehicles Sold",
      description: "Successfully auctioned vehicles",
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: "5,000+",
      label: "Happy Customers",
      description: "Satisfied buyers and sellers",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      number: "15+",
      label: "Years Experience",
      description: "In international trade",
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "99%",
      label: "Success Rate",
      description: "Successful deliveries",
    },
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trust & Transparency",
      description:
        "We believe in complete transparency in all our dealings, from vehicle condition reports to shipping costs.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Quality & Excellence",
      description:
        "Every vehicle we auction meets our strict quality standards, ensuring customer satisfaction.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Reach",
      description:
        "Connecting buyers and sellers across continents with reliable shipping and logistics solutions.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer First",
      description:
        "Our customers are at the heart of everything we do, from personalized service to after-sales support.",
    },
  ];

  const team = [
    {
      name: "Ahmed Al Mansouri",
      role: "CEO & Founder",
      experience: "20+ years in international trade",
      expertise: "Strategic planning, market expansion",
    },
    {
      name: "Sarah Johnson",
      role: "Head of Operations",
      experience: "15+ years in logistics",
      expertise: "Supply chain management, quality control",
    },
    {
      name: "Michael Chen",
      role: "Head of Technology",
      experience: "12+ years in software development",
      expertise: "Platform development, digital solutions",
    },
    {
      name: "Fatima Al Zahra",
      role: "Head of Customer Relations",
      experience: "10+ years in customer service",
      expertise: "Client satisfaction, relationship management",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About Marhaba Auction
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Leading the way in premium used car auctions and international
            shipping from USA & Canada to the UAE.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/auctions" className="flex items-center space-x-2">
                <Gavel className="h-5 w-5" />
                <span>Explore Auctions</span>
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact" className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Meet Our Team</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2009, Marhaba Auction began as a small family
                  business with a vision to bridge the gap between premium used
                  vehicles in North America and discerning buyers in the UAE.
                </p>
                <p>
                  What started as a local auction house has grown into a
                  comprehensive international platform, connecting buyers and
                  sellers across continents while maintaining the personal touch
                  that made us successful.
                </p>
                <p>
                  Today, we're proud to be the leading platform for used car
                  auctions in the region, with thousands of satisfied customers
                  and a reputation for quality, transparency, and reliability.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-3">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-3">
                  <Gavel className="h-8 w-8 text-primary" />
                  <span>Our Mission</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To provide the highest quality used vehicles through
                  transparent, fair, and efficient auction processes, while
                  offering world-class shipping and logistics services that make
                  international car buying accessible and reliable.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-3">
                  <Globe className="h-8 w-8 text-primary" />
                  <span>Our Vision</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To become the global leader in international vehicle auctions
                  and shipping, setting industry standards for quality,
                  transparency, and customer satisfaction while expanding our
                  reach to serve customers worldwide.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card
                key={value.title}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <Card
                key={member.name}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                    <Users className="h-10 w-10" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm">
                    <p className="font-medium">{member.experience}</p>
                    <p className="text-muted-foreground">{member.expertise}</p>
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
            Ready to Experience Marhaba Auction?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who trust us with their
            vehicle needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/auctions">Start Bidding</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
