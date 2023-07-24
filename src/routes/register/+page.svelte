<script>

	import RegisterFom from "$lib/components/register/register_fom.svelte";

</script>
<div class="w-full min-h-screen flex">
    <div class="flex-1 hidden lg:block">
      <img
        src="/images/auth.png"
        alt=""
        class="object-cover w-full min-h-screen"
      />
    </div>
    <div class="flex-1 flex justify-center items-center">
      <RegisterFom />
    </div>
  </div>