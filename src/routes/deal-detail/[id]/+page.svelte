<script lang="ts">
	import ApplyVoucher from '$lib/components/deal_details/apply_voucher.svelte';
	import ProjectDetails from '$lib/components/deal_details/project_details.svelte';
	import SelectUnit from '$lib/components/deal_details/select_unit.svelte';
	import Carousal from '$lib/components/shared/carousal.svelte';
	import SwiperCarousal from '$lib/components/shared/swiper_carousal.svelte';
	import { onMount } from 'svelte';

	export let data;
	let screenSize: number;
	let bannerImage: any;
	let responsiveBannerImage: any;
	let images: string[] = [];

	onMount(() => {
		bannerImage = localStorage.getItem('bannerImage');
		responsiveBannerImage = localStorage.getItem('responsiveBannerImage');
		images = data.deal?.DealImages?.map((image: any) => image.imagePath) || [];
	});

	// localStorage.setItem('endDate', data.deal.endDate.split('T')[0]);
</script>

<svelte:window bind:innerWidth={screenSize} />

<main class="my-container pt-[6rem] md:pt-[10.25rem]">
	{#if bannerImage && bannerImage !== ''}
		<div class="w-full">
			{#if screenSize < 768}
				<img class=" w-full rounded-2xl" src={responsiveBannerImage} />
			{:else}
				<img class=" w-full rounded-2xl" src={bannerImage} />
			{/if}
		</div>
	{/if}

	{#if data.deal}
		<div
			class="text-[0.9rem] md:text-[1.6rem] mt-[2rem] bg-[#FFD624] text-[#000000] rounded-lg min-h-[3rem] md:h-[3rem] w-full md:w-[75%] flex items-center justify-left"
		>
			<span class="ml-4 font-bold">{data.deal.project?.name}</span>
		</div>
		<div class="mt-[1.1rem]">
			<SwiperCarousal {images} />
		</div>
	{/if}

	{#if data.deal && !data.deal.comingSoon}
		<div class="mt-8 flex flex-col md:gap-8 md:flex-row">
			<div>
				<ApplyVoucher date={data.deal.endDate?.split('T')[0] || ''} left={data.deal.DealInventory?.length || 0} />
				<ProjectDetails data={data.deal} />
			</div>
			<div class="mt-8 md:mt-0"><SelectUnit data={data.deal} /></div>
		</div>
	{:else}
		<div class="mt-8 text-center py-12">
			<p class="text-2xl font-bold mb-4">Coming Soon</p>
			<p class="text-gray-600">Deal details will be displayed here once the backend is integrated.</p>
		</div>
	{/if}
</main>
