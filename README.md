# Next.js Starter Skeleton

A modern, production-ready Next.js starter template with TypeScript, Tailwind CSS v4, TanStack Query, shadcn/ui components, and more.

## 🚀 Features

- **Next.js 15** with App Router and Server-Side Rendering
- **TypeScript** for type safety
- **Tailwind CSS v4** with modern design system
- **shadcn/ui** components built on Radix UI
- **TanStack Query** for server state management
- **Socket.io** for real-time communication
- **Axios** for HTTP requests
- **Biome** for formatting and linting
- **Docker** support with multi-stage builds
- **Bun** as the package manager
- **ESLint** with Next.js rules
- **PostCSS** with Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui + Radix UI
- **State Management**: TanStack Query
- **HTTP Client**: Axios
- **Real-time**: Socket.io
- **Authentication**: NextAuth.js
- **Package Manager**: Bun
- **Linting/Formatting**: Biome
- **Containerization**: Docker
- **Database**: MongoDB (optional)
- **Cache**: Redis (optional)

## 📦 Prerequisites

- **Node.js** 18+ or **Bun** 1.0+
- **Docker** (optional, for containerized development)

## 🔐 NextAuth.js Configuration

This starter includes NextAuth.js for authentication with multiple providers:

### Environment Variables

Create a `.env.local` file with the following variables:

```bash
# NextAuth.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here-change-in-production

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# GitHub OAuth
GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret

# Twitter OAuth
TWITTER_CLIENT_ID=your-twitter-client-id
TWITTER_CLIENT_SECRET=your-twitter-client-secret

# Database (if using Prisma adapter)
DATABASE_URL="postgresql://username:password@localhost:5432/nextjs_starter"

# Redis (optional, for session storage)
REDIS_URL="redis://localhost:6379"
```

### Supported Providers

- **Google OAuth 2.0**
- **GitHub OAuth**
- **Twitter OAuth 2.0**
- **Credentials** (email/password)

### Features

- Custom sign-in and sign-up pages
- Social media login integration
- Protected routes
- Session management
- JWT-based authentication

## 🚀 Quick Start

### Using Bun (Recommended)

```bash
# Clone the repository
git clone <your-repo-url>
cd nextjs-starter

# Install dependencies
bun install

# Start development server
bun run dev
```

### Using npm

```bash
# Clone the repository
git clone <your-repo-url>
cd nextjs-starter

# Install dependencies
npm install

# Start development server
npm run dev
```

### Using Docker

```bash
# Build and run with Docker Compose
docker-compose up --build

# For development with hot reload
docker-compose --profile dev up --build

# For full stack (with MongoDB and Redis)
docker-compose --profile full up --build
```

## 📁 Project Structure

```
nextjs-starter/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Auth route group
│   │   ├── (home)/            # Home route group
│   │   ├── api/               # API routes
│   │   ├── providers/         # React providers
│   │   └── layout.tsx         # Root layout
│   ├── components/            # Reusable components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── layout/           # Layout components
│   │   └── custom/           # Custom components
│   ├── lib/                  # Utility libraries
│   │   ├── api/              # API utilities
│   │   ├── sockets/          # Socket.io utilities
│   │   └── utils.ts          # General utilities
│   ├── hooks/                # Custom React hooks
│   ├── types/                # TypeScript type definitions
│   └── styles/               # Global styles
├── public/                   # Static assets
├── Dockerfile               # Multi-stage Docker build
├── docker-compose.yml       # Docker Compose configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── next.config.ts           # Next.js configuration
├── biome.json               # Biome configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Available Scripts

```bash
# Development
bun run dev          # Start development server
bun run build        # Build for production
bun run start        # Start production server

# Code Quality
bun run lint         # Run Biome linter
bun run format       # Format code with Biome
bun run check        # Run Biome check
bun run type-check   # Run TypeScript type checking

# Docker
bun run docker:build # Build Docker image
bun run docker:run   # Run Docker container

# Utilities
bun run clean        # Clean build artifacts
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# API
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api

# Database (optional)
MONGODB_URI=mongodb://localhost:27017/nextjs_starter

# Redis (optional)
REDIS_URL=redis://localhost:6379

# Authentication (optional)
NEXTAUTH_SECRET=your-secret-here
NEXTAUTH_URL=http://localhost:3000
```

### Tailwind CSS

The project uses Tailwind CSS v4 with a comprehensive design system including:

- CSS custom properties for theming
- Dark mode support
- Responsive design utilities
- Custom animations and keyframes

### Biome

Biome is configured with:

- Next.js and React recommended rules
- Automatic import organization
- Consistent code formatting
- TypeScript support

## 🐳 Docker

### Development

```bash
# Start development environment
docker-compose --profile dev up --build

# Access the app at http://localhost:3001
```

### Production

```bash
# Build and run production container
docker-compose up --build

# Access the app at http://localhost:3000
```

### Full Stack

```bash
# Start with MongoDB and Redis
docker-compose --profile full up --build
```

## 📱 Component Library

The project includes a comprehensive set of shadcn/ui components:

- **Layout**: Card, Container, Separator
- **Navigation**: Navigation Menu, Breadcrumb
- **Forms**: Input, Button, Select, Checkbox, Radio
- **Feedback**: Alert, Toast, Progress, Skeleton
- **Data Display**: Table, Badge, Avatar
- **Overlay**: Dialog, Popover, Tooltip, Hover Card

## 🔌 API Integration

### HTTP Client

The project uses Axios with a configured instance in `src/lib/api/http.ts`:

```typescript
import { api } from '@/lib/api/http';

// GET request
const data = await api.get('/users');

// POST request
const response = await api.post('/users', userData);
```

### TanStack Query

Configured for server state management:

```typescript
import { useQuery } from '@tanstack/react-query';

function UserProfile({ userId }: { userId: string }) {
  const { data: user, isLoading } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
  });

  if (isLoading) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}
```

## 🌐 Real-time Communication

Socket.io is configured for real-time features:

```typescript
import { useSocket } from '@/hooks/use-socket';

function ChatComponent() {
  const socket = useSocket();
  
  useEffect(() => {
    socket?.on('message', handleMessage);
    return () => socket?.off('message', handleMessage);
  }, [socket]);

  // ... rest of component
}
```

## 🎯 Best Practices

### Server-Side Rendering

- All pages use server-side rendering by default
- API routes for data fetching
- Proper metadata for SEO

### Performance

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Bundle analysis and optimization

### Security

- Environment variable validation
- API route protection
- CORS configuration

### Accessibility

- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker

```bash
# Build production image
docker build -t nextjs-starter .

# Run container
docker run -p 3000:3000 nextjs-starter
```

### Other Platforms

The project can be deployed to any platform that supports Node.js or Docker:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS ECS
- Google Cloud Run

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review the [shadcn/ui documentation](https://ui.shadcn.com)
3. Open an issue in this repository

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TanStack Query](https://tanstack.com/query) - Server state management
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible UI primitives
