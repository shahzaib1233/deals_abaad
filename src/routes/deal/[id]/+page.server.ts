import { getSingleCategoryDetailApi } from '$lib/modules/category/api/category_api';
import { getSingleDealApi } from '$lib/modules/deal/api/deal_api.js';

export const load = async ({ params }) => {
	try {
		const data = await getSingleCategoryDetailApi(params.id);
		console.log(data.data);

		return { category: data.data };
	} catch (e) {
		return { category: null };
	}
};
