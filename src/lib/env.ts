// # Zod-validated environment variables

// Temporarily disabled validation
export const env = {
  NEXT_PUBLIC_API_BASE_URL:
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api",
  NEXT_PUBLIC_SOCKET_URL:
    process.env.NEXT_PUBLIC_SOCKET_URL || "ws://localhost:3001",
};

// export const env = clientSchema.parse({
//   NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
//   NEXT_PUBLIC_SOCKET_URL: process.env.NEXT_PUBLIC_SOCKET_URL,
// });
