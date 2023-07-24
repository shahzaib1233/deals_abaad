<script lang="ts">
	import Category from '$lib/components/home/category.svelte';
	import CurrentProject from '$lib/components/home/current_project.svelte';
	import Hero from '$lib/components/shared/hero.svelte';
	import HowItWorks from '$lib/components/home/how_it_works.svelte';
	import NewsAndBlogs from '$lib/components/home/news_and_blogs.svelte';
	import PlayVideo from '$lib/components/home/play_video.svelte';
	import CustomerTestimonial from '$lib/components/home/customer_testimonial.svelte';
	import AmazingDeals from '$lib/components/home/amazing_deals.svelte';

	export let data;
</script>

<main>
	<Hero
		heading="Deals of a lifetime"
		desc="Grab these dream properties before they gone"
		image="/images/home-hero.png"
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
