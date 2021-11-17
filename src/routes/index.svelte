<script context="module">
	const allPosts = import.meta.globEager(`../news/**/*.md`);
	let body = [];
	for (let path in allPosts) {
		const post = allPosts[path];
		const metadata = post.metadata;
		const namePage = path.split('/');
		const slugPage = namePage[namePage.length - 2].slice(11);
		const p = {
			path,
			metadata,
			slugPage
		};
		body.push(p);
	}

	export const load = async () => {
		return { props: { posts: body } };
	};
</script>

<script lang="ts">
	import { base } from '$app/paths';
	export let posts: ArrayLike<{ slugPage: any; metadata: { title: any; slug: any } }>;

	function linkSlug(s: string | undefined, p: string): string {
		let result = '';
		if (!s) {
			result = p;
		} else {
			result = s;
		}
		return result;
	}

	// landing layer image
	const layers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	let y:number;
</script>


<!--TODO: create parallax component to libraries -->
<svelte:window bind:scrollY={y} />
<!--TODO: improve to devices-->
<div class="parallax-container">
	{#each [0, 1, 2, 3, 4, 5, 6, 7, 8] as layer}
		<img
			class="absolute top-0 left-0 transform w-full"
			style="transform: translate(0,{(-y * layer) / (layers.length - 1)}px)"
			src="parallax/parallax{layer}.png"
			alt="parallax layer number {layer}"
		/>
	{/each}
</div>

<div class="relative h-250vh">

	<div class="absolute top-650px left-0 w-full h-[calc(100%-650px) foreground">

		<h1>The Zeitgeist Seer Program</h1>
		<div class="mb-1">
			<p>
				Site is currently under construction so please. Visit <a href="https://zeitgeist-seer.com/"
					>zeitgeist-seer.com</a
				> to read more and participate.
			</p>
		</div>
		<h1>News</h1>

		<ul class="">
			{#each posts as { slugPage, metadata: { title, slug } }}
				<li>
					<a
						href={`${base}/${linkSlug(slug, slugPage)}`}
						sveltekit:prefetch
						class="link-no-underline text-yellow-400 hover:text-yellow-100">{title}</a
					>
				</li>
			{/each}
		</ul>

	</div>
</div>


<style>
	.parallax-container {
		position: fixed;
		top:0;
		width: 2400px;
		height: 762px;
		left: 50%;
		transform: translate(-50%, 0);
	}
	/*.parallax-container img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		will-change: transform;
	}*/
	.parallax-container img:last-child::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgb(45, 10, 13);
	}
	.foreground {
		width: 100%;
		height: calc(100% - 762px);
		background-color: rgb(32, 0, 1);
		color: rgb(220, 113, 43);
		padding: 5vh 0 0 0;
	}
	:global(body) {
		margin: 0;
		padding: 0;
		background-color: rgb(32, 0, 1);
	}
</style>
