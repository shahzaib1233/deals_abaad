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
		downPayment: '',
		insterestedInLounge: '1 Bed Lounge'
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

	const submit = async () => {
		try {
			loading = true;
			const res = await axiosFunction({ method: 'POST', url: 'payonline', data });

			console.log(res);

			const returnURL = 'https://dealsabaad.com/thankyou';

			const postURL = 'https://testgrid.co/dealsabaadapi/checkout_payonline.php';

			const pp_BillReference = res.data.id;
			const pp_Description = res.data.cnic;
			const ppmpf_1 = res.data.name;
			const ppmpf_2 = res.data.phone;
			const ppmpf_3 = res.data.downPayment;
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
				pp_ProductID: 'payonline',
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

	const downPayments = [
		50000, 100000, 150000, 200000, 250000, 300000, 350000, 400000, 450000, 500000, 550000, 600000,
		650000, 700000, 750000, 800000, 850000, 900000, 950000, 1000000
	];

	const installments = [
		25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000,
		90000, 95000, 100000
	];
</script>

<form on:submit|preventDefault={submit}>
	<div class="grid grid-cols-1 md:grid-cols-2 grid-rows-5 gap-5">
		<input
			placeholder="Name"
			class="flex-1 focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
			bind:value={data.name}
			required
		/>
		<input
			placeholder="Father Name"
			class="flex-1 focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
			bind:value={data.fatherName}
			required
		/>
		<input
			placeholder="Cnic Number"
			class="flex-1 focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
			bind:value={data.cnic}
			required
			type="number"
			pattern="[0-9]{13}"
			maxlength="13"
		/>
		<input
			placeholder="Phone number"
			class="flex-1 focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
			bind:value={data.phone}
			required
			type="number"
			pattern="[0-9]{11}"
			maxlength="11"
		/>
		<input
			placeholder="Second Phone number"
			class="flex-1 focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
			bind:value={data.secPhone}
			required
			type="number"
			pattern="[0-9]{11}"
			maxlength="11"
		/>
		<input
			placeholder="Nationality"
			class="flex-1 focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
			bind:value={data.nationality}
			required
		/>
		<input
			placeholder="Address"
			class="flex-1 focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
			bind:value={data.address}
			required
		/>
		<input
			placeholder="DOB"
			class="flex-1 focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
			bind:value={data.dob}
			type="date"
			required
		/>
		<select
			required
			bind:value={data.downPayment}
			class="flex-1 focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
		>
			<option value="" selected disabled hidden>How much down payment you can pay?</option>
			{#each downPayments as downPayment}
				<option value={downPayment}>{downPayment}</option>
			{/each}
		</select>
		<select
			required
			bind:value={data.installment}
			class="flex-1 focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
		>
			<option value="" selected disabled hidden>How much monthly installment you can pay?</option>
			{#each installments as installment}
				<option value={installment}>{installment}</option>
			{/each}
		</select>
		<div class="flex gap-2 items-center">
			Interested In:
			<input
				type="radio"
				name="option"
				value="1 Bed Lounge"
				bind:group={data.insterestedInLounge}
			/>
			1 Bed Lounge
			<input
				type="radio"
				name="option"
				value="2 Bed Lounge"
				bind:group={data.insterestedInLounge}
			/> 2 Bed Lounge
		</div>
	</div>
	<Button
		className="mt-6 bg-[#FFD624] hover:bg-[#FFD624] text-[#1A202C] text-[1.188rem] font-[600] w-[19rem] h-[3.2rem] rounded-md"
		type="submit"
		{loading}
		label="Pay Now"
	/>
</form>
