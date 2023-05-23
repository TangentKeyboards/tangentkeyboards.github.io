import { plugin as markdown, Mode } from "vite-plugin-markdown";
import svg from "@poppanator/sveltekit-svg";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [markdown({ mode: [Mode.HTML] }), sveltekit(), svg()],
});
