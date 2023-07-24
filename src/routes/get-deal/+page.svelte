<script lang="ts">
	import DealDetailForm from '$lib/components/get_deal/deal_detail_form.svelte';
	import DealLoginForm from '$lib/components/get_deal/deal_login_form.svelte';
	import DealPaymentCard from '$lib/components/get_deal/deal_payment_card.svelte';
	import Cookies from 'js-cookie';
	import { onMount } from 'svelte';

	export let data;

	let isLoggedIn = true;

	onMount(() => {
		isLoggedIn = Cookies.get('token') ? true : false;
	});
</script>

<div class="my-container pt-[10.25rem]">
	<div class="flex gap-8">
		<div>
			{#if isLoggedIn}
				<DealDetailForm />
			{:else}
				<DealLoginForm bind:isLoggedIn />
			{/if}
		</div>
		<DealPaymentCard bind:isLoggedIn plan={data.paymentPlan} />
	</div>
</div>
