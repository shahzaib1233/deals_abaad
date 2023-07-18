<script lang="ts">
    export let label: string;
    export let loading: boolean = false;
    export let onclick: () => void;
    export let type: "button" | "submit" | "reset" = "button";
</script>

<button type={type} class="bg-primary px-4 py-1 rounded-md">{label}</button>