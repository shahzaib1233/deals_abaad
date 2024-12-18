<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Button from '../shared/button.svelte';
	import { inventoyStore } from '$lib/stores/inventory';
	import { setPaymentFields } from '$lib/stores/payment';
	import type { GETDEALFIELDS } from '$lib/types/getDealFields';
	import { tokenStore } from '$lib/stores/token';
	import { toast } from '$lib/stores/notification';

	export let plan: any;
	export let fields: GETDEALFIELDS;
	export let paymentBtn: HTMLButtonElement;
	export let price: number;
	export let saleprice: number;
	export let bookingAmount = 0;

	console.log("///////////////////////////");
	console.log(plan);
	console.log("fields");
	console.log(fields);
	console.log("paymentBtn"+ paymentBtn);
	console.log("price"+ price);
	console.log("saleprice"+ saleprice);
	console.log("bookingAmount"+ bookingAmount);
	console.log("///////////////////////////");

	let confirmationAmount = 0;
	let token = '';
	tokenStore.subscribe((value) => {
		token = value;
	});
	let paymentData = {
		sellingPrice: 0,
		downPayment: 0,
		possession: 0,
		amountPerInstallment: 0,
		annualPayment: 0,
		biannualPayments: 0,
		quarterlyPayments: 0,
		noOfInstallments: 0
	};

	let paymentPlan = 0;

	const calculation = () => {
		if (plan[paymentPlan].noOfInstallments > 0) {
			paymentData.downPayment = Math.round((saleprice / 100) * +plan[paymentPlan].downpayment);
			paymentData.possession = Math.round((saleprice / 100) * +plan[paymentPlan].possessionamount);
			paymentData.annualPayment = Math.round((saleprice / 100) * +plan[paymentPlan].annualpayment);
			paymentData.biannualPayments = Math.round(
				(saleprice / 100) * +plan[paymentPlan].biannualpayments
			);
			paymentData.quarterlyPayments = Math.round(
				(saleprice / 100) * +plan[paymentPlan].quarterlypayments
			);
			paymentData.noOfInstallments = +plan[paymentPlan].noOfInstallments;
			paymentData.amountPerInstallment = Math.round(
				(price -
					paymentData.downPayment -
					paymentData.annualPayment -
					paymentData.biannualPayments -
					paymentData.quarterlyPayments -
					paymentData.possession) /
					paymentData.noOfInstallments
			);

			confirmationAmount = Math.round(
				paymentData.downPayment > 0 ? paymentData.downPayment : paymentData.amountPerInstallment
			);
			fields.confirmationAmount = confirmationAmount;
			fields.paymentplanId = 1;
		} else {
			paymentData.downPayment = plan[paymentPlan].downpayment;
			paymentData.possession = Math.round((saleprice / 100) * +plan[paymentPlan].possessionamount);
			paymentData.annualPayment = plan[paymentPlan].annualpayment;
			paymentData.biannualPayments = plan[paymentPlan].biannualpayments;
			paymentData.quarterlyPayments = plan[paymentPlan].quarterlypayments;
			paymentData.noOfInstallments = plan[paymentPlan].noOfInstallments;
			paymentData.amountPerInstallment = plan[paymentPlan].amountPerInstallment;
			fields.confirmationAmount = 0;
			confirmationAmount = 0;
			fields.paymentplanId = 3;
		}
	};
	onMount(() => {
		calculation();
	});

	const paymentHandler = () => {
		if (token == '' || token == undefined) {
			toast({ type: 'error', heading: 'Error', text: 'Please Login first' });
			return;
		}
		fields.downpayment = paymentData.downPayment;
		fields.possession = paymentData.possession;
		fields.yearly = paymentData.annualPayment;
		fields.biannual = paymentData.biannualPayments;
		fields.quaterly = paymentData.quarterlyPayments;
		fields.noofinstallments = paymentData.noOfInstallments;
		fields.monthly = paymentData.amountPerInstallment;

		paymentBtn.click();
		setPaymentFields(fields);
	};

	$: {
		if (plan[paymentPlan].noOfInstallments > 0) {
			if (fields.confirmationcheck) {
				fields.totalAmount = confirmationAmount + bookingAmount;
			} else if (bookingAmount == 1) {
				fields.totalAmount = bookingAmount + 0.5;
			} else {
				fields.totalAmount = bookingAmount;
			}
		} else {
			fields.totalAmount = bookingAmount;
		}
		// if (fields.confirmationcheck) {
		// 	fields.totalAmount = confirmationAmount + bookingAmount;
		// } else if (bookingAmount == 1) {
		// 	fields.totalAmount = bookingAmount + 0.5;
		// } else {
		// 	fields.totalAmount = bookingAmount;
		// }
	}

	const handleCheckboxChange = (check: boolean) => {
		fields.AmountconfirmationCheck = check;
	};
</script>

<div
	class="bg-[#F2F5F7] min-w-[16rem] sm: w-full md:min-w-[30rem] h-[max-content] p-[2rem] rounded-md sticky top-[3rem]"
