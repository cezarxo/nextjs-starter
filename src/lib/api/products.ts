// # Example service (REST)
import type { Paginated, Product } from "@/types";
import { http } from "./http";

export async function fetchProducts(opts?: { page?: number; limit?: number }) {
  const q = new URLSearchParams();
  if (opts?.page) q.set("page", String(opts.page));
  if (opts?.limit) q.set("limit", String(opts.limit));
  const suffix = q.toString() ? `?${q.toString()}` : "";
  return http(`/products${suffix}`) as Promise<Paginated<Product>>;
}

export async function fetchProductById(id: string) {
  return http(`/products/${id}`) as Promise<Product>;
}
