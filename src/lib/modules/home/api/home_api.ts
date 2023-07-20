import axiosFunction from "$lib/utils/network";

export const getDropdownApi = async () => {
	return await axiosFunction({
		url: 'home/dropdown'
	});
};
