<script lang="ts">
	import { loginApi } from '$lib/modules/user/api/user_api';
	import { toast } from '$lib/stores/notification';
	import Cookies from 'js-cookie';
	import Button from '../shared/button.svelte';
	import TextField from '../shared/text_field.svelte';
	import { setToken } from '$lib/stores/token';

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
			setToken(res.data.accessToken);
		} catch (e) {}
		loading = false;
	};
</script>

<form on:submit|preventDefault={submit}>
	<div class="flex flex-col md:flex-row mt-[1rem]">
		<TextField
			label="Email"
			type="email"
			required
			withAsterisk
			className="md:mr-3 md:w-[21.75rem] mb-2 md:mb-0"
			bind:value={data.email}
		/>
		<TextField
			label="Password"
			type="password"
			required
			className="md:w-[21.75rem]"
			withAsterisk
			bind:value={data.password}
		/>
	</div>
	<Button className="mb-[0.563rem] mt-[1rem]" type="submit" {loading} label="Login" />
</form>
<div class="mt-[1rem]">
	<span>
		Don’t have an account{' '}
		<a href="/register" class="underline"> Register now </a>
	</span>
</div>
<div class="mt-[2rem] text-[1.1rem] w-[70%]">
	<span class="text-[#4B4B4B]">
		Booking Karain Aap, Down Payment Dega Dealsabaad has been added and ready to be Booked.
	</span>
</div>
