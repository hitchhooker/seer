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
	let y;
</script>

<!--TODO: create parallax component to libraries -->
<svelte:window bind:scrollY={y} />
<!--TODO: improve to devices-->
<div class="parallax-container">
	{#each [0, 1, 2, 3, 4, 5, 6, 7, 8] as layer}
		<img
			style="transform: translate(0,{(-y * layer) / (layers.length - 1)}px)"
			src="parallax/parallax{layer}.png"
			alt="parallax layer number {layer}"
		/>
	{/each}
</div>

<div class="text">
	<span style="opacity: {1 - Math.max(0, y / 40)}"> scroll down </span>

	<div class="foreground">
		You have scrolled {y} pixels

		<h1>Welcome to Zeitgeist Seer program.</h1>
		<div class="mb-1">
			<p>
				Site is currently under construction so please. Visit <a href="https://zeitgeist-seer.com/"
					>zeitgeist-seer.com</a
				> to read more and participate.
			</p>
		</div>

		<h1>News</h1>

		<ul>
			{#each posts as { slugPage, metadata: { title, slug } }}
				<li>
					<a
						href={`${base}/${linkSlug(slug, slugPage)}`}
						sveltekit:prefetch
						class="link-no-underline">{title}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.parallax-container {
		position: fixed;
		width: 2400px;
		height: 712px;
		left: 50%;
		transform: translate(-50%, 0);
	}
	.parallax-container img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		will-change: transform;
	}
	.parallax-container img:last-child::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgb(45, 10, 13);
	}
	.text {
		position: relative;
		width: 100%;
		height: 300vh;
		color: rgb(220, 113, 43);
		text-align: center;
		padding: 4em 0.5em 0.5em 0.5em;
		box-sizing: border-box;
		pointer-events: none;
	}
	span {
		display: block;
		font-size: 1em;
		text-transform: uppercase;
		will-change: transform, opacity;
	}
	.foreground {
		position: absolute;
		top: 711px;
		left: 0;
		width: 100%;
		height: calc(100% - 712px);
		background-color: rgb(32, 0, 1);
		color: rgb(220, 113, 43);
		padding: 5vh 0 0 0;
	}
	.foreground a {
		color: rgb(253, 174, 51)
	}
	:global(body) {
		margin: 0;
		padding: 0;
		background-color: rgb(253, 174, 51);
	}
</style>
