<script>
	import NewsCard from '$lib/components/shared/news_card.svelte';
</script>

<div class="my-container mb-[8.25rem]">
	<h2 class="text-[2.5rem] md:text-[3.438rem] font-extrabold leading-[120%] mb-[2.813rem]">
		News & Blogs
	</h2>
	<div class="flex flex-wrap gap-[1.5rem]">
		<NewsCard
			name="Bahria United Mobile Market"
			desc="Bahria United Mobile Market by GFS Builders and Developers is one of the best projects of Bahria Town Karachi says Mr. Rizwan Irfan "
			img="/images/news-4.png"
			date="22 May 23"
			urlEndPoint="1"
		/>
		<NewsCard
			name="Real Estate Vs. Stock"
			desc="Are you confused about making a decision whether to invest in real estate or stocks? Stop worrying as we are here to help you out."
			img="/images/news-5.png"
			date="December 17, 2021"
			urlEndPoint="2"
		/>
		<NewsCard
			name="Five Reasons to Make a Real Estate Investment Today"
			desc="We all are living in a fast-paced world where everyone is looking to invest in the right sectors. We want to earn the best profit by investing less time and money."
			img="/images/news-6.png"
			date="November 24, 2021"
			urlEndPoint="3"
		/>
	</div>
	<a href="/blogs">
		<div class="flex items-center gap-4 mt-[1.875rem] justify-end">
			<p class="text-[1.25rem]">View all</p>
			<img src="/icons/arrow.svg" alt="" />
		</div>
	</a>
</div>
