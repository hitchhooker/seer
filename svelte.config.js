import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import Unocss from 'unocss/vite';
import { presetAttributify, presetUno } from 'unocss';
import { presetTypography } from 'unocss-preset-typography';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({}), mdsvex(mdsvexConfig)],

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
					/* UnoCSS configs
					theme: {
						extend: {
							textColor: {
								primary: '#FFF',
								secondary: '#AAA',
								tetriary: '#EEE'
							}
						}
					},
					shortcuts: {
						box: 'w-200px h-200px border-4px border-dashed border-gray bg-gradient-to-r from-green-400 to-blue-500',
						btn: 'py-2 px-4 font-semibold rounded-lg shadow-md'
					},
					*/
					presets: [
						presetAttributify({
							/* preset options */
						}),
						presetUno(),
						// ...custom presets,
						presetTypography()
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
