<script lang="ts">
	import { base } from '$app/paths';
	let logo = '';
	let alt = '';
</script>

<header
	class="flex flex-row relative z-50 items-center w-full place-content-between bg-opacity-80 shadow-2xl text-white bg-purple-900"
>
	<h1 class="p-0 m-0 text-base ml-5">
		<img src={logo} {alt} />
		The Zeitgeist Seer Program
	</h1>

	<ul class="flex m-0 p-0 space-x-1 align-middle items-stretch items-center list-none">
		<li class="p-2 bg-green-50">
			<a sveltekit:prefetch href={`${base}/`}>Home</a>
		</li>
		<li class="p-2">
			<a sveltekit:prefetch href={`${base}/blog/`}>Blog</a>
		</li>
		<li class="p-2">
			<a sveltekit:prefetch href={`${base}/about`}>About</a>
		</li>
	</ul>
</header>

<!--style lang="postcss">
	header {
		@apply flex w-full  items-stretch justify-center;
		background-color: var(--text-color);
	}
	li {
		@apply p-1 h-10;
		color: var(--background-color);
		background-color: var(--text-color);
	}

	li:hover {
		color: var(--text-color);
		background-color: var(--background-color);
	}

	a {
		@apply no-underline;
	}
</style-->
<style>
	a {
		text-decoration: none;
	}
</style>
