<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import ProductCard from '../shared/product_card.svelte';
	import Spinner from '../shared/spinner.svelte';
	import { getDealsApi } from '$lib/modules/deal/api/deal_api';

	export let deals: any;
</script>

<div class="my-container mb-[8.25rem]">
	<h2
		class="text-[2.5rem] md:text-[3.438rem] font-extrabold leading-[120%] mb-[2.813rem] text-center"
	>
		Our amazing deals
	</h2>
	<div class="flex flex-wrap gap-[1.5rem]">
		{#each deals as item}
			<ProductCard
				productId={item.id}
				name={item.name}
				desc={item.desc}
				price={item.price}
				discount={`${item.saleper}`}
				rating={4.2}
				img={`${import.meta.env.VITE_BASE_URL}deal/img/${item.frontImage}`}
			/>
		{/each}
	</div>
	<a href="/deals">
		<div class="flex items-center gap-4 mt-[1.875rem] justify-end">
			<p class="text-[1.25rem]">View all</p>
			<img src="/icons/arrow.svg" alt="" />
		</div>
	</a>
</div>
