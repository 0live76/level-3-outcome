<script>
  import Nav2 from "$lib/Nav2.svelte"
  import { user } from "$lib/stores"
  import { isSignedIn } from "$lib/stores"
  function signOut() {
    $user = "signedOut"
    $isSignedIn = false
  }
</script>

<header class="column is-one-third">
  <Nav2 />
  <div class="mainSection">
    <h1>Craighead Diocesan School</h1>
    <h2>Year 13 Grocery List</h2>
  </div>
  <div class="signOutDesktop">
    <img src="userIcon.png" alt="" />
    <a on:click={signOut} href="/">Sign Out - {$user}</a>
  </div>
</header>

<style>
  header {
    background-color: #003f2c;
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

  a {
    color: white;
    font-family: "DM Sans", sans-serif;
    font-size: 170%;
    padding-left: 3%;
    padding-top: 2%;
  }
  a:hover {
    font-style: italic;
  }
  .signOutDesktop {
    display: flex;
    padding-top: 10%;
  }
  img {
    width: 15%;
  }
  @media only screen and (max-width: 600px) {
    .signOutDesktop {
      visibility: collapse;
      display: none;
    }
    .mainSection {
      flex-direction: column;
    }
    header {
      flex-direction: column-reverse;
      justify-content: center;
      margin-left: 4%;
      margin-right: 4%;
      margin-top: 4%;
      height: 10vh;
      border-radius: 10px;
    }
    h1 {
      font-family: "DM Sans", sans-serif;
      font-size: 130%;
      text-align: center;
      margin-left: 0;
      margin-top: 2%;
    }

    h2 {
      visibility: collapse;
      display: none;
    }
  }
</style>
