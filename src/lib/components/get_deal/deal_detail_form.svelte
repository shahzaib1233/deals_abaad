<script>
	import TextField from '../shared/text_field.svelte';
</script>

<div class="mt-[1rem]">
	<span class="text-[1.6rem] font-bold"> Please Fill out the Application Form </span>
</div>
<div class="mt-[1rem]">
	<span class="text-[#4B4B4B]">
		Dear Sir, I have undersigned hereby request register my name for allotment of Residential Luxury
		Flats & Commercial Shop in your project GFS Builders AND Developers
	</span>
</div>
<div class="mt-[1rem]">
	<span class="text-[#4B4B4B]"> MY PARTICULARS ARE AS UNDER (PLEASE WRITE IN BLOCK LETTERS) </span>
</div>
<div class="flex flex-col md:flex-row mt-[1rem]">
	<TextField
		label="Name in Full Mr/Mrs/Miss"
		withAsterisk
		required
		className="md:mr-3 md:w-[21.75rem] mb-2 md:mb-0"
		value=""
	/>
	<TextField label="C.N.I.C" className="md:w-[21.75rem]" withAsterisk required value="" />
</div>
<div class="flex flex-col md:flex-row mt-[1rem]">
	<TextField
		label="Father's / Husband Name"
		withAsterisk
		required
		className="md:mr-3 md:w-[21.75rem] mb-2 md:mb-0"
		value=""
	/>
	<TextField label="Guardian" className="md:w-[21.75rem]" value="" />
</div>
<div class="flex flex-col md:flex-row mt-[1rem]">
	<TextField
		label="Date of Birth"
		withAsterisk
		required
		className="md:mr-3 md:w-[21.75rem] mb-2 md:mb-0"
		value=""
	/>
	<TextField label="Cell No" className="md:w-[21.75rem]" withAsterisk required value="" />
</div>
<div class="flex flex-col md:flex-row mt-[1rem]">
	<TextField label="Residence No" className="md:mr-3 md:w-[21.75rem] mb-2 md:mb-0" value="" />
	<TextField label="Address" className="md:w-[21.75rem]" withAsterisk required value="" />
</div>
<div class="flex flex-col md:flex-row mt-[1rem]">
	<TextField label="Phone No. Office" className="md:mr-3 md:w-[21.75rem] mb-2 md:mb-0" value="" />
	<TextField label="Country / Region" className="md:w-[21.75rem]" withAsterisk required value="" />
</div>
<div class="flex flex-col md:flex-row mt-[1rem]">
	<TextField
		label="Town / City"
		withAsterisk
		required
		className="md:mr-3 md:w-[21.75rem] mb-2 md:mb-0"
		value=""
	/>
	<TextField label="Postcode / ZIP" className="md:w-[21.75rem]" value="" />
</div>
<div class="flex mt-[1rem]">
	<TextField
		label="Email address"
		withAsterisk
		required
		className="md:mr-3 md:w-[21.75rem]"
		value=""
	/>
</div>
<div class="flex mt-[1rem]">
	<div>
		<input type="checkbox" name="" id="" />
	</div>
	<div class="flex-1 ml-[1rem]">
		<span>
			I hereby declare that I have read and understood the terms and conditions of allotment of flat
			and accept the same, and further declare that I shall abide by the existing rules and
			regulations, conditions, requirements, etc., which may be presented by you and approved by the
			authority for the purchase of a flat in this project.
		</span>
	</div>
</div>
<div class="text-[1.1rem] w-[70%] flex flex-col mt-[1rem]">
	<span class="text-[#4B4B4B]">NOMINATION</span>
	<span class="text-[#4B4B4B]">(Nominee should not be a minor)</span>
</div>
<div class="flex flex-col md:flex-row mt-[1rem]">
	<TextField
		label="Full Name"
		withAsterisk
		className="md:mr-3 md:w-[21.75rem] mb-2 md:mb-0"
		value=""
	/>
	<TextField label="Father/Husband Name" className="md:w-[21.75rem]" withAsterisk value="" />
</div>
<div class="flex flex-col md:flex-row mt-[1rem]">
	<TextField
		label="Relation"
		withAsterisk
		className="md:mr-3 md:w-[21.75rem] mb-2 md:mb-0"
		value=""
	/>
	<TextField label="Date of Birth" className="md:w-[21.75rem]" withAsterisk value="" />
</div>
<div class="flex flex-col md:flex-row mt-[1rem]">
	<TextField label="CNIC" withAsterisk className="md:mr-3 md:w-[21.75rem] mb-2 md:mb-0" value="" />
	<TextField label="Phone Number" className="md:w-[21.75rem]" withAsterisk value="" />
</div>
<div class="flex flex-col md:flex-row mt-[1rem]">
	<TextField
		label="Address"
		withAsterisk
		className="md:mr-3 md:w-[21.75rem] mb-2 md:mb-0"
		value=""
	/>
</div>
<div class="flex mt-[1rem]">
	<div>
		<input type="checkbox" name="" id="" />
	</div>
	<div class="flex-1 ml-[1rem]">
		<span>
			I hereby declared that in case of my death before the execution of Lease/Sub-Lease of the unit
			alloted to me, my above -named nominee shall be by successir-in-interest and Lease/Sub-Lease
			for all purposes under this Agreement of Allotment of Plot subject to the compliance of all
			the terms and conditions/undertakings.
		</span>
	</div>
</div>
