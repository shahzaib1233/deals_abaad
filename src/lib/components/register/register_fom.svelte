<script lang="ts">
	import { goto } from '$app/navigation';
	import { registerApi } from '$lib/modules/user/api/user_api';
	import { toast } from '$lib/stores/notification';
	import Cookies from 'js-cookie';
	import Button from '../shared/button.svelte';
	import TextField from '../shared/text_field.svelte';

	let loading = false;

	let data = {
		fname: '',
		lname: '',
		contactno: '',
		email: '',
		password: '',
		confirmPassword: ''
	};

	const submit = async () => {
		loading = true;
		try {
			const res = await registerApi(data);
			const status = res.data.otpstatus;
			toast({ type: 'success', heading: 'User Registered', text: 'User registered successfully' });
			Cookies.set('email', data.email);
			setTimeout(() => (status ? goto('/login') : goto('/otp')), 1000);
		} catch (e) {}
		loading = false;
	};
</script>

<form class="flex flex-col" on:submit|preventDefault={submit}>
	<h2 class="text-[2rem] md:text-[2.8rem] font-bold mb-[1.7rem]">Create Account</h2>
	<div class="mb-4 flex flex-col md:flex-row gap-4">
		<TextField placeholder="First Name" bind:value={data.fname} />
		<TextField placeholder="Last Name" bind:value={data.lname} />
	</div>
	<TextField placeholder="Email" type="email" bind:value={data.email} className="mb-4" />
	<TextField placeholder="Phone" type="number" bind:value={data.contactno} className="mb-4" />
	<TextField placeholder="Password" type="password" bind:value={data.password} className="mb-4" />
	<TextField
		placeholder="Confirm Password"
		type="password"
		bind:value={data.confirmPassword}
		className="mb-4"
	/>
	<Button className="mb-[0.563rem] h-[2.5rem]" type="submit" {loading} label="Register Now" />
	<div class="mb-[1.4rem]">
		Already registered user?
		<a href="/login" class="underline text-[#111111]"> Login </a>
	</div>
</form>
