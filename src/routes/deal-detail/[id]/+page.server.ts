import { getSingleDealApi } from '$lib/modules/deal/api/deal_api.js';

export const load = async ({ params }) => {
	try {
		const data = await getSingleDealApi(params.id);
		console.log(data.data);

		return { deal: data.data };
	} catch (e) {
		return { deal: null };
	}
};
