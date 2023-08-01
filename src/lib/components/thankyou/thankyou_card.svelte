<script lang="ts">
	import Cookies from 'js-cookie';
	import { onMount } from 'svelte';

	let dealDetails: any;
	let orderId: any;

	export let voucherNo: any;
	export let voucherExpiry: any;
	export let transtype: any;

	onMount(() => {
		dealDetails = JSON.parse(localStorage.getItem('dealDetails') ?? '');
		orderId = JSON.parse(localStorage.getItem('orderId') ?? '');
	});
</script>

<div class="bg-white rounded-2xl mt-3 md:mt-12 px-6 py-8 md:flex md:items-center md:justify-center">
	<div class="md:w-1/2">
		<h2 class="text-xl md:text-2xl font-bold mb-4">Order Details</h2>
		<div class="grid grid-cols-2 gap-y-2">
			<p class="text-sm md:text-base whitespace-nowrap">Order Id</p>
			<p class="text-sm md:text-base whitespace-nowrap">{orderId}</p>
			{#if voucherNo}
				<p class="text-sm md:text-base whitespace-nowrap">Transaction Type</p>
				<p class="text-sm md:text-base whitespace-nowrap">{transtype}</p>
			{/if}
			{#if voucherNo}
				<p class="text-sm md:text-base whitespace-nowrap">Voucher No</p>
				<p class="text-sm md:text-base whitespace-nowrap">{voucherNo}</p>
			{/if}
			{#if voucherExpiry}
				<p class="text-sm md:text-base whitespace-nowrap">Voucher Expiry Date</p>
				<p class="text-sm md:text-base whitespace-nowrap">{voucherExpiry}</p>
			{/if}
		</div>

		<h2 class="text-xl md:text-2xl font-bold mb-4 mt-4">About Customer</h2>
		<div class="grid grid-cols-2 gap-y-2">
			<p class="text-sm md:text-base whitespace-nowrap">Name</p>
			<p class="text-sm md:text-base whitespace-nowrap">{Cookies.get('name')}</p>
			<p class="text-sm md:text-base whitespace-nowrap">Address</p>
			<p class="text-sm md:text-base whitespace-nowrap">{Cookies.get('address')}</p>
			<p class="text-sm md:text-base whitespace-nowrap">Phone</p>
			<p class="text-sm md:text-base whitespace-nowrap">{Cookies.get('contactno')}</p>
			<p class="text-sm md:text-base whitespace-nowrap">Email</p>
			<p class="text-sm md:text-base whitespace-nowrap">{Cookies.get('email')}</p>
		</div>
		<!-- <h2 class="text-xl md:text-2xl font-bold mt-4">Product Detail</h2>
		<div class="grid grid-cols-2 gap-y-2">
			<p class="text-sm md:text-base whitespace-nowrap">Name</p>
			<p class="text-sm md:text-base whitespace-nowrap">Kings Scenic Mall Sukkur</p>
			<p class="text-sm md:text-base whitespace-nowrap">Address 2</p>
			<p class="text-sm md:text-base whitespace-nowrap">Sukkur Bypass, Sukkur</p>
			<p class="text-sm md:text-base whitespace-nowrap">Unit No:</p>
			<p class="text-sm md:text-base whitespace-nowrap">Bs 212</p>
			<p class="text-sm md:text-base whitespace-nowrap">Unit Price</p>
			<p class="text-sm md:text-base whitespace-nowrap">Rs 70,000000</p>
		</div>
		<h2 class="text-xl md:text-2xl font-bold mt-4">Payment Detail</h2>
		<div class="grid grid-cols-2 gap-y-2">
			<p class="text-sm md:text-base whitespace-nowrap">Method:</p>
			<p class="text-sm md:text-base whitespace-nowrap">Credit Card</p>
			<p class="text-sm md:text-base whitespace-nowrap">Paid Amount:</p>
			<p class="text-sm md:text-base whitespace-nowrap">75,000</p>
			<p class="text-sm md:text-base whitespace-nowrap">Discount:</p>
			<p class="text-sm md:text-base whitespace-nowrap">Rs 2,000</p>
			<p class="text-sm md:text-base whitespace-nowrap">Payment type:</p>
			<p class="text-sm md:text-base whitespace-nowrap">Down Payment</p> -->
		<!-- </div> -->
	</div>
	<div class="md:w-1/2 mt-4 md:mt-0 md:ml-8 flex items-center justify-center">
		<img src="images/thankyou/order-placed.png" alt="Customer" class="h-40 md:h-64" />
	</div>
</div>
