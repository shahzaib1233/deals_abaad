<script lang="ts">
	import { toast } from '$lib/stores/notification';
	import axiosFunction from '$lib/utils/network';
	import Button from '../shared/button.svelte';

	let loading = false;

	let data = {
		project_name: '',
		unit_number: '',
		city: '',
		location: '',
		area_size: '',
		unit: '',
		price: '',
		image: '',
		video: '',
		email: '',
		mobile_no: '',
		landline: ''
	};

	async function handleSingleFileChange(event: any, option: any) {
		const newFiles = event.target.files as File[];

		try {
			loading = true;
			const base64Strings = await readBase64StringsForFiles(newFiles);
			console.log('Base64 String:', base64Strings[0]);

			if (option == 'video') {
				data.video = base64Strings[0];
			} else {
				data.image = base64Strings[0];
			}
			loading = false;
		} catch (error) {
			loading = false;
			console.error('Error reading files:', error);
		}
	}

	async function readBase64StringsForFiles(files: File[]) {
		const base64Strings = [];

		for (const selectedFile of files) {
			const base64String = await readBase64StringForFile(selectedFile);
			base64Strings.push(base64String);
		}

		return base64Strings;
	}

	async function readBase64StringForFile(selectedFile: File) {
		return new Promise<string>((resolve, reject) => {
			const reader = new FileReader();

			reader.onload = (event) => {
				if (event.target && event.target.result) {
					resolve(event.target.result as string);
				} else {
					reject(new Error('Failed to read the file.'));
				}
			};

			reader.onerror = (error) => {
				reject(error);
			};

			reader.readAsDataURL(selectedFile);
		});
	}

	const submit = async () => {
		loading = true;
		// console.log(data);
		const res = await axiosFunction({ method: 'POST', url: 'property/add-property', data });
		console.log(res);
		toast({
			type: 'success',
			heading: 'Thank you',
			text: `Your Property Created with #${res.data.id}`
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
				bind:value={data.project_name}
			/>
		</div>
		<div class="w-[49%]">
			<label for="project_name" class="font-semibold">Unit Number:</label>
			<input
				id="project_name"
				placeholder="Unit Number"
				class="w-[100%] focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
				bind:value={data.unit_number}
			/>
		</div>
		<div class="w-[49%]">
			<label for="location" class="font-semibold">Location:</label>
			<input
				id="location"
				placeholder="Enter A City"
				class="w-[100%] focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
				bind:value={data.city}
			/>
			<input
				placeholder="Enter A Location"
				class="w-[100%] focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem] mt-2"
				bind:value={data.location}
			/>
		</div>
		<div class="w-[49%]">
			<label for="area_size" class="font-semibold">Area Size:</label>
			<input
				id="area_size"
				placeholder="Unit"
				class="w-[100%] focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
				bind:value={data.unit}
			/>
			<select
				class="w-[100%] focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem] mt-2"
				bind:value={data.area_size}
			>
				<option value="">Select Size Type</option>
				<option value="square feet">Square Feet</option>
				<option value="square yards">Square Yards</option>
				<option value="square meters">Square Meters</option>
				<option value="square marla">Square Marla</option>
				<option value="kanal">Kanal</option>
			</select>
		</div>
		<div class="w-[49%]">
			<label for="price" class="font-semibold">Price:</label>
			<input
				id="price"
				placeholder="Price"
				class="w-[100%] focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
				bind:value={data.price}
			/>
		</div>
		<div class="w-[49%]">
			<label for="email" class="font-semibold">Email:</label>
			<input
				id="email"
				placeholder="Email"
				class="w-[100%] focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
				bind:value={data.email}
			/>
		</div>
		<div class="w-[49%]">
			<label for="mobile_no" class="font-semibold">Mobile No:</label>
			<input
				id="mobile_no"
				placeholder="Mobile No."
				class="w-[100%] focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
				bind:value={data.mobile_no}
			/>
		</div>
		<div class="w-[49%]">
			<label for="landline" class="font-semibold">LandLine:</label>
			<input
				id="landline"
				placeholder="Landline"
				class="w-[100%] focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
				bind:value={data.landline}
			/>
		</div>
		<div class="w-[49%]">
			<label for="image" class="font-semibold">Image:</label>
			<input
				id="image"
				class="w-[100%] focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
				type="file"
				accept="image/png, image/jpg, image/jpeg"
				on:change={(e) => handleSingleFileChange(e, 'image')}
			/>
		</div>
		<div class="w-[49%]">
			<label for="video" class="font-semibold">Video:</label>
			<input
				id="video"
				class="w-[100%] focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
				type="file"
				accept="video/mp4"
				on:change={(e) => handleSingleFileChange(e, 'video')}
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
