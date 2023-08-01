import axiosFunction from '$lib/utils/network.js';

export const load = async ({ cookies }) => {
	const token = cookies.get('token');
	const dropdown = await axiosFunction({
		url: 'home/dropdown',
		isServer: true
	});
	console.log(dropdown.data);

	return { token, dropdown: dropdown.data };
};
