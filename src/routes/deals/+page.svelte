<script>
	import Hero from '$lib/components/shared/hero.svelte';
	import ProductCard from '$lib/components/shared/product_card.svelte';
	import Spinner from '$lib/components/shared/spinner.svelte';
	import { getCategoryWithDealsApi } from '$lib/modules/category/api/category_api';
	import { createQuery } from '@tanstack/svelte-query';

	const query = createQuery({
		queryKey: ['category_deals'],
		queryFn: () => getCategoryWithDealsApi()
	});
</script>

<main>
	<Hero heading="Our amazing deals" image="/images/deal-hero.png" search={true} />
	<div class="my-container">
		{#if $query.isLoading}
			<div class="mt-16">
				<Spinner />
			</div>
		{:else if $query.isSuccess}
			{#each $query?.data?.data as item}
				<div class="mt-[6.25rem]">
					<h2 class="text-[2.5rem] md:text-[3.438rem] font-extrabold leading-[120%] mb-[2.813rem]">
						{item.name}
					</h2>
					<div class="flex flex-wrap gap-[1.5rem]">
						{#each item.DealCategory as product}
							<ProductCard
								bannerImage={item.bannerImage}
								productId={product.deal.id}
								name={product.deal.name}
								desc={product.deal.desc}
								price={product.deal.price}
								discount={`${product.deal.saleper}`}
								rating={4.2}
								img={`${import.meta.env.VITE_BASE_URL}deal/img/${product.deal.frontImage}`}
							/>
						{/each}
					</div>
				</div>
			{/each}
		{/if}
	</div>
</main>
