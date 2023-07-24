import axiosFunction from '$lib/utils/network';

export const registerApi = async (params: any) => {
	const res = await axiosFunction({
		method: 'POST',
		url: 'member/signup',
		data: params
	});
	return res;
};

export const loginApi = async (params: any) => {
	const res = await axiosFunction({
		method: 'POST',
		url: 'member/login',
		data: params
	});
	return res;
};

export const otpApi = async (params: any) => {
	const res = await axiosFunction({
		method: 'POST',
		url: 'member/otp',
		data: params
	});
	return res;
};

export const forgetApi = async (params: any) => {
	const res = await axiosFunction({
		method: 'POST',
		url: 'member/forget',
		data: params
	});
	return res;
};

export const resetApi = async (params: any) => {
	const res = await axiosFunction({
		method: 'POST',
		url: 'member/reset',
		data: params
	});
	return res;
};
