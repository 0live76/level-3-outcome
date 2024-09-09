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
      <a href="https://www.facebook.com/timarucraigheaddiocesan">Facebook</a>
    </div>
    <div class="section">
      <img src="websiteIcon.png" alt="" />
      <a href="https://www.craighead.school.nz/">Our Website</a>
    </div>
    <div class="section">
      <img src="emailIcon.png" alt="" />
      <a href="mailto:hostel@craighead.school.nz">Email</a>
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

  a {
    font-family: "DM Sans", sans-serif;
    margin-left: 3%;
    color: black;
    margin-top: 2%;
    margin-bottom: 2%;
    font-size: 130%;
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
  .columns:not(:last-child) {
    margin-bottom: 0;
  }
  @media only screen and (max-width: 600px) {
    .column {
      margin-bottom: 30%;
    }
  }
</style>
