<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	export let images: string[];

	if (browser) {
		onMount(async () => {
			var swiper = new Swiper('.mySwiper', {
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				pagination: {
					el: '.swiper-pagination'
				}
			});
		});
	}
</script>

<div class="swiper mySwiper">
	<div class="swiper-wrapper">
		{#each images as image}
			<div class="swiper-slide" data-swiper-autoplay="1000">
				<img src="{import.meta.env.VITE_BASE_URL}deal/img/{image}" alt="" />
			</div>
		{/each}
	</div>
	<div class="swiper-button-next" />
	<div class="swiper-button-prev" />
	<div class="swiper-pagination" />
</div>

<style>
	.swiper {
		width: 100%;
		height: 100%;
	}

	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.swiper-slide img {
		display: block;
		width: 100%;
		height: 596px;
	}
	@media (max-width: 768px) {
		.swiper-slide img {
			height: auto;
		}
	}
</style>
