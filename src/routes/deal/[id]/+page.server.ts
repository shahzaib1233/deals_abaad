import { getSingleCategoryDetailApi } from '$lib/modules/category/api/category_api';
import { getSingleDealApi } from '$lib/modules/deal/api/deal_api.js';
import axiosFunction from '$lib/utils/network';

export const load = async ({ params }) => {
	try {
		const data = await axiosFunction({
			url: `category/${params.id}`
		});

		return { category: data.data };
	} catch (e) {
		return { category: null };
	}
};
