<script lang="ts">
	import DealDetailForm from '$lib/components/get_deal/deal_detail_form.svelte';
	import DealLoginForm from '$lib/components/get_deal/deal_login_form.svelte';
	import DealPaymentCard from '$lib/components/get_deal/deal_payment_card.svelte';
	import { inventoyStore } from '$lib/stores/inventory.js';
	import Cookies from 'js-cookie';
	import { onMount } from 'svelte';

	export let data;

	let isLoggedIn = true;

	let fields = {
		name: '',
		email: '',
		FatherHusbandname: '',
		guardian: '',
		cnic: '',
		dob: '',
		mobileno: '',
		residenceno: '',
		officeno: '',
		address: '',
		country: '',
		city: '',
		zipcode: '',
		nomineename: '',
		nomineeFatherHusbandname: '',
		nomineerelation: '',
		nomineedob: '',
		nomineecnic: '',
		nomineephoneno: '',
		nomineeaddress: '',
		nomineedeclaration: true,
		confirmationcheck: true,
		paymenttype: '',
		paymentplanId: 0,
		bookingamount: 0,
		totalAmount: 0,
		salestatus: '',
		referralcode: '',
		sellingprice: 0,
		promodiscount: 0,
		referraldiscount: 0,
		netsellingprice: 0,
		unitno: '',
		floor: '',
		block: '',
		registrationno: '',
		inventoryId: 0,
		projectId: 0,
		downpayment: 0,
		monthly: 0,
		biannual: 0,
		quaterly: 0,
		yearly: 0,
		possession: 0,
		confirmationAmount: 0,
		noofinstallments: 0
	};

	inventoyStore.subscribe((value) => {
		fields.inventoryId = value.inventoryId;
		fields.totalAmount = value.price;
	});

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
