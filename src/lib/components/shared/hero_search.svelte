<script lang="ts">
	import Button from './button.svelte';
	import ListBox from './list_box_new.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	export let dropdown: any;
	export let selected: any = null;

	const data: any = {
		project: 0,
		cities: 0,
		location: 0,
		property: 0
	};

	const updateData = (key: string, value: number) => {
		data[`${key}`] = value;
	};

	$: project = dropdown
		? [
				{ label: 'All', value: 0 },
				...(dropdown?.project || []).map((item: any) => ({
					value: item.id,
					label: item.name
				}))
		  ]
		: [{ label: 'All', value: 0 }];

	$: cities = dropdown
		? [
				{ label: 'All', value: 0 },
				...(dropdown?.cities || []).map((item: any) => ({
					value: item.id,
					label: item.name
				}))
		  ]
		: [{ label: 'All', value: 0 }];

	$: location = dropdown
		? [
				{ label: 'All', value: 0 },
				...(dropdown?.location || []).map((item: any) => ({
					value: item.id,
					label: item.name
				}))
		  ]
		: [{ label: 'All', value: 0 }];

	$: property = dropdown
		? [
				{ label: 'All', value: 0 },
				...(dropdown?.property || []).map((item: any) => ({
					value: item.id,
					label: item.name
				}))
		  ]
		: [{ label: 'All', value: 0 }];

	onMount(() => {
		if (selected) {
			updateData('project', +selected.project);
			updateData('cities', +selected.cities);
			updateData('location', +selected.location);
			updateData('property', +selected.property);
		}
	});
</script>

<div class="mt-12 bg-white rounded-2xl py-4 px-12 hidden lg:flex flex-col gap-[2rem]">
	<h3 class="font-bold text-[1.563rem]">Find your Dream Property</h3>
	<div class="mb-4 flex gap-[1.375rem] items-end">
		<div class="flex flex-col gap-[1rem]">
			<label class="text-[1.18rem] font-medium"> Project </label>

			<div class="w-[14rem] flex">
				<ListBox
					options={project}
					key="project"
					onChange={updateData}
					bind:item={data.project}
					bind:value={data.project}
				/>
			</div>

			<!-- <Select name="project" id="project" class="max-w-[12.438rem]" /> -->
		</div>
		<div class="flex flex-col gap-[1rem]">
			<label class="text-[1.18rem] font-medium"> All Cities </label>

			<div class="w-[14rem] flex">
				<ListBox
					options={cities}
					key="cities"
					onChange={updateData}
					bind:item={data.cities}
					bind:value={data.cities}
				/>
			</div>
			<!-- <Select name="city" id="city" class="max-w-[12.438rem]" /> -->
		</div>
		<div class="flex flex-col gap-[1rem]">
			<label class="text-[1.18rem] font-medium"> Location </label>

			<div class="w-[14rem] flex">
				<ListBox
					options={location}
					key="location"
					onChange={updateData}
					bind:item={data.location}
					bind:value={data.location}
				/>
			</div>
			<!-- <Select name="location" id="location" class="max-w-[19.9rem]" /> -->
		</div>
		<div class="flex flex-col gap-[1rem]">
			<label class="text-[1.18rem] font-medium"> Property Category </label>

			<div class="w-[14rem] flex">
				<ListBox
					options={property}
					key="property"
					onChange={updateData}
					bind:item={data.property}
					bind:value={data.property}
				/>
			</div>
			<!-- <Select name="property category" id="property category" class="max-w-[12.438rem]" /> -->
		</div>
		<Button
			label="Search"
			className="self-end text-[1.125rem] w-[9.375rem] h-[3rem]"
			onclick={() => {
				goto(
					`/search?project=${data.project}&cities=${data.cities}&location=${data.location}&property=${data.property}`
				);
			}}
		/>
	</div>
</div>
