import { writable } from 'svelte/store';

type Notification = { heading: string; text: string; type: 'error' | 'success' | 'warning' };

export const notifications = writable<Notification[]>([]);

export function toast(notification: Notification) {
	notifications.update((state) => [notification, ...state]);
	setTimeout(removeToast, 2000);
}

function removeToast() {
	notifications.update((state) => {
		return [...state.slice(0, state.length - 1)];
	});
}
