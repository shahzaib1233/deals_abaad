<script lang="ts">
	import { toast } from '$lib/stores/notification';
	import axiosFunction from '$lib/utils/network';
	import Button from '../shared/button.svelte';

	let loading = false;

	let data = {
		name: '',
		fatherName: '',
		cnic: '',
		phone: '',
		secPhone: '',
		nationality: '',
		address: '',
		dob: '',
		installment: '',
		insterestedInLounge: '',
		area: '',
		referralCode: ''
	};

	function openWindowWithPost(url: any, name: any, params: any) {
		var form = document.createElement('form');
		form.setAttribute('method', 'post');
		form.setAttribute('action', url);
		form.setAttribute('target', name);
		for (var i in params) {
			if (params.hasOwnProperty(i)) {
				var input = document.createElement('input');
				input.type = 'hidden';
				input.name = i;
				input.value = params[i];
				form.appendChild(input);
			}
		}

		document.body.appendChild(form);

		form.submit();
		document.body.removeChild(form);
	}

	function handleFocus(event: FocusEvent) {
		const target = event.target as HTMLInputElement;
		if (target) {
			target.type = 'date';
		}
	}

	const submit = async () => {
		try {
			loading = true;
			const res = await axiosFunction({ method: 'POST', url: 'payonline', data });

			console.log(res);

			const postURL = 'https://testgrid.co/dealsabaadapi/checkout_payonline.php';

			const pp_BillReference = res.data.id;
			const pp_Description = res.data.cnic;
			const ppmpf_1 = res.data.name;
			const ppmpf_2 = res.data.phone;
			const ppmpf_3 = res.data.nationality;
			const ppmpf_4 = res.data.installment;
			const ppmpf_5 = res.data.DOB;

			openWindowWithPost(postURL, '_self', {
				pp_BillReference,
				pp_Description,
				ppmpf_1: ppmpf_1,
				ppmpf_2: ppmpf_2,
				ppmpf_3: ppmpf_3,
				ppmpf_4: ppmpf_4,
				ppmpf_5: ppmpf_5,
				pp_ProductID: 'payonline'
			});
		} catch (error) {
			console.log('///////////////////////////////////');
			console.log(error);
			toast({
				type: 'error',
				heading: 'Error',
				text: 'Something went wrong'
			});
		} finally {
			loading = false;
		}
	};

	const interestedInArr = ['1 Bed Lounge', '2 Bed Lounge', '3 Bed Lounge', 'Showrooms', 'Shops'];

	const installmentsForOneBed = [25000, 30000, 35000, 40000, 45000, 50000];

	const installmentsForTwoBed = [50000, 55000, 60000, 65000, 70000, 75000];

	const installmentsForThreeBed = [75000, 80000, 85000, 90000, 95000, 100000];

	const installmentsForShowrooms = [
		50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000
	];

	const installmentsForShops = [25000, 30000, 35000, 40000, 45000, 50000];
</script>

<form
	on:submit|preventDefault={submit}
	class="flex flex-col items-center md:items-start justify-center"
