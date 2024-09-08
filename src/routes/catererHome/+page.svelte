<script>
  import Header from "$lib/Header2.svelte"
  import Footer from "$lib/Footer.svelte"
  import { user } from "$lib/stores"
  import List from "$lib/List.svelte"

  $user = "Caterer"
</script>

<main class="columns">
  <Header />
  <div class="column">
    <List />
  </div>
</main>
<Footer />

<style>
  .columns:not(:last-child) {
    margin-bottom: 0;
  }
</style>
