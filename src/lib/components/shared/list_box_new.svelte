<script lang="ts">
	import { onMount } from 'svelte';
	import { createListbox } from 'svelte-headlessui';

	interface Option {
		label: string;
		value: string;
		[key: string]: any;
	}

	export let options: Option[] = [];
	export let value: string = '';
	export let item: any;
	export let labelKey: string = 'label';
	export let valueKey = 'value';
	export let key: string;
	export let onChange: (key: string, value: number) => void;
	// $: listbox = createListbox({ label: 'Actions', selected: options[0] });

	function handleClickOutside(event: any) {
		const specificDiv = document.getElementById(key);

		if (specificDiv && !specificDiv.contains(event.target)) {
			// The click was outside the specific div
			console.log('Clicked outside the specific div');

			// Add your custom logic here
			isOpen = false;
		}
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});

	function onSelect(e: Event) {
		console.log('select', (e as CustomEvent).detail);
		onChange(value, (e as CustomEvent).detail.selected.value);
	}
	let isOpen: boolean = false;

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	function selectOption(option: Option) {
		value = option[valueKey];
		isOpen = false;
		item = option[valueKey];
	}
</script>

<div class="select-container" id={key}>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="select" on:click={toggleDropdown}>
		{#if options.find((option) => option[valueKey] === value)}
			{options.find((option) => option[valueKey] === value)?.label}
		{:else}
			Select an option
		{/if}
		<svg
			class="w-5 h-5 ml-2"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
		</svg>
	</div>

	{#if isOpen && options.length > 0}
		<div class="dropdown mt-1">
			{#each options as option}
				<div class="option" on:click={() => selectOption(option)}>{option[labelKey]}</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.select-container {
		position: relative;
		width: 100%;
	}

	.select {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.75rem 1rem;
		border: 1px solid #e2e8f0;
		border-radius: 0.375rem;
		cursor: pointer;
		background-color: #fff;
		transition: border-color 0.2s ease;
	}

	.select:focus-within {
		border-color: #48bb78;
	}

	.dropdown {
		position: absolute;
		top: 100%;
		left: 0;
		z-index: 10;
		background-color: #fff;
		border: 1px solid #e2e8f0;
		border-radius: 0.375rem;
		width: 100%;
		max-height: 200px;
		overflow-y: auto;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.option {
		padding: 0.75rem 1rem;
		transition: background-color 0.2s ease;
	}

	.option:hover {
		background-color: #f7fafc;
	}
</style>
