import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
	kit: {
		alias: {
			$routes: './src/routes'
		},
  }
};

export default config;
