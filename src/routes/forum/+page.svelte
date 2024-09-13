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
    <h2>Forum</h2>
    <p>Coming Soon</p>
  </div>
</div>
<Footer />

<style>
  .columns:not(:last-child) {
    margin-bottom: 0;
  }
  h2 {
    font-weight: bold;
    font-size: 170%;
    color: #000;
    margin: 3%;
  }

  p {
    font-family: "DM Sans" sans-serif;
    margin-left: 3%;
  }
</style>
