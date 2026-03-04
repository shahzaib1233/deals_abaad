import axiosFunction from '$lib/utils/network.js';
import { redirect } from '@sveltejs/kit';

const publicUrls = ['/login', '/forget-password', '/reset-password', '/otp', '/register'];

const pagesToLogin = ['/payment', '/booking', '/profile', '/checkout', '/wallet', '/thankyou'];

export const load = async ({ cookies, request }) => {
	const token = cookies.get('token');

	const url = new URL(request.url);
	console.log(url.pathname);
	console.log(pagesToLogin.includes(url.pathname));

	if (publicUrls.includes(url.pathname) && token && token != '') {
		throw redirect(301, '/');
	}
	if (pagesToLogin.includes(url.pathname) && (!token || token == '')) {
		throw redirect(301, '/login');
	}

	let deals;
	try {
		const dealsResponse = await axiosFunction({
			url: 'deal',
			isServer: true
		});
		deals = dealsResponse.data;
	} catch (e) {
		console.log('error loading deals = ', e);
		// Return mock data for Coming Soon page
		deals = {
			comingSoon: true,
			message: 'Coming Soon - Deals will be displayed here once the backend is integrated.',
			data: []
		};
	}

	return { token, deals };
};
