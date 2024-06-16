<script>
  import Header from "$lib/Header2.svelte"
  import Footer from "$lib/Footer.svelte"
  import { user } from "$lib/stores"
  import List from "$lib/List.svelte"

  $user = "Caterer"
</script>

<main class="columns">
  <Header />
  <List />
</main>
<Footer />

<style>
</style>
