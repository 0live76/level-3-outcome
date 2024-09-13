<script>
  import Header from "$lib/Header2.svelte"
  import Footer from "$lib/Footer.svelte"
  import CollapsibleSection from "$lib/Collapsible.svelte"
</script>

<main class="columns">
  <Header />
  <div class="column">
    <h3>Order History</h3>
    <p>Coming Soon</p>
  </div>
</main>
<Footer />

<style>
  h3 {
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
