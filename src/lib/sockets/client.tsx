// # socket.io-client singleton factory
"use client";

import type React from "react";
import { createContext, useContext, useMemo } from "react";
import { io, type Socket } from "socket.io-client";
import { env } from "@/lib/env";

type Ctx = { socket: Socket | null };
const SocketCtx = createContext<Ctx>({ socket: null });

export function SocketProvider({
  children,
  token,
}: {
  children: React.ReactNode;
  token?: string;
}) {
  const socket = useMemo(() => {
    // Auth via query or extraHeaders depending on your backend setup
    const s = io(env.NEXT_PUBLIC_SOCKET_URL, {
      transports: ["websocket"],
      autoConnect: true,
      reconnection: true,
      reconnectionAttempts: 10,
      auth: token ? { token } : undefined,
    });
    return s;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return <SocketCtx.Provider value={{ socket }}>{children}</SocketCtx.Provider>;
}

export function useSocketContext() {
  return useContext(SocketCtx);
}
