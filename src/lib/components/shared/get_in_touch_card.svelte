<script lang="ts">
	export let icon: string;
	export let name: string;
	export let desc: string;
</script>

<div class="flex-1 flex flex-col items-center min-w-[10rem]">
	<img src={icon} alt="" class="w-[2.5rem] h-[2.5rem] items-center" />
	<h6
		class="mt-[0.75rem] mb-[1.2rem] text-[1.2rem] md:text-[1.375rem] font-semibold text-center sm:"
	>
		{name}
	</h6>
	<p class="text-[#4B4B4B] text-[1rem] md:text-[1.25rem] max-w-[20.875rem] text-center sm:">
		{desc}
	</p>
</div>
