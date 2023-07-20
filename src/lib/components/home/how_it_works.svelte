<script>

	import HowItWorksCard from "./how_it_works_card.svelte";

</script>

<div class="bg-[#F2F5F7] my-[8rem]">
    <div class="my-container py-[5rem] flex flex-col items-center justify-center">
      <h2 class="text-[2.5rem] md:text-[3.438rem] font-extrabold leading-[120%] mb-[0.625rem]">
        How it work
      </h2>
      <p class="text-[#4B4B4B] text-[1rem] md:text-[1.313rem] max-w-[45.5rem] text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum is simply dummy text
      </p>
      <div class="w-full flex flex-wrap justify-center mt-[4.5rem] gap-[2.5rem] lg:gap-[3rem] ">
        <HowItWorksCard
          img="/icons/search.svg"
          name="Search & Browse"
          desc="Use our advanced search feature to find properties based on your criteria"
        />
        <HowItWorksCard
          img="/icons/cart.svg"
          name="Checkout process"
          desc="Once you've found a property you're interested in, simply click the &quot;Checkout&quot; button. "
        />
        <HowItWorksCard
          img="/icons/tool.svg"
          name="Additional tools & Resources"
          desc="Access market insights to stay informed about trends and investment opportunities."
        />
      </div>
    </div>
  </div>