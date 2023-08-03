<script lang="ts">
	let check = false;
	const videoPlayer = () => {
		check = true;
	};
</script>

<div class="my-container">
	{#if check}
		<iframe
			width="100%"
			height="100%"
			class="min-h-[25.5rem] md:min-h-[35.5rem] rounded-2xl"
			src="https://www.youtube.com/embed/EfBM9oWOxTY?autoplay=1"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	{:else}
		<div
			class="hero min-h-[25.5rem] md:min-h-[35.5rem] rounded-2xl flex flex-col items-center justify-center px-4"
			style="background-image: url(/images/video-bg.png)"
		>
			<h2
				class="text-white text-[2rem] md:text-[3.438rem] font-extrabold max-w-[49.7rem] text-center leading-[120%]"
			>
				Explore the current projects of DealsAbaad at a glance
			</h2>
			<button
				class="bg-[#F70000] hover:bg-[#F70000] w-[15rem] md:w-[17rem] h-[4rem] text-[1.188rem] font-[600] mt-[3rem] rounded-md"
				on:click={videoPlayer}
			>
				<span class="flex relative justify-center items-center w-[15rem] md:w-[17rem]">
					<p class="text-white text-[1.1rem] md:text-[1.375rem] font-semibold mt-[-0.25rem]">
						Play Videos
					</p>
					<img src="/icons/play.svg" class="absolute right-[2rem]" />
				</span>
			</button>
		</div>
	{/if}
</div>
