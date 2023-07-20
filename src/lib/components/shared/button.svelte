<script lang="ts">
	export let className: string = '';
	export let label: string;
	export let loading: boolean = false;
	export let onclick: () => void;
	export let type: 'button' | 'submit' | 'reset' = 'button';
</script>

<button {type} class="bg-[#FFD624] px-4 py-1 rounded-md {className}" on:click={onclick}
	>{label}</button
>
