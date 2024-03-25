<script lang="ts">
	import { goto } from '$app/navigation';

	// export let dealerId: string = '';
	export let img: string;
	export let name: string;
	export let contact: string;
	export let email: string;
	export let companyName: string;
	export let companyAddress: string;
</script>

<div class="w-[290px] flex flex-col justify-center items-center shadow-sm hover:shadow-md rounded-md duration-100 transition-all border border-zinc-300">
	<div class="h-20 w-full bg-slate-200 rounded-t-md"></div>
	<div class="-mt-12 flex flex-col rounded-full bg-yellow-200">
		<img 
		src={img == '' ? `/icons/businessman.svg`: `https://backend.dealsabaad.com/img/dealer/${img}`} 
		alt="dealer"
		class="h-24 w-24 p-3"
		/>
	</div>
	<div class="w-full p-4">
		<p class="font-bold text-sm">{name}</p>
		<table class="border w-full mt-2 rounded-md">
			<tr class="border-b">
				<td class="border-r p-1">
					<img src="/icons/phone-call.svg" alt="phone" class="h-[20px] w-[20px]"/>
				</td>
				<td class="text-sm pl-2">{contact}</td>
			</tr>
			<tr class="border-b">
				<td class="border-r p-1">
					<img src="/icons/email.svg" alt="email" class="h-[20px] w-[20px]"/>
				</td>
				<td class="text-sm pl-2">{email}</td>
			</tr>
			<tr class="border-b">
				<td class="border-r p-1">
					<img src="/icons/company.svg" alt="email" class="h-[20px] w-[20px]"/>
				</td>
				<td class="text-sm pl-2">{companyName}</td>
			</tr>
			<tr>
				<td class="border-r p-1">
					<img src="/icons/address.svg" alt="email" class="h-[20px] w-[20px]"/>
				</td>
				<td class="text-sm pl-2">{companyAddress}</td>
			</tr>
		</table>
	</div>
</div>
