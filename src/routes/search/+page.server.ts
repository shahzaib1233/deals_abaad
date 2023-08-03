import { getCategoryApi } from '$lib/modules/category/api/category_api';
import { getDealsApi, searchDealApi } from '$lib/modules/deal/api/deal_api';
import { getDropdownApi } from '$lib/modules/home/api/home_api';

export const load = async ({ url }) => {
	const project = url.searchParams.get('project');
	const cities = url.searchParams.get('cities');
	const location = url.searchParams.get('location');
	const property = url.searchParams.get('property');

	try {
		const [search, dropdown] = await Promise.all([
			searchDealApi({
				project: project ? +project : 0,
				cities: cities ? +cities : 0,
				location: location ? +location : 0,
				property: property ? +property : 0
			}),
			getDropdownApi()
		]);

		return {
			search: search.data,
			dropdown: dropdown.data,
			selected: {
				project,
				cities,
				location,
				property
			}
		};
	} catch (e) {
		return {
			deal: null,
			selected: {
				project: '0',
				cities: '0',
				location: '0',
				property: '0'
			}
		};
	}
};
