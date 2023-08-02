<script lang="ts">
	import DealDetailForm from '$lib/components/get_deal/deal_detail_form.svelte';
	import DealLoginForm from '$lib/components/get_deal/deal_login_form.svelte';
	import DealPaymentCard from '$lib/components/get_deal/deal_payment_card.svelte';
	import { inventoyStore } from '$lib/stores/inventory.js';
	import { tokenStore } from '$lib/stores/token.js';
	import Cookies from 'js-cookie';
	import { onMount } from 'svelte';

	export let data;

	let token = '';

	tokenStore.subscribe((value) => {
		token = value;
	});

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
		nomineedeclaration: false,
		confirmationcheck: false,
		paymenttype: 'JC',
		paymentplanId: 1,
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
		projectId: 1,
		downpayment: 0,
		monthly: 0,
		biannual: 0,
		quaterly: 0,
		yearly: 0,
		possession: 0,
		confirmationAmount: 0,
		noofinstallments: 0,
		allotmentcheck: false,
		AmountconfirmationCheck: false
	};

	// inventoyStore.subscribe((value) => {
	// 	fields.inventoryId = value.inventoryId;
	// 	fields.totalAmount = value.price;
	// 	fields.sellingprice = value.saleprice;
	// 	fields.promodiscount = value.discount;
	// 	fields.referraldiscount = value.referralamount;
	// 	fields.floor = value.floor;
	// 	fields.unitno = value.unitno;
	// 	fields.bookingamount = value.bookingPrice;
	// 	fields.projectId = value.projectId;
	// });

	onMount(() => {
		fields.inventoryId = data.inventoryValue.inventoryId;
		fields.totalAmount = data.inventoryValue.price;
		fields.sellingprice = data.inventoryValue.saleprice;
		fields.promodiscount = (data.inventoryValue.saleprice * data.inventoryValue.discount) / 100;
		fields.referraldiscount = data.inventoryValue.referralamount;
		fields.floor = data.inventoryValue.floor;
		fields.unitno = data.inventoryValue.unitno;
		fields.registrationno = data.inventoryValue.unitno;
		fields.bookingamount = data.inventoryValue.bookingPrice;
		fields.projectId = data.inventoryValue.projectId;

		fields.downpayment = Math.round((fields.sellingprice / 100) * +data.paymentPlan[0].downpayment);
		fields.possession = Math.round(
			(fields.sellingprice / 100) * +data.paymentPlan[0].possessionamount
		);
		fields.yearly = Math.round((fields.totalAmount / 100) * +data.paymentPlan[0].annualpayment);
		fields.biannual = Math.round(
			(fields.totalAmount / 100) * +data.paymentPlan[0].biannualpayments
		);
		fields.quaterly = Math.round(
			(fields.totalAmount / 100) * +data.paymentPlan[0].quarterlypayments
		);
		fields.noofinstallments = +data.paymentPlan[0].noOfInstallments;
		fields.monthly = Math.round(
			(fields.totalAmount -
				fields.downpayment -
				fields.yearly -
				fields.biannual -
				fields.quaterly -
				fields.possession) /
				fields.noofinstallments
		);
	});

	let paymentBtn: HTMLButtonElement;
</script>

<div class="my-container pt-[6rem] md:pt-[10.25rem]">
	<div class="flex flex-col sm:flex-col-reverse md:flex-col lg:flex-row gap-8">
		<div>
			{#if token != '' && token != undefined}
				<DealDetailForm bind:fields bind:paymentBtn />
			{:else}
				<DealLoginForm />
			{/if}
		</div>
		<DealPaymentCard
			plan={data.paymentPlan}
			price={data.inventoryValue?.price}
			saleprice={data.inventoryValue?.saleprice}
			bookingAmount={data.inventoryValue?.bookingPrice}
			bind:fields
			bind:paymentBtn
		/>
	</div>
</div>
