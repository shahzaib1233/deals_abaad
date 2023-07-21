<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import Button from '../shared/button.svelte';

	let hours = 2,
		minutes = 0,
		seconds = 0;

	let countdownInterval: NodeJS.Timer;

	onMount(() => {
		countdownInterval = setInterval(() => {
			if (seconds > 0) {
				seconds -= 1;
			} else {
				if (minutes > 0) {
					minutes -= 1;
					seconds = 59;
				} else {
					if (hours > 0) {
						hours = hours - 1;
						minutes = 59;
						seconds = 59;
					} else {
					}
				}
			}
		}, 1000);
	});

	onDestroy(() => clearInterval(countdownInterval));
</script>

<div class="flex flex-wrap">
	<div class="w-full mb-4 sm:mb-0">
		<div class="rounded-md h-[4rem] flex items-center justify-between w-full mt-[1rem]">
			<div class="text-black text-[1.4rem] font-bold">Deal Ends In</div>
			<div class="text-black text-[1.3rem]">HURRY UP ONLY 5 FLATS LEFT</div>
		</div>
		<div class="flex justify-left space-x-4 mt-2">
			<div
				class="bg-[#4A6594] rounded-md h-[3.738rem] flex-1 flex flex-col items-center justify-center"
			>
				<h2 class="text-white font-bold text-[1.3rem]">{hours}</h2>
				<h2 class="text-white">HOURS</h2>
			</div>
			<div
				class="bg-[#4A6594] rounded-md h-[3.738rem] flex-1 flex flex-col items-center justify-center"
			>
				<h2 class="text-white font-bold text-[1.3rem]">{minutes}</h2>
				<h2 class="text-white">MIN</h2>
			</div>
			<div
				class="bg-[#4A6594] rounded-md h-[3.738rem] flex-1 flex flex-col items-center justify-center"
			>
				<h2 class="text-white font-bold text-[1.3rem]">{seconds}</h2>
				<h2 class="text-white">SEC</h2>
			</div>
		</div>
	</div>
	<div class="w-full sm:w-auto ml-0 sm:ml-[2rem] flex flex-col justify-between">
		<div class="flex items-center mb-4 sm:mb-0" />
	</div>
</div>
