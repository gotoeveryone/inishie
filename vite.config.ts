import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [svelte()],
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
    alias: [{ find: /^svelte$/, replacement: "svelte/internal" }],
  },
});
