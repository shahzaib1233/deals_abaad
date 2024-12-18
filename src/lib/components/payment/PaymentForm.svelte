<script lang="ts">
	import Button from '$lib/components/shared/button.svelte';
	import ListBoxNew from '$lib/components/shared/list_box_payment.svelte';
	import { getScheduleApi } from '$lib/modules/payment/api/payment_api';
	import { toast } from '$lib/stores/notification';
	import { onMount } from 'svelte';
	import Spinner from '$lib/components/shared/spinner.svelte';
	import dayjs from 'dayjs';
	import CryptoJS from 'crypto-js';

	let loading = false;
	let response: any[] = [];
	let isOpen = false;
	let selectedOption: Option | null = null;
	let options: { value: string; label: string }[] = [];
	let selectedSaleData: any = null;
	let selectedInstallments: any = [];
	let amountpayable = 0;
	let isLoading = true;

	let buttonDisabled = true;

	interface Option {
		value: string;
		label: string;
	}
	const handleCheckboxChange = (scheduleItem: any) => {
		console.log(scheduleItem);

		if (scheduleItem.paymentstatus) return;

		if (selectedInstallments.includes(scheduleItem)) {
			selectedInstallments = selectedInstallments.filter((item: any) => item !== scheduleItem);
			amountpayable -= scheduleItem.payableAmount;
			toast({
				type: 'warning',
				heading: 'Amount Deducted',
				text: 'This Amount is Deducted from Payable Amount'
			});
		} else {
			selectedInstallments.push(scheduleItem);
			amountpayable += scheduleItem.payableAmount;
			toast({
				type: 'success',
				heading: 'Amount Added',
				text: 'This Amount is Added in Payable Amount Below'
			});
		}

		buttonDisabled = selectedInstallments.length > 0 ? false : true;
	};

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
			isLoading = false;
		} catch (e) {}
	};

	const updateSelectedSaleData = (value: number) => {
		selectedSaleData = response.find((item) => item.saleId === value);
	};

	onMount(() => {
		scheduleHandler();
		console.log(response);
	});

	const handleListBoxChange = (key: string, value: number) => {
		updateSelectedSaleData(value);
	};

	const formatDate = (dateStr: string) => {
		const date = new Date(dateStr);
		const options: Intl.DateTimeFormatOptions = {
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		};
		return date.toLocaleDateString('en-GB', options);
	};

	function openWindowWithPost(url: any, name: any, params: any) {
		var form = document.createElement('form');
		form.setAttribute('method', 'post');
		form.setAttribute('action', url);
		form.setAttribute('target', name);
		for (var i in params) {
			if (params.hasOwnProperty(i)) {
				var input = document.createElement('input');
				input.type = 'hidden';
				input.name = i;
				input.value = params[i];
				form.appendChild(input);
			}
		}

		document.body.appendChild(form);

		form.submit();
		document.body.removeChild(form);
	}

	const submit = async () => {
		// const dealDetails = JSON.parse(localStorage.getItem('dealDetails') ?? '');
		// const res = await axiosFunction({ url: 'sale/create', method: 'POST', data: dealDetails });

		const merchantID = 'MC58600';
		const password = 'b15x11ax94';
		const hashKey = 'c1v8sz0z30';
		const returnURL = 'https://dealsabaad.com/thankyou';

		const postURL = 'https://testgrid.co/dealsabaadapi/checkout_jc.php';

		const amount = amountpayable * 100;
		const billReference = selectedInstallments
			.map((installment: any) => installment.id)
			.toString()
			.replaceAll(',', 'm');
		const description = `${selectedSaleData.SaleDetail[0].floor} - ${selectedSaleData.SaleDetail[0].unitno}`;
		const isRegisteredCustomer = 'No';
		const language = 'EN';
		const txnCurrency = 'PKR';
		const txnDateTime = new Date().toISOString().replace(/[-:]/g, '').slice(0, -5);
		const txnExpiryDateTime = new Date(Date.now() + 24 * 60 * 60 * 1000)
			.toISOString()
			.replace(/[-:]/g, '')
			.slice(0, -5);
		const txnRefNumber = selectedSaleData.saleId;

		const txnType = ''; // Leave it empty
		const version = '2.0';
		const subMerchantID = ''; // Leave it empty
		const bankID = ''; // Leave it empty
		const productID = selectedSaleData.SaleDetail[0].inventoryId; // Leave it empty
		const ppmpf_1 = selectedSaleData.name; // use to store extra details (use AlphaNumeric only)
		const ppmpf_2 = selectedSaleData.address; // use to store extra details (use AlphaNumeric only)
		const ppmpf_3 = selectedSaleData.mobileno; // use to store extra details (use AlphaNumeric only)
		const ppmpf_4 = `${selectedSaleData.SaleDetail[0].projectId} - ${selectedSaleData.SaleDetail[0].inventoryId} - ${selectedSaleData.SaleDetail[0].floor} - ${selectedSaleData.SaleDetail[0].unitno}`; // use to store extra details (use AlphaNumeric only)
		const ppmpf_5 = 'schedule'; // use to store extra details (use AlphaNumeric only)

		const hashArray = [
			amount,
			bankID,
			billReference,
			description,
			isRegisteredCustomer,
			language,
			merchantID,
			password,
			productID,
			returnURL,
			txnCurrency,
			txnDateTime,
			txnExpiryDateTime,
			txnRefNumber,
			txnType,
			version,
			ppmpf_1,
			ppmpf_2,
			ppmpf_3,
			ppmpf_4,
			ppmpf_5
		];

		let sortedArray = hashKey;
		for (let i = 0; i < hashArray.length; i++) {
			if (hashArray[i] !== 'undefined' && hashArray[i] !== null && hashArray[i] !== '') {
				sortedArray += '&' + hashArray[i];
			}
		}

		const secureHash = CryptoJS.HmacSHA256(sortedArray, hashKey).toString();

		localStorage.setItem('orderId', selectedSaleData.saleId);

		openWindowWithPost(postURL, '_self', {
			pp_Version: version,
			pp_TxnType: txnType,
			pp_Language: language,
			pp_MerchantID: merchantID,
			pp_SubMerchantID: subMerchantID,
			pp_Password: password,
			pp_TxnRefNo: txnRefNumber,
			pp_Amount: amount,
			pp_IsRegisteredCustomer: isRegisteredCustomer,
			pp_TxnCurrency: txnCurrency,
			pp_TxnDateTime: dayjs().format('YYYYMMDDHHmmss'),
			pp_TxnExpiryDateTime: dayjs().add(8, 'days').format('YYYYMMDDHHmmss'),
			pp_BillReference: billReference,
			pp_Description: selectedSaleData.SaleDetail[0].project.name,
			pp_ReturnURL: returnURL,
			pp_SecureHash: secureHash,
			ppmpf_1: ppmpf_1,
			ppmpf_2: description,
			ppmpf_3: ppmpf_3,
			ppmpf_4: ppmpf_4,
			ppmpf_5: 'schedule_web',
			pp_BankID: bankID,
			pp_ProductID: productID
		});
	};
