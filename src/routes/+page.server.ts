import axiosFunction from '$lib/utils/network';

export const load = async () => {
	try {
		const [dropdown, category, deals] = await Promise.all([
			axiosFunction({
				url: 'home/dropdown',
				isServer: true
			}),
			axiosFunction({
				url: 'category',
				isServer: true
			}),
			axiosFunction({
				url: 'deal',
				isServer: true
			})
		]);

		return { dropdown: dropdown.data, category: category.data, deals: deals.data };
	} catch (e) {
		return { deal: null };
	}
};
