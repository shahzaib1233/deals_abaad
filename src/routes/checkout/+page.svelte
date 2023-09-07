<script lang="ts">
	import { goto } from '$app/navigation';
	import CheckoutPaymentCard from '$lib/components/checkout/checkout_payment_card.svelte';
	import Button from '$lib/components/shared/button.svelte';
	import axiosFunction from '$lib/utils/network';
	import dayjs from 'dayjs';
	import { onMount } from 'svelte';
	import CryptoJS from 'crypto-js';
	import type { GETDEALFIELDS } from '$lib/types/getDealFields.js';
	import Cookies from 'js-cookie';

	let dealDtl: any;
	let dealAdd: any;
	let inventory: any;
	onMount(() => {
		if (localStorage.getItem('inventory')) {
			dealDtl = JSON.parse(localStorage.getItem('dealDetails') ?? '');
			if (dealDtl == '') {
				console.log('hello ');
			}
			dealAdd = JSON.parse(localStorage.getItem('Deal_Details') ?? '');
			inventory = JSON.parse(localStorage.getItem('inventory') ?? '');
		} else {
			goto('/');
		}
	});

	function openWindowWithPost(url: any, name: any, params: any) {
		var form = document.createElement('form');
		form.setAttribute('method', 'post');
		form.setAttribute('action', url);
		form.setAttribute('target', name);
		for (var i in params) {
			if (params.hasOwnProperty(i)) {
				var input = document.createElement('input');
				input.type = 'hidden';
				input.name = i;
				input.value = params[i];
				form.appendChild(input);
			}
		}

		document.body.appendChild(form);

		form.submit();
		document.body.removeChild(form);
	}

	const submit = async () => {
		const dealDetails = JSON.parse(localStorage.getItem('dealDetails') ?? '');
		const inventory = JSON.parse(localStorage.getItem('inventory') ?? '');
		dealDetails.dealId = inventory.dealId;
		dealDetails.dealName = inventory.dealName;
		console.log(dealDetails);

		const res = await axiosFunction({ url: 'sale/create', method: 'POST', data: dealDetails });

		localStorage.setItem('orderId', res.data.saleId);
		Cookies.set('orderId', res.data.saleId);

		const merchantID = 'MC58600';
		const password = 'b15x11ax94';
		const hashKey = 'c1v8sz0z30';
		const returnURL = 'https://dealsabaad.com/thankyou';

		const postURL = 'https://testgrid.co/dealsabaadapi/checkout_jc.php';

		const amount = +dealDtl.totalAmount * 100;
		const billReference = res.data.saleId;
		const description = `${dealDtl.floor} - ${dealDtl.unitno}`;
		const isRegisteredCustomer = 'No';
		const language = 'EN';
		const txnCurrency = 'PKR';
		const txnDateTime = new Date().toISOString().replace(/[-:]/g, '').slice(0, -5);
		const txnExpiryDateTime = new Date(Date.now() + 24 * 60 * 60 * 1000)
			.toISOString()
			.replace(/[-:]/g, '')
			.slice(0, -5);
		const txnRefNumber = res.data.saleId;

		const txnType = ''; // Leave it empty
		const version = '2.0';
		const subMerchantID = ''; // Leave it empty
		const bankID = ''; // Leave it empty
		const productID = dealDtl.inventoryId; // Leave it empty
		const ppmpf_1 = dealDtl.name; // use to store extra details (use AlphaNumeric only)
		const ppmpf_2 = dealDtl.address; // use to store extra details (use AlphaNumeric only)
		const ppmpf_3 = dealDtl.mobileno; // use to store extra details (use AlphaNumeric only)
		const ppmpf_4 = `${dealDtl.projectId} - ${dealDtl.inventoryId} - ${dealDtl.floor} - ${dealDtl.unitno}`; // use to store extra details (use AlphaNumeric only)
		const ppmpf_5 = +dealDtl.totalAmount; // use to store extra details (use AlphaNumeric only)

		const hashArray = [
			amount,
			bankID,
			billReference,
			description,
			isRegisteredCustomer,
			language,
			merchantID,
			password,
			productID,
			returnURL,
			txnCurrency,
			txnDateTime,
			txnExpiryDateTime,
			txnRefNumber,
			txnType,
			version,
			ppmpf_1,
			ppmpf_2,
			ppmpf_3,
			ppmpf_4,
			ppmpf_5
		];

		let sortedArray = hashKey;
		for (let i = 0; i < hashArray.length; i++) {
			if (hashArray[i] !== 'undefined' && hashArray[i] !== null && hashArray[i] !== '') {
				sortedArray += '&' + hashArray[i];
			}
		}

		const secureHash = CryptoJS.HmacSHA256(sortedArray, hashKey).toString();

		openWindowWithPost(postURL, '_self', {
			pp_Version: version,
			pp_TxnType: txnType,
			pp_Language: language,
			pp_MerchantID: merchantID,
			pp_SubMerchantID: subMerchantID,
			pp_Password: password,
			pp_TxnRefNo: txnRefNumber,
			pp_Amount: amount,
			pp_IsRegisteredCustomer: isRegisteredCustomer,
			pp_TxnCurrency: txnCurrency,
			pp_TxnDateTime: dayjs().format('YYYYMMDDHHmmss'),
			pp_TxnExpiryDateTime: dayjs().add(8, 'days').format('YYYYMMDDHHmmss'),
			pp_BillReference: billReference,
			pp_Description: description,
			pp_ReturnURL: returnURL,
			pp_SecureHash: secureHash,
			ppmpf_1: ppmpf_1,
			ppmpf_2: ppmpf_2,
			ppmpf_3: ppmpf_3,
			ppmpf_4: ppmpf_4,
			ppmpf_5: ppmpf_5,
			pp_BankID: bankID,
			pp_ProductID: productID
		});
	};
