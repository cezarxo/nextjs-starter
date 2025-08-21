//  Shared DTOs for API payloads
// DTOs aligned with your separate Node/Express + Mongo backend

export interface User {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "manager" | "user";
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  _id: string;
  name: string;
  price: number;
  currency: string;
  description?: string;
  images?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Paginated<T> {
  docs: T[];
  page: number;
  limit: number;
  totalDocs: number;
  totalPages: number;
  hasNextPage: boolean;
}
