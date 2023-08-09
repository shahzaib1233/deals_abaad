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

	let paymentPlan = 1;

	onMount(() => {
		paymentData.downPayment = Math.round((saleprice / 100) * +plan[0].downpayment);
		paymentData.possession = Math.round((saleprice / 100) * +plan[0].possessionamount);
		paymentData.annualPayment = Math.round((price / 100) * +plan[0].annualpayment);
		paymentData.biannualPayments = Math.round((price / 100) * +plan[0].biannualpayments);
		paymentData.quarterlyPayments = Math.round((price / 100) * +plan[0].quarterlypayments);
		paymentData.noOfInstallments = +plan[0].noOfInstallments;
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
	});

	const paymentHandler = () => {
		if (token == '' || token == undefined) {
			toast({ type: 'error', heading: 'Error', text: 'Please Login first' });
			return;
		}
		paymentBtn.click();
		setPaymentFields(fields);
		// goto('/checkout');
	};

	$: {
		if (fields.confirmationcheck) {
			fields.totalAmount = confirmationAmount + bookingAmount;
		} else if (bookingAmount == 1) {
			fields.totalAmount = bookingAmount + 0.5;
		} else {
			fields.totalAmount = bookingAmount;
		}
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
			<label for="plan1" class="text-[#4B4B4B] text-[1rem] md:text-[1.125rem]"
				>Payment Plan One</label
			>
			<input
				type="radio"
				color="yellow"
				checked={paymentPlan == 1}
				name="plan"
				id="plan1"
				on:change={() => {
					paymentPlan = 1;
				}}
				class="ml-[1rem] md:ml-[2.5rem]"
			/>
		</div>
	</div>
	<div class="mt-[1rem] text-[1rem] md:text-[1.188rem]">
		<!-- <h2 class="mt-3">
			Down Payment
			<span class="ml-4">
				{Math.round(paymentData.downPayment).toLocaleString()}/-
			</span>
		</h2> -->
		<div class="flex flex-col md:flex-row justify-between">
			<span class="text-left mt-4 text-[0.9rem] md:text-[1.2rem] font-bold"> Down Payment </span>
			<span class="text-left mt-2 mb-4 text-[0.9rem] md:text-[1.2rem]">
				{Math.round(paymentData.downPayment).toLocaleString()}/-
			</span>
		</div>
		<!-- <h2 class="mt-3">
			Monthly ({paymentData.noOfInstallments.toLocaleString()})
			<span class="ml-4">
				{paymentData.amountPerInstallment.toLocaleString()}/-
			</span>
		</h2> -->
		<div class="flex flex-col md:flex-row justify-between">
			<span class="text-left mt-4 text-[0.9rem] md:text-[1.2rem] font-bold">
				Monthly ({paymentData.noOfInstallments.toLocaleString()})
			</span>
			<span class="text-left mt-2 mb-4 text-[0.9rem] md:text-[1.2rem]">
				{paymentData.amountPerInstallment.toLocaleString()}/-
			</span>
		</div>
		{#if paymentData.annualPayment > 0}
			<!-- <h2 class="mt-3">
				Yearly ({(paymentData.noOfInstallments / 12).toFixed(0).toLocaleString()})
				<span class="ml-4">
					{paymentData.annualPayment.toLocaleString()}/-
				</span>
			</h2> -->
			<div class="flex flex-col md:flex-row justify-between">
				<span class="text-left mt-4 text-[0.9rem] md:text-[1.2rem] font-bold">
					Yearly ({(paymentData.noOfInstallments / 12).toFixed(0).toLocaleString()})
				</span>
				<span class="text-left mt-2 mb-4 text-[0.9rem] md:text-[1.2rem]">
					{paymentData.annualPayment.toLocaleString()}/-
				</span>
			</div>
		{/if}

		<!-- <h2 class="mt-3">
			Possession{' '}
			<span class="ml-4">
				{paymentData.possession.toLocaleString()}/-
			</span>
		</h2> -->
		<div class="flex flex-col md:flex-row justify-between mt">
			<span class="text-left mt-4 text-[0.9rem] md:text-[1.2rem] font-bold">
				Possession{' '}
			</span>
			<span class="text-left mt-2 mb-4 text-[0.9rem] md:text-[1.2rem]">
				{paymentData.possession.toLocaleString()}/-
			</span>
		</div>
		<!-- <h2 class="mt-3">
			<input
				type="checkbox"
				id="camount"
				bind:checked={fields.confirmationcheck}
				on:change={() => handleCheckboxChange(fields.confirmationcheck)}
			/>

			<label for="camount">Confirmation Amount</label>{' '}
			<span>({fields.confirmationAmount.toLocaleString()} /-)</span>
		</h2> -->
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
			Please Pay confirmation amount Now or in max 3 days to avoid cancellation
		</p>
		<h2 class="mt-[2rem] font-bold">BOOKING & PAYMENT DETAILS</h2>
	</div>
	<!-- <div class="flex justify-between mt-[1rem]">
		<span>Product</span>
		<span>Subtotal</span>
	</div> -->
	<hr class="border-gray-300 border-1 mt-2" />

	<!-- <div class="flex justify-between mt-[1rem] text-[#1A202C] text-[1rem] md:text-[1.25rem]">
		<span>Booking Amount</span>
		<span>Rs {bookingAmount.toLocaleString()} </span>
	</div> -->
	<div class="flex flex-col md:flex-row justify-between mt">
		<span class="text-left mt-4 text-[0.9rem] md:text-[1.2rem] font-bold"> Booking Amount </span>
		<span class="text-left mt-2 mb-4 text-[0.9rem] md:text-[1.2rem]">
			Rs {bookingAmount.toLocaleString()}
			{#if (bookingAmount == 1 && !fields.confirmationcheck)}
				(Bank Rs. 0.5)
			{/if}
		</span>
	</div>
	{#if fields.AmountconfirmationCheck}
		<!-- <div class="flex justify-between mt-[1rem] text-[#1A202C] text-[1rem] md:text-[1.25rem]">
			<span>Confirmation Amount</span>
			<span>Rs {confirmationAmount.toLocaleString()} </span>
		</div> -->
		<div class="flex flex-col md:flex-row justify-between mt">
			<span class="text-left mt-4 text-[0.9rem] md:text-[1.2rem] font-bold">
				Confirmation Amount
			</span>
			<span class="text-left mt-2 mb-4 text-[0.9rem] md:text-[1.2rem]">
				Rs {confirmationAmount.toLocaleString()}
			</span>
		</div>
	{/if}
	<!-- <div class="flex justify-between mt-[1rem] text-[#1A202C] text-[1rem] md:text-[1.25rem]">
		<span>Total</span>
		<span>
			Rs
			{#if fields.confirmationcheck}
				{(bookingAmount + confirmationAmount).toLocaleString()}
			{:else}
				{bookingAmount}
			{/if}
		</span>
	</div> -->
	<div class="flex flex-col md:flex-row justify-between mt">
		<span class="text-left mt-4 text-[0.9rem] md:text-[1.2rem] font-bold"> Total </span>
		<span class="text-left mt-2 mb-4 text-[0.9rem] md:text-[1.2rem]">
			Rs
			{#if fields.confirmationcheck}
				{(bookingAmount + confirmationAmount).toLocaleString()}
			{:else if bookingAmount == 1}
				{(bookingAmount + 0.5).toLocaleString()}
			{:else}
				{bookingAmount}
			{/if}
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
