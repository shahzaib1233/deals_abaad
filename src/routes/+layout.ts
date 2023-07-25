import Cookies from 'js-cookie';

export const load = async () => {
	return { token: Cookies.get('token') };
};
