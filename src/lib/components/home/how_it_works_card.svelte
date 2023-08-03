<script lang="ts">
	export let name: string;
	export let desc: string;
	export let img: string;
</script>

<div class="flex flex-col items-center justify-center">
	<div
		class="bg-[#e3eaf4] rounded-[1.563rem] w-[6.625rem] h-[6.625rem] flex items-center justify-center"
	>
		<img src={img} alt="" />
	</div>
	<h6 class="text-[1.2rem] md:text-[1.5rem] font-semibold mt-[1.75rem] mb-[1.125rem] text-center">
		{name}
	</h6>
	<p class="text-center text-[#4B4B4B] text-[1rem] md:text-[1.188rem] max-w-[26.6rem]">
		{desc}
	</p>
</div>
