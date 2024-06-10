<script>
  import Header from "$lib/Header2.svelte"
  import Footer from "$lib/Footer.svelte"
  import { user } from "$lib/stores"
  $user = "Student"
  import { isSignedIn } from "$/lib/stores"
  $isSignedIn = true
</script>

<Header />

<Footer />
