<script lang="ts">
	import DealEnd from './deal_end.svelte';

	export let date: any;
	export let left: any;
</script>

<div class="rounded-2xl flex flex-col">
	<div class="flex flex-col md:flex-col mb-4 md:mb-[2rem] bg-[#F2F5F7] px-8 py-8 rounded-md">
		<div
			class="bg-[#4A6594] rounded-md h-[6rem] sm:h-[4rem] flex items-center justify-center w-full"
		>
			<span class="text-white ml-[1rem] text-[1rem] md:text-[1.2rem] w-[auto] text-center">
				Apply Voucher/Referral Code to Get Exclusive Discount!
			</span>
		</div>
		<div class="mt-[1.5rem] md:mt-0">
			<DealEnd {date} {left} />
		</div>
	</div>
</div>
