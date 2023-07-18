<script>

	import NewsCard from "$lib/components/shared/news_card/news_card.svelte";

</script>

<div class="my-container mb-[8.25rem]">
    <h2 class="text-[2.5rem] md:text-[3.438rem] font-extrabold leading-[120%] mb-[2.813rem]">
      News & Blogs
    </h2>
    <div class="flex flex-wrap gap-[1.5rem]">
      <NewsCard
        name="The Property Pulse"
        desc="Welcome to The Property Pulse, your go-to source for the latest updates and trends in....."
        img="/images/news-1.png"
        date="22 May 23"
      />
      <NewsCard
        name="Realty Insights"
        desc="Welcome to The Property Pulse, your go-to source for the latest updates and trends in....."
        img="/images/news-2.png"
        date="15 May 23"
      />
      <NewsCard
        name="Home and Hearth Chronicles"
        desc="Welcome to The Property Pulse, your go-to source for the latest updates and trends in....."
        img="/images/news-3.png"
        date="04 May 23"
      />
    </div>
    <a href="/blogs">
      <div class="flex items-center gap-4 mt-[1.875rem] justify-end">
        <p class="text-[1.25rem]">View all</p>
        <img src="/icons/arrow.svg" alt="" />
      </div>
    </a>
  </div>