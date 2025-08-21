// # Dynamic product page (server)
import { fetchProductById } from "@/lib/api/products";

type Params = { params: { id: string } };

export async function generateMetadata({ params }: Params) {
  const p = await fetchProductById(params.id);
  return { title: `${p.name} – Product` };
}

export default async function ProductPage({ params }: Params) {
  const product = await fetchProductById(params.id);
  return (
    <main className="container py-8">
      <h1>{product.name}</h1>
      <p className="mt-2 opacity-80">{product.description}</p>
      <p className="mt-4 font-semibold">
        {product.currency} {product.price}
      </p>
    </main>
  );
}
