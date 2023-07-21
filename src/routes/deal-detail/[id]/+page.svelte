<script lang="ts">
	import ApplyVoucher from '$lib/components/deal_details/apply_voucher.svelte';
	import ProjectDetails from '$lib/components/deal_details/project_details.svelte';
	import SelectUnit from '$lib/components/deal_details/select_unit.svelte';
	import Carousal from '$lib/components/shared/carousal.svelte';

	export let data;
</script>

<main class="my-container pt-[10.25rem]">
	{#if data.deal}
		<div
			class="text-[1.6rem] mt-[2rem] bg-[#FFD624] text-[#000000] rounded-lg h-[3rem] w-[50%] flex items-center justify-left"
		>
			<span class="ml-4 font-bold">{data.deal.name}</span>
		</div>
		<div class="mt-[1.1rem]">
			<Carousal />
		</div>
	{/if}
	<div class="flex gap-8 mt-8">
		<div class="flex-1">
			<ApplyVoucher />
			<ProjectDetails data={data.deal} />
		</div>
		<div class=""><SelectUnit data={data.deal} /></div>
	</div>
</main>
