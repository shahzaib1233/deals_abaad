<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

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
		<div class="swiper-slide"><img src="/images/detail.png" alt="" /></div>
		<div class="swiper-slide"><img src="/images/detail.png" alt="" /></div>
		<div class="swiper-slide"><img src="/images/detail.png" alt="" /></div>
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
		height: 100%;
		object-fit: cover;
	}
</style>
