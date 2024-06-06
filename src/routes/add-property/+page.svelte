<script>
	import AddProperty from '$lib/components/add-property/add_property.svelte';
	import ContactForm from '$lib/components/contact/contact_form.svelte';
	import OurDealers from '$lib/components/dealers/our_dealers.svelte';
	import Hero from '$lib/components/shared/hero.svelte';
	import { onMount } from 'svelte';

	// export let data;
	onMount(() => {
		console.log("add property page");
	});
</script>

<main>
    <Hero heading="Add Property" image="/images/contact-hero.png" />
    <div class="bg-[#F2F5F7]">
        <div class="my-container py-[6.25rem]">
          <h2 class="text-[2.5rem] md:text-[3.438rem] font-extrabold leading-[120%] mb-[1.2rem]">
            Add Your Property
          </h2>
          <p class="text-[1rem] md:text-[1.313rem] text-[#4B4B4B] mb-[2.813rem] max-w-[52rem]">
            List your property with us today for unbeatable exposure, unmatched deals, and effortless bookings.
          </p>
          <AddProperty />
        </div>
      </div>
</main>
