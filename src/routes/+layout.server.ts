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

	const deals = await axiosFunction({
		url: 'deal',
		isServer: true
	});

	return { token, deals: deals.data };
};
