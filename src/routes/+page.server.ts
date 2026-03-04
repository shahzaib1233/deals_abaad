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

		return { 
			category: category.data, 
			deals: deals.data, 
			dropdown: dropdown.data 
		};
	} catch (e) {
		console.log('error = ', e);

		// Return mock data for Coming Soon page
		return { 
			category: { 
				comingSoon: true, 
				message: 'Coming Soon - Categories will be displayed here once the backend is integrated.',
				data: [] 
			},
			deals: { 
				comingSoon: true, 
				message: 'Coming Soon - Deals will be displayed here once the backend is integrated.',
				data: [] 
			},
			dropdown: { 
				comingSoon: true, 
				message: 'Coming Soon',
				project: [],
				cities: [],
				location: [],
				property: []
			}
		};
	}
};