>
	<div class="flex justify-between">
		<div class="flex items-center">
			<label for="plan1" class="text-[#4B4B4B] text-[1rem] md:text-[1rem]">Payment Plan One</label>
			<input
				type="radio"
				color="yellow"
				checked={paymentPlan == 0}
				name="plan"
				id="plan1"
				on:change={() => {
					paymentPlan = 0;
					calculation();
				}}
				class="ml-[1rem]"
			/>
		</div>
		{#if plan.length > 1}
			<div class="flex items-center">
				<label for="plan3" class="text-[#4B4B4B] text-[1rem] md:text-[1rem]"
					>Customized Payment Plan</label
				>
				<input
					type="radio"
					color="yellow"
					name="plan"
					id="plan3"
					on:change={(row) => {
						paymentPlan = 1;
						calculation();
					}}
					class="ml-[1rem]"
				/>
			</div>
		{/if}
	</div>
	<div class="mt-[1rem] text-[1rem] md:text-[1.188rem]">
		<div class="flex flex-col md:flex-row justify-between">
			<span class="text-left mt-4 text-[0.9rem] md:text-[1.2rem] font-bold">Down Payment </span>
			<span class="text-left mt-2 mb-4 text-[0.9rem] md:text-[1.2rem]">
				{Math.round(paymentData.downPayment).toLocaleString()}/-
			</span>
		</div>

		{#if paymentData.noOfInstallments > 0}
			<div class="flex flex-col md:flex-row justify-between">
				<span class="text-left mt-4 text-[0.9rem] md:text-[1.2rem] font-bold">
					Monthly ({paymentData.noOfInstallments.toLocaleString()})
				</span>
				<span class="text-left mt-2 mb-4 text-[0.9rem] md:text-[1.2rem]">
					{paymentData.amountPerInstallment.toLocaleString()}/-
				</span>
			</div>
		{/if}
		{#if paymentData.annualPayment > 0}
			<div class="flex flex-col md:flex-row justify-between">
				<span class="text-left mt-4 text-[0.9rem] md:text-[1.2rem] font-bold">
					Yearly ({(paymentData.noOfInstallments / 12).toFixed(0).toLocaleString()})
				</span>
				<span class="text-left mt-2 mb-4 text-[0.9rem] md:text-[1.2rem]">
					{paymentData.annualPayment.toLocaleString()}/-
				</span>
			</div>
		{/if}

		<div class="flex flex-col md:flex-row justify-between mt">
			<span class="text-left mt-4 text-[0.9rem] md:text-[1.2rem] font-bold">
				Possession{' '}
			</span>
			<span class="text-left mt-2 mb-4 text-[0.9rem] md:text-[1.2rem]">
				{paymentData.possession.toLocaleString()}/-
			</span>
		</div>

		{#if paymentData.noOfInstallments > 0}
			<div class="flex flex-col md:flex-row justify-between mt">
				<span class="text-left mt-4 text-[1rem] md:text-[1.2rem]">
					<input
						type="checkbox"
						id="camount"
						bind:checked={fields.confirmationcheck}
						on:change={() => handleCheckboxChange(fields.confirmationcheck)}
						class="rounded-md h-[1.2rem] w-[1.2rem]"
					/>
					<label for="camount" class="ml-2 font-bold text-[0.9rem] md:text-[1.2rem]"
						>Confirmation Amount</label
					>{' '}
				</span>
				<span class="text-left mt-2 mb-4 text-[0.9rem] md:text-[1.2rem]">
					({fields.confirmationAmount.toLocaleString()} /-)
				</span>
			</div>
			<p class="mt-6 text-sm text-[grey]">
				Please Pay confirmation amount Now or in max 2 days to avoid cancellation
			</p>
		{/if}

		<h2 class="mt-[2rem] font-bold">BOOKING & PAYMENT DETAILS</h2>
	</div>

	<hr class="border-gray-300 border-1 mt-2" />

	<div class="flex flex-col md:flex-row justify-between mt">
		<span class="text-left mt-4 text-[0.9rem] md:text-[1.2rem] font-bold"> Booking Amount </span>
		<span class="text-left mt-2 mb-4 text-[0.9rem] md:text-[1.2rem]">
			Rs {bookingAmount.toLocaleString()}
			{#if bookingAmount == 1 && !fields.confirmationcheck}
				(Bank Rs. 0.5)
			{/if}
		</span>
	</div>
	{#if paymentData.noOfInstallments > 0 && fields.AmountconfirmationCheck}
		<div class="flex flex-col md:flex-row justify-between mt">
			<span class="text-left mt-4 text-[0.9rem] md:text-[1.2rem] font-bold">
				Confirmation Amount
			</span>
			<span class="text-left mt-2 mb-4 text-[0.9rem] md:text-[1.2rem]">
				Rs {confirmationAmount.toLocaleString()}
			</span>
		</div>
	{/if}

	<div class="flex flex-col md:flex-row justify-between mt">
		<span class="text-left mt-4 text-[0.9rem] md:text-[1.2rem] font-bold"> Total </span>
		<span class="text-left mt-2 mb-4 text-[0.9rem] md:text-[1.2rem]">
			Rs
			{#if paymentData.noOfInstallments > 0}
				{#if fields.confirmationcheck}
					{(bookingAmount + confirmationAmount).toLocaleString()}
				{:else if bookingAmount == 1}
					{(bookingAmount + 0.5).toLocaleString()}
				{:else}
					{bookingAmount}
				{/if}
			{:else}
				{bookingAmount}
			{/if}
			<!-- {#if fields.confirmationcheck}
				{(bookingAmount + confirmationAmount).toLocaleString()}
			{:else if bookingAmount == 1}
				{(bookingAmount + 0.5).toLocaleString()}
			{:else}
				{bookingAmount}
			{/if} -->
		</span>
	</div>
	<Button
		className="rounded-md w-[14.438rem] mt-6 h-[2.5rem] text-[0.9rem] md:text-[1.2rem]"
		type="submit"
		onclick={() => paymentHandler()}
		label="Checkout"
	/>
	<h2 class="w-[90%] mt-6 text-[0.9rem] md:text-[1.2rem]">
		Your personal data will be used to process your order, support your experience throughout this
		website, and for other purposes described in our privacy policy.
	</h2>
</div>
