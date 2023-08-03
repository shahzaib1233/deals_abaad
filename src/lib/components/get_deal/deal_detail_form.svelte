<script lang="ts">
	import { goto } from '$app/navigation';
	import { setPaymentFields } from '$lib/stores/payment';
	import type { GETDEALFIELDS } from '$lib/types/getDealFields';
	import axiosFunction from '$lib/utils/network';
	import { onMount } from 'svelte';
	import TextField from '../shared/text_field.svelte';
	import Cookies from 'js-cookie';
	import dayjs from 'dayjs';
	import { toast } from '$lib/stores/notification';

	export let fields: GETDEALFIELDS;
	export let paymentBtn: HTMLButtonElement;

	const submit = async (event: Event) => {
		event.preventDefault();

		try {
			if (fields.cnic.toString().length < 13) {
				toast({
					type: 'error',
					heading: 'Cnic Limit Error',
					text: 'Enter 13 Digits'
				});
			} else if (fields.mobileno.toString().length < 11) {
				console.log(fields.mobileno);
				toast({
					type: 'error',
					heading: 'Phone Number Limit Error',
					text: 'Enter 11 Digits'
				});
			} else {
				localStorage.setItem('dealDetails', JSON.stringify(fields));
				goto('/checkout');
				Cookies.set('name', fields.name);
				Cookies.set('address', fields.address);
				// console.log(fields.name);
			}
		} catch (error) {
			console.log('Error:', error);
		}
	};

	onMount(() => {
		fields.name = `${Cookies.get('fname')} ${Cookies.get('lname')}`;
		fields.cnic = Cookies.get('cnic') ?? '';
		fields.dob = Cookies.get('dob') != '' ? dayjs(Cookies.get('dob')!).format('YYYY-MM-DD') : '';
		fields.mobileno = Cookies.get('contactno') ?? '';
		fields.address = Cookies.get('address') ?? '';
		fields.country = Cookies.get('country') ?? '';
		fields.city = Cookies.get('city') ?? '';
		fields.zipcode = Cookies.get('zipcode') ?? '';
		fields.email = Cookies.get('email') ?? '';
	});
</script>

