<script lang="ts">
	import { onMount } from 'svelte';

	export let data: any;

	import Button from '../shared/button.svelte';
	import ListBox from '../shared/list_box.svelte';
	import VoucherModal from './voucher_modal.svelte';
	import { setInventory } from '$lib/stores/inventory';
	import { goto } from '$app/navigation';

	let selectedData: any = {
		floors: 0,
		units: 0
	};

	const updateData = (key: string, value: number) => {
		selectedData[`${key}`] = value;
	};

	interface GroupedData {
		floorId: string;
		saleper: number;
		floorName: string;
		price: number;
		unitno: string[];
		dealId: number;
		inventoryId: number;
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
				inventoryId: item.inventoryId,
				floorName: item.inventory.floors.name,
				price: item.inventory.totalSalePrice,
				unitno: [item.inventory.unitno]
			};
		} else {
			groupedData[floorId].unitno.push(item.inventory.unitno);
		}
	});

	calculatedInventory = Object.values(groupedData);
	console.log(calculatedInventory);

	const floors = calculatedInventory.map((item) => ({
		value: item.floorId,
		label: item.floorName
	}));

	$: units = calculatedInventory
		.find((item) => item.floorId == selectedData.floors.toString())
		?.unitno.map((item: any) => ({
			value: item,
			label: item
		}));

	let salePrice = 0;
	let price = 0;
	let discount = 0;
	let referralAmount = 0;

	$: {
		let prevPrice = calculatedInventory.find(
			(item) => item.floorId == selectedData.floors.toString()
		)?.price;

		let prevSale = calculatedInventory.find(
			(item) => item.floorId == selectedData.floors.toString()
		)?.saleper;

		salePrice = prevPrice ?? 0;
		discount = prevSale ?? 0;

		price =
			((prevPrice ? +prevPrice : 0) - (prevSale ? +prevSale : 0)) *
				(1 - (prevSale ? +prevSale : 0) / 100) -
			referralAmount;
	}

	onMount(() => {
		selectedData.floors = floors[0].value;
	});

	let showModal = false;
	const handleToggleModal = () => {
		showModal = !showModal;
	};

	const submit = () => {
		const inventoryData = calculatedInventory.find(
			(inventory) => inventory.floorId == selectedData.floors
		);
		setInventory({
			inventoryId: Number(inventoryData?.inventoryId),
			dealId: Number(inventoryData?.dealId),
			price: price,
			saleprice: salePrice,
			discount: discount,
			referralamount: referralAmount,
			floor: floors.find((floor) => floor.value == selectedData.floors)?.label ?? '',
			unitno: units?.find((unit) => unit.value == selectedData.units)?.label ?? '',
			bookingPrice: data.price,
			projectId: data.projectId
		});
		goto('/get-deal');
	};
</script>

<div class="bg-[#F2F5F7] px-10 py-10 rounded-md w-full">
	<div
		class="bg-[#4A6594] rounded-md h-[3rem] flex items-center justify-center mb-[1rem] w-[100%] min-w-[25rem]"
	>
		<span class="text-white text-[1.3rem]">Select Your Unit</span>
	</div>
	<Button
		className="bg-[#FFD624] hover:bg-[#FFD624] text-[#1A202C] h-[3rem] rounded-md ml-0 sm:ml-0"
		label="View Floor Plan"
	/>
	<form class="mt-[1rem] flex flex-col" on:submit|preventDefault={submit}>
		<label>Select Floor Number</label>
		<ListBox list={floors} key="floors" onChange={updateData} className="w-full mb-4" />
		<label>Select Unit Number</label>
		<ListBox
			list={units ?? [{ value: 0, label: '' }]}
			key="units"
			onChange={updateData}
			className="w-full"
		/>
		{#if data.referral}
			<div
				class="mt-[1.5rem] flex text-[#4B4B4B] text-[1rem] font-bold cursor-pointer"
				on:click={handleToggleModal}
			>
				<img src="/images/checkout/voucher.png" alt="32" />
				<span class="ml-4">Apply Voucher/Referral Code</span>
			</div>
		{/if}

		<div class="flex justify-between mt">
			<span class="text-left mt-4 text-[1.2rem]"> *Total Sale Price </span>
			<span class="text-left mt-2 mb-4 text-[1.4rem]">
				Rs. {salePrice.toLocaleString()}/-
			</span>
		</div>
		<div class="flex justify-between">
			<span class="text-left mt-4 text-[1.2rem]"> *Discount</span>
			<span class="text-left mt-2 mb-4 text-[1.4rem]">
				{discount.toLocaleString()}%
			</span>
		</div>
		<div class="flex justify-between">
			<span class="text-left mt-4 text-[1.2rem]"> *Referral Amount</span>
			<span class="text-left mt-2 mb-4 text-[1.4rem]">
				Rs. {referralAmount.toLocaleString()}/-
			</span>
		</div>
		<div class="flex justify-between">
			<span class="text-left mt-2 text-[1.2rem] font-bold"> *Total Unit Price </span>
			<span class="text-left mt-2 mb-4 text-[1.4rem] font-bold">
				Rs. {price.toLocaleString()}/-
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
