<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from '$lib/components/shared/button.svelte';
	import ThankYouPayOnlineCard from '$lib/components/thankyou/thankyou_payonline_card.svelte';

	let voucherNo = $page.url.searchParams.get('JCVoucherNo');
	let voucherExpiry = $page.url.searchParams.get('JCVoucherExpiry');
	let responseMessage = $page.url.searchParams.get('resultmessage');
	let resultResponse = $page.url.searchParams.get('resultresponse');
	let br_number = $page.url.searchParams.get('BRNumber');
	let custName = $page.url.searchParams.get('name');
	let custPhone = $page.url.searchParams.get('phone');
	let propertyType = $page.url.searchParams.get('proptype');

	voucherNo = voucherNo && voucherNo?.length > 0 ? voucherNo : '---';
	voucherExpiry = voucherExpiry && voucherExpiry?.length > 0 ? voucherExpiry : '---';
</script>

<div class="bg-[#F2F5F7] min-h-screen">
	<div class="my-container pt-[2.25rem] md:w-[60%] sm:w-full pb-5">
		<!-- {#if resultResponse != 'JCN'} -->
			<div class="flex justify-center">
				<h2 class="text-[2.063rem] md:text-[3.063rem] font-bold text-center">Thank you!</h2>
			</div>

		<div class="flex flex-col justify-center items-center mt-[1rem] font-bold text-center">
			{#if responseMessage && resultResponse != 'JCN'}
				<h3 class="mt-4 text-center">
					{responseMessage}
				</h3>
			{:else}
				<h2 class="text-[1rem] md:text-[1.563rem] text-center text-red-500">
					{responseMessage}
				</h2>
			{/if}
		</div>
		<ThankYouPayOnlineCard {voucherNo} {voucherExpiry} {br_number} {custName} {custPhone} {propertyType}/>
		<div class="flex justify-center gap-4">
			<Button
				className="mb-[0.563rem] mt-[1.6rem] md:w-[11.813rem] w-full h-[3.5rem] md:h-[2.5rem] "
				label="Go to Home"
				onclick={() => {
					goto('/');
				}}
			/>
		</div>
	</div>
</div>
