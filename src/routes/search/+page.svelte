<script>
	import HeroSearch from '$lib/components/shared/hero_search.svelte';
	import ProductCard from '$lib/components/shared/product_card.svelte';
	import Spinner from '$lib/components/shared/spinner.svelte';
	import { searchDealApi } from '$lib/modules/deal/api/deal_api';
	import { createQuery, useQueryClient } from '@tanstack/svelte-query';
	import { page } from '$app/stores';

	const project = $page.url.searchParams.get('project');
	const cities = $page.url.searchParams.get('cities');
	const location = $page.url.searchParams.get('location');
	const property = $page.url.searchParams.get('property');

	let isLoading = false;

	const queryClient = useQueryClient();

	$: {
		console.log($page.url);
		queryClient.invalidateQueries({ queryKey: ['search_deals'] });

		isLoading = true;
	}

	$: query = createQuery({
		queryKey: ['search_deals'],
		queryFn: () =>
			searchDealApi({
				project: project ? +project : 0,
				cities: cities ? +cities : 0,
				location: location ? +location : 0,
				property: property ? +property : 0
			})
	});
</script>

<main>
	<div class="my-container pt-[10.25rem]">
		<div class="w-full border rounded-2xl pb-[5rem] flex items-center justify-center">
			<HeroSearch />
		</div>
		{#if $query.isLoading}
			<div class="mt-16">
				<Spinner />
			</div>
		{:else if $query.isSuccess}
			{#if $query?.data?.data.length}
				<div class="my-container pt-[2.25rem]">
					<div class="flex flex-wrap gap-[1.5rem] mt-[4rem]">
						{#each $query?.data?.data as item}
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
		{/if}
	</div>
</main>
