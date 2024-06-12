<script>
  import Header from "$lib/Header2.svelte"
  import Footer from "$lib/Footer.svelte"
  import List from "$lib/List.svelte"
  import { user } from "$lib/stores"
  $user = "Matron"
</script>

<main class="columns">
  <Header />
  <List />
</main>

<Footer />

<style>
  main {
    font-family: "DM Sans", sans-serif;
  }
</style>
