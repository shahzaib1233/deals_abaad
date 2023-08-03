<script lang="ts">
	export let name: string;
	export let desc: string;
	export let icon: string;
</script>

<div
	class="flex-1 border border-[#C3C2C2] rounded-[1.25rem] min-w-[15rem] md:min-w-[25rem] max-w-[27rem] h-[max-content] pb-[3rem] md:h-[32rem] pt-[3rem] px-8 text-center flex flex-col items-center gap-[1.688rem]"
>
	<img src={icon} alt="" class="h-[6.25rem]" />
	<h1 class="font-bold text-[1.625rem]">{name}</h1>
	<p>{desc}</p>
</div>
