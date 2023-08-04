<script lang="ts">
	import GetInTouchCard from './get_in_touch_card.svelte';
</script>

<div class="">
	<div class="my-container flex flex-col justify-center items-center py-[4rem] md:py-[8rem]">
		<h2
			class="text-[2.5rem] md:text-[3.438rem] font-extrabold leading-[120%] mb-[0.625rem] text-center"
		>
			Get in touch
		</h2>
		<p class="text-[#4B4B4B] text[1rem] md:text-[1.313rem] max-w-[42.625rem] text-center">
			We are located in Karachi, Pakistan and you can get in touch via writing us and calling us to
			avail the deals
		</p>
		<div class="mt-[4.938rem] flex flex-wrap justify-between items-start w-full gap-[2rem]">
			<GetInTouchCard
				icon="/icons/location.svg"
				name="Visit Us"
				desc="L6-01, AQ Business Center - Main Jinnah Avenue, Bahria Town, Karachi"
			/>
			<GetInTouchCard icon="/icons/mail.svg" name="Write Us" desc="info@dealsabaad.com" />
			<GetInTouchCard icon="/icons/call.svg" name="Call Us" desc="+92 304 111 7000" />
			<a href="https://wa.me/923002852856" target="_blank" class="flex-1">
				<GetInTouchCard icon="/icons/whatsapp.svg" name="Whatsapp Us" desc="+92 300 285 2856" />
			</a>
		</div>
	</div>
</div>
