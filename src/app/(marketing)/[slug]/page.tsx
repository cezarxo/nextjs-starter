// # Route group example
// # Dynamic CMS-like pages (server)
// Example marketing CMS route: /pricing, /about, etc.
// Fetch by slug from backend CMS

import { http } from "@/lib/api/http";

export const revalidate = 60;

export default async function MarketingSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const page = await http(`/cms/pages/${params.slug}`);
  if (!page) throw new Error("Not found");
  return (
    <main className="container py-8 prose dark:prose-invert">
      <h1>{page.title}</h1>
      {/* Render HTML content as plain text for security */}
      <div className="whitespace-pre-wrap">{page.html}</div>
    </main>
  );
}
