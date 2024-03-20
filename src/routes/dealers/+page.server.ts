import axiosFunction from '$lib/utils/network';

export const load = async () => {
	try {
		const data = await axiosFunction({
			isServer: true,
			url: `dealer`
		});
		console.log('server data ', data.data);

		return { dealer: data.data.filter((itm:any) => itm.publish) };
	} catch (e) {
		return { dealer: null };
	}
};

