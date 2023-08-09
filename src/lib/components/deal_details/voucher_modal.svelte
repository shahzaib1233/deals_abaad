<script lang="ts">
	import { dealerReferralApi } from '$lib/modules/dealer/api/dealer_api';
	import { toast } from '$lib/stores/notification';
	import Button from '../shared/button.svelte';
	import Modal from '../shared/modal.svelte';

	export let showModal: boolean;
	export let referralAmount: number;
	export let handleToggleModal: () => void;

	let loading: boolean = false;

	let data = {
		referralcode: ''
	};

	const submit = async () => {
		loading = true;
		try {
			const res = await dealerReferralApi(data);
			toast({ type: 'success', heading: 'Success', text: 'Referral code applied successfully' });
			if (res.data.amount) {
				referralAmount = +res.data.amount;
			}
			handleToggleModal();
		} catch (e) {}
		loading = false;
	};
</script>

<Modal title="Apply Discount/Referral Code" open={showModal} on:close={() => handleToggleModal()}>
	<svelte:fragment slot="body">
		<form slot="body" on:submit|preventDefault={submit}>
			<input
				required
				placeholder="Discount/Referral Code"
				class="w-full focus:outline-none px-3 py-2 rounded-md border border-[#ced4da] text-[1rem]"
				bind:value={data.referralcode}
			/>
			<Button className="mt-4 w-full px-3 py-2" type="submit" label="Apply" {loading} />
		</form>
	</svelte:fragment>
</Modal>
