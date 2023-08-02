<script lang="ts">
	import Drawer from 'svelte-drawer-component';

	export let open: boolean;
</script>

<Drawer {open} size="80%" placement="left" on:clickAway={() => (open = false)}>
	<div class="flex flex-col w-full h-full p-6">
		<button class="self-end" on:click={() => (open = false)}
			><img src="/icons/close.svg" class="w-6 h-6" /></button
		>
		<ul class="flex flex-col gap-6">
			<a href="/"><img src="/logos/logo-dark.svg" alt="" class="mt-6" /></a>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/deals">Deals</a></li>
			<li><a href="/project">Project</a></li>
			<li><a href="/blogs">News & Blogs</a></li>
			<li><a href="/contact">Contact Us</a></li>
		</ul>
	</div>
</Drawer>
