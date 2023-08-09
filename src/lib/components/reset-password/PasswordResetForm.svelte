<script>
	import Button from '../shared/button.svelte';
	import TextField from '../shared/text_field.svelte';
	import { resetApi } from '$lib/modules/user/api/user_api';
	import { toast } from '$lib/stores/notification';
	import { goto } from '$app/navigation';
	import Cookies from 'js-cookie';

	let loading = false;

	let data = {
		newpassword: '',
		confirmPassword: ''
	};

	const submit = async () => {
		loading = true;
		try {
			const res = await resetApi({
				newpassword: data.newpassword,
				email: Cookies.get('email')
			});
			const status = res.data.otpstatus;
			toast({ type: 'success', heading: 'User Registered', text: 'Password has been changed' });
			// Cookies.set('email', data.email);
			setTimeout(() => goto('/login'), 1000);
		} catch (e) {}
		loading = false;
	};
</script>

<form class="flex flex-col" on:submit|preventDefault={submit}>
	<h2 class="text-[2rem] md:text-[2.8rem] font-bold mb-[1.7rem] text-center">
		Reset Your Password
	</h2>

	<div class="w-[20rem] md:w-[30rem] mb-4 flex flex-col md:flex-row gap-4" />

	<TextField
		placeholder="New Password"
		type="password"
		bind:value={data.newpassword}
		className="w-[20rem] md:w-[30rem] mb-4"
	/>
	<TextField
		placeholder="Confirm Password"
		type="password"
		bind:value={data.confirmPassword}
		className="w-[20rem] md:w-[30rem] mb-4"
	/>

	<Button
		className="bg-[#FFD624] hover:bg-[#FFD624] text-[#1A202C] mb-[0.563rem] h-[2.5rem]"
		type="submit"
		{loading}
		label="Reset Password"
	/>
</form>
