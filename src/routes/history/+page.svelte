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
    <!-- <section>
      <CollapsibleSection headerText={"7/10/24"}>
        <div class="content">Look at all this fun content</div>
      </CollapsibleSection>
      <CollapsibleSection headerText={"1/10/24"}>
        <div class="content">Look at all this fun content</div>
      </CollapsibleSection>
      <CollapsibleSection headerText={"23/9/24"}>
        <div class="content">Look at all this fun content</div>
      </CollapsibleSection>
      <CollapsibleSection headerText={"16/9/24"}>
        <div class="content">Look at all this fun content</div>
      </CollapsibleSection>
      <CollapsibleSection headerText={"9/9/24"}>
        <div class="content">Look at all this fun content</div>
      </CollapsibleSection>
    </section>
    <p>Load More</p> -->
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
  /* section {
    width: 80%;
    margin-left: 3%;
  }

  .content {
    background-color: #f4f4f4;
    padding: 0.5em;
  } */
  p {
    font-family: "DM Sans" sans-serif;
    margin-left: 3%;
  }
</style>
