<script lang="ts">
	import Category from '$lib/components/home/category.svelte';
	import CurrentProject from '$lib/components/home/current_project.svelte';
	import Hero from '$lib/components/shared/hero.svelte';
	import HowItWorks from '$lib/components/home/how_it_works.svelte';
	import NewsAndBlogs from '$lib/components/home/news_and_blogs.svelte';
	import PlayVideo from '$lib/components/home/play_video.svelte';
	import CustomerTestimonial from '$lib/components/home/customer_testimonial.svelte';
	import AmazingDeals from '$lib/components/home/amazing_deals.svelte';
	import img from '$lib/assets/images/home-hero.png';
	import { onMount } from 'svelte';

	export let data;
	onMount(() => {
		console.log(data);
	});
</script>

<main>
	<Hero
		heading="Deals of a lifetime"
		desc="Grab these dream properties before they gone"
		image={img}
		search={true}
		dropdown={data.dropdown}
	/>
	<Category category={data.category} />
	<AmazingDeals deals={data.deals} />
	<PlayVideo />
	<CustomerTestimonial />
	<HowItWorks />
	<NewsAndBlogs />
	<CurrentProject />
</main>
