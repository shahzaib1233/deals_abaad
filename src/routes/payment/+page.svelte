<script>
	import PaymentFirstSection from '$lib/components/payment/PaymentFirstSection.svelte';
	import PaymentForm from '$lib/components/payment/PaymentForm.svelte';
	import ListBoxNew from '$lib/components/shared/list_box_new.svelte';
	const data = [
		{
			key: '1',
			value: 'rent1',
			label: 'Rent 1'
		},
		{
			key: '2',
			value: 'rent2',
			label: 'Rent 2'
		},
		{
			key: '3',
			value: 'rent3',
			label: 'Rent 3'
		},
		{
			key: '4',
			value: 'rent4',
			label: 'Rent 4'
		},
		{
			key: '5',
			value: 'rent5',
			label: 'Rent 5'
		}
	];

	const updateData = () => {
		// data[`${key}`] = value;
	};
</script>

<div class="my-container pt-[14.25rem]">
	<PaymentFirstSection />
	<div class="mt-[3rem]">
		<label class="text-[1.3rem] font-bold">Select Payment</label>
		<!-- <ListBox list={floors} key="floors" onChange={updateData} className="w-full mb-4" /> -->
		<div class="w-[30rem] mt-3">
			<ListBoxNew key="floors" options={data} onChange={updateData} bind:item={data[1]} />
		</div>
	</div>
	<PaymentForm />
</div>
