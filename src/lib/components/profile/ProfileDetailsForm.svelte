<script lang="ts">
	import { goto } from '$app/navigation';
	import { toast } from '$lib/stores/notification';
	import Cookies from 'js-cookie';
	import Button from '../shared/button.svelte';
	import TextField from '../shared/text_field.svelte';
	import { updateApi } from '$lib/modules/user/api/user_api';
	import { onMount } from 'svelte';

	let loading = false;

	let data = {
		fname: '',
		lname: '',
		contactno: '',
		dob: '',
		email: '',
		gender: '',
		city: '',
		country: ''
	};
	const submit = async () => {
		loading = true;
		try {
			const res = await updateApi({ ...data, dob: data.dob + 'T00:00:00.000Z' });
			toast({
				type: 'success',
				heading: 'Changes Updated',
				text: 'Your changes are updated successfully'
			});
			Cookies.set('email', res.data.email);
			Cookies.set('contactno', res.data.contactno ?? '');
			Cookies.set('fname', res.data.fname ?? '');
			Cookies.set('lname', res.data.lname ?? '');
			Cookies.set('address', res.data.address ?? '');
			Cookies.set('city', res.data.city ?? '');
			Cookies.set('country', res.data.country ?? '');
			Cookies.set('gender', res.data.gender ?? '');
			Cookies.set('dob', res.data.dob ?? '');
		} catch (e) {
			toast({ type: 'error', heading: 'Error', text: 'Please ' });
		}
		loading = false;
	};

	onMount(() => {
		data.fname = Cookies.get('fname') ?? '';
		data.lname = Cookies.get('lname') ?? '';
		data.contactno = Cookies.get('contactno') ?? '';
		data.dob = Cookies.get('dob') ?? '';
		data.email = Cookies.get('email') ?? '';
		data.gender = Cookies.get('gender') ?? '';
		data.city = Cookies.get('city') ?? '';
		data.country = Cookies.get('country') ?? '';
		if (data.dob) {
			data.dob = data.dob.split('T')[0];
		}
	});
</script>

<form class="my-container pt-[8rem] md:pt-[10.25rem]" on:submit|preventDefault={submit}>
	<div
		class="bg-[#F2F5F7] min-h-[35.5rem] rounded-2xl flex flex-col items-left justify-left px-6 md:px-20 py-10 md:py-20"
	>
		<div
			class="w-64 h-12 absolute top-273 left-288 font-semibold text-2xl md:text-4xl leading-12 text-left text-[#1A202C]"
		>
			My Profile
		</div>
		<div class="flex items-center gap-4 mt-[5rem]">
			<div class=" justify-center hidden md:flex">
				<img class="w-14 h-14" src="/images/user-icon.png" alt="profile" />
			</div>
			<div class="">
				<p class="font-bold text-[1rem] md:text-[1.2rem]">{data.fname + ' ' + data.lname}</p>
				<p class="text-[1rem] md:text-[1.2rem] break-words">{data.email}</p>
			</div>
		</div>
		<hr class="border-t-2 border-gray-300 my-6" />

		<!-- {#if data} -->
		{#if Object.values(data).some((value) => value !== '')}
			<div class="flex flex-col md:flex-row justify-center items-left md:items-center mt-4">
				<div class="flex items-end pr-4 w-32 justify-start md:justify-end">
					<h2>First Name</h2>
				</div>
				<div class="flex items-start pl-0 md:pl-4 mb-4 md:mb-0">
					<TextField
						bind:value={data.fname}
						className="w-full md:w-[23rem] min-h-[2.5rem] md:min-h-[3rem]"
					/>
				</div>
			</div>
			<div class="flex flex-col md:flex-row justify-center items-left md:items-center mt-4">
				<div class="flex items-end pr-4 w-32 justify-start md:justify-end">
					<h2>Last Name</h2>
				</div>
				<div class="flex items-start pl-0 md:pl-4 mb-4 md:mb-0">
					<TextField
						bind:value={data.lname}
						className="w-full md:w-[23rem] min-h-[2.5rem] md:min-h-[3rem]"
					/>
				</div>
			</div>
			<div class="flex flex-col md:flex-row justify-center items-left md:items-center mt-4">
				<div class="flex items-end pr-4 w-32 justify-start md:justify-end">
					<h2>Gender</h2>
				</div>
				<div class="flex items-start pl-0 md:pl-4">
					<TextField
						bind:value={data.gender}
						className="w-full md:w-[23rem] min-h-[2.5rem] md:min-h-[3rem]"
					/>
				</div>
			</div>

			<div class="flex flex-col md:flex-row justify-center items-left md:items-center mt-4">
				<div class="flex items-end pr-4 w-32 justify-start md:justify-end">
					<h2>Date Of Birth</h2>
				</div>
				<div class="flex items-start pl-0 md:pl-4">
					<TextField
						bind:value={data.dob}
						type="date"
						className="w-full md:w-[23rem] min-h-[2.5rem] md:min-h-[3rem]"
					/>
				</div>
			</div>

			<div class="flex flex-col md:flex-row justify-center items-left md:items-center mt-4">
				<div class="flex items-end pr-4 w-32 justify-start md:justify-end">
					<h2>Country</h2>
				</div>
				<div class="flex items-start pl-0 md:pl-4">
					<TextField
						bind:value={data.country}
						className="w-full md:w-[23rem] min-h-[2.5rem] md:min-h-[3rem]"
					/>
				</div>
			</div>

			<div class="flex flex-col md:flex-row justify-center items-left md:items-center mt-4">
				<div class="flex items-end pr-4 w-32 justify-start md:justify-end">
					<h2>City</h2>
				</div>
				<div class="flex items-start pl-0 md:pl-4">
					<TextField
						bind:value={data.city}
						className="w-full md:w-[23rem] min-h-[2.5rem] md:min-h-[3rem]"
					/>
				</div>
			</div>

			<div class="flex flex-col md:flex-row justify-center items-left md:items-center mt-4">
				<div class="flex items-end pr-4 w-32 justify-start md:justify-end">
					<h2>Email</h2>
				</div>
				<div class="flex items-start pl-0 md:pl-4">
					<TextField
						bind:value={data.email}
						type="email"
						className="w-full md:w-[23rem] min-h-[2.5rem] md:min-h-[3rem]"
						disabled
					/>
				</div>
			</div>

			<div class="flex flex-col md:flex-row justify-center items-left md:items-center mt-4">
				<div
					class="flex items-end pr-4 w-32 justify-start md:justify-end text-right whitespace-nowrap"
				>
					<h2>Contact Number</h2>
				</div>
				<div class="flex items-start pl-0 md:pl-4">
					<TextField
						bind:value={data.contactno}
						type="phone"
						className="w-full md:w-[23rem] min-h-[2.5rem] md:min-h-[3rem]"
					/>
				</div>
			</div>
			<div class="flex flex-col md:flex-row justify-center items-start mt-4">
				<div class="flex items-start pr-4 w-32" />
				<div class="flex items-start pl-0 md:pl-4">
					<Button
						className="bg-[#FFD624] hover:bg-[#FFD624] text-[#1A202C] h-[3rem] "
						type="submit"
						{loading}
						label="Save Changes"
					/>
				</div>
			</div>
		{/if}
	</div>
</form>
