import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';



/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
    appDir: 'internal', // This replaces '_app' with 'internal'
    adapter: adapter()
  }
};

export default config;
