<script>
  import Nav from "$lib/Nav.svelte"
</script>

<header class="column is-one-third">
  <Nav />
  <h1>Grocery App</h1>
  <h2>Please sign in to view list</h2>
  <div>
    <a on:click={SignIn} href="MatronHome">Sign in as Matron</a>
    <a on:click={SignIn} href="StudentHome">Sign in as Student</a>
    <a on:click={SignIn} href="CatererHome">Sign in as Caterer</a>
  </div>
</header>

<style>
  header {
    background-color: #f2a633;
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
    color: black;
  }
  div {
    display: flex;
    padding-top: 5%;
  }
  a {
    color: black;
    padding: 3%;
    font-family: "DM Sans", sans-serif;
    background-color: white;
  }
</style>
