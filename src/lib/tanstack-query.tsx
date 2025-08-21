// # Query Client config + hydration helpers

"use client"

import { cache } from "react"
import { QueryClient, HydrationBoundary, dehydrate, type DehydratedState } from "@tanstack/react-query"

export const getQueryClient = cache(() => {
    const client = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 30_000,
                refetchOnWindowFocus: false,
                retry: 1,
            },
            mutations: {
                retry: 0,
            },
        },
    })
    return client
})

/** Wrap children in HydrationBoundary with a dehydrated state */
export function QueryHydrate(props: { state: DehydratedState | null | undefined; children: React.ReactNode }) {
    return <HydrationBoundary state={props.state}>{props.children}</HydrationBoundary>
}

/** Helper for server components to prefetch & pass dehydrated state down */
export async function getDehydratedState(prefetch: (qc: QueryClient) => Promise<void>) {
    const qc = getQueryClient()
    await prefetch(qc)
    return dehydrate(qc)
}
