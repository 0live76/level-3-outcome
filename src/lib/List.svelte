<script>
  import { items } from "$lib/stores"
  import { user } from "$lib/stores"
  let item
  function addItem() {
    let newItem = { name: item }
    $items = [...$items, newItem]
  }
  function removeItem(index) {
    $items = [...$items.slice(0, index), ...$items.slice(index + 1)]
  }
</script>

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
  <p>
    Add an Item:
    <input bind:value={item} />
    <button on:click={addItem}>✅</button>
  </p>
  <div class="menu">
    {#if $user == "Caterer"}
      <p class="cancel">Cancel Order</p>
    {:else}
      <p class="confirm">Confirm Order</p>
    {/if}
  </div>
</main>

<style>
</style>
