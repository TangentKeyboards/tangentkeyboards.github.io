import { error } from "@sveltejs/kit";
import type { MarkdownResult } from "../types/MarkdownResult";

const fileRegex = /\/src\/content\/(?:([a-zA-Z0-9\/]+)\/)?([a-zA-Z0-9]+)\.md/;

type Entry<T> = {
  path: string;
  relativePath: string;
  file: string;
  body: string;
} & T;

async function entries<T = unknown>(relativeDir: string): Promise<Entry<T>[]> {
  const modules = import.meta.glob(`/src/content/**/*.md`);

  const entries: Entry<T>[] = [];
  for (const key in modules) {
    const [path, dir, file] = fileRegex.exec(key) ?? [];

    if ((dir ?? "") !== relativeDir) {
      continue;
    }

    if (path == null || file == null) {
      continue;
    }

    const { attributes, html } = (await modules[path]()) as MarkdownResult;

    entries.push({
      path,
      relativePath: joinPath(dir, file),
      file,
      body: html,
      ...(attributes as T),
    });
  }

  return entries;
}

async function get<T = Record<string, unknown>>(relativePath: string) {
  const file = relativePath.split("/").at(-1);
  if (file == null) {
    return undefined;
  }

  const path = relativePath.slice(0, -(file.length + 1));
  const items = await entries<T>(path);
  const item = items.find((i) => i.file === file);

  return item;
}

function joinPath(...path: string[]) {
  return path.filter(Boolean).join("/");
}

export const cms = {
  entries,
  get,
};
