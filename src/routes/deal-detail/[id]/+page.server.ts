import { getSingleDealApi } from '$lib/modules/deal/api/deal_api.js';
import axiosFunction from '$lib/utils/network';

export const load = async ({ params }) => {
	try {
		const data = await axiosFunction({
			isServer: true,
			url: `deal/${params.id}`
		});
		console.log('server data ', data.data);

		return { deal: data.data };
	} catch (e) {
		// Return mock data for static build
		return { 
			deal: {
				comingSoon: true,
				message: 'Coming Soon - Deal details will be displayed here once the backend is integrated.',
				id: params.id,
				name: 'Sample Deal',
				desc: 'Property description will appear here',
				price: '0',
				saleper: 0,
				frontImage: '',
				DealImages: [],
				endDate: '',
				units: [],
				vouchers: []
			}
		};
	}
};
