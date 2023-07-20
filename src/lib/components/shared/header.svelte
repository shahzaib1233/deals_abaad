<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import nav from '$lib/utils/nav';

	import Button from '$lib/components/shared/button.svelte';

	let dark = false;

	let header: HTMLHeadElement;
	let topBar: HTMLDivElement;

	const scrollFunction = () => {
		if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
			header.classList.remove('absolute');
			header.classList.add('fixed');
			header.classList.add('top-0');
			header.classList.add('z-[999]');
			header.classList.add('bg-white');
			header.classList.add('shadow-lg');

			topBar.classList.remove('lg:flex');

			dark = true;
		} else {
			header.classList.remove('fixed');
			header.classList.remove('bg-white');
			header.classList.remove('shadow-lg');
			header.classList.add('absolute');

			topBar.classList.add('lg:flex');

			dark = false;
		}
	};

	onMount(() => {
		window.onscroll = () => scrollFunction();
	});
</script>

<header class="absolute w-full" bind:this={header}>
	<div class="mt-4 lg:mt-0 my-container text-[1.188rem] font-[600]">
		<div
			class="hidden lg:flex justify-between py-4 border-b-[1.5px] border-white"
			bind:this={topBar}
		>
			<div class="flex items-center gap-2">
				<img src="/icons/phone.svg" alt="" />
				<p class="text-white">+92 304 111 7000</p>
			</div>
			<div class="flex items-center gap-6">
				<Button label="Dealer Registrations" onclick={() => goto('/dealer-registration')} />

				<Button label="Login" onclick={() => goto('/login')} />
			</div>
		</div>
		<div class="flex items-center justify-between py-4">
			<a href="/">
				<img
					src={dark ? '/logos/logo-dark.svg' : '/logos/logo.svg'}
					alt=""
					class="w-[15rem] md:w-[17.75rem]"
				/>
			</a>
			<ul class="hidden lg:flex gap-[2rem]">
				{#each nav as item}
					<li>
						<a
							href={item.path}
							class={`${
								$page.url.pathname == item.path ? 'text-[#FFD624]' : `${dark ? '' : 'text-white'}`
							}`}
						>
							{item.name}
						</a>
					</li>
				{/each}
			</ul>
			<img src="/icons/menu.svg" alt="" class="w-8 flex lg:hidden cursor-pointer" />
		</div>
	</div>
	<!-- <NavDrawer opened={opened} open={open} close={close} /> -->
</header>
