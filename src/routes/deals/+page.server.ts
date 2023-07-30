import axiosFunction from '$lib/utils/network';

export const load = async () => {
	try {
		const [dropdown, categories] = await Promise.all([
			axiosFunction({
				url: 'home/dropdown',
				isServer: true
			}),
			axiosFunction({
				url: 'category/deals'
			})
		]);

		return { dropdown: dropdown.data, categories: categories.data };
	} catch (e) {
		return { deal: null, categories: null };
	}
};
