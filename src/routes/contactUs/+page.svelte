<script>
  import Header from "$lib/Header.svelte"
  import Header2 from "$lib/Header2.svelte"
  import Footer from "$lib/Footer.svelte"
  import { isSignedIn } from "$lib/stores"
</script>

<div class="columns">
  {#if $isSignedIn}
    <Header2 />
  {:else}
    <Header />
  {/if}

  <div class="column">
    <h3>Contact Us</h3>
    <p>We can be contacted via:</p>

    <div class="section">
      <img src="facebookIcon.png" alt="" />
      <p>Facebook</p>
    </div>
    <div class="section">
      <img src="instagramIcon.png" alt="" />
      <p>Instagram</p>
    </div>
    <div class="section">
      <img src="emailIcon.png" alt="" />
      <p>Email</p>
    </div>
  </div>
</div>

<Footer />

<style>
  h3 {
    font-weight: bold;
    font-size: 170%;
    margin: 3%;
    color: #000;
  }

  p {
    font-family: "DM Sans", sans-serif;
    margin-left: 3%;
    color: black;
    margin-top: 2%;
    margin-bottom: 2%;
    font-size: 130%;
  }
  .section {
    display: flex;
    text-decoration: underline;
  }

  img {
    width: 4.2em;
  }
</style>
