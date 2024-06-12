<script>
  import Header from "$lib/Header.svelte"
  import Header2 from "$lib/Header2.svelte"
  import Footer from "$lib/Footer.svelte"
  import { isSignedIn } from "$lib/stores"
</script>

<div class="columns">
  {#if $isSignedIn}
    <Header2 />
  {:else}
    <Header />
  {/if}

  <div class="column">
    <h3>Contact Us</h3>
  </div>
</div>

<Footer />

<style>
  h3 {
    font-weight: bold;
    font-size: 170%;
    margin: 3%;
    color: #000;
  }
</style>
