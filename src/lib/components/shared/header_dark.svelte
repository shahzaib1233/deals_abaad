<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import nav from '$lib/utils/nav';

	import Button from '$lib/components/shared/button.svelte';
	import Cookies from 'js-cookie';
	import Popover from './popover.svelte';
	import { tokenStore } from '$lib/stores/token';

	let dark = true;

	let header: HTMLHeadElement;
	let topBar: HTMLDivElement;

	let token: any;

	tokenStore.subscribe((value) => {
		token = value;
	});

	const scrollFunction = () => {
		if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
			header.classList.remove('absolute');
			header.classList.add('fixed');
			header.classList.add('top-0');
			header.classList.add('z-[2]');
			header.classList.add('bg-white');
			header.classList.add('shadow-lg');

			topBar.classList.remove('lg:flex');
		} else {
			header.classList.remove('fixed');
			header.classList.remove('bg-white');
			header.classList.remove('shadow-lg');
			header.classList.add('absolute');

			topBar.classList.add('lg:flex');
		}
	};

	onMount(() => {
		window.onscroll = () => scrollFunction();
	});

	const logout = () => {
		Cookies.remove('token');
		Cookies.remove('email');
		token = null;
	};

	function redirectHandler(route: string) {
		goto(route);
	}
</script>

<header class="absolute w-full z-[2]" bind:this={header}>
	<div class="mt-4 lg:mt-0 my-container text-[1.188rem] font-[600]">
		<div class="hidden lg:flex justify-between py-4 border-b-[1.5px]" bind:this={topBar}>
			<div class="flex items-center gap-2">
				<img src="/icons/darkphone.svg" alt="" />
				<p class="text-[#1A202C]">+92 304 111 7000</p>
			</div>
			<div class="flex items-center gap-6">
				<Button label="Dealer Registrations" onclick={() => goto('/dealer-registration')} />
				{#if token}
					<Popover />
				{:else}
					<Button label="Login" onclick={() => goto('/login')} />
				{/if}
			</div>
		</div>
		<div class="flex items-center justify-between py-4">
			<a href="/">
				<img src={'/logos/logo-dark.svg'} alt="" class="w-[15rem] md:w-[17.75rem]" />
			</a>
			<ul class="hidden lg:flex gap-[2rem]">
				{#each nav as item}
					<li>
						<a
							href={item.path}
							class={`hover:text-[#FFD624] ${
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
	<!-- <NavDrawer opened={opened} open={open} close={close} /> -->
</header>
