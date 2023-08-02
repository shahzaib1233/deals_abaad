<script lang="ts">
	import Hero from '$lib/components/shared/hero.svelte';
	import ProductCard from '$lib/components/shared/product_card.svelte';

	export let data;
</script>

<div class="">
	<Hero
		image={`${import.meta.env.VITE_BASE_URL}category/img/${data.category.backgroundImage}`}
		heading=""
		desc=""
	/>
	<div class="my-container mt-[6.25rem]">
		<h2
			class="text-[1.5rem] md:text-[2.5rem] md:text-[3.438rem] font-extrabold leading-[120%] mb-[2.813rem]"
		>
			{data.category.name}
		</h2>
		<div class="flex flex-wrap gap-[1.5rem]">
			<!-- {data.data.DealCategory.map((item: any, index: number) => (
          <ProductCard
            key={index}
            productId={item.deal.id}
            name={item.deal.name}
            desc={item.deal.desc}
            price={item.deal.price}
            discount={`${item.deal.saleper}% OFF`}
            rating={4.2}
            img={`${process.env.NEXT_PUBLIC_BASE_URL}img/${item.deal.frontImage}`}
          />
        ))} -->
			{#each data.category.DealCategory as item}
				<ProductCard
					productId={item.deal.id}
					bannerImage={`${import.meta.env.VITE_BASE_URL}category/img/${data.category.bannerImage}`}
					name={item.deal.name}
					desc={item.deal.desc}
					price={item.deal.price}
					discount={`${item.deal.saleper}% OFF`}
					rating={4.2}
					img={`${import.meta.env.VITE_BASE_URL}deal/img/${item.deal.frontImage}`}
				/>
			{/each}
		</div>
	</div>
</div>
