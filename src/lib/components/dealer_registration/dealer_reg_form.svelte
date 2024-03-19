<script lang="ts">
	import Button from '../shared/button.svelte';
	import TextField from '../shared/text_field.svelte';
	import { toast } from '$lib/stores/notification';

	import { createDealerApi } from '$lib/modules/dealer/api/dealer_api';
	import Modal from '../shared/modal.svelte';
	import { goto } from '$app/navigation';

	let showModal = false;
	const handleToggleModal = () => {
		showModal = !showModal;
	};

	let loading: boolean = false;

	let data = {
		fname: '',
		lname: '',
		email: '',
		contactno: '',
		password: '',
		confirmPassword: '',
		nic: '',
		business_name: '',
		business_email: '',
		business_city: '',
		business_address: '',
		business_contactno: '',
		business_logo: '',
		referralcode: '',
		dealer_image: null as any | null,
	};

	let myfile: any;
	async function handleSingleFileChange(event: any) {
		const newFiles = event.target.files as File[]; // Explicitly cast to File[]

		try {
			// Check file size and resolution
			for (const file of newFiles) {
				if (file.size > 0.5 * 1024 * 1024) {
					toast({
						type: 'error',
						heading: 'Size Exceed!',
						text: 'File size exceeds 0.5 MB'
					});
					return; // Do not process the file
				}

				// Use an HTMLImageElement to check the resolution
				const img = new Image();
				img.src = URL.createObjectURL(file);

				// Wait for the image to load before checking the resolution
				await new Promise((resolve) => {
					img.onload = resolve;
				});

				if (img.width !== 504 || img.height !== 338) {
					toast({
						type: 'error',
						heading: 'Resolution',
						text: 'Image resolution should be 504x338'
					});
					return; // Do not process the file
				}
			}
			// Read base64 strings for the new files
			const base64Strings = await readBase64StringsForFiles(newFiles);
			console.log(base64Strings);
			data.dealer_image = base64Strings[0];

			// Add the new files to the "files" array
			myfile = newFiles;
		} catch (error) {
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

	let referralcode = '',
		referralamount = '';

	const submit = async () => {
		loading = true;
		try {
			const res = await createDealerApi(data);
			referralcode = res.data.referralcode;
			referralamount = res.data.referralamount;
			handleToggleModal();
		} catch (e) {}
		loading = false;
	};

	const homehandler = () => {
		goto('/');
	};
</script>

<form class="flex flex-col my-6" on:submit|preventDefault={submit}>
	<h2 class="text-[2rem] md:text-[2.8rem] font-bold mb-[1.7rem] text-left">Dealer Registration</h2>
	<div class="w-full flex-col justify-center mb-4">
		<p class="text-ms text-slate-600 mb-1">Choose Profile Image</p>
		<input
			id="many"
			type="file"
			on:change={handleSingleFileChange}
			class="w-full border-[1px] rounded-md border-slate-300"
		/>
		<p class="text-[10px]">File size should not exceeds 0.5 MB</p>
	</div>
	<div class="mb-4 flex flex-col md:flex-row gap-4">
		<TextField bind:value={data.fname} required placeholder="First Name" />
		<TextField bind:value={data.lname} required placeholder="Last Name" />
	</div>
	<TextField bind:value={data.email} required placeholder="Email" type="email" className="mb-4" />
	<TextField
		bind:value={data.contactno}
		required
		placeholder="Phone Number"
		type="phone"
		className="mb-4"
	/>
	<TextField bind:value={data.nic} required placeholder="N.I.C" type="cnic" className="mb-4" />
	<TextField bind:value={data.business_city} required placeholder="City" className="mb-4" />
	<TextField bind:value={data.business_name} placeholder="Agency Name" className="mb-4" />
	<TextField
		bind:value={data.business_email}
		placeholder="Agency Email"
		type="email"
		className="mb-4"
	/>
	<TextField bind:value={data.business_address} placeholder="Agency Address" className="mb-4" />
	<TextField bind:value={data.referralcode} placeholder="Referal Code" className="mb-4" />
	<Button
		className="bg-[#FFD624] hover:bg-[#FFD624] text-[#1A202C] mb-[0.563rem] h-[2.5rem]"
		type="submit"
		label="Register Now"
		{loading}
	/>
</form>

<Modal title="" open={showModal} on:close={() => handleToggleModal()}>
	<svelte:fragment slot="body">
		<div class="flex justify-center items-center mt-[3rem]">
			<img
				src="images/dealer-registration/dealsabaad-icon.png"
				alt="232"
				class="w-[13.438rem] h-[12.11rem]"
			/>
		</div>
		<div class="flex justify-center items-center">
			<h2 class="text-[2.813rem] font-bold">Thank you for signing up</h2>
		</div>
		<div class="flex justify-center items-center mt-[1rem]">
			<div class="w-[60%]">
				<h2 class="text-[1.375rem] text-center">
					{referralcode} is your referral code. Please get Dealer Discount against referral code from
					Dealsabaad Office
				</h2>
			</div>
		</div>
		<div class="flex justify-center items-center mt-[1rem]">
			<Button
				className="bg-[#FFD624] hover:bg-[#FFD624] text-[#1A202C] mb-[0.563rem] h-[3rem]"
				label="Go To Home Page"
				{loading}
				onclick={homehandler}
			/>
		</div>
	</svelte:fragment>
</Modal>
