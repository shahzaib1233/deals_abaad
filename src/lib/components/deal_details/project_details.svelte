<script lang="ts">
	export let data: any;
	console.log('abhi wala data = ', data);
</script>

<div class="">
	<h2 class="text-[1.3rem] font-bold">Project details</h2>
	<ul class="list-disc list-inside text-[#4B4B4B] mt-[1rem] text-[1.1rem]">
		<li>Project Name: {data?.project?.name}</li>
		<li>Price: {data?.price?.toLocaleString()}</li>
	</ul>
	<hr class="border-t-2 border-gray-300 my-6" />
</div>
<div class="">
	<h2 class="text-[1.3rem] font-bold">Description</h2>
	<h2 class="text-[#4B4B4B] mt-[1rem] text-[1.1rem]">
		{data?.project.description}
	</h2>
	<hr class="border-t-2 border-gray-300 my-6" />
</div>
<div class="">
	<h2 class="text-[1.3rem] font-bold">Features</h2>
	<div class="flex flex-col md:flex-row items-center">
		<div class="flex flex-wrap">
			{#each data?.project?.ProjectsFeature as item}
				<div class="flex items-center mb-2 mr-4">
					<img src="{import.meta.env.VITE_BASE_URL}deal/icon/{item.feature.icon}" alt="" />

					<span class="ml-2">{item.feature.name}</span>
				</div>
			{/each}
		</div>
	</div>
	<hr class="border-t-2 border-gray-300 my-6" />
</div>
<div class="">
	<h2 class="text-[1.3rem] font-bold">Address</h2>
	<ul class="list-disc list-inside text-[#4B4B4B] mt-[1rem] text-[1.1rem]">
		<li class="mt-2">Address: {data?.project?.address}</li>
		<li class="mt-2">Location: {data?.project?.location.name}</li>
		<li class="mt-2">Property Type: {data?.project?.propertylocation.name}</li>
	</ul>

	<hr class="border-t-2 border-gray-300 my-6" />
</div>

<h2 class="text-[1.3rem] font-bold">Other details</h2>
<div class="flex flex-col md:flex-row items-center mt-[1rem] w-[60%]">
	<div class="flex flex-wrap">
		{#if data?.project?.totalsize != null}
			<div class="flex mb-2 mr-4">
				<img src="/images/bookings/sq.png" alt="" />
				<span class="ml-2 whitespace-nowrap">
					{data?.project?.totalsize + ' ' + data?.project?.sizestype}
				</span>
			</div>
		{/if}
	</div>
</div>

<hr class="border-t-2 border-gray-300 my-6" />
<!-- <div class="">
	<h2 class="text-[1.3rem] font-bold">Rating</h2>
	<div class="flex items-center mt-[1rem]">
		<span class="text-[2.8rem]">4.9</span>
		<span class="text-[1.2rem]">/5</span>
	</div>
	<div>
		<div class="flex flex-row">
			<img src="/images/detail/filled-star.png" class="mr-2" alt="" /><img
				src="/images/detail/filled-star.png"
				class="mr-2"
				alt=""
			/><img src="/images/detail/filled-star.png" class="mr-2" alt="" /><img
				src="/images/detail/filled-star.png"
				class="mr-2"
				alt=""
			/><img src="/images/detail/filled-star.png" class="mr-2" alt="" />
		</div>
		<h2 class="text-[1.3rem] font-bold mt-[2rem]">Product Reviews</h2>
		<h2 class="text-[1rem] font-bold mt-[1.4rem]">Muhammad Haider</h2>
		<div class="flex flex-row">
			<img src="/images/detail/filled-star.png" class="h-4 w-4 mr-2 mt-1" alt="" /><img
				src="/images/detail/filled-star.png"
				class="h-4 w-4 mr-2 mt-1"
				alt=""
			/><img src="/images/detail/filled-star.png" class="h-4 w-4 mr-2 mt-1" alt="" /><img
				src="/images/detail/filled-star.png"
				class="h-4 w-4 mr-2 mt-1"
				alt=""
			/>
		</div>

		<div class="">
			<h2 class="text-sm mt-1">
				Kings Scenic Mall is the first and only Centrally Air-Conditioned Shopping Mall in Sukkur
				located at the ideal location of Sukkur Main Bypass Highway Road, Near NICVD Hospital and
				next to Pakistan Club. Kings Scenic Mall is a Ground + 4 Shopping Mall with over 700 shops
				and showrooms. With international and national brand outlets, you can buy shops in Kings
				Scenic Mall Sukkur with just 30% downpayment.
			</h2>
		</div>
	</div>
	<hr class="border-t-2 border-gray-300 my-6" />
</div> -->
{#if data.project.locationIframe != ''}
	<h2 class="text-[1.3rem] font-bold">Location</h2>
	<div class="flex items-center mt-[1rem]">
		<iframe
			title="Map"
			width="100%"
			height="400"
			style="border: 0"
			src={data.project.locationIframe}
			allowFullScreen
		/>
	</div>
	<hr class="border-t-2 border-gray-300 my-6" />
{/if}
{#if data.project.video != ''}
	<h2 class="text-[1.3rem] font-bold">Video</h2>
	<div class="flex items-center mt-[1rem]">
		<iframe
			width="100%"
			height="500"
			src={'https://www.youtube.com/embed/' + data.project.video}
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</div>

	<hr class="border-t-2 border-gray-300 my-6" />
{/if}
