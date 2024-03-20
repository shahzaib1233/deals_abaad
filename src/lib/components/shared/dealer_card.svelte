<script lang="ts">
	import { goto } from '$app/navigation';

	export let dealerId: string = '';
	export let img: string;
	export let name: string;
	export let contact: string;
	export let email: string;
</script>

<div class="w-[290px] flex flex-col justify-center items-center shadow-sm hover:shadow-md rounded-md duration-100 transition-all border border-zinc-300">
	<div class="h-20 w-full bg-slate-200 rounded-t-md"></div>
	<div class="-mt-12 flex flex-col">
		<img 
		src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
		alt="dealer"
		class="h-24 w-24 rounded-full shadow-lg"
		/>
	</div>
	<div class="w-full p-4">
		<p class="font-bold text-sm">{name}</p>
		<table class="border w-full mt-2 rounded-md">
			<tr class="border-b">
				<td class="border-r p-1">
					<img src="/icons/phone-call.svg" alt="phone" class="h-5"/>
				</td>
				<td class="text-sm pl-2">{contact}</td>
			</tr>
			<tr>
				<td class="border-r p-1">
					<img src="/icons/email.svg" alt="email" class="h-5 text-red-300"/>
				</td>
				<td class="text-sm pl-2">{email}</td>
			</tr>
		</table>
	</div>
</div>
