<script lang="ts">
    import "../style/app.css";

    import Header from "$lib/components/shared/header/header.svelte";
	import Footer from "$lib/components/shared/footer/footer.svelte";
	import GetInTouch from "$lib/components/shared/get_in_touch/get_in_touch.svelte";
  </script>
  
  <Header/>
  <slot />
  <GetInTouch/>
  <Footer/>
  