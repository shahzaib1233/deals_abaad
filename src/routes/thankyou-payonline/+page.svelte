<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from '$lib/components/shared/button.svelte';
	import ThankYouPayOnlineCard from '$lib/components/thankyou/thankyou_payonline_card.svelte';
	import axiosFunction from '$lib/utils/network';
	import { jsPDF } from 'jspdf';
	import autoTable from 'jspdf-autotable';
	import { onMount } from 'svelte';

	let details: any = {};

	let voucherNo = $page.url.searchParams.get('JCVoucherNo');
	let responseMessage = $page.url.searchParams.get('resultmessage');
	let resultResponse = $page.url.searchParams.get('resultresponse');
	let br_number = $page.url.searchParams.get('BRNumber');
	let custName = $page.url.searchParams.get('name');
	let custPhone = $page.url.searchParams.get('phone');
	let propertyType = $page.url.searchParams.get('proptype');
	let amount = $page.url.searchParams.get('installment');

	voucherNo = voucherNo && voucherNo?.length > 0 ? voucherNo : '---';

	const fetchDetails = async () => {
		const response = await axiosFunction({
			url: 'ballot/single-ballot',
			method: 'POST',
			data: { br_number }
		});

		details = response.data;
		console.log(details);
	};

	onMount(() => {
		fetchDetails();
	});

	// Function to open a new window and generate a PDF
	const downloadInvoice = () => {
		const pdf = new jsPDF();

		// Add title with custom font size and color
		let yPosition = 20;
		pdf.setFontSize(20);
		pdf.setTextColor(0, 123, 200); // Black color for text
		pdf.text('Ballot Invoice', 80, yPosition);
		

		// Adding customer information as a table
		autoTable(pdf, {
			startY: yPosition + 5, // Table starts just below the heading
			head: [['Form Details']],
			body: [
				[`BR Number : ${details.BRNumber}`],
				[`Name : ${details.name}`],
				[`Father Name : ${details.fatherName}`],
				[`CNIC : ${details.cnic}`],
				[`Phone : 0${details.phone}`],
				[`Secondary Phone : 0${details.secondaryPhone}`],
				[`Address : ${details.address}`],
				[`Date Of Birth : ${details.DOB}`],
				[`Desired Installment : ${details.installment}`],
				[`Desired Lounge : ${details.insterestedInLounge}`],
				[`Voucher No : ${details.voucherNo}`],
				[`Message : ${details.message}`],
				[`Area / City: ${details.area}`],
				[`Referral Code : ${details.referralCode}`]
			],
			styles: {
				fontSize: 12,
				cellPadding: 2
			},
			headStyles: {
				fillColor: [0, 123, 200], // Blue background for the table header
				textColor: [255, 255, 255] // White text color
			},
			bodyStyles: {
				fillColor: [240, 240, 240] // Light gray background for table rows
			}
		});

		// Add footer with a smaller font and a different color
		pdf.setTextColor(150, 150, 150); // Gray text color
		pdf.setFontSize(10);
		pdf.text(
			'This is a system-generated invoice.',
			40,
			pdf.internal.pageSize.height - 20
		);

		// Save the PDF
		pdf.save('invoice.pdf');
	};
</script>

<div class="bg-[#F2F5F7] min-h-screen">
	<div class="my-container pt-[2.25rem] md:w-[60%] sm:w-full pb-5">
		<!-- {#if resultResponse != 'JCN'} -->
		<div class="flex justify-center">
			<h2 class="text-[2.063rem] md:text-[3.063rem] font-bold text-center">Thank you!</h2>
		</div>

		<div class="flex flex-col justify-center items-center mt-[1rem] font-bold text-center">
			{#if responseMessage && resultResponse != 'JCN'}
				<h3 class="mt-4 text-center text-red-500">
					{responseMessage}
				</h3>
			{:else}
				<h2 class="text-[1rem] md:text-[1.563rem] text-center text-red-500">
					{responseMessage}
				</h2>
			{/if}
		</div>
		<ThankYouPayOnlineCard {voucherNo} {br_number} {custName} {custPhone} {propertyType} {amount} />
		<div class="flex justify-center gap-4">
			<Button
				className="mb-[0.563rem] mt-[1.6rem] md:w-[11.813rem] w-full h-[3.5rem] md:h-[2.5rem] "
				label="Go to Home"
				onclick={() => {
					goto('/');
				}}
			/>
			<Button
				className="mb-[0.563rem] mt-[1.6rem] md:w-[11.813rem] w-full h-[3.5rem] md:h-[2.5rem] bg-blue-400 text-white"
				label="Download Invoice"
				onclick={downloadInvoice}
			/>
		</div>
	</div>
</div>

<!-- Hidden div to hold the invoice content -->
<div id="invoice-container" style="display: none;">
	<div
		style="width: 800px; margin: auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"
	>
		<div
			style="text-align: center; border-bottom: 2px solid #f4f4f4; margin-bottom: 20px; padding-bottom: 10px;"
		>
			<h1 style="font-size: 24px; color: #007BFF;">Ballot Invoice</h1>
			<p>Generated on: {new Date().toLocaleDateString()}</p>
		</div>

		<div style="margin-bottom: 20px;">
			<h2
				style="font-size: 18px; color: #007BFF; border-bottom: 1px solid #ddd; padding-bottom: 5px;"
			>
				Customer Information
			</h2>
			<table style="width: 100%; border-collapse: collapse;">
				<tr>
					<th
						style="border: 1px solid #ddd; padding: 10px; text-align: left; background-color: #f4f4f4;"
						>BR Number</th
					>
					<td style="border: 1px solid #ddd; padding: 10px;">{br_number}</td>
				</tr>
				<tr>
					<th
						style="border: 1px solid #ddd; padding: 10px; text-align: left; background-color: #f4f4f4;"
						>Name</th
					>
					<td style="border: 1px solid #ddd; padding: 10px;">{custName}</td>
				</tr>
				<tr>
					<th
						style="border: 1px solid #ddd; padding: 10px; text-align: left; background-color: #f4f4f4;"
						>Phone</th
					>
					<td style="border: 1px solid #ddd; padding: 10px;">{custPhone}</td>
				</tr>
				<tr>
					<th
						style="border: 1px solid #ddd; padding: 10px; text-align: left; background-color: #f4f4f4;"
						>Nationality</th
					>
					<td style="border: 1px solid #ddd; padding: 10px;">Pakistani</td>
				</tr>
			</table>
		</div>

		<div style="margin-bottom: 20px;">
			<h2
				style="font-size: 18px; color: #007BFF; border-bottom: 1px solid #ddd; padding-bottom: 5px;"
			>
				Property Details
			</h2>
			<table style="width: 100%; border-collapse: collapse;">
				<tr>
					<th
						style="border: 1px solid #ddd; padding: 10px; text-align: left; background-color: #f4f4f4;"
						>Property Type</th
					>
					<td style="border: 1px solid #ddd; padding: 10px;">{propertyType}</td>
				</tr>
				<tr>
					<th
						style="border: 1px solid #ddd; padding: 10px; text-align: left; background-color: #f4f4f4;"
						>Installment Amount</th
					>
					<td style="border: 1px solid #ddd; padding: 10px;">{amount}</td>
				</tr>
			</table>
		</div>

		<div style="text-align: center; font-size: 14px; color: #888;">
			<p>
				This is a system-generated invoice. For assistance, contact support at support@example.com.
			</p>
		</div>
	</div>
</div>
