// # Typed socket event names & payloads

// Centralized event names and payloads
export const SOCKET_EVENTS = {
  CONNECT: "connect",
  DISCONNECT: "disconnect",
  PRODUCT_CREATED: "product:created",
  PRODUCT_UPDATED: "product:updated",
} as const;

export type SocketEvents = typeof SOCKET_EVENTS;

export interface ProductCreatedPayload {
  _id: string;
  name: string;
  price: number;
}
