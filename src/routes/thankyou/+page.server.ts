import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
	const orderId = cookies.get('orderId');
	console.log(orderId);
	if (orderId == undefined || orderId == null || orderId == '') {
		throw redirect(307, '/');
	}

	return;
};
