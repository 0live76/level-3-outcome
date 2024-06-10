<script>
  import Header from "$lib/Header.svelte"
  import Footer from "$lib/Footer.svelte"
  import { isSignedIn } from "$lib/stores"
  $isSignedIn = false
</script>

<Header />

<Footer />
