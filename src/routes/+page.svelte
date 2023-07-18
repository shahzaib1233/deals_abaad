<script lang="ts">
	import Category from "$lib/components/home/category/category.svelte";
    import CurrentProject from "$lib/components/home/current_project/current_project.svelte";
	import Hero from "$lib/components/home/hero/hero.svelte";
	import HowItWorks from "$lib/components/home/how_it_works/how_it_works.svelte";
	import NewsAndBlogs from "$lib/components/home/news_and_blogs/news_and_blogs.svelte";
	import PlayVideo from "$lib/components/home/play_video/play_video.svelte";
</script>

<main>
	<Hero/>
	<Category/>
	<PlayVideo/>
	<HowItWorks/>
	<NewsAndBlogs/>
	<CurrentProject/>
</main>