<script lang="ts">
    export let img: string;
    export let name: string;
    export let date: string;
    export let desc: string;
</script>

<div class="flex-1 border border-[#C3C2C2] rounded-3xl overflow-hidden min-w-[15rem] md:min-w-[25rem] cursor-pointer hover:shadow-lg transition-all duration-500 image-zoom">
    <div class="overflow-hidden">
      <img
        src={img}
        alt=""
        class="w-full h-[22rem] object-cover transition-all duration-500 image-zoom__img"
      />
    </div>
    <div class="px-6 py-4">
      <div class="flex justify-between">
        <p class="font-semibold text-[1.125rem] text-[#4B4B4B]">
          By Dealsabaad
        </p>
        <p class="font-semibold text-[1.125rem] text-[#4B4B4B]">{date}</p>
      </div>
      <h6 class="text-[1.375rem] mt-2 font-bold">{name}</h6>
      <p class="mt-1 text-[#4B4B4B]">{desc}</p>
      <div class="flex items-center gap-4 mt-[0.625rem]">
        <p class="text-[1.25rem]">Read more</p>
        <img src="/icons/arrow.svg" alt="" />
      </div>
    </div>
  </div>