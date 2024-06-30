<script>
  import { items } from "$lib/stores"
  import { user } from "$lib/stores"
  import { orderStatus } from "$lib/stores"

  let item
  function addItem() {
    let newItem = { name: item }
    $items = [...$items, newItem]
  }
  function removeItem(index) {
    $items = [...$items.slice(0, index), ...$items.slice(index + 1)]
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
    <button class="itemAddButton" on:click={addItem}>✅</button>
  </p>
</main>
<div class="menu">
  {#if $user == "Student"}
    <p class="cancel">Cancel Order</p>
  {/if}
  {#if $user == "Matron"}
    <p class="cancel">Cancel Order</p>
  {/if}
  <p class="confirm">Confirm Order</p>
</div>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    font-family: "DM Sans" sans-serif;
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
  .itemAddButton {
    border: none;
    font-size: 120%;
    background-color: white;
  }
  .menu {
    display: flex;
    align-content: center;
    justify-content: space-evenly;
    margin-top: 5%;
    color: white;
    font-size: 120%;
  }

  .cancel {
    background-color: #b63737;
    padding: 1.5%;
    border-radius: 10px;
    box-shadow: 6px 8px 13px -4px rgba(170, 170, 170, 1);
  }
  .confirm {
    background-color: #003f2c;
    padding: 1.5%;
    border-radius: 10px;
    box-shadow: 6px 8px 13px -4px rgba(170, 170, 170, 1);
  }
</style>
