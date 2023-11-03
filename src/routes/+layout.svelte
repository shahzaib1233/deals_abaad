<script lang="ts">
	import '../style/app.css';
	import { page } from '$app/stores';

	import Header from '$lib/components/shared/header.svelte';
	import Footer from '$lib/components/shared/footer.svelte';
	import GetInTouch from '$lib/components/shared/get_in_touch.svelte';
	import HeaderDark from '$lib/components/shared/header_dark.svelte';
	import { navigating } from '$app/stores';

	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import Toast from '$lib/components/shared/toast.svelte';
	import { setToken } from '$lib/stores/token';
	import Spinner from '$lib/components/shared/spinner.svelte';

	export let data;

	setToken(data.token!);

	const queryClient = new QueryClient();

	const pagesWithoutLayout = [
		'thankyou',
		'thankyou-cash',
		'login',
		'register',
		'otp',
		'forget-password',
		'reset-password',
		'dealer-registration',
		'user-login',
		'dashboard'
	];

	const darkHeader = [
		'profile',
		'payment',
		'privacy',
		'terms',
		'faq',
		'refund',
		'booking',
		'saved-ads',
		'wallet',
		'deal-detail',
		'get-deal',
		'checkout',
		'search'
	];

	let showDarkHeader = false;
	let showLayout = false;

	$: {
		showDarkHeader = $page.url.pathname.split('/').some((each) => darkHeader.includes(each));
		showLayout = $page.url.pathname.split('/').some((each) => pagesWithoutLayout.includes(each));
	}
</script>

{#if $navigating}
	<!-- LOOK HERE -->
	<div class="flex justify-center items-center w-screen h-screen">
		<Spinner />
	</div>
{:else}
	{#if !showLayout}
		{#if showDarkHeader}
			<HeaderDark />
		{:else}
			<Header />
		{/if}
	{/if}

	<QueryClientProvider client={queryClient}>
		<slot />
	</QueryClientProvider>

	{#if !showLayout}
		<GetInTouch />
		<Footer dealsData={data.deals} />
	{/if}
{/if}
<Toast />
