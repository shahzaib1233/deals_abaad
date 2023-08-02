<script lang="ts">
	import { onMount } from 'svelte';
	import HeroSearch from './hero_search.svelte';

	export let heading: string = '';
	export let desc: string = '';
	export let image: string = '';
	export let responsiveImage: string = '';
	export let search: boolean = false;
	export let dropdown: any = '';

	onMount(() => {
		if (responsiveImage == '') {
			responsiveImage = image;
		}
	});
</script>

<div
	class="h-[25rem] md:h-screen w-screen hero flex flex-col items-center justify-center bg-image"
	style="--image: url({image}); --res-image: url({responsiveImage});"
>
	<h1
		class="text-[3rem] md:text-[4.7rem] leading-[120%] text-white font-extrabold mt-[5rem] text-center"
	>
		{heading}
	</h1>
	{#if desc != ''}
		<p
			class="text-white text-[1.25rem] md:text-[1.56rem] font-medium text-center px-8 mt-8 md:mt-0"
		>
			{desc}
		</p>
	{/if}
	{#if search}
		<HeroSearch {dropdown} />
	{/if}
</div>

<style>
	.bg-image {
		background-image: var(--image);
	}
	@media (max-width: 1000px) {
		.bg-image {
			background-image: var(--res-image);
		}
	}
</style>
