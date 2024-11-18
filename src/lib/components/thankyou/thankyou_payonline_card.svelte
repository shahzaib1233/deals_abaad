<script lang="ts">
	export let voucherNo: any;
	export let voucherExpiry: any;
	export let br_number: any;
	export let custName: any;
	export let custPhone: any;
	export let propertyType: any;
	export let amount: any;
</script>

<div class="bg-white rounded-2xl mt-3 md:mt-12 px-6 py-8 md:flex md:items-center md:justify-center">
	<div class="md:w-1/2 text-left md:text-left">
		<h2 class="text-xl md:text-2xl font-bold mb-4">Form Details</h2>
		<div class="grid grid-cols-2 md:grid-cols-2 gap-y-2">
			{#if br_number}
				<p class="text-sm md:text-base font-bold">Reference No</p>
				<p class="text-sm md:text-base">{br_number}</p>
			{/if}
			{#if voucherNo}
				<p class="text-sm md:text-base font-bold">Voucher No</p>
				<p class="text-sm md:text-base">{voucherNo}</p>
			{/if}
			{#if voucherExpiry}
				<p class="text-sm md:text-base font-bold">Voucher Expiry Date:</p>
				<p class="text-sm md:text-base">{voucherExpiry}</p>
			{/if}
			<p class="text-sm md:text-base font-bold">Customer's Name:</p>
			<p class="text-sm md:text-base">{custName}</p>
			<p class="text-sm md:text-base font-bold">Contact No:</p>
			<p class="text-sm md:text-base">{custPhone}</p>
			<p class="text-sm md:text-base font-bold">Desried Property:</p>
			<p class="text-sm md:text-base">{propertyType}</p>
			<p class="text-sm md:text-base font-bold">Installment:</p>
			<p class="text-sm md:text-base">{amount}</p>
			<p class="text-sm md:text-base font-bold">Registration Fee:</p>
			<p class="text-sm md:text-base">Rs: 2500/-</p>
		</div>
	</div>
	<div class="md:w-1/2 mt-4 md:mt-0 md:ml-8 flex items-center justify-center mt-[3rem] md:">
		<img src="images/thankyou/order-placed.png" alt="Customer" class="h-40 md:h-64" />
	</div>
</div>
