<script>
  import Header from "$lib/Header2.svelte"
  import Footer from "$lib/Footer.svelte"
  import List from "$lib/List.svelte"
  import { user } from "$lib/stores"
  $user = "Student"
</script>

<main class="columns">
  <Header />
  <List />
</main>
<Footer />

<style>
</style>
