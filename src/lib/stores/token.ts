import { writable } from 'svelte/store';

export const tokenStore = writable<string>('');

export function setToken(token: string) {
	tokenStore.update((state) => token);
}
