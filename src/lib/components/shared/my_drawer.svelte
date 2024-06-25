<script lang="ts">
	import Drawer from 'svelte-drawer-component';
	import { setToken, tokenStore } from '$lib/stores/token';
	import Button from './button.svelte';
	import Cookies from 'js-cookie';
	import { goto } from '$app/navigation';

	let token: any;
	const navigateToLoginPage = () => {
		const url = new URL(window.location.href);
		const path = url.pathname;
		Cookies.set('previousRoute', path, { expires: 1, path: '/' });
		goto('/login');
	};
	const logout = () => {
		Cookies.remove('token');
		Cookies.remove('email');
		setToken('');
		// token = null;
	};
	tokenStore.subscribe((value) => {
		token = value;
	});

	export let open: boolean;
</script>

<Drawer {open} size="80%" placement="left" on:clickAway={() => (open = false)}>
	<div class="flex flex-col w-full h-full p-6">
		<div class="flex justify-between">
			<a href="/"><img src="/logos/logo-dark.svg" alt="" class=" w-[12rem]" /></a>
			<button class="self-end" on:click={() => (open = false)}>
				<img src="/icons/close.svg" class="w-6 h-6" alt="close"/>
			</button>
		</div>
		<ul class="flex flex-col gap-6 mt-8">
			{#if token}
				<li><a href="/" class="hover:text-[#FFD624]">Home</a></li>
				<li><a href="/about" class="hover:text-[#FFD624]">About</a></li>
				<li><a href="/deals" class="hover:text-[#FFD624]">Deals</a></li>
				<li><a href="/project" class="hover:text-[#FFD624]">Project</a></li>
				<li><a href="/dealers" class="hover:text-[#FFD624]">Dealers</a></li>
				<li><a href="/add-property" class="hover:text-[#FFD624]">Add Property</a></li>
				<li><a href="/blogs" class="hover:text-[#FFD624]">News & Blogs</a></li>
				<li><a href="/contact" class="hover:text-[#FFD624]">Contact Us</a></li>
				<li><a href="/dealer-registration" class="hover:text-[#FFD624]">Dealer Registration</a></li>
				<li><a href="/profile" class="hover:text-[#FFD624]">Profile</a></li>
				<li><a href="/payment" class="hover:text-[#FFD624]">Payment</a></li>
				<li><a href="/booking" class="hover:text-[#FFD624]">My Bookings</a></li>
				<li><Button label="Logout" onclick={logout}>Logout</Button></li>
			{:else}
				<li><Button label="Login" onclick={navigateToLoginPage}>Login</Button></li>
				<li><a href="/" class="hover:text-[#FFD624]">Home</a></li>
				<li><a href="/about" class="hover:text-[#FFD624]">About</a></li>
				<li><a href="/deals" class="hover:text-[#FFD624]">Deals</a></li>
				<li><a href="/project" class="hover:text-[#FFD624]">Project</a></li>
				<li><a href="/login" class="hover:text-[#FFD624]">Add Property</a></li>
				<li><a href="/dealers" class="hover:text-[#FFD624]">Dealers</a></li>
				<li><a href="/blogs" class="hover:text-[#FFD624]">News & Blogs</a></li>
				<li><a href="/contact" class="hover:text-[#FFD624]">Contact Us</a></li>
				<li><a href="/dealer-registration" class="hover:text-[#FFD624]">Dealer Registration</a></li>
			{/if}
		</ul>
	</div>
</Drawer>
