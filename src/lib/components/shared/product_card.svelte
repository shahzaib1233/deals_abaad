<script lang="ts">
	import { goto } from '$app/navigation';

	export let productId: string = '';
	export let img: string;
	export let discount: string;
	export let name: string;
	export let rating: number;
	export let desc: string;
	export let price: number;
	export let bannerImage: string | null = null;
	export let responsiveBannerImage: string | null = null;
</script>

<div
	on:click={() => {
		localStorage.setItem('bannerImage', bannerImage ?? '');
		localStorage.setItem('responsiveBannerImage', responsiveBannerImage ?? '');
		goto(`/deal-detail/${productId}`);
	}}
	on:keyup={() => {
		goto(`/deal-detail/${productId}`);
	}}
	role="button"
	tabindex={0}
	class="flex-1 border border-[#C3C2C2] rounded-3xl overflow-hidden min-w-[15rem] md:min-w-[25rem] cursor-pointer hover:shadow-lg transition-all duration-500 image-zoom md:max-w-[27rem]"
>
	<div class="relative">
		<div class="w-full overflow-hidden">
			<img src={img} alt="" class="w-full h-[auto] transition-all duration-500 image-zoom__img" />
		</div>
		{#if +discount > 0}
			<div class="absolute top-1 right-6 bg-[#FFD624] px-3 py-2 rounded-md">
				{discount} % OFF
			</div>
		{/if}
	</div>
	<div class="">
		<div class="flex justify-between items-start bg-[#4A6696] p-4 min-h-[7rem]">
			<h6 class="font-bold text-[1rem] md:text-[1.5rem] text-white">{desc}</h6>
			<div class="flex items-center gap-[2px] mr-4">
				<img src="/icons/star.svg" alt="" />
				<p class="text-[1.125rem] text-white">{rating.toString()}</p>
			</div>
		</div>
		<p
			class="my-4 text-[#4B4B4B] text-[1rem] md:text-[1.25rem] max-w-[19.8rem] font-medium px-4 md:px-6"
		>
			{name}
		</p>
		<div class="flex justify-between px-4 md:px-6 pb-6">
			<p class="text-[1.2rem] md:text-[1.5rem] font-medium">
				Rs {price?.toLocaleString()}
			</p>
			<!-- <img src="/icons/heart.svg" alt="" /> -->
		</div>
	</div>
</div>
