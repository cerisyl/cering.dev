import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import ViteYaml from '@modyfi/vite-plugin-yaml';
import svgr from 'vite-plugin-svgr';
// import { getMusic } from './scripts/getMusic.js'

export default defineConfig({
	publicDir: "static",
	plugins: [
		// {
		// 	name: "getMusic",
		// 	buildStart() { getMusic(); }
		// },
		sveltekit(),
		enhancedImages(),
		svgr(),
		ViteYaml()
	],
  resolve: {
    alias: {
      src: "/src",
			components: "/src/components"
    },
  },
	define: {
		__BUILD_DATE__: new Date()
	}
});