<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/shared/button.svelte';
	import ThankyouCard from '$lib/components/thankyou/thankyou_card.svelte';
</script>

<div class="bg-[#F2F5F7] min-h-screen">
	<div class="my-container pt-[2.25rem] w-[60%]">
		<div class="flex justify-center">
			<h2 class="text-[3.063rem] font-bold">Congratulations!</h2>
		</div>
		<div class="flex justify-center">
			<h2 class="text-[1.363rem] text-center">
				Thanks for your Trust, Your booking file will be dispatched on your address
			</h2>
		</div>
		<div class="flex justify-center mt-[1rem] font-bold">
			<h2 class="text-[1.563rem] text-center">
				Confirmation Payment Must be Paid within 7 days of Booking to avoid cancellation
			</h2>
		</div>
		<ThankyouCard />
		<div class="flex justify-center">
			<Button
				className="mb-[0.563rem] mt-[1.6rem] w-[11.813rem] h-[2.5rem]"
				label="Ok"
				onclick={() => {
					goto('/');
				}}
			/>
		</div>
	</div>
</div>
