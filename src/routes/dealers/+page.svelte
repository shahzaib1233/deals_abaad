<script>
	import ContactForm from "$lib/components/contact/contact_form.svelte";
	import OurDealers from "$lib/components/dealers/our_dealers.svelte";
	import Hero from "$lib/components/shared/hero.svelte";
	import { onMount } from "svelte";

  export let data;
	onMount(() => {
		console.log(data);
	});
</script>

<main>
    <Hero heading="Authorized Dealers" image="/images/dealers-hero.png" />
    <div class="bg-[#F2F5F7]">
        <div class="my-container py-[6.25rem]">
          <!-- <h2 class="text-[2.5rem] md:text-[3.438rem] font-extrabold leading-[120%] mb-[1.2rem]">
            Our Dealers
          </h2>
          <p class="text-[1rem] md:text-[1.313rem] text-[#4B4B4B] mb-[2.813rem] max-w-[52rem]">
            Here you can find our trustworthy and reliable dealers.
          </p> -->
          <OurDealers deals={data.dealer} />
        </div>
      </div>
</main>