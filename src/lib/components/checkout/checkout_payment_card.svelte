<script lang="ts">
	import { paymentStore } from '$lib/stores/payment';

	export let paymentData: any;
</script>

<div class="bg-[#F2F5F7] h-[26rem] w-[30rem] p-[2rem] rounded-md">
	<h2 class="text-[1.3rem]">You’re paying,</h2>
	<h2 class="mt-3 text-[2.813rem] font-bold">
		{paymentData?.totalAmount}
	</h2>

	<div class="flex justify-between mt-[1rem] text-[#1A202C] text-[1.25rem]">
		<span>Booking Amount</span>
		<span>Rs {paymentData?.totalAmount}</span>
	</div>
	<div class="flex justify-between mt-[1rem] text-[#1A202C] text-[1.25rem]">
		<span>Less Discount</span>
		<span>Rs 0</span>
	</div>
	<hr class="border-gray-300 border-1 mt-[2rem]" />
	<div class="flex justify-between mt-[1rem] text-[#1A202C] text-[1.25rem]">
		<span>Total</span>
		<span>Rs {paymentData?.totalAmount}</span>
	</div>
	<!-- <div class="flex justify-between mt-[1rem] text-[#1A202C] text-[1.25rem]">
		<span>Reward Points Earned</span>
		<span>500 Points</span>
	</div> -->
</div>
