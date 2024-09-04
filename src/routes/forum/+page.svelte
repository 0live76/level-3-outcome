<script>
  import Header from "$lib/Header2.svelte"
  import Footer from "$lib/Footer.svelte"
  import { user } from "$lib/stores"
  $user = "Student"
  import { isSignedIn } from "$lib/stores"
  $isSignedIn = true
</script>

<div class="columns">
  <Header />
  <div class="column">
    <h2>Coming Soon</h2>
  </div>
</div>
<Footer />

<style>
  .columns:not(:last-child) {
    margin-bottom: 0;
  }
</style>
