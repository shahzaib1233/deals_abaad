<script>
	import CustomerTestimonialCard from './customer_testimonial_card.svelte';
</script>

<div class="my-[4rem]">
	<div class="my-container py-[5rem] flex flex-col items-center justify-center">
		<h2
			class="text-[2.5rem] lg:text-[3.438rem] font-extrabold leading-[120%] mb-[0.625rem] text-center"
		>
			Customer testimonials
		</h2>
		<p class="text-[#4B4B4B] text-[1rem] md:text-[1.2rem] max-w-[45.5rem] text-center">
			Our customers are not customers but our family. Check out what our family says about
			DealsAbaad
		</p>
		<div class="w-full flex flex-wrap mt-[4.5rem] gap-[2rem] flex-col md:flex-row">
			<CustomerTestimonialCard />
			<!-- <img class="flex-1 md:w-1/2" src="/images/testimonial.png" /> -->
			<div class="flex-1 md:w-1/2">
				<iframe
					width="100%"
					height="100%"
					src="https://www.youtube.com/embed/OdTVAtItGP0?controls=0"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
					class="rounded-[1.25rem]"
					style="overflow: hidden; "
				/>
			</div>
		</div>
	</div>
</div>
