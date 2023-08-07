import axiosFunction from '$lib/utils/network.js';

export const load = async ({ cookies }) => {
	const token = cookies.get('token');
	const deals = await axiosFunction({
		url: 'deal',
		isServer: true
	});

	return { token, deals: deals.data };
};
