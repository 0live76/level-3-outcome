<script>
  import { items } from "$lib/stores"
  import { user } from "$lib/stores"
  import { orderStatus } from "$lib/stores"
  import { tooMany } from "$lib/stores"
  import { quantity } from "$lib/stores"
  import { orderComplete } from "$lib/stores"
  import { maxNumber } from "$lib/stores"
  import { errorMessage } from "$lib/stores"
  let emptyList = true
  let item
  $: if (quantity < 0) {
    emptyList = true
    count = 0
  }
  function addItem() {
    maxItems()
    $quantity = $quantity + 1
    emptyList = false
    let newItem = { name: item }
    $items = [...$items, newItem]
  }
  function maxItems() {
    if ($quantity > $maxNumber - 2) {
      $tooMany = true
      $errorMessage = "You can only add up to 5 items"
    } else {
      $tooMany = false
      $errorMessage = ""
    }
  }
  function removeItem(index) {
    $quantity = $quantity - 2
    maxItems()
    $items = [...$items.slice(0, index), ...$items.slice(index + 1)]
  }
  function cancelList() {
    $items = []
    $quantity = 0
    $orderStatus = "Ordering"
  }
  function confirmList() {
    if ($user == "Student") {
      $orderComplete = true
      $orderStatus = "Moderating"
    }
    if ($user == "Matron") {
      $orderStatus = "Catering"
    }
    if ($user == "Caterer") {
      $orderStatus = "Ready for Pick-Up"
    }
  }
</script>

<p class="status">Order Status: {$orderStatus}</p>
<main>
  <div class="listElement">
    <h4>Current List</h4>
    <h5>Date:</h5>
    {#each $items as item, index}
      <p class="listItems">
        <li>{item.name}</li>
        <button
          class="itemButton"
          on:click={() => {
            removeItem(index)
          }}>🗑</button
        >
      </p>
    {/each}
  </div>
  <p class="addItemBox">
    Add an Item:
    <input bind:value={item} />
    <button class="itemButton" on:click={addItem} disabled={$tooMany}>✅</button>
  </p>
  <p>{$errorMessage}</p>
</main>
<div class="menu">
  {#if $user == "Student"}
    <button class="CCbutton" on:click={cancelList}>Cancel Order</button>
  {/if}
  {#if $user == "Matron"}
    <button class="CCbutton" on:click={cancelList}>Cancel Order</button>
  {/if}
  <button class="CCbutton confirm" on:click={confirmList} disabled={$orderComplete && emptyList}>Confirm Order</button>
</div>

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
