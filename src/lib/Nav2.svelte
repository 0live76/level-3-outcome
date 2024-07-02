<script>
  import { page } from "$app/stores"
  import { user } from "$lib/stores"
</script>

<nav>
  <a href={$user + "Home"} class:current-page={$page.url.pathname == $user + "/"}>Home</a>
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
</style>
