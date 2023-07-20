<script>
	import Hero from "$lib/components/shared/hero.svelte";


	import NewsCard from "$lib/components/shared/news_card.svelte";

</script>

<main class="">
    <Hero heading="News & Blogs" 
    image="/images/blogs-hero.png"  />
    
    <div class="mt-[8rem]">
      <div class="my-container">
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
      </div>
    </div>
  </main>