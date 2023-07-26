import { getSingleDealApi } from '$lib/modules/deal/api/deal_api.js';
import axiosFunction from '$lib/utils/network';

export const load = async ({ params }) => {
	try {
		const data = await axiosFunction({
			isServer: true,
			url: `deal/${params.id}`
		});
		console.log(data.data);

		return { deal: data.data };
	} catch (e) {
		return { deal: null };
	}
};
