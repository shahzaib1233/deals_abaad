import axiosFunction from '$lib/utils/network';

export const getProjectsApi = async () => {
	return await axiosFunction({
		url: 'project'
	});
};
