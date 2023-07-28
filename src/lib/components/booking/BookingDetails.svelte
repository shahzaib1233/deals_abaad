<script lang="ts">
	import { getBookingsApi } from '$lib/modules/bookings/api/booking_api';
	import Cookies from 'js-cookie';
	import { onMount } from 'svelte';
	import ListBoxNew from '../shared/list_box_payment.svelte';

	let data = {
		fname: '',
		lname: '',
		email: ''
	};

	let loading = false;
	let response: SaleData[] = [];
	let isOpen = false;
	let selectedOption: Option | null = null;
	let options: { value: string; label: string }[] = [];
	let selectedSaleData: any = null; // Replace 'any' with the appropriate type

	interface SaleData {
		saleId: number;
	}
	interface Option {
		value: string;
		label: string;
	}

	const updateData = (saleIds: number[]) => {
		const dataOptions = saleIds.map((saleId) => ({
			value: saleId.toString(),
			label: `Sale ${saleId}`
		}));

		options = [...dataOptions];
	};

	const scheduleHandler = async () => {
		try {
			const res = await getBookingsApi();
			response = res.data;
			console.log(response);
			const saleIds = response.map((item) => item.saleId);
			updateData(saleIds);
			if (options.length > 0) {
				selectedOption = options[1];
				updateSelectedSaleData();
			}
		} catch (e) {}
	};
	const updateSelectedSaleData = () => {
		if (selectedOption) {
			const selectedSaleId = parseInt(selectedOption.value);
			selectedSaleData = response.find((item) => item.saleId === selectedSaleId);
		}
	};

	onMount(() => {
		scheduleHandler();
		data.fname = Cookies.get('fname') ?? '';
		data.lname = Cookies.get('lname') ?? '';
		data.email = Cookies.get('email') ?? '';
	});

	const handleListBoxChange = (event: any) => {
		const selectedValue = event.detail;
		console.log(selectedValue);
		selectedOption = event.detail;
		updateSelectedSaleData();
	};
	const formatDate = (dateStr: string) => {
		const date = new Date(dateStr);
		const options: Intl.DateTimeFormatOptions = {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		};
		return date.toLocaleDateString('en-GB', options);
	};
</script>

