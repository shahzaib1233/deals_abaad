import axiosFunction from '$lib/utils/network';

export const load = async () => {
	try {
		const [ category, deals] = await Promise.all([
			
			axiosFunction({
				url: 'category',
				isServer: true
			}),
			axiosFunction({
				url: 'deal',
				isServer: true
			})
		]);

		return {  category: category.data, deals: deals.data };
	} catch (e) {
		return { deal: null };
	}
};
