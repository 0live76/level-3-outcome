<script>
  import Header from "$lib/Header.svelte"
  import Footer from "$lib/Footer.svelte"
</script>

<div class="columns">
  <Header />

  <div class="column">
    <h3>Help</h3>
    <main>
      <p>Our System</p>
      <p>How to Use the Website</p>
      <p>FAQs</p>
      <p>Get ListPlus for Your School</p>
      <p>Language</p>
    </main>
  </div>
</div>

<Footer />

<style>
  h3 {
    font-family: "DM Sans", sans-serif;
    font-size: 190%;
    font-weight: bolder;
    margin-top: 5%;
    margin-left: 5%;
    color: black;
  }
  main {
    margin-left: 5%;
    margin-top: 5%;
  }
  p {
    font-family: "DM Sans", sans-serif;
    background-color: #efefef;
    box-shadow: 2px 2px 1px;
    margin-bottom: 3%;
    padding: 3%;
    margin-right: 4%;
    border-radius: 15px;
  }
</style>
