<script lang="ts">
	import Spinner from './spinner.svelte';

	export let className: string = '';
	export let label: string;
	export let loading: boolean = false;
	export let onclick: () => void = () => {};
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let disabled: boolean = false;
</script>

<button {disabled} {type} class="bg-[#FFD624] px-4 py-1 rounded-md {className}" on:click={onclick}>
	{#if loading}
		<Spinner />
	{:else}
		{label}
	{/if}
</button>
