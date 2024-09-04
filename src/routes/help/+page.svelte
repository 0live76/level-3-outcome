<script>
  import Header from "$lib/Header.svelte"
  import Header2 from "$lib/Header2.svelte"
  import Footer from "$lib/Footer.svelte"
  import { isSignedIn } from "$lib/stores"
  import { user } from "$lib/stores"
  import CollapsibleSection from "$lib/Collapsible.svelte"
  function signOut() {
    $user = "signedOut"
    $isSignedIn = false
  }
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
  {#if $isSignedIn}
    <div class="mobileSignOut">
      <img src="userIcon2.png" alt="" />
      <a on:click={signOut} href="/">Sign Out - {$user}</a>
    </div>
  {/if}
</div>

<Footer />

<style>
  .mobileSignOut {
    visibility: collapse;
    display: none;
  }
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
  .columns:not(:last-child) {
    margin-bottom: 0;
  }
  .content {
    background-color: #f4f4f4;
    padding: 0.5em;
  }
  .mobileSignOut {
    visibility: collapse;
    display: none;
  }

  @media only screen and (max-width: 600px) {
    a {
      color: black;
      font-family: "DM Sans", sans-serif;
      font-size: 150%;
      padding-top: 2%;
      padding-left: 3%;
    }
    a:hover {
      font-style: italic;
    }
    .mobileSignOut {
      display: flex;
      visibility: visible;
      margin-left: 5%;
      padding-top: 10%;
    }
    img {
      width: 15%;
    }
    .columns:not(:last-child) {
      margin-bottom: 10%;
    }
  }
</style>