<div class="my-container pt-[14.25rem]">
	<div class="bg-[#F2F5F7] rounded-2xl flex flex-col items-left justify-left px-20 py-20">
		<div
			class="w-64 h-12 absolute top-273 left-288 font-semibold text-4xl leading-12 text-left text-[#1A202C]"
		>
			My Bookings
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
	<div class="mt-[3rem]">
		<label class="text-[1.3rem] font-bold">Select Booking</label>
		<div class="w-[30rem] mt-3">
			<ListBoxNew
				key="floors"
				{options}
				bind:item={selectedOption}
				{isOpen}
				onChange={handleListBoxChange}
			/>
		</div>
	</div>
	{#if selectedOption !== null && selectedSaleData !== null}
		<!-- {#each response as booking} -->
		<div
			class="bg-[#F2F5F7] rounded-2xl flex flex-col items-left justify-left px-4 md:px-20 py-8 md:py-20 mt-8"
		>
			<div class="flex flex-col md:flex-row mb-[3rem]">
				<div class=" flex">
					<!-- svelte-ignore missing-declaration -->
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img
						src={`${import.meta.env.VITE_BASE_URL}project/img/${
							selectedSaleData.SaleDetail[0].project.logo
						}`}
						alt="Image"
						class="mr-2 rounded w-auto md:w-[35rem] h-auto md:h-[17rem]"
					/>
				</div>
				<div class="flex flex-col justify-left mt-2 ml-0 md:ml-8">
					<h2 class="mb-2 font-bold text-[1.4rem]">
						{selectedSaleData.SaleDetail[0].project.name}
					</h2>
					<span class="mb-2 text-[#4B4B4B]">{selectedSaleData.SaleDetail[0].project.address}</span>
					<h2 class="mb-2 font-bold text-[1.2rem]">Features</h2>
					<span class="mb-2 text-[#4B4B4B]">
						<div class="flex flex-col md:flex-row items-center">
							<div class="flex flex-wrap">
								<div class="flex items-center mb-2 mr-4">
									<img src="/images/bookings/water.png" alt="" />
									<span class="ml-2">Water</span>
								</div>

								<div class="flex items-center mb-2 mr-4">
									<img src="/images/bookings/parking.png" alt="" />
									<span class="ml-2">Parking Area</span>
								</div>

								<div class="flex items-center mb-2 mr-4">
									<img src="/images/bookings/electricity.png" alt="" />
									<span class="ml-2">Electricity</span>
								</div>
								<div class="flex items-center mb-2 mr-4">
									<img src="/images/bookings/security-cam.png" alt="" />
									<span class="ml-2">Security Staff</span>
								</div>
								<div class="flex items-center mb-2 mr-4">
									<img src="/images/bookings/maintenance.png" alt="" />
									<span class="ml-2">Maintenance Staff</span>
								</div>
								<div class="flex items-center mb-2 mr-4">
									<img src="/images/bookings/cctv.png" alt="" />
									<span class="ml-2">CCTV Cameras</span>
								</div>
								<div class="flex items-center mb-2 mr-4">
									<img src="/images/bookings/tv.png" alt="" />
									<span class="ml-2">TV & Internet Connections</span>
								</div>
							</div>
						</div>
					</span>
					<h2 class="mb-2 font-bold text-[1.2rem]">Booking date</h2>
					<span class="mb-2 text-[#4B4B4B]">{formatDate(selectedSaleData.date)}</span>
				</div>
			</div>
			<div class="">
				<h2 class="text-[1.3rem] font-bold">Project details</h2>
				<ul class="list-disc list-inside text-[#4B4B4B] mt-[1rem] text-[1.1rem]">
					<li>Project ID: {selectedSaleData.SaleDetail[0].project.id}</li>
					<li>Price: {selectedSaleData.SaleDetail[0].sellingprice}</li>
				</ul>
				<hr class="border-t-2 border-gray-300 my-6 w-auto md:w-[60%]" />
			</div>
			<div class="">
				<h2 class="text-[1.3rem] font-bold">Description</h2>
				<h2 class=" text-[#4B4B4B] mt-[1rem] w-auto md:w-[60%] text-[1.1rem]">
					{selectedSaleData.SaleDetail[0].project.description}
				</h2>
				<hr class="border-t-2 border-gray-300 my-6 w-auto md:w-[60%]" />
			</div>
			<div class="">
				<h2 class="text-[1.3rem] font-bold">Address</h2>
				<ul class="list-disc list-inside text-[#4B4B4B] mt-[1rem] text-[1.1rem]">
					<li class="mt-2">Address: {selectedSaleData.SaleDetail[0].project.address}</li>
					<!-- <li class="mt-2">Area: Sukkur Bypass</li> -->
					<!-- <li class="mt-2">City: {selectedSaleData.SaleDetail[0].project.address}</li> -->
					<!-- <li class="mt-2">Zip: 4848494</li> -->
					<!-- <li class="mt-2">Country: Pakistan</li> -->
				</ul>

				<hr class="border-t-2 border-gray-300 my-6 w-auto md:w-[60%]" />
			</div>
			<h2 class="text-[1.3rem] font-bold">Plot details</h2>
			<div class="flex flex-col md:flex-row items-center mt-[1rem] w-[60%]">
				<div class="flex flex-wrap">
					<!-- <div class="flex mb-2 mr-4">
						<img src="/images/bookings/bed.png" alt="" />
						<span class="ml-2 whitespace-nowrap">2 Beds</span>
					</div>
					<div class="flex mb-2 mr-4">
						<img src="/images/bookings/drawing.png" alt="" />
						<span class="ml-2 whitespace-nowrap">122 Drawing</span>
					</div>
					<div class="flex mb-2 mr-4">
						<img src="/images/bookings/lounge.png" alt="" />
						<span class="ml-2 whitespace-nowrap">1 Lounge</span>
					</div> -->
					<div class="flex mb-2 mr-4">
						<img src="/images/bookings/sq.png" alt="" />
						<span class="ml-2 whitespace-nowrap"
							>{selectedSaleData.SaleDetail[0].project.totalsize +
								' ' +
								selectedSaleData.SaleDetail[0].project.sizestype}</span
						>
					</div>
				</div>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-2 mr-[1rem] w-[60%] mt-[1rem] font-bold">
				<span class="mb-2">Down Payment 400,000/-</span>
				<span class="mb-2">Possession 400,000/-</span>
				<span class="mb-2">Yearly (4) 900,000/-</span>
				<span class="mb-2">Monthly (48) 146,333/-</span>
			</div>
			<span class="text-[1.6rem] font-bold mt-[1rem]"> RS 146,333</span>
			<hr class="border-t-2 border-gray-300 my-6 w-auto md:w-[60%]" />
			<div class="">
				<h2 class="text-[1.3rem] font-bold">Rating</h2>
				<div class="flex items-center mt-[1rem]">
					<!-- {[...Array(5)].map((_, index) => (
              <img key={index} src="/images/bookings/star.png" alt="" />
            ))} -->
					{#each Array(5) as _, index}
						<img src="/images/bookings/star.png" alt="" />
					{/each}
				</div>
				<hr class="border-t-2 border-gray-300 my-6 w-auto md:w-[60%]" />
			</div>
			<h2 class="text-[1.3rem] font-bold">Comment</h2>
			<div class="flex items-center mt-[1rem]">
				<textarea
					class="w-auto md:w-[60%] rounded-lg h-[12rem] border border-gray-300"
					draggable="false"
				/>
			</div>
		</div>
		<!-- {/each} -->
	{:else}
		<!-- Optional: You can show a message when no option is selected -->
		<p class="mt-4 text-red-600">Please select an option from the list.</p>
	{/if}
</div>