</script>

{#if isLoading}
	<div class="flex justify-center items-center h-[10rem]">
		<Spinner />
	</div>
{:else if response.length > 0}
	<div class="mt-[3rem]">
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="text-[1.3rem] font-bold">Select Order</label>
		<div class="w-[13rem] sm:w-[20rem] md:w-[30rem] mt-3">
			<ListBoxNew
				key="payments"
				{options}
				bind:item={selectedOption}
				{isOpen}
				onChange={handleListBoxChange}
			/>
		</div>
	</div>
{:else if response.length == 0}
	<div class="my-container py-[5.25rem]">
		<div class="flex flex-col items-center gap-[1rem] mt-[4rem] text-center">
			<h2 class="text-3xl font-bold text-gray-600">No Orders Found</h2>
			<p class="text-gray-500 text-[1.3rem]">Please Purchase a Deal First</p>
		</div>
	</div>
{/if}

{#if selectedSaleData !== null}
	<form
		on:submit|preventDefault={submit}
		class="bg-[#F2F5F7] rounded-2xl px-2 sm:px-4 md:px-16 py-2 sm:py-8 md:py-16 mt-8 text-[1.1rem]"
	>
		<div class="flex-col mb-8">
			<h3 class="text-[1rem] md:text-[2rem] font-bold">
				Project: {selectedSaleData.SaleDetail[0].project.name}
			</h3>
			<h3 class="text-[1rem] md:text-[2rem] font-bold">
				Unit No: {selectedSaleData.SaleDetail[0].unitno}
			</h3>
			<h3 class="text-[1rem] md:text-[2rem] font-bold">
				Floor: {selectedSaleData.SaleDetail[0].floor}
			</h3>
		</div>
		<div class="mb-4">
			<p class="text-md md:text-xl font-bold">
				Selected Payable Amount: {Math.round(amountpayable).toLocaleString()}
			</p>
		</div>

		<div class="">
			<Button
				className="h-[3rem]"
				type="submit"
				{loading}
				label="Pay Installment"
				disabled={buttonDisabled}
			/>
		</div>

		<div class="mt-[1rem]" style="overflow-x:auto;">
			<table class="w-full">
				<tr class="bg-white min-h-[3.5rem] py-4">
					<td class="text-[0.8rem] sm:text-[1rem] font-bold min-w-[5rem] px-4 py-4 text-center"
						>Booking Date</td
					>
					<td class="text-[0.8rem] sm:text-[1rem] font-bold min-w-[8rem] pr-4 py-4 text-center"
						>Standard Selling Price</td
					>
					<td class="text-[0.8rem] sm:text-[1rem] font-bold min-w-[5rem] pr-4 py-4 text-center"
						>Promo Discount</td
					>
					<td class="text-[0.8rem] sm:text-[1rem] font-bold min-w-[5rem] pr-4 py-4 text-center"
						>Referral Discount</td
					>
					<td class="text-[0.8rem] sm:text-[1rem] font-bold min-w-[5rem] pr-4 py-4 text-center"
						>Net Selling Price</td
					>
				</tr>

				<tr class="">
					<td
						class="text-[0.8rem] sm:text-[1rem] font-bold mr-[0.8rem] sm:mr-0 pr-4 text-center pb-4 pt-4"
						>{formatDate(selectedSaleData.date)}</td
					>
					<td
						class="text-[0.8rem] sm:text-[1rem] font-bold mr-[0.8rem] sm:mr-0 pr-4 text-center pb-4 pt-4"
					>
						Rs. {Math.round(selectedSaleData.SaleDetail[0].sellingprice).toLocaleString()}
					</td>
					<td
						class="text-[0.8rem] sm:text-[1rem] font-bold mr-[0.8rem] sm:mr-0 pr-4 text-center pb-4 pt-4"
					>
						Rs. {Math.round(selectedSaleData.SaleDetail[0].promodiscount).toLocaleString()}
					</td>
					<td
						class="text-[0.8rem] sm:text-[1rem] font-bold mr-[0.8rem] sm:mr-0 pr-4 text-center pb-4 pt-4"
					>
						Rs. {Math.round(selectedSaleData.SaleDetail[0].referraldiscount).toLocaleString()}
					</td>
					<td
						class="text-[0.8rem] sm:text-[1rem] font-bold mr-[0.8rem] sm:mr-0 pr-8 text-center pb-4 pt-4"
					>
						Rs. {Math.round(selectedSaleData.SaleDetail[0].netsellingprice).toLocaleString()}
					</td>
				</tr>
			</table>
		</div>
		<div class="mt-[1rem]" style="overflow-x:auto;">
			<table class="w-full">
				<tr class="bg-white min-h-[3.5rem] py-4">
					<td class="text-[0.8rem] sm:text-[1rem] font-bold min-w-[5rem] px-4 py-4 text-center"
						>Status</td
					>
					<td class="text-[0.8rem] sm:text-[1rem] font-bold min-w-[8rem] pr-4 py-4 text-center"
						>Transaction Type</td
					>
					<td class="text-[0.8rem] sm:text-[1rem] font-bold min-w-[5rem] pr-4 py-4 text-center"
						>Payable Amount</td
					>
					<td class="text-[0.8rem] sm:text-[1rem] font-bold min-w-[5rem] pr-4 py-4 text-center"
						>Due Date</td
					>
					<td class="text-[0.8rem] sm:text-[1rem] font-bold min-w-[5rem] pr-4 py-4 text-center"
						>Paid Status</td
					>
				</tr>

				{#each selectedSaleData.SaleSchedule as scheduleItem, i}
					{#if scheduleItem.payableAmount != 0}
						<tr class="">
							<td class="text-center pb-4"
								>{#if scheduleItem.paymentstatus}<input
										type="checkbox"
										checked
										readonly
										disabled
										class="h-4 md:h-6 w-4 md:w-6 bg-[#4A6594] rounded"
									/>{:else}<input
										type="checkbox"
										class="h-4 md:h-6 w-4 md:w-6 rounded"
										on:change={() => handleCheckboxChange(scheduleItem)}
									/>{/if}</td
							>
							<td
								class="text-[0.8rem] sm:text-[1rem] font-bold mr-[0.8rem] sm:mr-0 pr-4 text-center pb-4"
								>{scheduleItem.transactionType}{#if scheduleItem.confirmstatus}
									<br />/ Confirmation Amount{/if}</td
							>
							<td
								class="text-[0.8rem] sm:text-[1rem] font-bold mr-[0.8rem] sm:mr-0 pr-4 text-center pb-4"
								>{Math.round(scheduleItem.payableAmount).toLocaleString()}</td
							>
							<td
								class="text-[0.8rem] sm:text-[1rem] font-bold mr-[0.8rem] sm:mr-0 pr-4 text-center pb-4"
								>{formatDate(scheduleItem.dcheduleDate)}</td
							>
							<td
								class="text-[0.8rem] sm:text-[1rem] font-bold mr-[0.8rem] sm:mr-0 pr-8 text-center pb-4"
								>{scheduleItem.receivedDate == null
									? '-'
									: formatDate(scheduleItem.receivedDate)}</td
							>
						</tr>
					{/if}
				{/each}
			</table>
		</div>
		<!-- {#each selectedSaleData.SaleSchedule as scheduleItem}
			{#if scheduleItem.payableAmount != 0}
				<div class="grid grid-cols-1 md:grid-cols-5 gap-2 justify-center items-start mt-8">
					<div class="flex flex-col items-center text-[1.3rem]">
						{#if scheduleItem.paymentstatus}
							<input
								type="checkbox"
								checked
								readonly
								disabled
								class="h-6 w-6 bg-[#4A6594] rounded"
							/>
						{:else}
							<input
								type="checkbox"
								class="h-6 w-6 bg-[#F2F5F7] rounded border-gray-400"
								on:change={() => handleCheckboxChange(scheduleItem)}
							/>
						{/if}
					</div>
					<div class="flex flex-col text-[1.3rem]">
						<p class=" text-left">
							{scheduleItem.transactionType}
							{#if scheduleItem.confirmstatus} / Confirmation Amount {/if}
						</p>
					</div>
					<div class="flex flex-col items-center text-[1.3rem]">
						<p>{Math.round(scheduleItem.payableAmount).toLocaleString()}</p>
					</div>
					<div class="flex flex-col items-center text-[1.3rem]">
						<p class="whitespace-nowrap">{formatDate(scheduleItem.dcheduleDate)}</p>
					</div>

					<div class="flex flex-col items-center text-[1.3rem]">
						<p>
							{scheduleItem.receivedDate == null ? '-' : formatDate(scheduleItem.receivedDate)}
						</p>
					</div>
				</div>
			{/if}
		{/each} -->

		<hr class="border-t-2 border-gray-300 my-10 w-auto" />
		<div class="mb-4">
			<p class="text-md md:text-xl font-bold">
				Selected Payable Amount: {Math.round(amountpayable).toLocaleString()}
			</p>
		</div>

		<div class="">
			<Button
				className="h-[3rem]"
				type="submit"
				{loading}
				label="Pay Installment"
				disabled={buttonDisabled}
			/>
		</div>
	</form>
	<!-- {:else} -->
{/if}
