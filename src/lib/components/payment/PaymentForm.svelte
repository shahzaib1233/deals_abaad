<script lang="ts">
	import Button from '$lib/components/shared/button.svelte';
	import ListBoxNew from '$lib/components/shared/list_box_payment.svelte';
	import { getScheduleApi } from '$lib/modules/payment/api/payment_api';
	import { onMount } from 'svelte';

	let loading = false;
	let response: SaleData[] = [];
	let isOpen = false;
	let selectedOption: Option | null = null;
	let options: { value: string; label: string }[] = [];
	let selectedSaleData: any = null; // Replace 'any' with the appropriate type

	interface SaleData {
		saleId: number;
	}
	interface Option {
		value: string;
		label: string;
	}

	const updateData = (saleIds: number[]) => {
		const dataOptions = saleIds.map((saleId) => ({
			value: saleId.toString(),
			label: `Sale ${saleId}`
		}));

		options = [...dataOptions];
	};

	const scheduleHandler = async () => {
		try {
			const res = await getScheduleApi();
			response = res.data;
			console.log(response);
			const saleIds = response.map((item) => item.saleId);
			updateData(saleIds);
			if (options.length > 0) {
				selectedOption = options[1];
				updateSelectedSaleData();
			}
		} catch (e) {}
	};
	const updateSelectedSaleData = () => {
		if (selectedOption) {
			const selectedSaleId = parseInt(selectedOption.value);
			selectedSaleData = response.find((item) => item.saleId === selectedSaleId);
		}
	};

	onMount(() => {
		scheduleHandler();
	});

	const handleListBoxChange = (event: any) => {
		const selectedValue = event.detail;
		console.log(selectedValue);
		selectedOption = event.detail;
		updateSelectedSaleData();
	};
	const formatDate = (dateStr: string) => {
		const date = new Date(dateStr);
		const options: Intl.DateTimeFormatOptions = {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		};
		return date.toLocaleDateString('en-GB', options);
	};
</script>

<div class="mt-[3rem]">
	<label class="text-[1.3rem] font-bold">Select Payment</label>
	<div class="w-[30rem] mt-3">
		<ListBoxNew
			key="floors"
			{options}
			bind:item={selectedOption}
			{isOpen}
			onChange={handleListBoxChange}
		/>
	</div>
</div>
{#if selectedOption !== null && selectedSaleData !== null}
	<div class="bg-[#F2F5F7] rounded-2xl px-4 md:px-16 py-8 md:py-16 mt-8 text-[1.1rem]">
		<div class="text-center flex-col">
			<h3 class="text-[2rem] font-bold">Unit No: {selectedSaleData.SaleDetail[0].unitno}</h3>
			<h3 class="text-[2rem] font-bold">Floor: {selectedSaleData.SaleDetail[0].floor}</h3>
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
				<p class="whitespace-nowrap text-left">{formatDate(selectedSaleData.date)}</p>
			</div>
			<div class="flex flex-col items-center text-[1.3rem]">
				<p>{selectedSaleData.SaleDetail[0].sellingprice}</p>
			</div>
			<div class="flex flex-col items-center text-[1.3rem]">
				<p>{selectedSaleData.SaleDetail[0].promodiscount}</p>
			</div>
			<div class="flex flex-col items-center text-[1.3rem]">
				<p>{selectedSaleData.SaleDetail[0].referraldiscount}</p>
			</div>
			<div class="flex flex-col items-center text-[1.3rem]">
				<p>{selectedSaleData.SaleDetail[0].netsellingprice}</p>
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
				<h2 class="font-bold">Paid Date</h2>
			</div>
		</div>

		{#each selectedSaleData.SaleSchedule as scheduleItem}
			<div class="grid grid-cols-1 md:grid-cols-5 gap-2 justify-center items-start mt-8">
				<div class="flex flex-col items-center text-[1.3rem]">
					<p class="whitespace-nowrap text-left">{scheduleItem.transactionType}</p>
				</div>
				<div class="flex flex-col items-center text-[1.3rem]">
					<p>{scheduleItem.payableAmount}</p>
				</div>
				<div class="flex flex-col items-center text-[1.3rem]">
					<p class="whitespace-nowrap">{formatDate(scheduleItem.dcheduleDate)}</p>
				</div>
				<div class="flex flex-col items-center text-[1.3rem]">
					{#if scheduleItem.paymentstatus}
						<input type="checkbox" checked readonly disabled class="h-8 w-8 bg-[#4A6594] rounded" />
					{:else}
						<input type="checkbox" class="h-8 w-8 bg-[#F2F5F7] rounded border-gray-400" />
						<!-- <Button className="" type="submit" {loading} label="Pay" /> -->
					{/if}
				</div>
				<div class="flex flex-col items-center text-[1.3rem]">
					<p>
						{scheduleItem.receivedDate == null ? 'Pending' : formatDate(scheduleItem.receivedDate)}
					</p>
				</div>
			</div>
		{/each}

		<hr class="border-t-2 border-gray-300 my-10 w-auto" />
		<div class="">
			<Button className="h-[3rem]" type="submit" {loading} label="Pay Installment" />
		</div>
	</div>
{:else}
	<!-- Optional: You can show a message when no option is selected -->
	<p class="mt-4 text-red-600">Please select an option from the list.</p>
{/if}
