import axiosFunction from '$lib/utils/network';

export const getBookingsApi = async () => {
	return await axiosFunction({
		url: 'sale'
	});
};
