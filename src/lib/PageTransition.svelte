<script>
	import { blur } from 'svelte/transition';
	export let refresh = '';
</script>

{#key refresh}
	<div class="main-center" in:blur="{{ duration: 200 }}">
		<slot />
	</div>
{/key}
