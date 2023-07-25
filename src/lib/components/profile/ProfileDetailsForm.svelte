<script>
	import { goto } from '$app/navigation';
	import { toast } from '$lib/stores/notification';
	import Cookies from 'js-cookie';
	import Button from '../shared/button.svelte';
	import TextField from '../shared/text_field.svelte';

	let loading = false;
</script>

<div class="my-container pt-[14.25rem]">
	<div
		class="bg-[#F2F5F7] min-h-[35.5rem] rounded-2xl flex flex-col items-left justify-left px-20 py-20"
	>
		<div
			class="w-64 h-12 absolute top-273 left-288 font-semibold text-4xl leading-12 text-left text-[#1A202C]"
		>
			My Profile
		</div>
		<div class="flex items-center mt-[5rem]">
			<div class="flex justify-center">
				<img class="w-14 h-14" src="/images/user-picture.png" alt="profile" />
			</div>
			<div class="ml-[1rem]">
				<p class="font-bold text-[1.2rem]">athar rasool</p>
				<p>atharrasool210@gmail.com</p>
			</div>
		</div>
		<hr class="border-t-2 border-gray-300 my-6" />

		<div class="flex flex-col md:flex-row justify-center items-center">
			<div class="flex items-end pr-4 w-32 justify-start md:justify-end">
				<h2>First Name</h2>
			</div>
			<div class="flex items-start pl-4 mb-4 md:mb-0">
				<TextField value="" className="w-[23rem]" />
			</div>
		</div>
		<div class="flex flex-col md:flex-row justify-center items-center mt-4">
			<div class="flex items-end pr-4 w-32 justify-start md:justify-end">
				<h2>Last Name</h2>
			</div>
			<div class="flex items-start pl-4 mb-4 md:mb-0">
				<TextField value="" className="w-[23rem]" />
			</div>
		</div>
		<div class="flex flex-col md:flex-row justify-center items-center mt-4">
			<div class="flex items-end pr-4 w-32 justify-start md:justify-end">
				<h2>Gender</h2>
			</div>
			<div class="flex items-start pl-4">
				<TextField value="" className="w-[23rem]" />
			</div>
		</div>

		<div class="flex flex-col md:flex-row justify-center items-center mt-4">
			<div class="flex items-end pr-4 w-32 justify-start md:justify-end">
				<h2>Date Of Birth</h2>
			</div>
			<div class="flex items-start pl-4">
				<TextField value="" className="w-[23rem]" />
			</div>
		</div>

		<div class="flex flex-col md:flex-row justify-center items-center mt-4">
			<div class="flex items-end pr-4 w-32 justify-start md:justify-end">
				<h2>Country</h2>
			</div>
			<div class="flex items-start pl-4">
				<TextField value="" className="w-[23rem]" />
			</div>
		</div>

		<div class="flex flex-col md:flex-row justify-center items-center mt-4">
			<div class="flex items-end pr-4 w-32 justify-start md:justify-end">
				<h2>City</h2>
			</div>
			<div class="flex items-start pl-4">
				<TextField value="" className="w-[23rem]" />
			</div>
		</div>

		<div class="flex flex-col md:flex-row justify-center items-center mt-4">
			<div class="flex items-end pr-4 w-32 justify-start md:justify-end">
				<h2>Email</h2>
			</div>
			<div class="flex items-start pl-4">
				<TextField value="" className="w-[23rem]" />
			</div>
		</div>

		<div class="flex flex-col md:flex-row justify-center items-center mt-4">
			<div class="flex items-end pr-4 w-32 justify-start md:justify-end">
				<h2>Add Number</h2>
			</div>
			<div class="flex items-start pl-4">
				<TextField value="" className="w-[23rem]" />
			</div>
		</div>

		<div class="flex flex-col md:flex-row justify-center items-center mt-4">
			<div
				class="flex items-end pr-4 w-32 justify-start md:justify-end text-right whitespace-nowrap"
			>
				<h2>Change Password</h2>
			</div>
			<div class="flex items-start pl-4">
				<TextField value="" className="w-[23rem]" />
			</div>
		</div>
		<div class="flex flex-col md:flex-row justify-center items-start mt-4">
			<div class="flex items-start pr-4 w-32" />
			<div class="flex items-start pl-4">
				<Button
					className="bg-[#FFD624] hover:bg-[#FFD624] text-[#1A202C] h-[3rem] "
					type="submit"
					{loading}
					label="Save Changes"
				/>
			</div>
		</div>
	</div>
</div>
