<script lang="ts">
	import { getCategoryApi } from '$lib/modules/category/api/category_api';

	import { createQuery } from '@tanstack/svelte-query';
	import Spinner from '../shared/spinner.svelte';

	const query = createQuery({
		queryKey: ['categories'],
		queryFn: () => getCategoryApi()
	});
</script>

<div
	class="my-container flex flex-col md:flex-row items-center gap-[1.5rem] my-[4rem] lg:my-[5rem] py-[3rem]"
>
	{#if $query.isLoading}
		<Spinner />
	{:else if $query.isSuccess}
		{#each $query?.data?.data as item}
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
	{/if}
</div>
