<script>
	import Button from '$lib/components/shared/button.svelte';

	let loading = false;

	const payment = [
		{
			sr: '1',
			desc: 'Your first installment was received (75,000)',
			date: '2 March 2022',
			paid: true
		},
		{
			sr: '2',
			desc: 'Your first installment was received (75,000)',
			date: '2 March 2022',
			paid: false
		},
		{
			sr: '3',
			desc: 'Your first installment was received (75,000)',
			date: '2 March 2022',
			paid: false
		},
		{
			sr: '4',
			desc: 'Your first installment was received (75,000)',
			date: '2 March 2022',
			paid: false
		}
	];
</script>

<div class="my-container pt-[14.25rem]">
	<div class="bg-[#F2F5F7] rounded-2xl flex flex-col items-left justify-left px-10 py-10">
		<div
			class="w-64 h-12 absolute top-273 left-288 font-semibold text-4xl leading-12 text-left text-[#1A202C]"
		>
			Payment
		</div>
		<div class="flex items-center mt-[5rem]">
			<div class="flex justify-center">
				<img class="w-14 h-14" src="/images/user-picture.png" alt="profile" />
			</div>
			<div class="ml-[1rem]">
				<p class="font-bold text-[1.2rem]">Asad Ahmed Khan</p>
				<p>asadahmedkhan17@gmail.com</p>
			</div>
		</div>
	</div>
	<div
		class="bg-[#F2F5F7] rounded-2xl flex flex-col items-left justify-left px-4 md:px-20 py-8 md:py-20 mt-8"
	>
		{#each payment as item}
			<div class="grid grid-cols-1 md:grid-cols-4 mt-2">
				<div class="col-span-2 flex">
					<span class="whitespace-nowrap">{item.sr}: {item.desc}</span>
					<span class="ml-4 md:ml-[7rem]">{item.date}</span>
				</div>
				<div class="md:col-start-4 md:col-end-5 flex justify-end items-center">
					{#if item.paid}
						<!-- <Checkbox checked size="lg" /> -->
						<input
							type="checkbox"
							checked
							readonly
							disabled
							class="h-[2rem] w-[2rem] bg-[#4A6594] rounded"
						/>
					{:else}
						<input
							type="checkbox"
							disabled
							readonly
							class="h-[2rem] w-[2rem] bg-[#F2F5F7] rounded border-gray-400"
						/>

						<!-- <Checkbox size="lg" disabled /> -->
					{/if}
				</div>
				<div class="col-span-4">
					<hr class="border-t-2 border-gray-300 my-6" />
				</div>
			</div>
		{/each}
		<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
			<span class="font-bold py-2 px-2 md:px-4">Total remaining amount is</span>
			<span class="font-bold py-2 px-2 md:px-4">7,54,0000</span>
			<div
				class="font-bold py-2 px-2 md:px-4 md:col-start-3 md:col-end-4 flex justify-end items-center"
			>
				<Button
					className="bg-[#FFD624] hover:bg-[#FFD624] text-[#1A202C] mb-[0.563rem] h-[3rem]"
					type="submit"
					{loading}
					label="Download Slip"
				/>
			</div>
		</div>
	</div>
</div>
