<script>
  import Header from "$lib/Header2.svelte"
  import Footer from "$lib/Footer.svelte"
</script>

<main class="columns">
  <Header />
  <div class="column">
    <h3>Order Status:</h3>
    <div class="list">
      <h4>Current List</h4>
      <h5>Date:</h5>
    </div>
    <p>Cancel Order</p>
    <p>Confirm Order</p>
  </div>
</main>

<Footer />

<style>
  main {
    font-family: "DM Sans", sans-serif;
  }
  h3 {
    text-align: center;
    font-weight: bold;
    font-size: 170%;
    padding-top: 3%;
    color: #000;
  }
  .list {
    box-shadow: 2px 2px 3px;
    width: 70%;
    margin-left: 15%;
    margin-top: 5%;
    padding: 2%;
    height: 50%;
  }
  h4 {
    font-weight: bold;
    font-size: 200%;
    color: #000;
  }
  h5 {
    font-size: 160%;
  }
</style>