</script>

<div class="my-container pt-[6rem] md:pt-[10.25rem]">
	<div class="flex flex-col md:flex-row gap-4">
		<div class="w-full md:w-[65%]">
			<form class="flex-1" on:submit|preventDefault={submit}>
				<span class="text-[1.4rem] md:text-[1.8rem] font-bold">Select Payment method</span>

				<div
					class="flex mt-[1rem] bg-[#F2F5F7] w-full md:w-[65%] h-[3rem] rounded-lg justify-left items-center"
				>
					<input type="radio" name="payment" id="card" class="ml-4" checked />
					<label for="card" class="ml-[1rem]">JazzCash/Credit Card</label>
				</div>

				<div>
					<Button
						className="text-[#1A202C] w-full md:w-[65%] mt-4 h-[2.5rem]"
						label="Proceed to Payment"
						type="submit"
					/>
				</div>

				<div class="mt-[1rem]">
					<div class="mt-[2rem] text-[1.1rem]">
						<span class="text-[#4B4B4B]">
							By making this purchase you agree to our terms and conditions. I agree and I demand
							that you execute the ordered service before the end of the revocation period. I am
							aware that after complete fulfillment of the service I lose my right of recission.
							Payment transactions will be processed abroad.
						</span>
					</div>
					<div class="mt-[1rem]">
						<span class="text-[1.6rem] font-bold">Property details</span>
					</div>
					<div class="flex mt-4">
						<span class="font-bold text-[#4B4B4B]">Deal Name:</span>
						<span class="ml-2">{inventory?.dealName}</span>
					</div>
					<div class="flex mt-4">
						<span class="font-bold text-[#4B4B4B]">Project Name:</span>
						<span class="ml-2">{inventory?.projectName}</span>
					</div>
					<div class="flex mt-4">
						<span class="font-bold text-[#4B4B4B]">Unit No:</span>
						<span class="ml-2">{dealDtl?.unitno}</span>
					</div>
					<div class="flex mt-2">
						<span class="font-bold text-[#4B4B4B]">Floor:</span>
						<span class="ml-2">{dealDtl?.floor}</span>
					</div>
					<div class="flex mt-2">
						<span class="font-bold text-[#4B4B4B]">Address:</span>
						<span class="ml-2">{dealAdd?.address}</span>
					</div>

					<div class="flex mt-2">
						<span class="font-bold text-[#4B4B4B]">City:</span>
						<span class="ml-2">{dealAdd?.city}</span>
					</div>

					<div class="flex mt-2">
						<span class="font-bold text-[#4B4B4B]">Price:</span>
						<span class="ml-2">{dealDtl?.sellingprice.toLocaleString()}</span>
					</div>

					<div class="mt-[2rem]">
						<span class="text-[1.6rem] font-bold">Personal details</span>
					</div>
					<div class="mt-4">
						<h2 class="font-bold text-[#4B4B4B] mt-2">{dealDtl?.name}</h2>
						<h2 class="font-bold text-[#4B4B4B] mt-2">{dealDtl?.email}</h2>
						<h2 class="font-bold text-[#4B4B4B] mt-2">{dealDtl?.mobileno}</h2>
					</div>
				</div>
			</form>
		</div>

		<div class="w-full md:w-[35%]">
			<CheckoutPaymentCard paymentData={dealDtl} />
		</div>
	</div>
</div>