>
	<div class="grid grid-cols-1 md:grid-cols-2 grid-rows-5 gap-5 w-full">
		<div class="flex flex-col gap-2 w-full">
			<label for="name">Name <span class="text-red-600 font-semibold">*</span></label>
			<input
				placeholder="Name"
				class="flex-1 focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
				bind:value={data.name}
				required
			/>
		</div>
		<div class="flex flex-col gap-2">
			<label for="name">Father Name <span class="text-red-600 font-semibold">*</span></label>
			<input
				placeholder="Father Name"
				class="flex-1 focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
				bind:value={data.fatherName}
				required
			/>
		</div>
		<div class="flex flex-col gap-2">
			<label for="name">Cnic No <span class="text-red-600 font-semibold">*</span></label>

			<input
				placeholder="Cnic No"
				class="flex-1 focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
				bind:value={data.cnic}
				required
				type="number"
				pattern="[0-9]{13}"
				maxlength="13"
			/>
		</div>
		<div class="flex flex-col gap-2">
			<label for="name">Phone No <span class="text-red-600 font-semibold">*</span></label>

			<input
				placeholder="Phone No"
				class="flex-1 focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
				bind:value={data.phone}
				required
				type="number"
				pattern="[0-9]{11}"
				maxlength="11"
			/>
		</div>
		<div class="flex flex-col gap-2">
			<label for="name">Second Phone No</label>

			<input
				placeholder="Second Phone No"
				class="flex-1 focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
				bind:value={data.secPhone}
				type="number"
				pattern="[0-9]{11}"
				maxlength="11"
			/>
		</div>
		<div class="flex flex-col gap-2">
			<label for="name">Area / City <span class="text-red-600 font-semibold">*</span></label>

			<input
				placeholder="Area / City"
				class="flex-1 focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
				bind:value={data.area}
				required
			/>
		</div>
		<div class="flex flex-col gap-2">
			<label for="name">Referral Code</label>

			<input
				placeholder="Referral Code"
				class="flex-1 focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
				bind:value={data.referralCode}
			/>
		</div>
		<div class="flex flex-col gap-2">
			<label for="name">Address <span class="text-red-600 font-semibold">*</span></label>

			<input
				placeholder="Address"
				class="flex-1 focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
				bind:value={data.address}
				required
			/>
		</div>
		<div class="flex flex-col gap-2">
			<label for="name">DOB <span class="text-red-600 font-semibold">*</span></label>

			<input
				placeholder="YYYY-MM-DD"
				class="flex-1 focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem] w-full"
				bind:value={data.dob}
				type="text"
				on:focus={handleFocus}
				required
			/>
		</div>
		<div class="flex flex-col gap-2">
			<label for="name">Property Type <span class="text-red-600 font-semibold">*</span></label>

			<select
				required
				bind:value={data.insterestedInLounge}
				class="flex-1 focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
			>
				<option value="" selected disabled hidden>Select</option>
				{#each interestedInArr as item}
					<option value={item}>{item}</option>
				{/each}
			</select>
		</div>
		{#if data.insterestedInLounge.length > 0}
			<div class="flex flex-col gap-2">
				<label for="name"
					>Desired Installment <span class="text-red-600 font-semibold">*</span></label
				>

				<select
					required
					bind:value={data.installment}
					class="flex-1 focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
				>
					<option value="" selected disabled hidden>Select</option>
					{#if data.insterestedInLounge === '1 Bed Lounge'}
						{#each installmentsForOneBed as installment}
							<option value={installment}>{installment}</option>
						{/each}
					{:else if data.insterestedInLounge === '2 Bed Lounge'}
						{#each installmentsForTwoBed as installment}
							<option value={installment}>{installment}</option>
						{/each}
					{:else if data.insterestedInLounge === '3 Bed Lounge'}
						{#each installmentsForThreeBed as installment}
							<option value={installment}>{installment}</option>
						{/each}
					{:else if data.insterestedInLounge === 'Showrooms'}
						{#each installmentsForShowrooms as installment}
							<option value={installment}>{installment}</option>
						{/each}
					{:else if data.insterestedInLounge === 'Shops'}
						{#each installmentsForShops as installment}
							<option value={installment}>{installment}</option>
						{/each}
					{/if}
				</select>
			</div>
		{/if}
	</div>
	<div class="block mt-4">
		For further details, our helpline:
		<a href="tel:03041117000" class="text-blue-400 underline">0304 111 7000</a> & WhatsApp:
		<a href="https://wa.me/923002852856" target="_blank" class="text-blue-400 underline"
			>0300 285 2856</a
		>
	</div>
	<div class="block mt-5 font-extrabold text-red-400">
		** Registration Fee Rs.2500/- **
	</div>
	<Button
		className="mt-6 bg-[#FFD624] hover:bg-[#FFD624] text-[#1A202C] text-[1.188rem] font-[600] w-[16rem] h-[3.2rem] rounded-md"
		type="submit"
		{loading}
		label="Pay Now"
	/>
</form>
