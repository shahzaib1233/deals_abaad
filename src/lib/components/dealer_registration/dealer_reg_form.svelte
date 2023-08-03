<script lang="ts">
	import Button from '../shared/button.svelte';
	import TextField from '../shared/text_field.svelte';

	import { createDealerApi } from '$lib/modules/dealer/api/dealer_api';
	import Modal from '../shared/modal.svelte';
	import { goto } from '$app/navigation';

	let showModal = false;
	const handleToggleModal = () => {
		showModal = !showModal;
	};

	let loading: boolean = false;

	let data = {
		fname: '',
		lname: '',
		email: '',
		contactno: '',
		password: '',
		confirmPassword: '',
		nic: '',
		business_name: '',
		business_email: '',
		business_city: '',
		business_address: '',
		business_contactno: '',
		business_logo: '',
		referralcode: ''
	};

	let referralcode = '',
		referralamount = '';

	const submit = async () => {
		loading = true;
		try {
			const res = await createDealerApi(data);
			referralcode = res.data.referralcode;
			referralamount = res.data.referralamount;
			handleToggleModal();
		} catch (e) {}
		loading = false;
	};

	const homehandler = () => {
		goto('/');
	};
</script>

<form class="flex flex-col my-6" on:submit|preventDefault={submit}>
	<h2 class="text-[2rem] md:text-[2.8rem] font-bold mb-[1.7rem] text-left">Dealer Registration</h2>
	<div class="mb-4 flex flex-col md:flex-row gap-4">
		<TextField bind:value={data.fname} required placeholder="First Name" />
		<TextField bind:value={data.lname} required placeholder="Last Name" />
	</div>
	<TextField bind:value={data.email} required placeholder="Email" type="email" className="mb-4" />
	<TextField
		bind:value={data.contactno}
		required
		placeholder="Phone Number"
		type="phone"
		className="mb-4"
	/>
	<TextField bind:value={data.nic} required placeholder="N.I.C" type="cnic" className="mb-4" />
	<TextField bind:value={data.business_city} required placeholder="City" className="mb-4" />
	<TextField bind:value={data.business_name} placeholder="Agency Name" className="mb-4" />
	<TextField
		bind:value={data.business_email}
		placeholder="Agency Email"
		type="email"
		className="mb-4"
	/>
	<TextField bind:value={data.business_address} placeholder="Agency Address" className="mb-4" />
	<TextField bind:value={data.referralcode} placeholder="Referal Code" className="mb-4" />
	<Button
		className="bg-[#FFD624] hover:bg-[#FFD624] text-[#1A202C] mb-[0.563rem] h-[2.5rem]"
		type="submit"
		label="Register Now"
		{loading}
	/>
</form>

<Modal title="" open={showModal} on:close={() => handleToggleModal()}>
	<svelte:fragment slot="body">
		<div class="flex justify-center items-center mt-[3rem]">
			<img
				src="images/dealer-registration/dealsabaad-icon.png"
				alt="232"
				class="w-[13.438rem] h-[12.11rem]"
			/>
		</div>
		<div class="flex justify-center items-center">
			<h2 class="text-[2.813rem] font-bold">Thank you for signing up</h2>
		</div>
		<div class="flex justify-center items-center mt-[1rem]">
			<div class="w-[60%]">
				<h2 class="text-[1.375rem] text-center">
					{referralcode} is your referral code apply this code on your first purchase to get a discount
					of Rs
					{#if referralamount}
						{referralamount}
					{:else}
						0
					{/if}
				</h2>
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
		<div class="flex justify-center items-center mt-[1rem]">
			<Button
				className="bg-[#FFD624] hover:bg-[#FFD624] text-[#1A202C] mb-[0.563rem] h-[3rem]"
				label="Go To Home Page"
				{loading}
				onclick={homehandler}
			/>
		</div>
	</svelte:fragment>
</Modal>
