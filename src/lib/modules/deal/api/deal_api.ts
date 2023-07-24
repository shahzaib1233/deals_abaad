import axiosFunction from '$lib/utils/network';

export const getDealsApi = async () => {
	return await axiosFunction({
		url: 'deal'
	});
};

export const getSingleDealApi = async (id: string) => {
	return await axiosFunction({
		url: `deal/${id}`
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

export const paymentPlanApi = async ({
	dealId,
	inventoryId,
}: {
	dealId: number;
	inventoryId: number;
}) => {
	return await axiosFunction({
		url: 'deal/payment-plan',
		method: 'POST',
		data: {
			dealId,
			inventoryId,
		}
	});
};
