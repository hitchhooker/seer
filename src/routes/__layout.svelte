<script context="module">
	export const load = async ({ page }) => {
		return {
			props: {
				key: page.path
			}
		};
	};
</script>

<script lang="ts">
	import 'uno.css';
	// replace app.css with normal css import '../app.css';
	
	import PageTransition from '$lib/PageTransition.svelte';
	import Nav from '$lib/components/Nav.svelte';
	export let key: string;
</script>

<Nav />
<main>
	<PageTransition refresh={key}>
		<slot />
	</PageTransition>
</main>
