<script>
	import Button from '../shared/button.svelte';
	import TextField from '../shared/text_field.svelte';
</script>

<div class="my-container pt-[14.25rem]">
	<div
		class="bg-[#F2F5F7] min-h-[35.5rem] rounded-2xl flex flex-col items-left justify-left px-10 py-10"
	>
		<div
			class="w-64 h-12 absolute top-273 left-288 font-semibold text-[4rem] leading-12 text-left text-[#1A202C]"
		>
			My Profile
		</div>
		<div class="flex items-center mt-[5rem]">
			<div class="flex justify-center">
				<img class="w-14 h-14" src="images/user-picture.png" alt="profile" />
			</div>
			<div class="ml-[1rem]">
				<p class="font-bold text-[1.2rem]">Athar Rasool</p>
				<p>atharrasool210@gmail.com</p>
			</div>
		</div>
		<hr class="border-t-2 border-gray-300 my-6" />

		<div class="flex flex-col md:flex-row justify-center items-center">
			<div class="flex items-end pr-4 w-32 justify-start md:justify-end">
				<TextField type="text" value="" />
			</div>
			<div class="flex items-start pl-4 mb-4 md:mb-0">
				<!-- <TextInput value={fname?.toString()} className="w-[23rem]" size="lg" /> -->
				<TextField type="text" value="" />
			</div>
		</div>
		<div class="flex flex-col md:flex-row justify-center items-center mt-4">
			<div class="flex items-end pr-4 w-32 justify-start md:justify-end">
				<!-- <Text size="lg">Last Name</Text> -->
				<TextField type="text" value="Last Name" />
			</div>
			<div class="flex items-start pl-4 mb-4 md:mb-0">
				<!-- <TextInput value={lname?.toString()} class="w-[23rem]" size="lg" /> -->
				<TextField type="text" value="" />
			</div>
		</div>
		<div class="flex flex-col md:flex-row justify-center items-center mt-4">
			<div class="flex items-end pr-4 w-32 justify-start md:justify-end">
				<!-- <Text size="lg">Gender</Text> -->
				<TextField type="text" value="" />
			</div>
			<div class="flex items-start pl-4">
				<!-- <NativeSelect
					className="w-[23rem]"
					size="lg"
					data={['Male', 'Female', 'Other']}
					withAsterisk
				/> -->
				<TextField type="text" value="" />
			</div>
		</div>

		<div class="flex flex-col md:flex-row justify-center items-center mt-4">
			<div class="flex items-end pr-4 w-32 justify-start md:justify-end">
				<!-- <Text size="lg">Date Of Birth</Text> -->
				<TextField type="text" value="" />
			</div>
			<div class="flex items-start pl-4">
				<!-- <DatePickerInput {value} onChange={setValue} mx="auto" size="lg" className="w-[23rem]" /> -->
				<TextField type="text" value="" />
			</div>
		</div>

		<div class="flex flex-col md:flex-row justify-center items-center mt-4">
			<div class="flex items-end pr-4 w-32 justify-start md:justify-end">
				<!-- <Text size="lg">Country</Text> -->
			</div>
			<div class="flex items-start pl-4">
				<!-- <TextInput value="Pakistan" className="w-[23rem]" size="lg" /> -->
			</div>
		</div>

		<div class="flex flex-col md:flex-row justify-center items-center mt-4">
			<div class="flex items-end pr-4 w-32 justify-start md:justify-end">
				<!-- <Text size="lg">City</Text> -->
			</div>
			<div class="flex items-start pl-4">
				<!-- <TextInput className="w-[23rem]" value="Karachi" size="lg" /> -->
			</div>
		</div>

		<div class="flex flex-col md:flex-row justify-center items-center mt-4">
			<div class="flex items-end pr-4 w-32 justify-start md:justify-end">
				<!-- <Text size="lg">Email</Text> -->
			</div>
			<div class="flex items-start pl-4">
				<!-- <TextInput value={email?.toString()} className="w-[23rem]" size="lg" readOnly /> -->
			</div>
		</div>

		<div class="flex flex-col md:flex-row justify-center items-center mt-4">
			<div class="flex items-end pr-4 w-32 justify-start md:justify-end">
				<!-- <Text size="lg">Add Number</Text> -->
			</div>
			<div class="flex items-start pl-4">
				<!-- <TextInput value={contactno?.toString()} className="w-[23rem]" size="lg" readOnly /> -->
			</div>
		</div>

		<div class="flex flex-col md:flex-row justify-center items-center mt-4">
			<div class="flex items-end pr-4 w-32 justify-start md:justify-end">
				<!-- <Text size="lg" class="whitespace-nowrap">Change Password</Text> -->
			</div>
			<div class="flex items-start pl-4">
				<!-- <TextInput type="password" value="12345678" className="w-[23rem]" size="lg" withAsterisk /> -->
			</div>
		</div>
		<div class="flex flex-col md:flex-row justify-center items-start mt-4">
			<div class="flex items-start pr-4 w-32" />
			<div class="flex items-start pl-4">
				<!-- <Button
					className="bg-[#FFD624] hover:bg-[#FFD624] text-[#1A202C] mb-[0.563rem]"
					size="lg"
					type="submit"
				>
					Save Changes
				</Button> -->
			</div>
		</div>
	</div>
</div>
