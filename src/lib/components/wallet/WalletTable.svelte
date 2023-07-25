<script>
</script>

<div class="bg-[#F2F5F7] rounded-2xl px-4 md:px-16 py-8 md:py-16 mt-8 text-[1.1rem]">
	<div
		class="grid grid-cols-1 md:grid-cols-3 gap-2 justify-center bg-white h-[3.5rem] rounded-lg items-center"
	>
		<div class="flex flex-col items-left ml-[2rem]">
			<h2 class="font-bold">Property Name</h2>
		</div>
		<div class="flex flex-col items-center">
			<h2 class="font-bold">Transaction Amount</h2>
		</div>
		<div class="flex flex-col items-center">
			<h2 class="font-bold">Earned Points</h2>
		</div>
	</div>

	{#each Array(5) as _, index}
		<div class="grid grid-cols-1 md:grid-cols-3 gap-2 justify-center items-start mt-[2rem]">
			<div class="flex flex-col items-center">
				<div class="flex items-center">
					<img src="/images/bookings/booking-img.png" alt="Property" class="w-30 h-20 rounded" />
					<div class="flex flex-col">
						<span class="ml-8 text-[1.1rem] font-bold">Kings Scenic Mall Sukkur</span>
						<span class="ml-8 text-[1.1rem]">Karachi</span>
					</div>
				</div>
			</div>
			<div class="flex flex-col items-center text-[1.3rem]">
				<p>75,000</p>
			</div>
			<div class="flex flex-col items-center text-[1.3rem]">
				<p>300</p>
			</div>
		</div>
	{/each}
	<hr class="border-t-2 border-gray-300 my-6 w-auto" />
	<div class="grid grid-cols-1 md:grid-cols-3 gap-2 justify-center items-start mt-[1rem]">
		<div class="flex flex-col items-left text-[1.3rem] ml-[1rem]">
			<p class="font-bold">Total</p>
		</div>
		<div class="flex flex-col items-center text-[1.3rem]">
			<p>2,25,000</p>
		</div>
		<div class="flex flex-col items-center text-[1.3rem]">
			<p>900</p>
		</div>
	</div>
</div>
