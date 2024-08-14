<script>
  import { list } from "$lib/stores"
  import { tooMany as isError } from "$lib/stores"
  import { errorMessage } from "$lib/stores"
  let newItem
  function addItem() {
    $list = [...$list, newItem]
  }
  function removeItem(index) {
    $list = [...$list.slice(0, index), ...$list.slice(index + 1)]
  }
</script>

<!-- <p class="status">Order Status: {$orderStatus}</p> -->
<main>
  <div class="listElement">
    <h4>Current List</h4>
    <h5>Date:</h5>
    {#await $list}
      <p>Loading...</p>
    {:then $list}
      {#each $list as item, index}
        <p class="listItems">
          {item}
          <button
            class="itemButton"
            on:click={() => {
              removeItem(index)
            }}>🗑</button
          >
        </p>
      {/each}
    {/await}
  </div>
  <p class="addItemBox">
    Add an Item:
    <input bind:value={newItem} />
    <button class="itemButton" on:click={addItem} disabled={$isError}>✅</button>
  </p>
  <p>{$errorMessage}</p>
</main>

<!-- <div class="menu">
  {#if $user == "Student"}
    <button class="CCbutton" on:click={cancelList}>Cancel Order</button>
  {/if}
  {#if $user == "Matron"}
    <button class="CCbutton" on:click={cancelList}>Cancel Order</button>
  {/if}
  <button class="CCbutton confirm" on:click={confirmList}>Confirm Order</button>
</div> -->

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    font-family: "DM Sans" sans-serif;
  }
  p {
    font-family: "DM Sans" sans-serif;
    color: #000;
    font-style: italic;
    font-size: 110%;
  }
  .status {
    font-weight: bold;
    font-size: 170%;
    color: #000;
    margin-top: 2%;
    text-align: center;
  }
  .listElement {
    width: 60%;
    padding: 3%;
    border-radius: 10px;
    box-shadow: 6px 8px 13px -4px rgba(170, 170, 170, 1);
  }
  .listItems {
    display: flex;
    justify-content: space-between;
    font-size: 120%;
    color: #000;
    margin-top: 2%;
    font-style: normal;
  }
  .addItemBox {
    font-size: 120%;
    color: #000;
  }
  h4 {
    font-weight: bold;
    font-size: 170%;
    color: #000;
  }
  h5 {
    font-size: 150%;
  }
  .itemButton {
    border: none;
    font-size: 120%;
    background-color: white;
  }
  .menu {
    display: flex;
    align-content: center;
    justify-content: space-evenly;
    margin-top: 5%;
  }

  .CCbutton {
    font-size: 120%;
    color: white;
    background-color: #b63737;
    border: none;
    padding: 1.5%;
    border-radius: 10px;
    box-shadow: 6px 8px 13px -4px rgba(170, 170, 170, 1);
  }
  .confirm {
    background-color: #003f2c;
  }
</style>
