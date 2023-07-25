<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let visible = false;
	let anchor: HTMLButtonElement | undefined = undefined;

	let bottom: number;
	let left: number;

	const initPosition = () =>
		({ bottom, left } = anchor?.getBoundingClientRect() ?? { bottom: 0, left: 0 });

	$: anchor, initPosition();
</script>

<svelte:window on:resize={initPosition} />

<button on:click={() => (visible = true)} bind:this={anchor}><slot name="body" /></button>

{#if visible}
	<div
		role="dialog"
		aria-labelledby="Title"
		aria-describedby="Description"
		aria-orientation="vertical"
		transition:fade
		class="popover"
		on:click|stopPropagation
		style="--popover-top: {`${bottom}px`}; --popover-left: {`${left}px`}"
	>
		<div
			on:click|stopPropagation={() => (visible = false)}
			transition:scale={{ delay: 25, duration: 150, easing: quintOut }}
			class="backdrop"
		/>
		<div class="wrapper rounded-md"><slot name="menu" /></div>
	</div>
{/if}

<style>
	.popover {
		position: fixed;
		inset: 0;
		box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
		z-index: 997;
	}

	.backdrop {
		position: absolute;
		inset: 0;

		/* background: rgba(0, 0, 0, 0.3); */
	}

	.wrapper {
		position: absolute;

		top: calc(var(--popover-top) + 10px);
		left: calc(var(--popover-left) - 140px);

		min-width: 200px;
		max-width: 200px;

		min-height: 100px;

		width: fit-content;
		height: auto;

		overflow: hidden;

		display: flex;
		flex-direction: column;
		align-items: flex-start;

		background: white;
		color: black;
	}
</style>
