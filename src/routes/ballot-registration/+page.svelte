<script lang="ts">
	import PayOnlineForm from "$lib/components/ballot-registration/pay-online-form.svelte";
	import Hero from "$lib/components/shared/hero.svelte";
	import axiosFunction from "$lib/utils/network";

  // function openWindowWithPost(url: any, name: any, params: any) {
	// 	var form = document.createElement('form');
	// 	form.setAttribute('method', 'post');
	// 	form.setAttribute('action', url);
	// 	form.setAttribute('target', name);
	// 	for (var i in params) {
	// 		if (params.hasOwnProperty(i)) {
	// 			var input = document.createElement('input');
	// 			input.type = 'hidden';
	// 			input.name = i;
	// 			input.value = params[i];
	// 			form.appendChild(input);
	// 		}
	// 	}

	// 	document.body.appendChild(form);

	// 	form.submit();
	// 	document.body.removeChild(form);
	// }

	// const submit = async () => {

	// 	const returnURL = 'https://dealsabaad.com/thankyou';

	// 	const postURL = 'https://testgrid.co/dealsabaadapi/checkout_payonline.php';

	// 	const ppmpf_1 = ""
	// 	const ppmpf_2 = ""
	// 	const ppmpf_3 = "";
	// 	const ppmpf_4 = "";
	// 	const ppmpf_5 = "";

	// 		openWindowWithPost(postURL, '_self', {
	// 			ppmpf_1: ppmpf_1,
	// 			ppmpf_2: ppmpf_2,
	// 			ppmpf_3: ppmpf_3,
	// 			ppmpf_4: ppmpf_4,
	// 			ppmpf_5: ppmpf_5
	// 		});
	// 	}
</script>

<main>
    <Hero heading="Ballot Registration" image="/images/contact-hero.png" />
    <div class="bg-[#F2F5F7]">
        <div class="my-container py-[6.25rem]">
          <h2 class="text-[2.5rem] md:text-[3.438rem] font-extrabold leading-[120%] mb-[1.2rem]">
            Ballot Registration
          </h2>
          <p class="text-[1rem] md:text-[1.313rem] text-[#4B4B4B] mb-[2.813rem] max-w-[52rem]">
            For registration, Please submit the form with the following details and pay the registration fee online.
          </p>
          <PayOnlineForm />
        </div>
      </div>
</main>