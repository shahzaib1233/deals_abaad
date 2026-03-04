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
		'thankyou-payonline',
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

<svelte:head>
	<title>Buy Property in Karachi | Real Estate Pakistan | Dealsabaad</title>
	<meta name="description" content="Find the best real estate investment opportunities in Pakistan. Buy luxury apartments, affordable plots, and commercial properties in Karachi, Lahore, and Islamabad." />
	<meta name="keywords" content="Buy property in Karachi, Luxury apartments in Islamabad, Affordable plots in Karachi, Housing societies in Karachi, Commercial property in Karachi, Bahria Town Karachi plots, Dealsabaad projects 2024, Best builders in Pakistan 2024, High ROI property in Pakistan, Safe real estate investment Pakistan, Buy land for investment in Pakistan, Profitable property deals 2024, Best cities for real estate investment Pakistan, Capital appreciation in Pakistani real estate, Farmhouses for sale near Islamabad, Residential plots on installment, Commercial shops for rent Karachi, Apartment for sale in Gulberg Lahore, Industrial property Pakistan, Offices for sale in DHA Islamabad, How to verify property documents in Pakistan, Best time to invest in Pakistani real estate, Real estate investment guide for beginners, Property tax laws in Pakistan 2024, Top 10 real estate companies in Pakistan, How to avoid fraud in property deals Pakistan, Property investment in Pakistan, Affordable plots in Lahore, Karachi housing society, Post-pandemic real estate trends Pakistan, Smart homes in Pakistan 2024, Eco-friendly housing projects Pakistan, Real estate market forecast Pakistan 2024, Property management services Pakistan, Legal consultation for real estate Pakistan, Real estate valuation services Karachi, Property registration process in Pakistan, Affordable villas in Islamabad under 1 crore, Dealsabaad vs Zameen reviews, Best real estate portal for commercial property, Best real estate company in Pakistan, Installment plots in Karachi 2024, Commercial property for sale Lahore, How to invest in Pakistan real estate, Cheap land for sale near Islamabad, Trusted property dealers in Pakistan, Farmhouse rates in Islamabad 2024, New housing projects Karachi 2024, Property rates in DHA Lahore today, Safe investment in Pakistan real estate, Pakistan mein sasta plot, Karachi mein ghar ki qeemat, Lahore installment plot, Property investment ideas Pakistan, DHA files for sale Karachi, Dealsabaad projects, Dealsabaad Karachi plots, Dealsabaad reviews, Dealsabaad installment plans, Dealsabaad contact number, Book plot online Pakistan, Apply for housing scheme Pakistan, Property consultation Karachi, Verify property documents Pakistan, Real estate legal advice Pakistan" />
	<meta name="robots" content="index, follow" />
	<meta name="author" content="Dealsabaad Real Estate" />
	<meta property="og:title" content="Best Property Deals in Pakistan | Buy & Sell Real Estate | Dealsabaad" />
	<meta property="og:description" content="Looking for real estate investment in Pakistan? Buy property in Karachi, Lahore, and Islamabad. Invest in plots, commercial properties, and luxury apartments with installment plans." />
	<meta property="og:image" content="/images/property-listing.jpg" />
	<meta property="og:url" content="https://www.dealsabaad.com/" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

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
		<Footer dealsData={data.deals?.data || []} />
	{/if}
{/if}
<Toast />
