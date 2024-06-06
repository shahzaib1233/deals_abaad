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
	<div class="flex flex-wrap flex-col flex-1 lg:flex-row gap-6">
		<div class="w-[49%]">
            <label for="project_name" class="font-semibold">Project Name:</label>
			<input
				id="project_name"
                placeholder="Project Name"
				class="w-[100%] focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
				bind:value={data.name}
			/>
		</div>
		<div class="w-[49%]">
            <label for="project_name" class="font-semibold">Unit Number:</label>
			<input
				id="project_name"
                placeholder="Unit Number"
				class="w-[100%] focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
				bind:value={data.name}
			/>
		</div>
        <div class="w-[49%]">
            <label for="location" class="font-semibold">Location:</label>
			<input
				id="location"
                placeholder="Enter A City"
				class="w-[100%] focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
				bind:value={data.name}
			/>
            <input
				placeholder="Enter A Location"
				class="w-[100%] focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem] mt-2"
				bind:value={data.name}
			/>
		</div>
        <div class="w-[49%]">
            <label for="area_size" class="font-semibold">Area Size:</label>
			<input
				id="area_size"
                placeholder="Unit"
				class="w-[100%] focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
				bind:value={data.name}
			/>
			<select class="w-[100%] focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem] mt-2">
				<option>Select Size Type</option>
				<option>Square Feet</option>
				<option>Square Yards</option>
				<option>Square Meters</option>
				<option>Square Marla</option>
				<option>Kanal</option>
			</select>
            <!-- <input
				placeholder="Select Size Type"
				class="w-[100%] focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem] mt-2"
				bind:value={data.name}
			/> -->
		</div>
        <div class="w-[49%]">
            <label for="price" class="font-semibold">Price:</label>
			<input
				id="price"
                placeholder="Price"
				class="w-[100%] focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
				bind:value={data.name}
			/>
		</div>
        <div class="w-[49%]">
            <label for="email" class="font-semibold">Email:</label>
			<input
				id="email"
                placeholder="Email"
				class="w-[100%] focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
				bind:value={data.name}
			/>
		</div>
        <div class="w-[49%]">
            <label for="phone_no" class="font-semibold">Phone No:</label>
			<input
				id="phone_no"
                placeholder="Phone No."
				class="w-[100%] focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
				bind:value={data.name}
			/>
		</div>
        <div class="w-[49%]">
            <label for="landline" class="font-semibold">LandLine:</label>
			<input
				id="landline"
                placeholder="Landline"
				class="w-[100%] focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
				bind:value={data.name}
			/>
		</div>
        <div class="w-[49%]">
            <label for="image" class="font-semibold">Image:</label>
			<input
				id="image"
				class="w-[100%] focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
				type="file"
                accept="video/png, video/jpg, video/jpeg"
			/>
		</div>
        <div class="w-[49%]">
            <label for="video" class="font-semibold">Video:</label>
			<input
				id="video"
				class="w-[100%] focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
				type="file"
                accept="video/mp4"
			/>
		</div>
	</div>
	<Button
		className="mt-6 bg-[#FFD624] hover:bg-[#FFD624] text-[#1A202C] text-[1.188rem] font-[600] w-[19rem] h-[3.2rem] rounded-md"
		type="submit"
		{loading}
		label="Add Property"
	/>
</form>
