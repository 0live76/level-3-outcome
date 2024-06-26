<script>
  import { items } from "$lib/stores"
  let item
  function addItem() {
    let newItem = { name: item }
    $items = [...$items, newItem]
  }
  function removeItem(index) {
    $items = [...$items.slice(0, index), ...$items.slice(index + 1)]
  }
</script>

<div class="column">
  <div class="list">
    <h4>Current List</h4>
    <button on:click={addItem}>Add Item</button>

    <h5>Date:</h5>
    <div class="column">
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
  </div>

  <p class="userInput">
    Add an Item:
    <input bind:value={item} />
  </p>
</div>

<style>
  .list {
    box-shadow: 2px 2px 10px;
    width: 60%;
    margin-left: 20%;
    margin-top: 5%;
    padding: 2%;
    height: 70%;
    border-radius: 10px;
  }
  h4 {
    font-weight: bold;
    font-size: 200%;
    color: #000;
  }
  h5 {
    font-size: 160%;
  }
  .userInput {
    text-align: center;
    padding: 4%;
  }

  .listItems {
    display: flex;
    justify-content: space-between;
  }

  /* .menu {
    display: flex;
    align-content: center;
    justify-content: space-around;
  }

  .cancel {
    background-color: #b63737;
    color: white;
    font-size: 130%;
    padding: 2%;
    border-radius: 15px;
  }
  .confirm {
    background-color: #003f2c;
    color: white;
    font-size: 130%;
    padding: 2%;
    border-radius: 15px;
  } */
</style>
