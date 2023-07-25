<script lang="ts">
	import { goto } from '$app/navigation';
	import CheckoutPaymentCard from '$lib/components/checkout/checkout_payment_card.svelte';
	import Button from '$lib/components/shared/button.svelte';
	import axios from 'axios';
	import { onMount } from 'svelte';
	const submitHandler = async () => {
		const res = await axios.post('sales/create');
	};

	let dealDtl: any;

	onMount(() => {
		dealDtl = JSON.parse(localStorage.getItem('dealDetails') ?? '');
	});
</script>

<div class="my-container pt-[10.25rem]">
	<div class="flex gap-4">
		<div class="flex-1">
			<span class="text-[1.8rem] font-bold">Select Payment method</span>

			<div
				class="flex mt-[1rem] bg-[#F2F5F7] w-full md:w-[65%] h-[3rem] rounded-lg justify-left items-center"
			>
				<!-- <Radio class="ml-4" /> -->
				<input type="radio" name="payment" id="card" class="ml-4" />
				<label for="card" class="ml-[1rem]">Credit / Debit Card</label>
			</div>

			<div>
				<Button
					className="text-[#1A202C] w-full md:w-[65%] mt-4 h-[2.5rem]"
					label="Proceed to Payment"
					onclick={() => goto('/thankyou')}
				/>
			</div>

			<div class="mt-[1rem]">
				<div class="mt-[2rem] text-[1.1rem]">
					<span class="text-[#4B4B4B]">
						By making this purchase you agree to our terms and conditions. I agree and I demand that
						you execute the ordered service before the end of the revocation period. I am aware that
						after complete fulfillment of the service I lose my right of recission. Payment
						transactions will be processed abroad.
					</span>
				</div>
				<div class="mt-[1rem]">
					<span class="text-[1.6rem] font-bold">Property details</span>
				</div>
				<div class="flex mt-4">
					<span class="font-bold text-[#4B4B4B]">Address:</span>
					<span class="ml-2" />
				</div>
				<div class="flex mt-2">
					<span class="font-bold text-[#4B4B4B]">Area:</span>
					<span class="ml-2" />
				</div>
				<div class="flex mt-2">
					<span class="font-bold text-[#4B4B4B]">City:</span>
					<span class="ml-2" />
				</div>
				<div class="flex mt-2">
					<span class="font-bold text-[#4B4B4B]">Zip:</span>
					<span class="ml-2" />
				</div>
				<div class="flex mt-2">
					<span class="font-bold text-[#4B4B4B]">Country:</span>
					<span class="ml-2" />
				</div>
				<div class="flex mt-2">
					<span class="font-bold text-[#4B4B4B]">Price:</span>
					<span class="ml-2" />
				</div>

				<div class="mt-[2rem]">
					<span class="text-[1.6rem] font-bold">Personal details</span>
				</div>
				<div class="mt-4">
					<h2 class="font-bold text-[#4B4B4B] mt-2">{dealDtl?.name}</h2>
					<h2 class="font-bold text-[#4B4B4B] mt-2">{dealDtl?.email}</h2>
					<h2 class="font-bold text-[#4B4B4B] mt-2">{dealDtl?.mobileno}</h2>
				</div>
			</div>
		</div>

		<CheckoutPaymentCard paymentData={dealDtl} />
	</div>
</div>
