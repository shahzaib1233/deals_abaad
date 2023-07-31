<script>
	import HowItWorksCard from './how_it_works_card.svelte';
</script>

<div class="bg-[#F2F5F7] my-[8rem]">
	<div class="my-container py-[5rem] flex flex-col items-center justify-center">
		<h2 class="text-[2.5rem] md:text-[3.438rem] font-extrabold leading-[120%] mb-[0.625rem]">
			How it work
		</h2>
		<p class="text-[#4B4B4B] text-[1rem] md:text-[1.313rem] max-w-[45.5rem] text-center">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is
			simply dummy text
		</p>
		<div class="w-full flex flex-wrap justify-center mt-[4.5rem] gap-[2.5rem] lg:gap-[3rem]">
			<HowItWorksCard
				img="/icons/search.svg"
				name="Search & Browse"
				desc="Use Deals tab or Search based on preferred location and project to get our amazing deals"
			/>
			<HowItWorksCard
				img="/icons/cart.svg"
				name="Checkout process"
				desc="Just click “Get the Deal” button, Fill application form, Pay booking amount online and get booking file."
			/>
			<HowItWorksCard
				img="/icons/tool.svg"
				name="Additional tools & Resources"
				desc="Get registered as Dealer and get unlimited opportunities and discounts."
			/>
		</div>
	</div>
</div>
