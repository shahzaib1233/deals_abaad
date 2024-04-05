<script lang="ts">
	import DealerCard from '../shared/dealer_card.svelte';

	export let deals: any;

	console.log(deals);
</script>

<div class="my-container mb-[5rem] md:mb-[8.25rem]">
	<h2
		class="text-[2.5rem] md:text-[3.438rem] font-extrabold leading-[120%] mb-[2.813rem] text-center"
	>
		Our authorized dealers
	</h2>
	<p class="text-[1rem] md:text-[1.313rem] text-[#4B4B4B] mb-[2.813rem] w-full text-center">
		Here you can find our trustworthy and reliable dealers.
	  </p>
	<div class="flex flex-wrap gap-[1.5rem] items-center justify-center">
		{#each deals as item}
			<DealerCard	
				name={`${item.fname} ${item.lname}`}
				contact={item.contactno}
				email={item.email}
				img={item.dealer_image}
				companyName={item.business_name}
				companyAddress={item.business_address}
			/>
		{/each}
	</div>
	<!-- <a href="/deals">
		<div class="flex items-center gap-4 mt-[1.875rem] justify-end">
			<p class="text-[1.25rem]">View all</p>
			<img src="/icons/arrow.svg" alt="" />
		</div>
	</a> -->
</div>
