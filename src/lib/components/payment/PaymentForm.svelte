<script>
	import Button from '$lib/components/shared/button.svelte';

	let loading = false;

	const payment = [
		{
			transactionType: 'Down Payment/Confirmation',
			payableAmount: '588,916',
			dueDate: '8-jul-23',
			Amountpaid: true,
			paidDate: '7-jul-23'
		},
		{
			transactionType: 'Monthly Installment 1',
			payableAmount: '39,129',
			dueDate: '8-aug-23',
			Amountpaid: true,
			paidDate: '7-aug-23'
		},
		{
			transactionType: 'Monthly Installment 2',
			payableAmount: '39,129',
			dueDate: '8-sept-23',
			Amountpaid: false,
			paidDate: '7-sept-23'
		},
		{
			transactionType: 'Monthly Installment 3',
			payableAmount: '39,129',
			dueDate: '8-oct-23',
			Amountpaid: false,
			paidDate: '7-oct-23'
		}
	];
</script>

<div class="bg-[#F2F5F7] rounded-2xl px-4 md:px-16 py-8 md:py-16 mt-8 text-[1.1rem]">
	<div class="text-center">
		<span class="text-[2rem] font-bold">14 per 14 Deal (First Floor)</span>
	</div>
	<div
		class="grid grid-cols-1 md:grid-cols-5 gap-2 mt-[6rem] justify-center bg-white h-[3.5rem] rounded-lg items-center"
	>
		<div class="flex flex-col items-center">
			<h2 class="font-bold">Booking Date</h2>
		</div>
		<div class="flex flex-col items-center">
			<h2 class="font-bold">Standard Selling Price</h2>
		</div>
		<div class="flex flex-col items-center">
			<h2 class="font-bold">Promo Discount</h2>
		</div>
		<div class="flex flex-col items-center">
			<h2 class="font-bold">Referral Discount</h2>
		</div>
		<div class="flex flex-col items-center">
			<h2 class="font-bold">Net Selling Price</h2>
		</div>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-5 gap-2 justify-center items-start mt-8">
		<div class="flex flex-col items-center text-[1.3rem]">
			<p class="whitespace-nowrap text-left">1-jul-23</p>
		</div>
		<div class="flex flex-col items-center text-[1.3rem]">
			<p>4,206,540</p>
		</div>
		<div class="flex flex-col items-center text-[1.3rem]">
			<p>588,916</p>
		</div>
		<div class="flex flex-col items-center text-[1.3rem]">
			<p>50,000</p>
		</div>
		<div class="flex flex-col items-center text-[1.3rem]">
			<p>3,567,624</p>
		</div>
	</div>

	<div
		class="grid grid-cols-1 md:grid-cols-5 gap-2 mt-[6rem] justify-center bg-white h-[3.5rem] rounded-lg items-center"
	>
		<div class="flex flex-col items-center">
			<h2 class="font-bold">Transaction Type</h2>
		</div>
		<div class="flex flex-col items-center">
			<h2 class="font-bold">Payable Amount</h2>
		</div>
		<div class="flex flex-col items-center">
			<h2 class="font-bold">Due Date</h2>
		</div>
		<div class="flex flex-col items-center">
			<h2 class="font-bold">Paid Amount</h2>
		</div>
		<div class="flex flex-col items-center">
			<h2 class="font-bold">Payable Date</h2>
		</div>
	</div>

	{#each payment as item}
		<div class="grid grid-cols-1 md:grid-cols-5 gap-2 justify-center items-start mt-8">
			<div class="flex flex-col items-center text-[1.3rem]">
				<p class="whitespace-nowrap text-left">{item.transactionType}</p>
			</div>
			<div class="flex flex-col items-center text-[1.3rem]">
				<p>{item.payableAmount}</p>
			</div>
			<div class="flex flex-col items-center text-[1.3rem]">
				<p>{item.dueDate}</p>
			</div>
			<div class="flex flex-col items-center text-[1.3rem]">
				{#if item.Amountpaid}
					<input type="checkbox" checked readonly disabled class="h-8 w-8 bg-[#4A6594] rounded" />
				{:else}
					<input type="checkbox" class="h-8 w-8 bg-[#F2F5F7] rounded border-gray-400" />
					<!-- <Button className="" type="submit" {loading} label="Pay" /> -->
				{/if}
			</div>
			<div class="flex flex-col items-center text-[1.3rem]">
				<p>{item.paidDate}</p>
			</div>
		</div>
	{/each}

	<hr class="border-t-2 border-gray-300 my-10 w-auto" />
	<div class="">
		<Button className="h-[3rem]" type="submit" {loading} label="Pay Installment" />
	</div>
</div>
