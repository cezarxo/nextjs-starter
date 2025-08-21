// # Global providers (client)
"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode, useEffect } from "react";
import { SocketProvider } from "@/lib/sockets/client";
import { getQueryClient } from "@/lib/tanstack-query";

export default function Providers({ children }: { children: ReactNode }) {
  const queryClient = getQueryClient();

  // (Optional) Warm up dev-tools or setup global listeners here
  useEffect(() => {
    // e.g., register window focus effects, analytics init, etc.
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SocketProvider>{children}</SocketProvider>
    </QueryClientProvider>
  );
}
