import { Car, Clock, Filter, Gavel, MapPin, Search, Users } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AuctionsPage() {
  const auctions = [
    {
      id: "1",
      title: "2020 BMW X5 xDrive40i",
      image: "/api/placeholder/400/300",
      currentBid: "$45,000",
      startingBid: "$40,000",
      location: "Toronto, Canada",
      auctionEnds: "2024-01-15T18:00:00Z",
      bids: 12,
      status: "Live",
      category: "SUV",
      year: "2020",
      mileage: "45,000 km",
    },
    {
      id: "2",
      title: "2019 Mercedes-Benz C-Class",
      image: "/api/placeholder/400/300",
      currentBid: "$38,500",
      startingBid: "$35,000",
      location: "Miami, USA",
      auctionEnds: "2024-01-14T20:00:00Z",
      bids: 8,
      status: "Live",
      category: "Sedan",
      year: "2019",
      mileage: "52,000 km",
    },
    {
      id: "3",
      title: "2021 Audi Q7 Premium",
      image: "/api/placeholder/400/300",
      currentBid: "$52,000",
      startingBid: "$48,000",
      location: "Vancouver, Canada",
      auctionEnds: "2024-01-16T22:00:00Z",
      bids: 15,
      status: "Live",
      category: "SUV",
      year: "2021",
      mileage: "38,000 km",
    },
    {
      id: "4",
      title: "2018 Lexus RX 350",
      image: "/api/placeholder/400/300",
      currentBid: "$42,000",
      startingBid: "$38,000",
      location: "Los Angeles, USA",
      auctionEnds: "2024-01-13T16:00:00Z",
      bids: 6,
      status: "Ending Soon",
      category: "SUV",
      year: "2018",
      mileage: "65,000 km",
    },
    {
      id: "5",
      title: "2020 Porsche 911 Carrera",
      image: "/api/placeholder/400/300",
      currentBid: "$85,000",
      startingBid: "$80,000",
      location: "New York, USA",
      auctionEnds: "2024-01-17T19:00:00Z",
      bids: 23,
      status: "Live",
      category: "Sports Car",
      year: "2020",
      mileage: "28,000 km",
    },
    {
      id: "6",
      title: "2019 Toyota Camry XSE",
      image: "/api/placeholder/400/300",
      currentBid: "$28,000",
      startingBid: "$25,000",
      location: "Calgary, Canada",
      auctionEnds: "2024-01-12T17:00:00Z",
      bids: 4,
      status: "Ending Soon",
      category: "Sedan",
      year: "2019",
      mileage: "58,000 km",
    },
  ];

  const getTimeRemaining = (endTime: string) => {
    const now = new Date();
    const end = new Date(endTime);
    const diff = end.getTime() - now.getTime();

    if (diff <= 0) return "Ended";

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    if (days > 0) return `${days}d ${hours}h`;
    if (hours > 0) return `${hours}h`;
    return "Less than 1h";
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Live":
        return "default";
      case "Ending Soon":
        return "secondary";
      case "Ended":
        return "outline";
      default:
        return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Live Car Auctions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Bid on premium used vehicles from USA and Canada. All vehicles are
              inspected, certified, and ready for shipping to the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search vehicles..."
                  className="pl-10 w-full sm:w-64"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="sedan">Sedan</SelectItem>
                  <SelectItem value="suv">SUV</SelectItem>
                  <SelectItem value="sports">Sports Car</SelectItem>
                  <SelectItem value="luxury">Luxury</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="usa">USA</SelectItem>
                  <SelectItem value="canada">Canada</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="h-4 w-4" />
              <span>More Filters</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Auctions Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {auctions.map((auction) => (
              <Card
                key={auction.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <Car className="h-16 w-16 text-muted-foreground" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{auction.title}</CardTitle>
                    <Badge variant={getStatusVariant(auction.status)}>
                      {auction.status}
                    </Badge>
                  </div>
                  <CardDescription className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{auction.location}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                      <span>{auction.year}</span>
                      <span>{auction.mileage}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Current Bid
                        </p>
                        <p className="text-2xl font-bold text-primary">
                          {auction.currentBid}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">
                          Starting Bid
                        </p>
                        <p className="text-lg font-semibold">
                          {auction.startingBid}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{getTimeRemaining(auction.auctionEnds)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>{auction.bids} bids</span>
                      </div>
                    </div>

                    <Button className="w-full" asChild>
                      <Link href={`/auctions/${auction.id}`}>
                        <Gavel className="h-4 w-4 mr-2" />
                        Place Bid
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
