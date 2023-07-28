import axiosFunction from '$lib/utils/network';

export const getScheduleApi = async () => {
	return await axiosFunction({
		url: 'sale/payment'
	});
};
