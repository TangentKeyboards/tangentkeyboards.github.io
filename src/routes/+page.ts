import { error } from "@sveltejs/kit";
import type { Product } from "../types/Product";
import { cms } from "../util/cms";
import type { PageLoad } from "./$types";

export const prerender = true;

type IndexPage = {
  title: string;
};

export const load: PageLoad = async () => {
  const products = await cms.entries<Product>("product");
  const page = await cms.get<IndexPage>("index");

  if (page == null) {
    throw error(404, "Not found");
  }

  return {
    products,
    ...page,
  };
};
