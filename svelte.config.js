import adapterStatic from "@sveltejs/adapter-static";
import adapterAuto from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";

const isProduction = process.env.NODE_ENV === "production";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: isProduction
      ? adapterStatic({
          pages: "build",
          assets: "build",
          fallback: null,
        })
      : adapterAuto(),
  },
};

export default config;
