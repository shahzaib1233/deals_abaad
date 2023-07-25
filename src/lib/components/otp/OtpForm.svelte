<script lang="ts">
	import { otpApi } from '$lib/modules/user/api/user_api';
	import Button from '../shared/button.svelte';
	import TextField from '../shared/text_field.svelte';
	import { toast } from '$lib/stores/notification';
	import { goto } from '$app/navigation';
	import Cookies from 'js-cookie';

	let loading = false;
	let data = {
		otp1: '',
		otp2: '',
		otp3: '',
		otp4: ''
	};
	function combineOTP() {
		return data.otp1 + data.otp2 + data.otp3 + data.otp4;
	}
	const submit = async () => {
		loading = true;
		try {
			const otp = combineOTP();
			const email = Cookies.get('email');
			const res = await otpApi({ email: email ?? '', otp: otp });
			const status = res.data;
			console.log(status);

			toast({ type: 'success', heading: 'Otp Verified', text: 'OTP Verified Successfully' });
			setTimeout(() => goto('/login'), 1000);
		} catch (e) {}
		loading = false;
	};
	// const { mutation, otpSubmit } = useOtp();
	// const { handleChange, submit, otp } = useOtpForm();
</script>

<!-- <form class="flex flex-col" onSubmit={(e) => submit(e, otpSubmit)}> -->
<form class="flex flex-col" on:submit|preventDefault={submit}>
	<h2 class="text-[2rem] md:text-[2.8rem] font-bold mb-[1.7rem]">One-Time-Password</h2>
	<div class="flex justify-center mb-4">
		<!-- <TextField
			key={index}
			id={`otp-input-${index}`}
			class="w-[7rem] h-16 text-3xl bg-gray-200 border border-gray-300 text-center mx-1 outline-none focus:ring-2 focus:ring-blue-500"
			type="text"
			inputMode="numeric"
			maxLength={1}
			value={digit}
			onChange={(e) => handleChange(e, index)}
		/> -->
		<TextField
			type="text"
			bind:value={data.otp1}
			className="w-[7rem] h-22 text-[2rem]  border border-white-300 text-center mx-1 outline-none focus:ring-2 focus:ring-blue-500"
		/>
		<TextField
			type="text"
			bind:value={data.otp2}
			className="w-[7rem] h-22 text-[2rem]  border border-gray-300 text-center mx-1 outline-none focus:ring-2 focus:ring-blue-500"
		/>
		<TextField
			type="text"
			bind:value={data.otp3}
			className="w-[7rem] h-22 text-[2rem]  border border-gray-300 text-center mx-1 outline-none focus:ring-2 focus:ring-blue-500"
		/>
		<TextField
			type="text"
			bind:value={data.otp4}
			className="w-[7rem] h-22 text-[2rem]  border border-gray-300 text-center mx-1 outline-none focus:ring-2 focus:ring-blue-500"
		/>
	</div>

	<Button className="mb-[0.563rem] h-[2.5rem]" type="submit" {loading} label="Verify OTP" />
</form>
