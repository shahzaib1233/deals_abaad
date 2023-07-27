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
			transactionType: 'Monthly Installment 1',
			payableAmount: '39,129',
			dueDate: '8-sept-23',
			Amountpaid: true,
			paidDate: '7-sept-23'
		}
	];
</script>

<div class="bg-[#F2F5F7] rounded-2xl px-4 md:px-16 py-8 md:py-16 mt-8 text-[1.1rem]">
	<div
		class="grid grid-cols-1 md:grid-cols-5 gap-2 justify-center bg-white h-[3.5rem] rounded-lg items-center"
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

	{#each Array(5) as _, index}
		<div class="grid grid-cols-1 md:grid-cols-5 gap-2 justify-center items-start mt-[2rem]">
			<!-- <div class="flex flex-col items-center">
				<div class="flex items-center">
					<img src="/images/bookings/booking-img.png" alt="Property" class="w-30 h-20 rounded" />
					<div class="flex flex-col">
						<span class="ml-8 text-[1.1rem] font-bold">Kings Scenic Mall Sukkur</span>
						<span class="ml-8 text-[1.1rem]">Karachi</span>
					</div>
				</div>
			</div> -->
			<div class="flex flex-col items-center text-[1.3rem]">
				<p>1</p>
			</div>
			<div class="flex flex-col items-center text-[1.3rem]">
				<p>2</p>
			</div>
			<div class="flex flex-col items-center text-[1.3rem]">
				<p>3</p>
			</div>
			<div class="flex flex-col items-center text-[1.3rem]">
				<p>4</p>
			</div>
			<div class="flex flex-col items-center text-[1.3rem]">
				<p>5</p>
			</div>
		</div>
	{/each}
	<hr class="border-t-2 border-gray-300 my-10 w-auto" />
	<!-- <div class="grid grid-cols-1 md:grid-cols-3 gap-2 justify-center items-start mt-[1rem]">
		<div class="flex flex-col items-left text-[1.3rem] ml-[1rem]">
			<p class="font-bold">Total</p>
		</div>
		<div class="flex flex-col items-center text-[1.3rem]">
			<p>2,25,000</p>
		</div>
		<div class="flex flex-col items-center text-[1.3rem]">
			<p>900</p>
		</div>
	</div> -->
</div>

<!-- <div class="">
	<div
		class="bg-[#F2F5F7] rounded-2xl flex flex-col items-left justify-left px-4 md:px-20 py-8 md:py-20 mt-8"
	>
		{#each payment as item}
			<div class="grid grid-cols-1 md:grid-cols-4 mt-2">
				<div class="col-span-2 flex">
					<span class="mr-[1rem]">{item.transactionType}</span>
					<span class="mr-[1rem]">{item.payableAmount}</span>
					<span class="mr-[1rem]">{item.dueDate}</span>
					{#if item.Amountpaid}
						<input
							type="checkbox"
							checked
							readonly
							disabled
							class="h-[2rem] w-[2rem] bg-[#4A6594] rounded"
						/>
					{:else}
						<input
							type="checkbox"
							disabled
							readonly
							class="h-[2rem] w-[2rem] bg-[#F2F5F7] rounded border-gray-400"
						/>
					{/if}
					<span class="mr-[1rem]">{item.paidDate}</span>
				</div> -->
<!-- <div class="md:col-start-4 md:col-end-5 flex justify-end items-center">
					{#if item.Amountpaid}
						<input
							type="checkbox"
							checked
							readonly
							disabled
							class="h-[2rem] w-[2rem] bg-[#4A6594] rounded"
						/>
					{:else}
						<input
							type="checkbox"
							disabled
							readonly
							class="h-[2rem] w-[2rem] bg-[#F2F5F7] rounded border-gray-400"
						/>
					{/if}
				</div> -->
<!-- <div class="col-span-4">
					<hr class="border-t-2 border-gray-300 my-6" />
				</div> -->
<!-- </div>
		{/each}
		<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
			<span class="font-bold py-2 px-2 md:px-4">Total remaining amount is</span>
			<span class="font-bold py-2 px-2 md:px-4">7,54,0000</span>
			<div
				class="font-bold py-2 px-2 md:px-4 md:col-start-3 md:col-end-4 flex justify-end items-center"
			>
				<Button
					className="bg-[#FFD624] hover:bg-[#FFD624] text-[#1A202C] mb-[0.563rem] h-[3rem]"
					type="submit"
					{loading}
					label="Download Slip"
				/>
			</div>
		</div>
	</div>
</div> -->
