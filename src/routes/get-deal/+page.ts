import { paymentPlanApi } from '$lib/modules/deal/api/deal_api.js';

export const load = async () => {
	try {
		const inventoryValue: any = JSON.parse(localStorage.getItem('inventory') ?? '');

		const data = await paymentPlanApi({
			dealId: inventoryValue.dealId,
			inventoryId: inventoryValue.inventoryId
		});

		console.log(data.data);

		return { paymentPlan: data.data, inventoryValue };
	} catch (e) {
		return { deal: null };
	}
};
