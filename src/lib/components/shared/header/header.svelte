<script lang="ts">
    import {goto} from "$app/navigation";
    import {page} from '$app/stores'
    import nav from "$lib/utils/nav";

    import Button from "$lib/components/shared/button/button.svelte";

    export let dark = false;
</script>

<header class="absolute w-full">
    <div class="mt-4 lg:mt-0 my-container text-[1.188rem] font-[600]">
      <div
        class="hidden lg:flex justify-between py-4 border-b-[1.5px] border-white"
      >
        <div class="flex items-center gap-2">
          <img src="/icons/phone.svg" alt="" />
          <p class="text-white">+92 304 111 7000</p>
        </div>
        <div class="flex items-center gap-6">
 
          <Button
            label="Dealer Registrations"
            onclick={() => goto("/dealer-registration")}
          ></Button>

          <Button
          label="Login"
          onclick={() => goto("/dealer-registration")}
        ></Button>
        </div>
      </div>
      <div class="flex items-center justify-between py-4">
        <a href="/">
          <img
            src={dark ? "/logos/logo-dark.svg" : "/logos/logo.svg"}
            alt=""
            class="w-[15rem] md:w-[17.75rem]"
          />
        </a>
        <ul class="hidden lg:flex gap-[2rem]">
            {#each nav as item}
              <li>
                <a
                  href={item.path}
                  class={`${
                    $page.url.pathname == item.path
                      ? "text-[#FFD624]"
                      : `${dark ? "" : "text-white"}`
                  }`}
                >
                  {item.name}
                </a>
              </li>
              {/each}
          </ul>
        <img
          src="/icons/menu.svg"
          alt=""
          class="w-8 flex lg:hidden cursor-pointer"
     
        />
      </div>
    </div>
    <!-- <NavDrawer opened={opened} open={open} close={close} /> -->
  </header>