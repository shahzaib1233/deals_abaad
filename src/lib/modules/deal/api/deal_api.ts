import axiosFunction from '$lib/utils/network';

export const getDealsApi = async () => {
	return await axiosFunction({
		url: 'deal'
	});
};

export const searchDealApi = async ({
	project,
	cities,
	location,
	property
}: {
	project: number;
	cities: number;
	location: number;
	property: number;
}) => {
	return await axiosFunction({
		url: 'deal/search',
		method: 'POST',
		data: {
			cityId: cities,
			locationId: location,
			propertyCategory: property,
			projectId: project
		}
	});
};
