<script lang="ts">
	export let className: string = '';
	export let value: string;
	export let placeholder: string = '';
	export let type: string = 'text';
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let label: string = '';
	export let withAsterisk: boolean = false;

	let passwordType: string = 'password';

	const changePasswordType = (type: string) => {
		passwordType = type;
	};
</script>

<div class="flex flex-col">
	{#if label != ''}
		<label class="font-semibold"
			>{label}{' '}
			{#if withAsterisk}
				<span class="text-[#fa5252]">*</span>
			{/if}
		</label>
	{/if}
	{#if type == 'text'}
		<input
			{required}
			bind:value
			{placeholder}
			class="flex-1 focus:outline-none px-3 py-2 rounded-md border border-[#ced4da] text-[1rem] {className}"
		/>
	{:else if type == 'email'}
		<input
			{required}
			type="email"
			bind:value
			{placeholder}
			{disabled}
			class="flex-1 focus:outline-none px-3 py-2 rounded-md border border-[#ced4da] text-[1rem] {className}"
		/>
	{:else if type == 'number'}
		<input
			{required}
			type="number"
			bind:value
			{placeholder}
			class="flex-1 focus:outline-none px-3 py-2 rounded-md border border-[#ced4da] text-[1rem] {className}"
		/>
	{:else if type == 'date'}
		<input
			{required}
			type="date"
			bind:value
			{placeholder}
			class="flex-1 focus:outline-none px-3 py-2 rounded-md border border-[#ced4da] text-[1rem] {className}"
		/>
	{:else if type == 'password'}
		<div class="flex-1 px-3 py-2 rounded-md border border-[#ced4da] text-[1rem] flex {className}">
			{#if passwordType == 'password'}
				<input
					{required}
					type="password"
					bind:value
					{placeholder}
					class="flex-1 focus:outline-none border-none focus:border-none p-0 focus:ring-transparent"
				/>
				<img
					src="/icons/eye.svg"
					class="w-5 cursor-pointer"
					alt=""
					on:click={() => changePasswordType('text')}
				/>
			{:else}
				<input
					{required}
					type="text"
					bind:value
					{placeholder}
					class="flex-1 focus:outline-none border-none focus:border-none p-0 focus:ring-transparent"
				/>
				<img
					src="/icons/eye-off.svg"
					class="w-5 cursor-pointer"
					alt=""
					on:click={() => changePasswordType('password')}
				/>
			{/if}
		</div>
	{/if}
</div>
