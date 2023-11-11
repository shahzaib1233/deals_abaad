import axiosFunction from '$lib/utils/network';

export const load = async () => {
	try {
		const [category, deals, dropdown] = await Promise.all([
			axiosFunction({
				url: 'category',
				isServer: true
			}),
			axiosFunction({
				url: 'deal',
				isServer: true
			}),
			axiosFunction({
				url: 'home/dropdown',
				isServer: true
			})
		]);

		return { category: category.data, deals: deals.data, dropdown: dropdown.data };
	} catch (e) {
		console.log('error = ', e);

		return { deal: null };
	}
};
