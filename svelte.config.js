import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import Unocss from 'unocss/vite';
import { presetAttributify, presetUno } from 'unocss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
		}),
		mdsvex(mdsvexConfig)
	],

	kit: {
		target: '#svelte',
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		// ssr: false,
		paths: {
			assets: '/seer',
			base: '/seer'
		},
		// prerender: {
		// 	crawl: true,
		// 	enabled: true,
		// 	force: false,
		// 	pages: [
		// 		"*"
		// 	],
		// }
		vite: {
			plugins: [
				// readme https://github.com/antfu/unocss
				Unocss({
					presets: [
						presetAttributify({
							/* preset options */
						}),
						presetUno()
						// ...custom presets
					],
					rules: [
						// custom rules if we want more inline classes outside of windicss
					]
				})
			]
		}
	}
};

export default config;
