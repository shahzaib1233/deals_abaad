<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import Button from './button.svelte';
	import ListBox from './list_box.svelte';
	import { getDropdownApi } from '$lib/modules/home/api/home_api';
	import { goto } from '$app/navigation';

	const query = createQuery({
		queryKey: ['dropdown'],
		queryFn: () => getDropdownApi()
	});

	const data: any = {
		project: 0,
		cities: 0,
		location: 0,
		property: 0
	};

	const updateData = (key: string, value: number) => {
		data[`${key}`] = value;
	};

	const project = $query.data?.data
		? [
				{ label: 'All', value: 0 },
				...$query.data?.data?.project.map((item: any) => ({
					value: item.id,
					label: item.name
				}))
		  ]
		: [{ label: 'All', value: 0 }];

	const cities = $query.data?.data
		? [
				{ label: 'All', value: 0 },
				...$query.data?.data?.cities.map((item: any) => ({
					value: item.id,
					label: item.name
				}))
		  ]
		: [{ label: 'All', value: 0 }];

	const location = $query.data?.data
		? [
				{ label: 'All', value: 0 },
				...$query.data?.data?.location.map((item: any) => ({
					value: item.id,
					label: item.name
				}))
		  ]
		: [{ label: 'All', value: 0 }];

	const property = $query.data?.data
		? [
				{ label: 'All', value: 0 },
				...$query.data?.data?.property.map((item: any) => ({
					value: item.id,
					label: item.name
				}))
		  ]
		: [{ label: 'All', value: 0 }];
</script>

<div class="mt-12 bg-white rounded-2xl py-4 px-12 hidden lg:flex flex-col gap-[2rem]">
	<h3 class="font-bold text-[1.563rem]">Find your Dream Property</h3>
	<div class="mb-4 flex gap-[1.375rem]">
		<div class="flex flex-col gap-[1rem]">
			<label class="text-[1.18rem] font-medium"> Project </label>

			<ListBox list={project} key="project" onChange={updateData} />

			<!-- <Select name="project" id="project" class="max-w-[12.438rem]" /> -->
		</div>
		<div class="flex flex-col gap-[1rem]">
			<label class="text-[1.18rem] font-medium"> All Cities </label>
			<ListBox list={cities} key="cities" onChange={updateData} />
			<!-- <Select name="city" id="city" class="max-w-[12.438rem]" /> -->
		</div>
		<div class="flex flex-col gap-[1rem]">
			<label class="text-[1.18rem] font-medium"> Location </label>
			<ListBox list={location} key="location" onChange={updateData} />
			<!-- <Select name="location" id="location" class="max-w-[19.9rem]" /> -->
		</div>
		<div class="flex flex-col gap-[1rem]">
			<label class="text-[1.18rem] font-medium"> Property Category </label>
			<ListBox list={property} key="property" onChange={updateData} />
			<!-- <Select name="property category" id="property category" class="max-w-[12.438rem]" /> -->
		</div>
		<Button
			label="Search"
			className="self-end text-[1.125rem] w-[9.375rem] h-[2.6rem]"
			onclick={() => {
				goto(
					`/search?project=${data.project}&cities=${data.cities}&location=${data.location}&property=${data.property}`
				);
			}}
		/>
	</div>
</div>
