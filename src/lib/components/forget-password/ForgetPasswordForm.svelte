<script>
	import { goto } from '$app/navigation';
	import { forgetApi } from '$lib/modules/user/api/user_api';
	import { toast } from '$lib/stores/notification';
	import Cookies from 'js-cookie';

	import Button from '../shared/button.svelte';
	import TextField from '../shared/text_field.svelte';

	let loading = false;

	let data = {
		email: ''
	};
	const submit = async () => {
		loading = true;
		try {
			const res = await forgetApi(data);
			toast({ type: 'success', heading: 'Email registered', text: 'OTP Sent to ' + data.email });
			Cookies.set('email', data.email);
			setTimeout(() => goto('/otp'), 1000);
		} catch (e) {}
		loading = false;
	};
</script>

<form class="flex flex-col" on:submit|preventDefault={submit}>
	<h2 class="text-[2rem] md:text-[2.8rem] font-bold mb-[1.7rem] text-center">Forget Password</h2>

	<div class="w-[20rem] md:w-[30rem] mb-6 flex flex-col md:flex-row gap-4">
		<h4>Please enter your email address</h4>
	</div>
	<TextField
		placeholder="Email"
		type="email"
		bind:value={data.email}
		className="w-[20rem] md:w-[30rem] mb-4 h-[6rem] mt-3"
	/>

	<Button
		className="bg-[#FFD624] hover:bg-[#FFD624] text-[#1A202C] mb-[0.563rem] h-[3rem]"
		type="submit"
		{loading}
		label="Send OTP"
	/>
</form>
