<script lang="ts">
	import { goto } from '$app/navigation';
	import { setToken } from '$lib/stores/token';
	import Cookies from 'js-cookie';
	import { createPopover } from 'svelte-headlessui';
	// import ChevronDown from './ChevronDown.svelte'
	// import IconOne from './IconOne.svelte'
	// import IconTwo from './IconTwo.svelte'
	// import IconThree from './IconThree.svelte'
	import Transition from 'svelte-transition';

	const popover = createPopover({});

	// prettier-ignore
	const solutions = [{
		name: 'Insights',
		description: 'Measure actions your users take',
		href: '##',
	}, {
		name: 'Automations',
		description: 'Create your own targeted content',
		href: '##',
	}, {
		name: 'Reports',
		description: 'Keep track of your growth',
		href: '##',
	}]

	const logout = () => {
		Cookies.remove('token');
		Cookies.remove('email');
		setToken('');
		// token = null;
	};
	function redirectHandler(route: string) {
		goto(route);
	}
</script>

<div class="flex flex-col items-center justify-center">
	<div class="">
		<div class="relative inline-block text-left">
			<button
				use:popover.button
				class="group inline-flex items-center justify-center rounded-md bg-[#FFD624] px-3 py-2 text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 h-[2.4rem] w-[4rem]"
			>
				<img src="/icons/user.svg" alt="" />
			</button>

			<Transition
				show={$popover.expanded}
				enter="transition ease-out duration-200"
				enterFrom="opacity-0 translate-y-1"
				enterTo="opacity-100 translate-y-0"
				leave="transition ease-in duration-150"
				leaveFrom="opacity-100 translate-y-0"
				leaveTo="opacity-0 translate-y-1"
			>
				<div
					use:popover.panel
					class="absolute right-[-5rem] z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform lg:max-w-[10rem]"
					on:click={popover.close}
				>
					<div
						class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 w-full bg-white"
					>
						<!-- <div class="relative grid gap-8 bg-white lg:grid-cols-2 w-full"> -->
						<ul class="flex flex-col w-full text-[1rem] cursor-pointer">
							<li class="w-full">
								<button on:click={() => redirectHandler('/profile')} class="pt-2 px-4 w-full flex"
									>Profile</button
								>
							</li>
							<li>
								<button on:click={() => redirectHandler('/payment')} class="pt-2 px-4 w-full flex"
									>Payment</button
								>
							</li>
							<li>
								<button on:click={() => redirectHandler('/booking')} class="py-2 px-4 w-full flex"
									>My booking</button
								>
							</li>
							<li>
								<button on:click={() => redirectHandler('/checkout')} class="py-2 px-4 w-full flex"
									>Checkout</button
								>
							</li>
							<li>
								<button on:click={() => redirectHandler('/add-property')} class="py-2 px-4 w-full flex"
									>Add Property</button
								>
							</li>
							<!-- <li>
								<button on:click={() => redirectHandler('/saved-ads')} class="pt-2 px-4 w-full flex"
									>My saved ads</button
								>
							</li>
							<li>
								<button on:click={() => redirectHandler('/wallet')} class="py-2 px-4 w-full flex"
									>Wallet</button
								>
							</li> -->
							<li on:click={logout} class="border-t py-2 px-4 w-full">Logout</li>
						</ul>
						<!-- </div> -->
					</div>
				</div>
			</Transition>
		</div>
	</div>
</div>
