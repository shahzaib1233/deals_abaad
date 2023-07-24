import { getCategoryApi } from '$lib/modules/category/api/category_api';
import { getDealsApi } from '$lib/modules/deal/api/deal_api';
import { getDropdownApi } from '$lib/modules/home/api/home_api';

export const load = async () => {
	try {
		const [dropdown, category, deals] = await Promise.all([
			getDropdownApi(),
			getCategoryApi(),
			getDealsApi()
		]);

		return { dropdown: dropdown.data, category: category.data, deals: deals.data };
	} catch (e) {
		return { deal: null };
	}
};
