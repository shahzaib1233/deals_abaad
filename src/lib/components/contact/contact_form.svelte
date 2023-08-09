<script lang="ts">
	import { toast } from '$lib/stores/notification';
	import axiosFunction from '$lib/utils/network';
	import Button from '../shared/button.svelte';

	let loading = false;

	let data = {
		name: '',
		email: '',
		phone: '',
		message: ''
	};

	const submit = async () => {
		loading = true;
		const res = await axiosFunction({ method: 'POST', url: 'contact', data });
		toast({
			type: 'success',
			heading: 'Thank you',
			text: 'Thanks for your message, We will connect with you soon'
		});

		loading = false;
	};
</script>

<form on:submit|preventDefault={submit}>
	<div class="flex flex-wrap flex-col lg:flex-row gap-6">
		<input
			placeholder="Name"
			class="flex-1 focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
			bind:value={data.name}
		/>
		<input
			placeholder="Email"
			class="flex-1 focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
			bind:value={data.email}
		/>
		<input
			placeholder="Phone number"
			class="flex-1 focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
			bind:value={data.phone}
		/>
	</div>
	<div class="flex mt-6">
		<textarea
			placeholder="Messsage"
			class="flex-1 contact__textarea h-[18rem] focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
			cols={20}
			bind:value={data.message}
		/>
	</div>
	<Button
		className="mt-6 bg-[#FFD624] hover:bg-[#FFD624] text-[#1A202C] text-[1.188rem] font-[600] w-[19rem] h-[3.2rem] rounded-md"
		type="submit"
		{loading}
		label="Send Message"
	/>
</form>
