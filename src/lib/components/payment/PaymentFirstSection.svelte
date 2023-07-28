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

<div class="bg-[#F2F5F7] rounded-2xl flex flex-col items-left justify-left px-10 py-10">
	<div
		class="w-64 h-12 absolute top-273 left-288 font-semibold text-4xl leading-12 text-left text-[#1A202C]"
	>
		Payment
	</div>
	<div class="flex items-center mt-[5rem]">
		<div class="flex justify-center">
			<img class="w-14 h-14" src="/images/user-icon.png" alt="profile" />
		</div>
		<div class="ml-[1rem]">
			<p class="font-bold text-[1.2rem]">{data.fname + ' '}{data.lname}</p>
			<p>{data.email}</p>
		</div>
	</div>
</div>
