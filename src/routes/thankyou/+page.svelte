<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from '$lib/components/shared/button.svelte';
	import ThankyouCard from '$lib/components/thankyou/thankyou_card.svelte';
	import { onMount } from 'svelte';

	const voucherNo = $page.url.searchParams.get('JCVoucherNo');
	const voucherExpiry = $page.url.searchParams.get('JCVoucherExpiry');

	let dealDetails: any;

	onMount(() => {
		dealDetails = JSON.parse(localStorage.getItem('dealDetails') ?? '');
	});
</script>

<div class="bg-[#F2F5F7] min-h-screen">
	<div class="my-container pt-[2.25rem] w-[60%]">
		<div class="flex justify-center">
			<h2 class="text-[3.063rem] font-bold">Congratulations!</h2>
		</div>

		<div class="flex flex-col justify-center items-center mt-[1rem] font-bold">
			{#if !dealDetails.confirmationcheck}
				<h2 class="text-[1.563rem] text-center">
					Confirmation Payment Must be Paid within 3 days of Booking to avoid cancellation
				</h2>
			{/if}
			<h3 class="mt-4">
				Your transaction has been received successfully and your account will be updated accordingly
			</h3>
		</div>
		<ThankyouCard {voucherNo} {voucherExpiry} />
		<div class="flex justify-center">
			<Button
				className="mb-[0.563rem] mt-[1.6rem] w-[11.813rem] h-[2.5rem]"
				label="Go to Home"
				onclick={() => {
					goto('/');
				}}
			/>
		</div>
	</div>
</div>
