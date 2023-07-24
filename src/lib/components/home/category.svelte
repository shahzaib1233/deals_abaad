<script lang="ts">
	export let category: any;
</script>

<div
	class="my-container flex flex-col md:flex-row items-center gap-[1.5rem] my-[4rem] lg:my-[5rem] py-[3rem]"
>
	
		{#each category as item}
			<div class="md:flex-1">
				<a href={`/deal/${item.id}`}>
					<img
						src={`${import.meta.env.VITE_BASE_URL}category/img/${item.image}`}
						class="w-full"
						alt=""
					/>
				</a>
			</div>
		{/each}
</div>
