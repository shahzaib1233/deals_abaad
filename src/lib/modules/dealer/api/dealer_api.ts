import axiosFunction from '$lib/utils/network';

export const createDealerApi = async (data: any) => {
	console.log(data);
	return await axiosFunction({
		method: 'POST',
		url: 'dealer/signup',
		data: data
	});
};

export const dealerReferralApi = async (data: any) => {
	return await axiosFunction({
		method: 'POST',
		url: 'dealer/referral',
		data: data
	});
};
