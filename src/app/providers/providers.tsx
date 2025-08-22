// # Global providers (client)
"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";
import { type ReactNode, useEffect } from "react";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SocketProvider } from "@/lib/sockets/client";
import { getQueryClient } from "@/lib/tanstack-query";

export default function Providers({ children }: { children: ReactNode }) {
  const queryClient = getQueryClient();

  // (Optional) Warm up dev-tools or setup global listeners here
  useEffect(() => {
    // e.g., register window focus effects, analytics init, etc.
  }, []);

  return (
    <SessionProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <SocketProvider>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </SocketProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
