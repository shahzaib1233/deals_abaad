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
		<button class="self-end" on:click={() => (open = false)}
			><img src="/icons/close.svg" class="w-6 h-6" /></button
		>
		<ul class="flex flex-col gap-6">
			<a href="/"><img src="/logos/logo-dark.svg" alt="" class="mt-6" /></a>
			{#if token}
				<li><a href="/profile">Profile</a></li>
				<li><a href="/payment">Payment</a></li>
				<li><a href="/booking">My Bookings</a></li>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/deals">Deals</a></li>
				<li><a href="/project">Project</a></li>
				<li><a href="/blogs">News & Blogs</a></li>
				<li><a href="/contact">Contact Us</a></li>
				<li><a href="/dealer-registration">Dealer Registration</a></li>

				<li><Button label="Logout" onclick={logout}>Logout</Button></li>
			{:else}
				<li><Button label="Login" onclick={navigateToLoginPage}>Login</Button></li>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/deals">Deals</a></li>
				<li><a href="/project">Project</a></li>
				<li><a href="/blogs">News & Blogs</a></li>
				<li><a href="/contact">Contact Us</a></li>
				<li><a href="/dealer-registration">Dealer Registration</a></li>
			{/if}
		</ul>
	</div>
</Drawer>
