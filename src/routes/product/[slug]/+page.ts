import type { Product } from "../../../types/Product";
import { cms } from "../../../util/cms";
import type { EntryGenerator, PageLoad } from "./$types";

export const prerender = true;

export const entries: EntryGenerator = async () => {
  const products = await cms.entries("product");
  return products.map((entry) => ({
    slug: entry.file,
  }));
};

export const load: PageLoad = async ({ params }) => {
  return cms.get<Product>(`product/${params.slug}`);
};
