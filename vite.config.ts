import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vitest/config";

// NOTE: 現在はテストでのみ vite を利用している
export default defineConfig({
  plugins: [svelte()],
  server: {
    port: 8080,
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
