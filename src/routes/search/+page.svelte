<script>
	import HeroSearch from '$lib/components/shared/hero_search.svelte';
	import ProductCard from '$lib/components/shared/product_card.svelte';

	export let data;
</script>

<main>
	<div class="my-container pt-[10.25rem]">
		<div class="w-full border rounded-2xl pb-[5rem] flex items-center justify-center">
			<HeroSearch dropdown={data.dropdown} selected={data.selected} />
		</div>
		{#if data.search.length}
			<div class="my-container pt-[2.25rem]">
				<div class="flex flex-wrap gap-[1.5rem] mt-[4rem]">
					{#each data.search as item}
						<ProductCard
							productId={item.id}
							name={item.name}
							desc={item.desc}
							price={item.price}
							discount={`${item.saleper}% OFF`}
							rating={4.2}
							img={`${import.meta.env.VITE_BASE_URL}deal/img/${item.frontImage}`}
						/>
					{/each}
				</div>
			</div>
		{:else}
			<div class="my-container py-[5.25rem]">
				<div class="flex flex-col items-center gap-[1rem] mt-[4rem] text-center">
					<h2 class="text-2xl font-bold text-gray-600">No Products Found</h2>
					<p class="text-gray-500">
						We are constantly updating our deals. Please check back later or contact us for more
						information.
					</p>
				</div>
			</div>
		{/if}
	</div>
</main>
