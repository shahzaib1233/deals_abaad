<script lang="ts">
	import { goto } from '$app/navigation';
	import CheckoutPaymentCard from '$lib/components/checkout/checkout_payment_card.svelte';
	import Button from '$lib/components/shared/button.svelte';
	import axiosFunction from '$lib/utils/network';
	import axios from 'axios';
	import dayjs from 'dayjs';
	import { onMount } from 'svelte';
	import CryptoJS from 'crypto-js';
	import Base64 from 'crypto-js/enc-base64';

	const val = {
		pp_Version: '2.0',
		pp_TxnType: 'MPAY',
		pp_Language: 'EN',
		pp_MerchantID: 'MC58600',
		pp_SubMerchantID: '',
		pp_Password: 'b15x11ax94',
		pp_TxnRefNo: 'T20230725123251',
		pp_Amount: '10000',
		pp_IsRegisteredCustomer: 'No',
		pp_TokenizedCardNumber: '1',
		pp_CustomerID: '1',
		pp_CustomerEmail: 'itsmuhammadismail@gmail.com',
		pp_CustomerMobile: '03161604575',
		pp_DiscountedAmount: '',
		pp_DiscountBank: '',
		pp_TxnCurrency: 'PKR',
		// pp_TxnDateTime: dayjs().format('YYYYMMDDHHmmss'),
		// pp_TxnExpiryDateTime: dayjs().add(8, 'days').format('YYYYMMDDHHmmss'),
		pp_TxnDateTime: '20230725123251',
		pp_TxnExpiryDateTime: '20230726123251',
		pp_BillReference: 'T202307251232511',
		pp_Description: 'Descriptionoftransaction',
		pp_ReturnURL: 'http://testgrid.co:5000/thankyou',
		pp_SecureHash: '0123456789',
		ppmpf_1: '1',
		ppmpf_2: '2',
		ppmpf_3: '3',
		ppmpf_4: '4',
		ppmpf_5: '5'
	};

	function calculateHash() {
		var IntegritySalt = 'c1v8sz0z30';
		var hashString = '';

		hashString += IntegritySalt + '&';

		if (val.pp_Amount != '') {
			hashString += val.pp_Amount + '&';
		}

		if (val.pp_BillReference != '') {
			hashString += val.pp_BillReference + '&';
		}

		if (val.pp_CustomerEmail != '') {
			hashString += val.pp_CustomerEmail + '&';
		}

		if (val.pp_CustomerID != '') {
			hashString += val.pp_CustomerID + '&';
		}

		if (val.pp_CustomerMobile != '') {
			hashString += val.pp_CustomerMobile + '&';
		}

		if (val.pp_Description != '') {
			hashString += val.pp_Description + '&';
		}

		if (val.pp_IsRegisteredCustomer != '') {
			hashString += val.pp_IsRegisteredCustomer + '&';
		}

		if (val.pp_Language != '') {
			hashString += val.pp_Language + '&';
		}

		if (val.pp_MerchantID != '') {
			hashString += val.pp_MerchantID + '&';
		}

		if (val.pp_Password != '') {
			hashString += val.pp_Password + '&';
		}

		if (val.pp_ReturnURL != '') {
			hashString += val.pp_ReturnURL + '&';
		}

		if (val.pp_SubMerchantID != '') {
			hashString += val.pp_SubMerchantID + '&';
		}

		if (val.pp_TokenizedCardNumber != '') {
			hashString += val.pp_TokenizedCardNumber + '&';
		}

		if (val.pp_TxnCurrency != '') {
			hashString += val.pp_TxnCurrency + '&';
		}

		if (val.pp_TxnDateTime != '') {
			hashString += val.pp_TxnDateTime + '&';
		}

		if (val.pp_TxnExpiryDateTime != '') {
			hashString += val.pp_TxnExpiryDateTime + '&';
		}

		if (val.pp_TxnRefNo != '') {
			hashString += val.pp_TxnRefNo + '&';
		}

		if (val.pp_TxnType != '') {
			hashString += val.pp_TxnType + '&';
		}

		if (val.pp_Version != '') {
			hashString += val.pp_Version + '&';
		}

		if (val.ppmpf_1 != '') {
			hashString += val.ppmpf_1 + '&';
		}

		if (val.ppmpf_2 != '') {
			hashString += val.ppmpf_2 + '&';
		}

		if (val.ppmpf_3 != '') {
			hashString += val.ppmpf_3 + '&';
		}

		if (val.ppmpf_4 != '') {
			hashString += val.ppmpf_4 + '&';
		}

		if (val.ppmpf_5 != '') {
			hashString += val.ppmpf_5 + '&';
		}

		hashString = hashString.slice(0, -1);
		return hashString;
	}

	let dealDtl: any;

	onMount(() => {
		dealDtl = JSON.parse(localStorage.getItem('dealDetails') ?? '');
		// val.pp_CustomerEmail = dealDtl.email;
		// val.pp_CustomerMobile = dealDtl.mobileno;
		// val.pp_Amount = (+dealDtl.totalAmount * 100).toString();
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
		console.log(form);

		form.submit();
		document.body.removeChild(form);
	}

	const submit = async () => {
		const dealDetails = JSON.parse(localStorage.getItem('dealDetails') ?? '');
		const res = await axiosFunction({ url: 'sale/create', method: 'POST', data: dealDetails });
		console.log(res);
		// val.pp_BillReference = res.data.saleId;
		// val.pp_TxnRefNo = res.data.saleId;
		const hash = calculateHash();
		val.pp_SecureHash = CryptoJS.HmacSHA256(hash, 'c1v8sz0z30').toString();
		console.log(hash);
		console.log(val);

		openWindowWithPost(
			'https://sandbox.jazzcash.com.pk/CustomerPortal/transactionmanagement/merchantform/',
			'_self',
			val
		);
	};
</script>

<div class="my-container pt-[10.25rem]">
	<div class="flex gap-4">
		<form class="flex-1" on:submit|preventDefault={submit}>
			<span class="text-[1.8rem] font-bold">Select Payment method</span>

			<div
				class="flex mt-[1rem] bg-[#F2F5F7] w-full md:w-[65%] h-[3rem] rounded-lg justify-left items-center"
			>
				<!-- <Radio class="ml-4" /> -->
				<input type="radio" name="payment" id="card" class="ml-4" />
				<label for="card" class="ml-[1rem]">Credit / Debit Card</label>
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
						By making this purchase you agree to our terms and conditions. I agree and I demand that
						you execute the ordered service before the end of the revocation period. I am aware that
						after complete fulfillment of the service I lose my right of recission. Payment
						transactions will be processed abroad.
					</span>
				</div>
				<div class="mt-[1rem]">
					<span class="text-[1.6rem] font-bold">Property details</span>
				</div>
				<div class="flex mt-4">
					<span class="font-bold text-[#4B4B4B]">Address:</span>
					<span class="ml-2" />
				</div>
				<div class="flex mt-2">
					<span class="font-bold text-[#4B4B4B]">Area:</span>
					<span class="ml-2" />
				</div>
				<div class="flex mt-2">
					<span class="font-bold text-[#4B4B4B]">City:</span>
					<span class="ml-2" />
				</div>
				<div class="flex mt-2">
					<span class="font-bold text-[#4B4B4B]">Zip:</span>
					<span class="ml-2" />
				</div>
				<div class="flex mt-2">
					<span class="font-bold text-[#4B4B4B]">Country:</span>
					<span class="ml-2" />
				</div>
				<div class="flex mt-2">
					<span class="font-bold text-[#4B4B4B]">Price:</span>
					<span class="ml-2" />
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

		<CheckoutPaymentCard paymentData={dealDtl} />
	</div>
</div>