<form on:submit={submit}>
	<div class="mt-[1rem]">
		<span class="text-[1.6rem] font-bold"> Please Fill out the Application Form </span>
	</div>
	<div class="mt-[1rem]">
		<span class="text-[#4B4B4B]">
			Dear Sir, I have undersigned hereby request register my name for allotment of Residential
			Luxury Flats & Commercial Shop in your project GFS Builders AND Developers
		</span>
	</div>
	<div class="mt-[1rem]">
		<span class="text-[#4B4B4B]">
			MY PARTICULARS ARE AS UNDER (PLEASE WRITE IN BLOCK LETTERS)
		</span>
	</div>
	<div class="flex flex-col md:flex-row mt-[1rem]">
		<TextField
			label="Name in Full Mr/Mrs/Miss"
			withAsterisk
			required
			className="md:mr-3 md:w-[21.75rem] mb-2 md:mb-0"
			bind:value={fields.name}
		/>
		<TextField
			label="C.N.I.C"
			className="md:w-[21.75rem]"
			withAsterisk
			required
			type="cnic"
			bind:value={fields.cnic}
		/>
	</div>
	<div class="flex flex-col md:flex-row mt-[1rem]">
		<TextField
			label="Father's / Husband Name"
			withAsterisk
			required
			className="md:mr-3 md:w-[21.75rem] mb-2 md:mb-0"
			bind:value={fields.FatherHusbandname}
		/>
		<TextField label="Guardian" className="md:w-[21.75rem]" bind:value={fields.guardian} />
	</div>
	<div class="flex flex-col md:flex-row mt-[1rem]">
		<TextField
			label="Date of Birth"
			type="date"
			withAsterisk
			required
			className="md:mr-3 md:w-[21.75rem] mb-2 md:mb-0"
			bind:value={fields.dob}
		/>
		<TextField
			label="Cell No"
			className="md:w-[21.75rem]"
			withAsterisk
			required
			type="phone"
			bind:value={fields.mobileno}
		/>
	</div>
	<div class="flex flex-col md:flex-row mt-[1rem]">
		<TextField
			label="Residence No"
			className="md:mr-3 md:w-[21.75rem] mb-2 md:mb-0"
			bind:value={fields.residenceno}
		/>
		<TextField
			label="Address"
			className="md:w-[21.75rem]"
			withAsterisk
			required
			bind:value={fields.address}
		/>
	</div>
	<div class="flex flex-col md:flex-row mt-[1rem]">
		<TextField
			label="Phone No. Office"
			className="md:mr-3 md:w-[21.75rem] mb-2 md:mb-0"
			bind:value={fields.officeno}
		/>
		<TextField
			label="Country / Region"
			className="md:w-[21.75rem]"
			withAsterisk
			required
			bind:value={fields.country}
		/>
	</div>
	<div class="flex flex-col md:flex-row mt-[1rem]">
		<TextField
			label="Town / City"
			withAsterisk
			required
			className="md:mr-3 md:w-[21.75rem] mb-2 md:mb-0"
			bind:value={fields.city}
		/>
		<TextField label="Postcode / ZIP" className="md:w-[21.75rem]" bind:value={fields.zipcode} />
	</div>
	<div class="flex mt-[1rem]">
		<TextField
			type="email"
			label="Email address"
			withAsterisk
			required
			disabled
			className="md:mr-3 md:w-[21.75rem]"
			bind:value={fields.email}
		/>
	</div>
	<div class="flex mt-[1rem]">
		<div>
			<input
				type="checkbox"
				name=""
				id="confirmation"
				required
				bind:checked={fields.allotmentcheck}
			/>
		</div>
		<div class="flex-1 ml-[1rem]">
			<label for="confirmation">
				I hereby declare that I have read and understood the terms and conditions of allotment of
				flat and accept the same, and further declare that I shall abide by the existing rules and
				regulations, conditions, requirements, etc., which may be presented by you and approved by
				the authority for the purchase of a flat in this project.
			</label>
		</div>
	</div>
	<div class="text-[1.1rem] w-[70%] flex flex-col mt-[1rem]">
		<span class="text-[#4B4B4B]">NOMINATION</span>
		<span class="text-[#4B4B4B]">(Nominee should not be a minor)</span>
	</div>
	<div class="flex flex-col md:flex-row mt-[1rem]">
		<TextField
			label="Full Name"
			withAsterisk
			required
			className="md:mr-3 md:w-[21.75rem] mb-2 md:mb-0"
			bind:value={fields.nomineename}
		/>
		<TextField
			label="Father/Husband Name"
			className="md:w-[21.75rem]"
			withAsterisk
			required
			bind:value={fields.nomineeFatherHusbandname}
		/>
	</div>
	<div class="flex flex-col md:flex-row mt-[1rem]">
		<TextField
			label="Relation"
			withAsterisk
			required
			className="md:mr-3 md:w-[21.75rem] mb-2 md:mb-0"
			bind:value={fields.nomineerelation}
		/>
		<TextField
			label="Date of Birth"
			type="date"
			className="md:w-[21.75rem]"
			withAsterisk
			required
			bind:value={fields.nomineedob}
		/>
	</div>
	<div class="flex flex-col md:flex-row mt-[1rem]">
		<TextField
			type="cnic"
			label="CNIC"
			withAsterisk
			required
			className="md:mr-3 md:w-[21.75rem] mb-2 md:mb-0"
			bind:value={fields.nomineecnic}
		/>
		<TextField
			type="phone"
			label="Phone Number"
			className="md:w-[21.75rem]"
			withAsterisk
			required
			bind:value={fields.nomineephoneno}
		/>
	</div>
	<div class="flex flex-col md:flex-row mt-[1rem]">
		<TextField
			label="Address"
			withAsterisk
			required
			className="md:mr-3 md:w-[21.75rem] mb-2 md:mb-0"
			bind:value={fields.nomineeaddress}
		/>
	</div>
	<div class="flex mt-[1rem]">
		<div>
			<input
				type="checkbox"
				name=""
				id="nomineedeclaration"
				required
				bind:checked={fields.nomineedeclaration}
			/>
		</div>
		<div class="flex-1 ml-[1rem]">
			<label for="nomineedeclaration">
				I hereby declared that in case of my death before the execution of Lease/Sub-Lease of the
				unit alloted to me, my above -named nominee shall be by successir-in-interest and
				Lease/Sub-Lease for all purposes under this Agreement of Allotment of Plot subject to the
				compliance of all the terms and conditions/undertakings.
			</label>
		</div>
	</div>
	<button bind:this={paymentBtn} type="submit" class="hidden" />
</form>
