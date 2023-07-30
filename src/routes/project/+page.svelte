<script lang="ts">
	import Hero from '$lib/components/shared/hero.svelte';
	import ProjectCard from '$lib/components/shared/project_card.svelte';
	import { getProjectsApi } from '$lib/modules/project/api/project_api';
	import { onMount } from 'svelte';

	let projects: any[] = [];
	const scheduleHandler = async () => {
		try {
			const res = await getProjectsApi();
			projects = res.data;
		} catch (e) {}
	};
	onMount(() => {
		scheduleHandler();
	});
</script>

<main>
	<div class="">
		<Hero heading="Dealsabaad Project" image="/images/project-hero.png" />
		<div class="my-container">
			<div class="my-container mt-[6.25rem]">
				<h2 class="text-[2.5rem] md:text-[3.438rem] font-extrabold leading-[120%] mb-[1.2rem]">
					Other projects
				</h2>
				<p class="text-[1rem] md:text-[1.313rem] text-[#4B4B4B] mb-[2.813rem] max-w-[52rem]">
					Energy efficiency simply means using less energy to perform the same task – that is,
					eliminating energy waste. Energy efficiency brings a variety of ecological benefits
				</p>
				<div class="flex flex-wrap gap-[1.5rem]">
					{#each projects as project}
						<ProjectCard
							name={project.name}
							img={`${import.meta.env.VITE_BASE_URL}project/img/${project.logo}`}
						/>
					{/each}

					<!-- {#each } -->
					<!-- <ProjectCard name="GFS Mega twin tower" img="/images/project/project-1.png" />
					<ProjectCard name="GFS Mega tower" img="/images/project/project-2.png" />
					<ProjectCard name="AQ Bazaar" img="/images/project/project-3.png" /> -->
				</div>
			</div>
		</div>
	</div>
</main>
