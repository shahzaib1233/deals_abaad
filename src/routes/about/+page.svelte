<script>
	import AboutCard from '$lib/components/about/about_card.svelte';

	import Hero from '$lib/components/shared/hero.svelte';
</script>

<main>
	<Hero heading="About us" desc="Karay apkay khuwaboon ko abaad" image="/images/about-hero.png" />
	<div class="">
		<div
			class="my-container flex flex-col lg:flex-row flex-wrap py-[4rem] md:py-[7rem] lg:py-[9rem]"
		>
			<div class="flex-1 space-y-[2rem]">
				<h2 class="text-[2.5rem] md:text-[3.438rem] font-extrabold">About Us</h2>
				<p class="text-[1rem] md:text-[1.313rem] text-[#4B4B4B]">
					A digital real state marketing platform that is established to undo the myth of the word,
					“RISK” when it comes to real estate market. DealsAbaad&quot;s aim is to provide confidence
					and integrity to people to trust this industry specially overseas investors. People who
					are located in Pakistan can easily visit and satisfy their ambiguities and fears but what
					about overseas investors? Due to lack of commitment, lack of information and
					uncertainties, overseas investors resists in investing property online. We envision an
					online market place for local and overseas investors where they can buy, sell or rent out
					property. We believe in the phenomenon of life, until the heart beats, a person lives;
					similarly at DealsAbaad we try to live everyday by re-inventing our processes conducting
					research, adapting change, tapping creative platforms, bringing-in technological novelties
					and finding out innovative solutions to all our clients who buy and sell properties. Our
					objective doesn&quot;t revolve around offering or locking a fancy deal or selling a
					property only. With diversified services that we offer we try our best to provide the
					optimum solution to your problem and recommend something of value. We strongly believe
					that it is immense to have a personal approach when interacting with clients, as it gives
					a comprehensive understanding of how well we can serve them in choosing a property, either
					commercial or residential.
				</p>
			</div>
			<div class="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0">
				<img
					src="/images/about-us.jpg"
					alt=""
					class="max-w-[39.75rem] object-contain w-[100%] lg:w-[80%]"
				/>
			</div>
		</div>
	</div>
	<div class="bg-[#F2F5F7]">
		<div
			class="my-container flex flex-col lg:flex-row flex-wrap py-[4rem] md:py-[7rem] lg:py-[9rem]"
		>
			<div class="flex-1 flex justify-center lg:justify-start mt-8 lg:mt-0 order-1 lg:order-[-1]">
				<img
					src="/images/vision-mission.jpg"
					alt=""
					class="max-w-[39.75rem] object-contain w-[100%] lg:w-[80%]"
				/>
			</div>
			<div class="flex-1 space-y-[2rem]">
				<h2 class="text-[2.5rem] md:text-[3.438rem] font-extrabold leading-[120%]">
					Vision statement
				</h2>
				<p class="text-[1rem] md:text-[1.313rem] text-[#4B4B4B]">
					We envision ourselves a global digital real estate marketing platform that provides
					confidence to it’s customers by providing variety of deals. We are passionate about
					providing extra value that others simply don’t. Our core competency is the diversification
					of services that we provide that make us unique from others. To be Pakistan’s leading
					digital realty agency managing largest portfolio on property investment including buying,
					selling and rental services for local and overseas Pakistanis and equipping ourselves with
					the latest trends of technology.
				</p>
				<h2 class="text-[2.5rem] md:text-[3.438rem] font-extrabold leading-[120%]">Mission</h2>
				<p class="text-[1rem] md:text-[1.313rem] text-[#4B4B4B]">
					We are a believer in great integrity and constant results. Our mission statement clearly
					defines our true purpose as a digital real estate company. To provide extraordinary
					digital solutions to local and overseas investors on their property investments based on
					real time information.
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
