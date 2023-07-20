import axiosFunction from '$lib/utils/network';

export const getCategoryApi = async () => {
	return await axiosFunction({
		url: 'category'
	});
};

export const getCategoryWithDealsApi = async () => {
	return await axiosFunction({
		url: 'category/deals'
	});
};
