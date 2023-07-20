<script>
	import ContactForm from "$lib/components/contact/contact_form.svelte";
	import Hero from "$lib/components/shared/hero.svelte";

</script>

<main>
    <Hero heading="Contact us" image="/images/contact-hero.png" />
    <div class="bg-[#F2F5F7]">
        <div class="my-container py-[6.25rem]">
          <h2 class="text-[2.5rem] md:text-[3.438rem] font-extrabold leading-[120%] mb-[1.2rem]">
            Send a message
          </h2>
          <p class="text-[1rem] md:text-[1.313rem] text-[#4B4B4B] mb-[2.813rem] max-w-[52rem]">
            For marketing, sales, booking our matchless deals or general
            enquiries send us a message by filling out this form.
          </p>
          <ContactForm />
        </div>
      </div>
</main>