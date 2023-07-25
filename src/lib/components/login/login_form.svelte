<script lang="ts">
	import { goto } from '$app/navigation';
	import { loginApi } from '$lib/modules/user/api/user_api';
	import { toast } from '$lib/stores/notification';
	import Cookies from 'js-cookie';

	import Button from '../shared/button.svelte';
	import TextField from '../shared/text_field.svelte';

	let loading = false;

	let data = {
		email: '',
		password: ''
	};

	const submit = async () => {
		loading = true;
		try {
			const res = await loginApi(data);
			toast({ type: 'success', heading: 'Login Successfull', text: 'User login successfully' });
			Cookies.set('token', res.data.accessToken);
			Cookies.set('email', res.data.email);
			Cookies.set('contactno', res.data.contactno ?? '');
			Cookies.set('fname', res.data.fname ?? '');
			Cookies.set('lname', res.data.lname ?? '');
			Cookies.set('address', res.data.address ?? '');
			Cookies.set('city', res.data.city ?? '');
			Cookies.set('country', res.data.country ?? '');
			Cookies.set('zipcode', res.data.zipcode ?? '');
			Cookies.set('cnic', res.data.cnic ?? '');
			Cookies.set('gender', res.data.gender ?? '');
			Cookies.set('dob', res.data.dob ?? '');
			setTimeout(() => goto('/'), 1000);
		} catch (e) {}
		loading = false;
	};
</script>

<form class="flex flex-col w-[25rem]" on:submit|preventDefault={submit}>
	<h2 class="text-[2rem] md:text-[2.8rem] font-bold mb-[1.7rem]">Welcome Back</h2>
	<TextField placeholder="Email" type="email" bind:value={data.email} className="mb-4" />
	<TextField placeholder="Password" type="password" bind:value={data.password} className="mb-2" />
	<div class="self-end mb-8">
		<a href="/forget-password" class="underline text-[#111111]"> Forget your password </a>
	</div>
	<Button className="mb-[0.563rem] h-[2.5rem]" type="submit" {loading} label="Login" />

	<div class="mb-[1.4rem]">
		Don’t have an account?
		<a href="/register" class="underline text-[#111111]"> Register Now </a>
	</div>
	<div class="flex items-center">
		<hr class="flex-1 mx-6" />
		<span class="text-[#666666] text-[1.125rem]">OR</span>
		<hr class="flex-1 mx-6" />
	</div>
	<button class="text-[#1A202C] mt-[1.063rem]">
		<div
			class="flex items-center gap-[0.688rem] border flex items-center justify-center h-[2.5rem] rounded-md"
		>
			<img src="/logos/google.svg" /> Continue with Google
		</div>
	</button>
</form>
