<script>
  import Nav from "$lib/Nav.svelte"
  import { isSignedIn } from "$lib/stores"

  function SignIn() {
    $isSignedIn = true
  }
</script>

<header class="column is-one-third">
  <Nav />
  <div class="mainSection">
    <h1>Grocery App</h1>
    <h2>Please sign in to view list</h2>
    <div class="loginMenu">
      <a on:click={SignIn} href="MatronHome">Sign in as Matron</a>
      <a on:click={SignIn} href="StudentHome">Sign in as Student</a>
      <a on:click={SignIn} href="CatererHome">Sign in as Caterer</a>
    </div>
  </div>
</header>

<style>
  header {
    background-color: #f2a633;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .mainSection {
    flex-direction: column;
  }
  h1 {
    font-family: "DM Sans", sans-serif;
    font-size: 450%;
    margin-top: 25%;
    margin-left: 5%;
    margin-right: 5%;
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
  .loginMenu {
    display: flex;
    padding-top: 5%;
  }
  a {
    color: black;
    padding: 3%;
    font-family: "DM Sans", sans-serif;
    background-color: white;
  }

  @media only screen and (max-width: 600px) {
    .mainSection {
      flex-direction: column;
    }
    header {
      flex-direction: column-reverse;
      justify-content: center;
      margin-left: 4%;
      margin-right: 4%;
      margin-top: 4%;
      border-radius: 10px;
    }
    h1 {
      font-family: "DM Sans", sans-serif;
      font-size: 300%;
      text-align: center;
      margin-left: 0;
      /* margin-top: -160%; */
    }

    h2 {
      font-family: "DM Sans", sans-serif;
      font-size: 180%;
      text-align: center;
      margin-left: 0;
    }
  }
</style>
