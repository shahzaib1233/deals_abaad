<script lang="ts">
	import { fade } from 'svelte/transition';
	import { notifications } from '../../stores/notification';
</script>

{#if $notifications}
	<div class="fixed bottom-[2rem] right-[2rem] flex flex-col gap-4 shadow-xl z-[92] rounded-md">
		{#each $notifications as notification}
			<div
				role="alert"
				class="bg-white overflow-hidden w-[25rem] h-[4rem] py-2 px-4 flex gap-4"
				transition:fade
			>
				{#if notification.type == 'success'}
					<div class="bg-green-400 w-10 h-10 rounded-full">
						<img src="/icons/tick.svg" alt="" />
					</div>
				{:else if notification.type == 'error'}
					<div class="bg-red-400 w-10 h-10 rounded-full flex items-center justify-center">
						<img src="/icons/cross.svg" alt="" class="w-5 h-5" />
					</div>
				{/if}
				<div class="">
					<h3 class="font-semibold">{notification.heading}</h3>
					<p>{notification.text.substring(0, 40)}...</p>
				</div>
			</div>
		{/each}
	</div>
{/if}
