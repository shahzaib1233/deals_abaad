import { getSingleCategoryDetailApi } from '$lib/modules/category/api/category_api';
import { getSingleDealApi } from '$lib/modules/deal/api/deal_api.js';
import axiosFunction from '$lib/utils/network';

export const load = async ({ params }) => {
	try {
		const data = await axiosFunction({
			url: `category/${params.id}`
		});

		console.log(data.data);

		return { category: data.data };
	} catch (e) {
		// Return mock data for static build
		return { 
			category: {
				comingSoon: true,
				message: 'Coming Soon - Category details will be displayed here once the backend is integrated.',
				id: params.id,
				name: 'Sample Category',
				image: ''
			}
		};
	}
};
