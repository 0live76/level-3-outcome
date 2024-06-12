<script>
  import Header from "$lib/Header.svelte"
  import Header2 from "$lib/Header2.svelte"
  import Footer from "$lib/Footer.svelte"
  import { isSignedIn } from "$lib/stores"
  import CollapsibleSection from "$lib/Collapsible.svelte"
</script>

<div class="columns">
  {#if $isSignedIn}
    <Header2 />
  {:else}
    <Header />
  {/if}

  <div class="column">
    <h3>Help</h3>
    <section>
      <CollapsibleSection headerText={"Our System"}>
        <div class="content">Look at all this fun content</div>
      </CollapsibleSection>
      <CollapsibleSection headerText={"How to Use the Website"}>
        <div class="content">Look at all this fun content</div>
      </CollapsibleSection>
      <CollapsibleSection headerText={"FAQs"}>
        <div class="content">Look at all this fun content</div>
      </CollapsibleSection>
      <CollapsibleSection headerText={"Get GroceryApp for Your School"}>
        <div class="content">Look at all this fun content</div>
      </CollapsibleSection>
      <CollapsibleSection headerText={"Language"}>
        <div class="content">Look at all this fun content</div>
      </CollapsibleSection>
    </section>
  </div>
</div>

<Footer />

<style>
  h3 {
    font-weight: bold;
    font-size: 170%;
    color: #000;
    margin: 3%;
  }
  section {
    width: 80%;
    margin-left: 3%;
  }

  .content {
    background-color: #f4f4f4;
    padding: 0.5em;
  }
</style>
