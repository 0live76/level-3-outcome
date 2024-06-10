<script>
  import Header from "$lib/Header.svelte"
  import Header2 from "$lib/Header2.svelte"
  import Footer from "$lib/Footer.svelte"
  import { isSignedIn } from "$lib/stores"
</script>

{#if $isSignedIn}
  <Header2 />
{:else}
  <Header />
{/if}

<Footer />
