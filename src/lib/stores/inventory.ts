import { writable } from 'svelte/store';

type Inventory = {inventoryId: number, dealId: number, price: number};

export const inventoyStore = writable<Inventory>({
    inventoryId: 0,
    dealId: 0,
    price: 0,
});

export function setInventory(inventory: Inventory) {
	inventoyStore.update((state) => inventory);
}