import { paymentPlanApi } from '$lib/modules/deal/api/deal_api.js';
import { inventoyStore } from '$lib/stores/inventory.js';

export const load = async () => {
	try {
        let inventoryValue: any;

        inventoyStore.subscribe((value) => {
            inventoryValue = value;
            console.log(value);
            
        });
        

		const data = await paymentPlanApi({
            dealId: inventoryValue.dealId, 
            inventoryId: inventoryValue.inventoryId
        });

        console.log(data.data)

		return { paymentPlan: data.data };
	} catch (e) {
		return { deal: null };
	}
};
