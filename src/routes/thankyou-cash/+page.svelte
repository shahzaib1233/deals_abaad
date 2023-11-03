<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from '$lib/components/shared/button.svelte';
	import ThankyouCard from '$lib/components/thankyou/thankyou_card_cash.svelte';
	import { onMount } from 'svelte';

	// const voucherNo = $page.url.searchParams.get('JCVoucherNo');
	// const voucherExpiry = $page.url.searchParams.get('JCVoucherExpiry');
	// const responseMessage = $page.url.searchParams.get('resultmessage');
	// const resultResponse = $page.url.searchParams.get('resultresponse');
	// const transtype = $page.url.searchParams.get('transtype');

	let dealDetails: any;

	onMount(() => {
		dealDetails = JSON.parse(localStorage.getItem('dealDetails') ?? '');
		
	});
</script>

<div class="bg-[#F2F5F7] min-h-screen">
	<div class="my-container pt-[2.25rem] md:w-[60%] sm:w-full">
		<!-- {#if resultResponse != 'JCN'}
			<div class="flex justify-center">
				<h2 class="text-[2.063rem] md:text-[3.063rem] font-bold text-center">Thank you!</h2>
			</div>
		{/if} -->

		<div class="flex flex-col justify-center items-center mt-[1rem] font-bold text-center">
			 <!-- {#if dealDetails?.confirmationcheck == false && resultResponse != 'JCN'} -->
				<h2 class="text-[1rem] md:text-[1.563rem] text-center">
					Please visit our office within 3 working days and pay by cash or cheque and get your booking file right away. For further assistance please call our help line number 03041117000.
				</h2>
			<!-- {/if}  -->
			<!-- {#if responseMessage && resultResponse != 'JCN'}
				<h3 class="mt-4 text-center">
					{responseMessage}
				</h3>
			{:else} -->
				<!-- <h2 class="text-[1rem] md:text-[1.563rem] text-center text-red-500">
					{responseMessage}
				</h2> -->
			<!-- {/if} -->
		</div>
		<ThankyouCard  />
		<div class="flex justify-center gap-4">
			<Button
				className="mb-[0.563rem] mt-[1.6rem] md:w-[11.813rem] w-full h-[3.5rem] md:h-[2.5rem] "
				label="Go to Home"
				onclick={() => {
					goto('/');
				}}
			/>
			<Button
				className="mb-[0.563rem] mt-[1.6rem] md:w-[11.813rem] w-full h-[3.5rem] md:h-[2.5rem]"
				label="Payment Schedule"
				onclick={() => {
					goto('/payment');
				}}
			/>
		</div>
	</div>
</div>
