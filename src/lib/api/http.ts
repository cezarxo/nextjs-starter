// # Fetch wrapper with base URL, headers, errors
import { env } from "@/lib/env";

type Options = Omit<RequestInit, "headers"> & {
  headers?: Record<string, string>;
  authToken?: string | null;
};

export async function http(path: string, opts: Options = {}) {
  const url = new URL(path, env.NEXT_PUBLIC_API_BASE_URL).toString();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(opts.headers || {}),
  };

  if (opts.authToken) headers.Authorization = `Bearer ${opts.authToken}`;

  const res = await fetch(url, {
    ...opts,
    headers,
    // Important for App Router caching control in server components:
    next: opts.next,
    cache: opts.cache,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`HTTP ${res.status}: ${text || res.statusText}`);
  }

  try {
    return await res.json();
  } catch {
    return null;
  }
}
