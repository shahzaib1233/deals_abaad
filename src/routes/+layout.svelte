<script lang="ts">
	import '../style/app.css';
	import { page } from '$app/stores';

	import Header from '$lib/components/shared/header.svelte';
	import Footer from '$lib/components/shared/footer.svelte';
	import GetInTouch from '$lib/components/shared/get_in_touch.svelte';
	import HeaderDark from '$lib/components/shared/header_dark.svelte';

	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import Toast from '$lib/components/shared/toast.svelte';

	export let data;

	const queryClient = new QueryClient();

	const pagesWithoutLayout = [
		'thankyou',
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

{#if !showLayout}
	{#if showDarkHeader}
		<HeaderDark token={data.token} />
	{:else}
		<Header token={data.token} />
	{/if}
{/if}

<QueryClientProvider client={queryClient}>
	<slot />
</QueryClientProvider>

{#if !showLayout}
	<GetInTouch />
	<Footer />
{/if}

<Toast />
