<script lang="ts">
	import DealEnd from './deal_end.svelte';

	export let date: any;
</script>

<div class="rounded-2xl flex flex-col">
	<div class="flex flex-col md:flex-col mb-4 md:mb-[2rem] bg-[#F2F5F7] px-10 py-10 rounded-md">
		<div class="bg-[#4A6594] rounded-md h-[4rem] flex items-center justify-center w-full">
			<span class="text-white ml-[1rem] text-[1.2rem] w-[auto]">
				Apply Voucher/Referral Code at Checkout to Get Exclusive Discount!
			</span>
		</div>
		<div>
			<DealEnd {date} />
		</div>
	</div>
</div>
