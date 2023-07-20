<form class="">
    <div class="flex flex-wrap flex-col lg:flex-row gap-6">
      <input placeholder="Name" class="flex-1 focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]" /> 
      <input placeholder="Email" class="flex-1 focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]" /> 
      <input placeholder="Phone number" class="flex-1 focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]" /> 
    </div>
    <div class="flex mt-6">
      <textarea
        placeholder="Messsage"     
        class="flex-1 contact__textarea h-[18rem] focus:outline-none px-4 py-3 rounded-md border border-[#ced4da] text-[1.188rem]"
        cols={20}
      />
    </div>
    <button class="mt-6 bg-[#FFD624] hover:bg-[#FFD624] text-[#1A202C] text-[1.188rem] font-[600] w-[19rem] h-[3.2rem] rounded-md">
      Send Message
    </button>
  </form>