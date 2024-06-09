<script>
  import Nav2 from "$lib/Nav2.svelte"
</script>

<header class="column is-one-third">
  <Nav2 />
  <h1>Craighead Diocesan School</h1>
  <h2>Year 13 Grocery List</h2>
  <div>
    <img src="userIcon.png" alt="" />
    <p>Sign Out -</p>
  </div>
</header>

<style>
  header {
    background-color: #003f2c;
    padding: 2%;
    height: 100vh;
  }
  h1 {
    font-family: "DM Sans", sans-serif;
    font-size: 450%;
    margin-top: 25%;
    margin-left: 5%;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
  }

  h2 {
    font-family: "DM Sans", sans-serif;
    margin-left: 5%;
    font-style: italic;
    font-size: 180%;
    padding-top: 3%;
    color: white;
  }

  p {
    color: white;
    font-family: "DM Sans", sans-serif;
    font-size: 170%;
    padding-left: 3%;
    padding-top: 2%;
  }
  div {
    display: flex;
    margin-top: 25%;
  }
  img {
    width: 15%;
  }
</style>
