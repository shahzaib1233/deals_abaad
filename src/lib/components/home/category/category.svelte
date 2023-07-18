<script lang="ts">
    const items: any[] = []
</script>

<div class="my-container flex flex-col md:flex-row items-center gap-[1.5rem] my-[4rem] lg:my-[5rem] py-[3rem]">
   {#each items as item }
   <div class="md:flex-1">
    <a href={`/deal/${item.id}`}>
      <img
        src={`${process.env.NEXT_PUBLIC_BASE_URL}img/${item.image}`}
        alt=""
      />
    </a>
  </div>
   {/each}
        
  </div>