import type { PageLoad } from "./$types";
import { loadFile } from "../util/content";

export const prerender = true;

type IndexAttributes = {
  title: string;
};

export const load: PageLoad = async () => {
  return await loadFile<IndexAttributes>("index");
};
