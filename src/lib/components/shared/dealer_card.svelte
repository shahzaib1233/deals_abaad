<script lang="ts">
	// import { goto } from '$app/navigation';

	// export let dealerId: string = '';
	export let img: string;
	export let name: string;
	export let contact: string;
	export let email: string;
	export let companyName: string;
	export let companyAddress: string;

	console.log("image");
	console.log(img);
</script>

<div class="w-[290px] flex flex-col justify-center items-center shadow-sm hover:shadow-md rounded-md duration-100 transition-all border border-zinc-300">
	<div class="h-20 w-full bg-slate-200 rounded-t-md"></div>
	<div class="-mt-12 flex flex-col rounded-full bg-white">
		<img 
		src={img == null || img == "" ? `/icons/businessman.svg`: `https://backend.dealsabaad.com/img/dealer/${img}`} 
		alt="dealer"
		class={`h-36 w-36 ${img == null || img == "" ? `p-3`: `rounded-full`}`}
		/>
	</div>
	<div class="w-full p-4">
		<p class="font-bold text-sm">{name}</p>
		<table class="border w-full mt-2 rounded-md">
			<tr class="border-b">
				<td class="border-r p-1">
					<img src="/icons/phone-call.svg" alt="phone" class="h-[18px] w-[18px]"/>
				</td>
				<td class="text-xs pl-2">{contact ? contact : "---"}</td>
			</tr>
			<tr class="border-b">
				<td class="border-r p-1">
					<img src="/icons/email.svg" alt="email" class="h-[18px] w-[18px]"/>
				</td>
				<td class="text-xs pl-2">{email ? email : "---"}</td>
			</tr>
			<tr class="border-b">
				<td class="border-r p-1">
					<img src="/icons/company.svg" alt="companyName" class="h-[18px] w-[18px]"/>
				</td>
				<td class="text-xs pl-2">{companyName ? companyName : "---"}</td>
			</tr>
			<tr>
				<td class="border-r p-1">
					<img src="/icons/address.svg" alt="companyAddress" class="h-[18px] w-[18px]"/>
				</td>
				<td class="text-xs pl-2">{companyAddress ? companyAddress : "---"}</td>
			</tr>
		</table>
	</div>
</div>
