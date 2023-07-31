<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import nav from '$lib/utils/nav';

	import Button from '$lib/components/shared/button.svelte';
	import Cookies from 'js-cookie';
	import Popover from './popover.svelte';
	import { setToken, tokenStore } from '$lib/stores/token';

	let dark = false;

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
	const navigateToLoginPage = () => {
		// Parse the current URL
		const url = new URL(window.location.href);

		// Extract the path component (e.g., "/blogs")
		const path = url.pathname;

		// Store only the path component in the cookie
		Cookies.set('previousRoute', path, { expires: 1, path: '/' });
		goto('/login'); // Replace with your actual login page route
	};
</script>

<header class="absolute w-full z-[2]" bind:this={header}>
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
				{#if token}
					<Popover>
						<!-- <svelte:fragment slot="body">
							<button
								class="bg-[#FFD624] hover:bg-[#FFD624] w-[4rem] rounded-md flex items-center justify-center h-[2.4rem]"
							>
								<img src="/icons/user.svg" alt="" />
							</button>
						</svelte:fragment>
						<svelte:fragment slot="menu">
							<ul class="flex flex-col w-full text-[1rem] cursor-pointer">
								<li class="w-full">
									<button on:click={() => redirectHandler('/profile')} class="pt-2 px-4 w-full flex"
										>Profile</button
									>
								</li>
								<li>
									<button on:click={() => redirectHandler('/payment')} class="pt-2 px-4 w-full flex"
										>Payment</button
									>
								</li>
								<li>
									<button on:click={() => redirectHandler('/booking')} class="pt-2 px-4 w-full flex"
										>My booking</button
									>
								</li>
								<li>
									<button
										on:click={() => redirectHandler('/saved-ads')}
										class="pt-2 px-4 w-full flex">My saved ads</button
									>
								</li>
								<li>
									<button on:click={() => redirectHandler('/wallet')} class="py-2 px-4 w-full flex"
										>Wallet</button
									>
								</li>
								<li on:click={logout} class="border-t py-2 px-4 w-full">Logout</li>
							</ul>
						</svelte:fragment> -->
					</Popover>
				{:else}
					<Button label="Login" onclick={navigateToLoginPage} />
				{/if}
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
	<!-- <NavDrawer opened={opened} open={open} close={close} /> -->
</header>
