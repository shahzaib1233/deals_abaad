<script>
	import AboutCard from '$lib/components/about/about_card.svelte';
	import heroImg from '$lib/assets/images/about-hero.png';
	import aboutUsImg from '$lib/assets/images/about-us.jpg';
	import missionVisionImg from '$lib/assets/images/vision-mission.jpg';

	import Hero from '$lib/components/shared/hero.svelte';
</script>

<main>
	<Hero heading="About us" desc="Karay apkay khuwaboon ko abaad" image={heroImg} />
	<div class="">
		<div
			class="my-container flex flex-col lg:flex-row flex-wrap py-[4rem] md:py-[7rem] lg:py-[9rem]"
		>
			<div class="flex-1 space-y-[2rem]">
				<h2 class="text-[2.5rem] md:text-[3.438rem] font-extrabold">About Us</h2>
				<p class="text-[1rem] md:text-[1.313rem] text-[#4B4B4B]">
					A digital marketing platform that is established to undo the myth of the word, “RISK” when
					it comes to market. DealsAbaad’s aim is to provide confidence and integrity as a marketing
					agency to people on behalf of trusted builders working in Market to trust this industry
					both local and overseas investors. People who are located in Pakistan can easily visit and
					satisfy their ambiguities and fears but what about overseas investors? Due to lack of
					commitment, lack of information and uncertainties, overseas investors resists in investing
					online. We envision an online market place for local and overseas buyers where they can
					buy, sell or rent out from reliable sellers who are signed up us as Marketing agency.
				</p>
				<p class="text-[1rem] md:text-[1.313rem] text-[#4B4B4B]">
					We believe in the phenomenon of life, until the heart beats, a person lives; similarly at
					DealsAbaad we try to live everyday by re-inventing our processes conducting research,
					adapting change, tapping creative platforms, bringing-in technological novelties and
					finding out innovative marketing solutions to all our clients.
				</p>
				<p class="text-[1rem] md:text-[1.313rem] text-[#4B4B4B]">
					Our objective doesn’t revolve around offering or locking a fancy deal or marketing a only.
					With diversified services that we offer we try our best to provide the optimum solution to
					your problem and recommend something of value. We strongly believe that it is immense to
					have a personal approach when interacting with target market, as it gives a comprehensive
					understanding of how well we can serve them in choosing a offering by our clients, either
					commercial or residential.
				</p>
			</div>
			<div class="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0">
				<img src={aboutUsImg} alt="" class="max-w-[39.75rem] object-contain w-[100%] lg:w-[80%]" />
			</div>
		</div>
	</div>
	<div class="bg-[#F2F5F7]">
		<div
			class="my-container flex flex-col lg:flex-row flex-wrap py-[4rem] md:py-[7rem] lg:py-[9rem]"
		>
			<div class="flex-1 flex justify-center lg:justify-start mt-8 lg:mt-0 order-1 lg:order-[-1]">
				<img
					src={missionVisionImg}
					alt=""
					class="max-w-[39.75rem] object-contain w-[100%] lg:w-[80%]"
				/>
			</div>
			<div class="flex-1 space-y-[2rem]">
				<h2 class="text-[2.5rem] md:text-[3.438rem] font-extrabold leading-[120%]">Vision</h2>
				<p class="text-[1rem] md:text-[1.313rem] text-[#4B4B4B]">
					Our vision is to lead the real estate marketing industry by leveraging modern media
					strategies and offering affordable, cost-effective deals. We aim to redefine how people
					buy and sell properties. By prioritizing accessibility, we empower individuals from
					diverse backgrounds <b>to achieve homeownership goals</b>. Our firm will be known for
					social media-driven, offer <b>affordable deals</b>, transforming lives and
					<b>shaping the future of real estate</b>.
				</p>
				<h2 class="text-[2.5rem] md:text-[3.438rem] font-extrabold leading-[120%]">Mission</h2>
				<p class="text-[1rem] md:text-[1.313rem] text-[#4B4B4B]">
					Our mission is to provide exceptional real estate marketing and construction services that
					leverage the power of social media and introduce affordable and cost-effective deals. We
					are dedicated to helping individuals and families achieve their homeownership dreams by
					connecting them with the right properties at the right prices. Our mission is to make a
					positive impact on the real estate market by promoting accessibility, affordability, and
					customer satisfaction.
				</p>
			</div>
		</div>
	</div>
	<div class="my-container flex flex-wrap gap-6 mt-[4rem] md:mt-[7rem]">
		<AboutCard
			icon="/icons/about/core_values.svg"
			name="Core Values"
			desc="Our core values are less corporate and more personal as we believe that services are always provided to rule the hearts rather
than making money"
		/>
		<AboutCard
			icon="/icons/about/creativity.svg"
			name="Creativity"
			desc="It&'s not what you do it, it's how you do it matters the most. DealsAbaad believe in creativity. The more you use creativity, the more you will have it. We believe hiring a human resource is easy but fetching creativity from that human resource is an art. Because of that art DealsAbaad remains stand-out in the market"
		/>
		<AboutCard
			icon="/icons/about/transparancy.svg"
			name="Transparency"
			desc="We believe the biggest success of any company is the trust of their customers and employees. At DealsAbaad we don't conceal anything from our clients, we always provide clear and transparent information so our clients make right choices. We trust that the only way to rule the hearts of your customers is to provide them trust"
		/>
		<AboutCard
			icon="/icons/about/innovation.svg"
			name="Innovation"
			desc="We are always committed to provide smart investments and innovative ways to our clients. We don't stagnant to one strategy; we try to come up different experiences to recommend the best solution. We strongly believe that if we offer something new everytime; this will
          surely make a difference"
		/>
		<AboutCard
			icon="/icons/about/partnership.svg"
			name="Partnership"
			desc="We don't offer services but we form bonding with
          all our stake holders either they are our clients, employees or third parties. We try our best to
          give maximum efforts to let them have
          extraordinary experience"
		/>
	</div>
</main>
