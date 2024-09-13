<script>
  import { page } from "$app/stores"
  import { user } from "$lib/stores"
</script>

<nav>
  <a href="/" class:current-page={$page.url.pathname == "/"}>Home</a>
  {#if $user == "Student"}
    <a href="forum" class:current-page={$page.url.pathname.includes("forum")}>Forum</a>
  {:else}
    <a href="history" class:current-page={$page.url.pathname.includes("history")}>Order History</a>
  {/if}
  <a href="help" class:current-page={$page.url.pathname.includes("help")}>Help</a>
  <a href="contactUs" class:current-page={$page.url.pathname.includes("contactUs")}>Contact Us</a>
</nav>

<style>
  nav {
    display: flex;
    align-content: center;
    justify-content: space-around;
    padding-top: 4%;
  }
  a {
    color: white;
    font-family: "DM Sans", sans-serif;
    font-size: 120%;
  }

  a:hover {
    text-decoration: underline;
    font-weight: bolder;
    color: white;
  }
  .current-page {
    text-decoration: underline;
    font-weight: bolder;
  }
  @media only screen and (max-width: 600px) {
    nav {
      background-color: #003f2c;
      padding: 4%;
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
    }
  }
</style>
