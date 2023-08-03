<script lang="ts">
	import Cookies from 'js-cookie';
	import { onMount } from 'svelte';

	let data = {
		fname: '',
		lname: '',
		email: ''
	};
	onMount(() => {
		data.fname = Cookies.get('fname') ?? '';
		data.lname = Cookies.get('lname') ?? '';
		data.email = Cookies.get('email') ?? '';
	});
</script>

<div class="bg-[#F2F5F7] rounded-2xl flex flex-col items-left justify-left px-6 md:px-10 py-10">
	<div
		class="w-64 h-12 absolute top-273 left-288 font-semibold text-2xl md:text-4xl leading-12 text-left text-[#1A202C]"
	>
		Payment
	</div>
	<div class="flex gap-4 items-center mt-[4rem]">
		<div class="hidden md:flex justify-center">
			<img class="w-14 h-14" src="/images/user-icon.png" alt="profile" />
		</div>
		<div class="">
			<p class="font-bold text-[1rem] md:text-[1.2rem]">{data.fname + ' ' + data.lname}</p>
			<p class="text-[1rem] md:text-[1.2rem] break-words">{data.email}</p>
		</div>
	</div>
</div>
