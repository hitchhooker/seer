# Frontend for Zeitgeist Seer program

SvelteKit based frontend using UnoCSS as a CSS engine and deployed with statis adapter to Github Pages.
Content can be found in markdown files. Markdown files support svelte scripting and variables.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
npm run deploy
```

> You can preview the built app with `npm run preview`.