# Marhaba - Premium Used Car Auctions

A modern Next.js website for selling used cars through online and onsite auctions, specializing in shipping vehicles from USA & Canada to UAE.

## 🚗 Project Overview

Marhaba Auctions is a comprehensive platform that connects buyers and sellers of premium used vehicles through live auctions. The platform offers:

- **Live Auctions**: Real-time bidding on quality vehicles
- **Global Shipping**: Door-to-door delivery from North America to UAE
- **Vehicle Catalog**: Browse available vehicles with detailed information
- **Online & Onsite**: Bid from anywhere or join auction centers
- **Quality Guarantee**: All vehicles inspected and certified

## 🛠️ Technology Stack

### Core Technologies
- **Next.js 15.5.0** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework

### UI Components
- **Shadcn/ui** - Pre-built, accessible UI components
- **Lucide React** - Beautiful & consistent icon toolkit
- **Class Variance Authority** - Component variant management
- **Tailwind Merge** - Utility for merging Tailwind classes

### State Management & Data
- **TanStack Query** - Data fetching and caching
- **Zod** - TypeScript-first schema validation
- **Axios** - HTTP client for API requests

### Real-time Features
- **Socket.io** - Real-time bidirectional communication
- **Socket.io Client** - Client-side socket implementation

### Development Tools
- **Biome** - Fast formatter, linter, and more
- **Bun** - Fast JavaScript runtime and package manager

## 📦 Package Management

This project uses **Bun** as the package manager for faster installations and better performance.

### Installation
```bash
# Install Bun (if not already installed)
curl -fsSL https://bun.sh/install | bash

# Install dependencies
bun install
```

### Available Scripts
```bash
# Development
bun run dev          # Start development server with Turbopack

# Building
bun run build        # Build for production with Turbopack
bun run start        # Start production server

# Code Quality
bun run format       # Format code using Biome
bun run lint         # Lint code using Biome
bun run check        # Check code formatting and linting
```

## 🔧 Biome Configuration

Biome is used for code formatting, linting, and organization. The configuration is in `biome.json`.

### Key Features
- **Fast Formatting**: Format code in milliseconds
- **Linting**: Catch errors and enforce best practices
- **Import Organization**: Automatically sort and organize imports
- **TypeScript Support**: Full TypeScript and JSX support

### Biome Commands
```bash
# Format code
biome format . --write

# Lint code
biome lint .

# Check formatting and linting
biome check .

# Apply automatic fixes
biome lint . --apply
```

### Configuration Highlights
- Includes `.tsx` files for JSX support
- Enforces consistent code style
- Organizes imports automatically
- Provides helpful error messages

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (marketing)/       # Marketing route group
│   ├── about/             # About page
│   ├── auctions/          # Live auctions page
│   ├── contact/           # Contact page
│   ├── shipping/          # Shipping services page
│   ├── vehicles/          # Vehicle catalog page
│   ├── error.tsx          # Error boundary
│   ├── global-loading.tsx # Global loading state
│   ├── layout.tsx         # Root layout
│   ├── loading.tsx        # Loading fallback
│   ├── not-found.tsx      # 404 page
│   └── page.tsx           # Home page
├── components/             # Reusable components
│   ├── custom/            # Custom components
│   ├── layout/            # Layout components
│   └── ui/                # Shadcn UI components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility libraries
│   ├── api/               # API utilities
│   ├── sockets/           # Socket.io utilities
│   └── tanstack-query.tsx # Query client setup
└── styles/                 # Global styles
```

## 🎨 UI Components

The project uses Shadcn/ui components for a consistent and accessible design:

- **Button** - Various button variants and sizes
- **Card** - Content containers with header, content, and description
- **Badge** - Status indicators and labels
- **Input** - Form input fields
- **Select** - Dropdown selection components
- **Textarea** - Multi-line text input

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- Modern web browser

### Development Setup
1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd marhaba-new-website
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Start development server**
   ```bash
   bun run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Building for Production
```bash
# Build the application
bun run build

# Start production server
bun run start
```

## 📱 Features

### Home Page
- Hero section with call-to-action
- Feature highlights
- Featured vehicles showcase

### Live Auctions
- Real-time auction listings
- Search and filter functionality
- Bidding interface

### Vehicle Catalog
- Browse available vehicles
- Detailed vehicle information
- Advanced filtering options

### Shipping Services
- Service types and pricing
- Process explanation
- Location coverage

### About Us
- Company story and mission
- Team information
- Core values

### Contact
- Contact form
- Company information
- Quick action buttons

## 🔒 Security Features

- **HTML Sanitization**: Secure rendering of dynamic content
- **Type Safety**: Full TypeScript implementation
- **Input Validation**: Zod schema validation
- **Secure Links**: Proper external link handling

## 🌐 Internationalization

The platform is designed to serve:
- **Primary Market**: UAE (United Arab Emirates)
- **Source Markets**: USA & Canada
- **Language**: English (expandable to Arabic)

## 📊 Performance

- **Next.js 15**: Latest performance optimizations
- **Turbopack**: Fast bundling and development
- **Image Optimization**: Built-in Next.js image optimization
- **Code Splitting**: Automatic route-based code splitting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `bun run check` to ensure code quality
5. Submit a pull request

## 📄 License

This project is private and proprietary.

## 📞 Support

For support and inquiries:
- Email: [contact@marhaba-auctions.com]
- Phone: [+971 XX XXX XXXX]
- Website: [https://marhaba-auctions.com]

---

**Built with ❤️ using Next.js, TypeScript, and Shadcn/ui**
