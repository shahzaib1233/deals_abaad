import axiosFunction from '$lib/utils/network';

export const load = async () => {
	try {
		const inventoryValue: any = JSON.parse(localStorage.getItem('inventory') ?? '');

		const data = await axiosFunction({
			url: 'deal/payment-plan',
			method: 'POST',
			data: {
				dealId: inventoryValue.dealId,
				inventoryId: inventoryValue.inventoryId
			}
		});


		return { paymentPlan: data.data, inventoryValue };
	} catch (e) {
		return { deal: null };
	}
};
