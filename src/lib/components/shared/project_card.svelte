<script lang="ts">
	export let name: string;
	export let img: string;
</script>

<div
	class="flex-1 border border-[#C3C2C2] rounded-3xl overflow-hidden min-w-[15rem] md:min-w-[25rem] cursor-pointer max-w-[33%]"
>
	<div class="">
		<img src={img} alt="" class="w-full h-[22rem] object-cover" />
	</div>
	<div class="px-6 py-6">
		<h6 class="text-[1.375rem] mt-2 font-bold text-center">{name}</h6>
	</div>
</div>
