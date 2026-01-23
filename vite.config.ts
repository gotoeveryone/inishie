import { sveltekit } from "@sveltejs/kit/vite";
import { SvelteKitPWA } from "@vite-pwa/sveltekit";
import { svelteTesting } from "@testing-library/svelte/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    sveltekit(),
    svelteTesting(),
    SvelteKitPWA({
      strategies: "injectManifest",
      srcDir: "src",
      filename: "service-worker.ts",
      manifest: {
        name: "Inishie",
        short_name: "Inishie",
        icons: [
          {
            src: "/images/logo_192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        start_url: "/",
        display: "standalone",
        background_color: "#646870",
        theme_color: "#81868f",
      },
    }),
  ],
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  test: {
    watch: false,
    globals: true,
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,ts}"],
    setupFiles: ["src/setup-test.ts"],
  },
});
