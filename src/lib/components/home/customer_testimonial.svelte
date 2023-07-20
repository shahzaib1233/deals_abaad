<script>
	import CustomerTestimonialCard from "./customer_testimonial_card.svelte";

</script>

<div class="my-[4rem]">
    <div class="my-container py-[5rem] flex flex-col items-center justify-center">
      <h2 class="text-[2.5rem] lg:text-[3.438rem] font-extrabold leading-[120%] mb-[0.625rem]">
        Customer testimonials
      </h2>
      <p class="text-[#4B4B4B] text-[1rem] md:text-[1.2rem] max-w-[45.5rem] text-center">
        Our customers are not customers but our family. Check out what our family says about DealsAbaad
      </p>
      <div class="w-full flex flex-wrap mt-[4.5rem] gap-[2rem]">
       <CustomerTestimonialCard/>
       <img class="flex-1 md:w-1/2" src="/images/testimonial.png" />
      </div>
      
    </div>
  </div>