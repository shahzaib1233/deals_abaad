<script>
	import Hero from '$lib/components/shared/hero.svelte';

	import NewsCard from '$lib/components/shared/news_card.svelte';
</script>

<main class="">
	<Hero heading="News & Blogs" image="/images/blogs-hero.png" />

	<div class="mt-[8rem]">
		<div class="my-container">
			<div class="flex flex-wrap gap-[1.5rem]">
				<!-- <NewsCard
					name="Real Estate Vs. Stock"
					desc="Are you confused about making a decision whether to invest in real estate or stocks? Stop worrying as we are here to help you out."
					img="/images/news-5.png"
					date="15 May 23"
					urlEndPoint="2"
				/> -->
				<NewsCard
					name="Protesters Condemn Dawn News' Alleged Propaganda on Bahria Town"
					desc="On April 4th, stakeholders and residents of Bahria Town Karachi took to the streets in protest against what they deemed as controversial reporting by Dawn News."
					img="/images/news06.jpg"
					date="08 April 24"
					urlEndPoint="2"
				/>
				<NewsCard
					name="Bahria United Mobile Market"
					desc="Bahria United Mobile Market by GFS Builders and Developers is one of the best projects of Bahria Town Karachi says Mr. Rizwan Irfan "
					img="/images/news-4.png"
					date="22 May 23"
					urlEndPoint="1"
				/>
				<NewsCard
					name="Five Reasons to Make a Real Estate Investment Today"
					desc="We all are living in a fast-paced world where everyone is looking to invest in the right sectors. We want to earn the best profit by investing less time and money."
					img="/images/news-6.png"
					date="04 May 23"
					urlEndPoint="3"
				/>
			</div>
		</div>
	</div>
</main>
