import { error } from "@sveltejs/kit";

const fileRegex = /\/src\/content\/(?:([a-zA-Z0-9\/]+)\/)?([a-zA-Z0-9]+)\.md/;

export async function loadEntries(relativePath: string) {
  const modules = import.meta.glob(`/src/content/**/*.md`);
  return Object.keys(modules)
    .map((module) => {
      const [_, path, file] = fileRegex.exec(module) ?? [];
      if (path !== relativePath) {
        return undefined;
      }
      return { slug: file };
    })
    .filter(Boolean) as never[];
}

export async function loadFile<T = Record<string, unknown>>(relativePath: string) {
  const modules = import.meta.glob(`/src/content/**/*.md`, { eager: true });
  const [fullPath, _, file] =
    Object.keys(modules)
      .map((m) => fileRegex.exec(m) ?? [])
      .find(([_, path, file]) => joinPath(path, file) === relativePath) ?? [];

  if (file == null) {
    throw error(404, "Not found");
  }

  const { attributes, html } = modules[fullPath] as App.MarkdownResult;

  return {
    ...(attributes as T),
    body: html,
  };
}

function joinPath(...path: string[]) {
  return path.filter(Boolean).join("/");
}
