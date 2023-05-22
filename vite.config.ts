import { plugin as markdown, Mode } from "vite-plugin-markdown";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [markdown({ mode: [Mode.HTML] }), sveltekit()],
});
