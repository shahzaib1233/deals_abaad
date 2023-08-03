<script lang="ts">
	import Cookies from 'js-cookie';
	import { onMount } from 'svelte';

	let dealDetails: any;
	let dealAdd: any;
	let inventory: any;

	let orderId: any;

	export let voucherNo: any;
	export let voucherExpiry: any;
	export let transtype: any;

	onMount(() => {
		dealDetails = JSON.parse(localStorage.getItem('dealDetails') ?? '');
		dealAdd = JSON.parse(localStorage.getItem('Deal_Details') ?? '');
		inventory = JSON.parse(localStorage.getItem('inventory') ?? '');

		orderId = JSON.parse(localStorage.getItem('orderId') ?? '');
	});
</script>

<div class="bg-white rounded-2xl mt-3 md:mt-12 px-6 py-8 md:flex md:items-center md:justify-center">
	<div class="md:w-1/2 text-center md:text-left">
		<h2 class="text-xl md:text-2xl font-bold mb-4">Order Details</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-y-2">
			<p class="text-sm md:text-base whitespace-nowrap font-bold">Order Id</p>
			<p class="text-sm md:text-base whitespace-nowrap">{orderId}</p>
			<p class="text-sm md:text-base whitespace-nowrap font-bold">Deal Name</p>
			<p class="text-sm md:text-base whitespace-nowrap">{inventory?.dealName}</p>
			<p class="text-sm md:text-base whitespace-nowrap font-bold">Project Name</p>
			<p class="text-sm md:text-base whitespace-nowrap">{inventory?.projectName}</p>
			<p class="text-sm md:text-base whitespace-nowrap font-bold">Unit No</p>
			<p class="text-sm md:text-base whitespace-nowrap">{dealDetails?.unitno}</p>
			<p class="text-sm md:text-base whitespace-nowrap font-bold">Floor</p>
			<p class="text-sm md:text-base whitespace-nowrap">{dealDetails?.floor}</p>
			<p class="text-sm md:text-base whitespace-nowrap font-bold">Address</p>
			<p class="text-sm md:text-base whitespace-nowrap">{dealAdd?.address}</p>
			<p class="text-sm md:text-base whitespace-nowrap font-bold">City</p>
			<p class="text-sm md:text-base whitespace-nowrap">{dealAdd?.city}</p>
			<p class="text-sm md:text-base whitespace-nowrap font-bold">Price</p>
			<p class="text-sm md:text-base whitespace-nowrap">
				{dealDetails?.sellingprice.toLocaleString()}
			</p>
			{#if voucherNo}
				<p class="text-sm md:text-base whitespace-nowrap font-bold">Transaction Type</p>
				<p class="text-sm md:text-base whitespace-nowrap">{transtype}</p>
			{/if}
			{#if voucherNo}
				<p class="text-sm md:text-base whitespace-nowrap font-bold">Voucher No</p>
				<p class="text-sm md:text-base whitespace-nowrap">{voucherNo}</p>
			{/if}
			{#if voucherExpiry}
				<p class="text-sm md:text-base whitespace-nowrap font-bold">Voucher Expiry Date</p>
				<p class="text-sm md:text-base whitespace-nowrap">{voucherExpiry}</p>
			{/if}
		</div>

		<h2 class="text-xl md:text-2xl font-bold mb-4 mt-4">About Customer</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-y-2">
			<p class="text-sm md:text-base whitespace-nowrap font-bold">Name</p>
			<p class="text-sm md:text-base whitespace-nowrap">{Cookies.get('name')}</p>
			<p class="text-sm md:text-base whitespace-nowrap font-bold">Address</p>
			<p class="text-sm md:text-base whitespace-nowrap">{Cookies.get('address')}</p>
			<p class="text-sm md:text-base whitespace-nowrap font-bold">Phone</p>
			<p class="text-sm md:text-base whitespace-nowrap">{Cookies.get('contactno')}</p>
			<p class="text-sm md:text-base whitespace-nowrap font-bold">Email</p>
			<p class="text-sm md:text-base whitespace-nowrap">{Cookies.get('email')}</p>
		</div>
	</div>
	<div class="md:w-1/2 mt-4 md:mt-0 md:ml-8 flex items-center justify-center">
		<img src="images/thankyou/order-placed.png" alt="Customer" class="h-40 md:h-64" />
	</div>
</div>
