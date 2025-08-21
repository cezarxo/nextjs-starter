import {
  Calendar,
  Car,
  Eye,
  Filter,
  Fuel,
  Gauge,
  MapPin,
  Search,
  Settings,
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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function VehiclesPage() {
  const vehicles = [
    {
      id: "1",
      title: "2020 BMW X5 xDrive40i",
      image: "/api/placeholder/400/300",
      price: "$45,000",
      location: "Toronto, Canada",
      year: "2020",
      mileage: "45,000 km",
      fuelType: "Gasoline",
      transmission: "Automatic",
      engine: "3.0L I6 Turbo",
      drivetrain: "AWD",
      color: "Alpine White",
      condition: "Excellent",
      features: ["Leather Seats", "Navigation", "Sunroof", "Backup Camera"],
      status: "Available",
    },
    {
      id: "2",
      title: "2019 Mercedes-Benz C-Class",
      image: "/api/placeholder/400/300",
      price: "$38,500",
      location: "Miami, USA",
      year: "2019",
      mileage: "52,000 km",
      fuelType: "Gasoline",
      transmission: "Automatic",
      engine: "2.0L I4 Turbo",
      drivetrain: "RWD",
      color: "Obsidian Black",
      condition: "Very Good",
      features: [
        "Premium Package",
        "AMG Wheels",
        "LED Headlights",
        "Bluetooth",
      ],
      status: "Available",
    },
    {
      id: "3",
      title: "2021 Audi Q7 Premium",
      image: "/api/placeholder/400/300",
      price: "$52,000",
      location: "Vancouver, Canada",
      year: "2021",
      mileage: "38,000 km",
      fuelType: "Gasoline",
      transmission: "Automatic",
      engine: "3.0L V6 Turbo",
      drivetrain: "AWD",
      color: "Glacier White",
      condition: "Excellent",
      features: [
        "Virtual Cockpit",
        "Bang & Olufsen Sound",
        "Air Suspension",
        "360 Camera",
      ],
      status: "Available",
    },
    {
      id: "4",
      title: "2018 Lexus RX 350",
      image: "/api/placeholder/400/300",
      price: "$42,000",
      location: "Los Angeles, USA",
      year: "2018",
      mileage: "65,000 km",
      fuelType: "Gasoline",
      transmission: "Automatic",
      engine: "3.5L V6",
      drivetrain: "AWD",
      color: "Sonic Chrome",
      condition: "Good",
      features: [
        "Mark Levinson Audio",
        "Heated Seats",
        "Blind Spot Monitor",
        "Lane Departure",
      ],
      status: "Available",
    },
    {
      id: "5",
      title: "2020 Porsche 911 Carrera",
      image: "/api/placeholder/400/300",
      price: "$85,000",
      location: "New York, USA",
      year: "2020",
      mileage: "28,000 km",
      fuelType: "Gasoline",
      transmission: "Manual",
      engine: "3.0L Flat-6 Turbo",
      drivetrain: "RWD",
      color: "Guards Red",
      condition: "Excellent",
      features: [
        "Sport Chrono Package",
        "PASM Suspension",
        "Sport Exhaust",
        "Carbon Fiber Interior",
      ],
      status: "Available",
    },
    {
      id: "6",
      title: "2019 Toyota Camry XSE",
      image: "/api/placeholder/400/300",
      price: "$28,000",
      location: "Calgary, Canada",
      year: "2019",
      mileage: "58,000 km",
      fuelType: "Gasoline",
      transmission: "Automatic",
      engine: "2.5L I4",
      drivetrain: "FWD",
      color: "Midnight Black",
      condition: "Very Good",
      features: ["JBL Audio", "Heated Seats", "Smart Key", "Safety Sense 2.0"],
      status: "Available",
    },
  ];

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case "Excellent":
        return "default";
      case "Very Good":
        return "secondary";
      case "Good":
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
              Available Vehicles
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse our extensive collection of premium used vehicles from USA
              and Canada. All vehicles are inspected, certified, and ready for
              shipping to the UAE.
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
                  <SelectValue placeholder="Brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Brands</SelectItem>
                  <SelectItem value="bmw">BMW</SelectItem>
                  <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                  <SelectItem value="audi">Audi</SelectItem>
                  <SelectItem value="lexus">Lexus</SelectItem>
                  <SelectItem value="porsche">Porsche</SelectItem>
                  <SelectItem value="toyota">Toyota</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="under-30k">Under $30,000</SelectItem>
                  <SelectItem value="30k-50k">$30,000 - $50,000</SelectItem>
                  <SelectItem value="50k-80k">$50,000 - $80,000</SelectItem>
                  <SelectItem value="over-80k">Over $80,000</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2020">2020</SelectItem>
                  <SelectItem value="2019">2019</SelectItem>
                  <SelectItem value="2018">2018</SelectItem>
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

      {/* Vehicles Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <Card
                key={vehicle.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <Car className="h-16 w-16 text-muted-foreground" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{vehicle.title}</CardTitle>
                    <Badge variant={getConditionColor(vehicle.condition)}>
                      {vehicle.condition}
                    </Badge>
                  </div>
                  <CardDescription className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{vehicle.location}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{vehicle.year}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Gauge className="h-4 w-4" />
                        <span>{vehicle.mileage}</span>
                      </span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">
                        {vehicle.price}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Fuel className="h-4 w-4 text-muted-foreground" />
                        <span>{vehicle.fuelType}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Settings className="h-4 w-4 text-muted-foreground" />
                        <span>{vehicle.transmission}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium">Key Features:</p>
                      <div className="flex flex-wrap gap-1">
                        {vehicle.features.slice(0, 3).map((feature) => (
                          <Badge
                            key={feature}
                            variant="outline"
                            className="text-xs"
                          >
                            {feature}
                          </Badge>
                        ))}
                        {vehicle.features.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{vehicle.features.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" className="flex-1" asChild>
                        <Link href={`/vehicles/${vehicle.id}`}>
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Link>
                      </Button>
                      <Button className="flex-1" asChild>
                        <Link href={`/auctions/${vehicle.id}`}>
                          <Car className="h-4 w-4 mr-2" />
                          Bid Now
                        </Link>
                      </Button>
                    </div>
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
