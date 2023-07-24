import { writable } from 'svelte/store';

type Inventory = {
	inventoryId: number;
	dealId: number;
	price: number;
	saleprice: number;
	discount: number;
	referralamount: number;
	unitno: string;
	floor: string;
	bookingPrice: number;
	projectId: number;
};

export const inventoyStore = writable<Inventory>({
	inventoryId: 0,
	dealId: 0,
	price: 0,
	saleprice: 0,
	discount: 0,
	referralamount: 0,
	unitno: '',
	floor: '',
	bookingPrice: 0,
	projectId: 0
});

export function setInventory(inventory: Inventory) {
	inventoyStore.update((state) => inventory);
}
