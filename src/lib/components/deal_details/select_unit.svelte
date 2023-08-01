<script lang="ts">
	export let data: any;

	import Button from '../shared/button.svelte';
	import ListBoxNew from '../shared/list_box_new.svelte';
	import VoucherModal from './voucher_modal.svelte';
	import { goto } from '$app/navigation';
	import { toast } from '$lib/stores/notification';
	import { onMount } from 'svelte';
	let selectedData: any = {
		floors: 0,
		units: 0
	};

	const updateData = (key: string, value: number) => {
		selectedData[`${key}`] = value;
		if (key == 'floors') {
			selectedData['units'] = 0;
		}
	};

	interface GroupedData {
		floorId: string;
		saleper: number;
		floorName: string;

		dealId: number;

		inventoryData: { inventoryId: number[]; price: number[]; unitno: string[] }[];
	}

	let calculatedInventory: GroupedData[] = [];

	const groupedData: { [key: string]: GroupedData } = {};

	data.DealInventory.map((item: any) => {
		const floorId: string = item.inventory.floorId.toString();
		if (!groupedData[floorId]) {
			groupedData[floorId] = {
				floorId: floorId,
				saleper: data.saleper,
				dealId: item.dealId,
				floorName: item.inventory.floors.name,
				inventoryData: [
					{
						inventoryId: item.inventoryId,
						price: item.inventory.totalSalePrice,
						unitno: item.inventory.unitno
					}
				]
			};
		} else {
			groupedData[floorId].inventoryData.push({
				inventoryId: item.inventoryId,
				price: item.inventory.totalSalePrice,
				unitno: item.inventory.unitno
			});
		}
	});

	calculatedInventory = Object.values(groupedData);

	const floors: {
		label: string;
		value: string;
		[key: string]: any;
	}[] = calculatedInventory.map((item) => ({
		value: item.floorId,
		label: item.floorName,
		key: item.floorId
	}));

	$: units = calculatedInventory
		.find((item) => item.floorId == selectedData.floors.toString())
		?.inventoryData.map((item: any) => ({
			value: item.unitno,
			label: item.unitno
		}));

	let salePrice = 0;
	let price = 0;
	let discount = 0;
	let referralAmount = 0;

	$: {
		if (selectedData.units != 0) {
			let prevPrice = Number(
				calculatedInventory
					.find((item) => item.floorId == selectedData.floors.toString())
					?.inventoryData.find(
						(inventory) => inventory.unitno.toString() == selectedData.units.toString()
					)?.price ?? 0
			);

			let prevSale = Number(
				calculatedInventory.find((item) => item.floorId == selectedData.floors.toString())
					?.saleper ?? 0
			);

			salePrice = Math.round(prevPrice ?? 0);
			discount = Math.round(prevSale ?? 0);

			price = Math.round(salePrice - (salePrice * discount) / 100 - referralAmount);
		} else {
			salePrice = 0;
			discount = 0;

			price = 0;
		}
	}

	let showModal = false;
	const handleToggleModal = () => {
		showModal = !showModal;
	};

	const submit = () => {
		if (selectedData.floors == 0 || selectedData.units == 0) {
			toast({ type: 'error', heading: 'Error', text: 'Please select floor and unit' });
			return;
		}
		const inventoryData = calculatedInventory.find(
			(inventory) => inventory.floorId == selectedData.floors
		);

		console.log(
			inventoryData?.inventoryData.find(
				(inventory) => inventory.unitno.toString() == selectedData.units.toString()
			)
		);

		localStorage.setItem(
			'inventory',
			JSON.stringify({
				inventoryId: inventoryData?.inventoryData.find(
					(inventory) => inventory.unitno.toString() == selectedData.units.toString()
				)?.inventoryId,
				dealId: Number(inventoryData?.dealId),
				price: price,
				saleprice: salePrice,
				discount: discount,
				referralamount: referralAmount,
				floor: floors.find((floor) => floor.value == selectedData.floors)?.label ?? '',
				unitno: units?.find((unit) => unit.value == selectedData.units)?.label ?? '',
				bookingPrice: data.price,
				projectId: data.projectId
			})
		);
		localStorage.setItem(
			'Deal_Details',
			JSON.stringify({
				address: data.project.address,
				area: data.project.location.name,
				city: data.project.cities.name
			})
		);

		goto('/get-deal');
	};
	onMount(() => {
		console.log('data=== ', data);
	});
</script>

<div class="bg-[#F2F5F7] px-10 py-10 rounded-md w-full sticky top-10">
	<div
		class="bg-[#4A6594] rounded-md h-[3rem] flex items-center justify-center mb-[1rem] w-[100%] min-w-[10rem] md:min-w-[25rem]"
	>
		<span class="text-white text-[1.3rem]">Select Your Unit</span>
	</div>

	<Button
		className="bg-[#FFD624] hover:bg-[#FFD624] text-[#1A202C] h-[3rem] rounded-md ml-0 sm:ml-0"
		label="View Floor Plan"
		onclick={() => {
			window.open(
				`${import.meta.env.VITE_BASE_URL}deal/pdf/${data.project.floorPlan}`,
				'newwindow',
				'width=1000,height=700'
			);
			return false;
		}}
	/>
	<form class="mt-[1rem] flex flex-col" on:submit|preventDefault={submit}>
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label>Select Floor Number</label>
		<ListBoxNew
			key="floors"
			options={floors}
			onChange={updateData}
			bind:item={selectedData.floors}
		/>
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label>Select Unit Number</label>

		<ListBoxNew
			key="units"
			options={units ?? [{ value: 0, label: '' }]}
			onChange={updateData}
			bind:item={selectedData.units}
		/>
		{#if data.referral}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="mt-[1.5rem] flex text-[#4B4B4B] text-[1rem] font-bold cursor-pointer"
				on:click={handleToggleModal}
			>
				<img src="/images/checkout/voucher.png" alt="32" />
				<span class="ml-4">Apply Voucher/Referral Code</span>
			</div>
		{/if}

		<div class="flex justify-between mt">
			<span class="text-left mt-4 text-[1.2rem]"> *Standard Price </span>
			<span class="text-left mt-2 mb-4 text-[1.4rem]">
				Rs. {salePrice?.toLocaleString()}/-
			</span>
		</div>
		<div class="flex justify-between">
			<span class="text-left mt-4 text-[1.2rem]"> *Discount ({discount?.toLocaleString()}%)</span>
			<span class="text-left mt-2 mb-4 text-[1.4rem]">
				Rs. {Math.round((salePrice * discount) / 100).toLocaleString()}/-
			</span>
		</div>
		<div class="flex justify-between">
			<span class="text-left mt-4 text-[1.2rem]"> *Referral Discount</span>
			<span class="text-left mt-2 mb-4 text-[1.4rem]">
				Rs. {referralAmount?.toLocaleString()}/-
			</span>
		</div>
		<div class="flex justify-between">
			<span class="text-left mt-2 text-[1.2rem] font-bold"> *Net Unit Price </span>
			<span class="text-left mt-2 mb-4 text-[1.4rem] font-bold">
				Rs. {price?.toLocaleString()}/-
			</span>
		</div>
		<Button
			className="bg-[#FFD624] hover:bg-[#FFD624] h-[2.5rem] text-[#1A202C] rounded-md ml-0 sm:ml-0"
			type="submit"
			label="Get The Deal"
		/>
		<span class="text-left mt-2"> *Select payment schedule on next page </span>
	</form>
</div>

<VoucherModal {showModal} {handleToggleModal} bind:referralAmount />
