<script>
  //imports local stores variable and firebase functions
  import { list } from "$lib/stores"
  import { user } from "$lib/stores"
  import { isReady } from "$lib/stores"
  import { updateListItems } from "$lib/db.js"
  import { removeListItems } from "$lib/db.js"
  import { clearList } from "$lib/db.js"
  import { updateStatus } from "$lib/db.js"
  import { errorMessage } from "$lib/stores"

  let newItem
  //Adds item to list array and then updates to firebase
  function addItem() {
    if ($list == undefined) {
      $list = []
    }
    console.dir($list)
    $list = [...$list, newItem]
    updateListItems(newItem)
  }
  //Removes specified item from array, updates firebase
  function removeItem(item, index) {
    console.dir($list)
    $list = [...$list.slice(0, index), ...$list.slice(index + 1)]
    removeListItems(item)
  }
  //Clears list array, updates to firebase(currently deletes field which breaks page)
  function cancelList(status) {
    $list = undefined
    clearList()
    $isReady = false
    $errorMessage = " "
    status = false
    updateStatus(status)
  }
  //Confirms for user by displaying string that updates to firebase, message depends on user type.
  function confirmList(status) {
    $isReady = true
    status = true
    $errorMessage = "Order has been placed by caterers."
    updateStatus(status)
  }
  function approveOrder(status) {
    status = true
    $errorMessage = "Order has been approved by moderators."
    updateStatus(status)
  }
  function requestOrder(status) {
    status = true
    $errorMessage = "Order has been requested by students."
    updateStatus(status)
  }
</script>

<!-- <p class="status">Order Status: {$orderStatus}</p> -->
<main>
  <div class="listElement">
    <h4>Current List</h4>

    <h5>Date: {new Date().toDateString()}</h5>
    {#await $list}
      <p>Loading...</p>
    {:then $list}
      {#if typeof $list != "undefined"}
        {#each $list as item, index}
          <p class="listItems">
            {item}
            <button
              class="itemButton"
              on:click={() => {
                removeItem(item, index)
              }}>🗑</button
            >
          </p>
        {/each}
      {:else}
        <p>Order Cleared</p>
      {/if}
    {/await}
  </div>
  <p class="addItemBox">
    Add an Item:
    <input bind:value={newItem} />
    <button class="itemButton" on:click={addItem}>✅</button>
  </p>
  <p>{$errorMessage}</p>
</main>

<div class="menu">
  {#if $user == "Student" || "Matron"}
    <button class="CCbutton" on:click={cancelList}>Clear Order</button>
  {/if}
  {#if $user == "Student"}
    <button class="CCbutton confirm" on:click={requestOrder}>Request Order</button>
  {/if}
  {#if $user == "Matron"}
    <button class="CCbutton confirm" on:click={approveOrder}>Approve Order</button>
  {/if}
  {#if $user == "Caterer"}
    <button class="CCbutton confirm" on:click={confirmList}>Confirm Order</button>
  {/if}
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
  /* .status {
    font-weight: bold;
    font-size: 170%;
    color: #000;
    margin-top: 2%;
    text-align: center;
  } */
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
  @media only screen and (max-width: 600px) {
    .listElement {
      width: 90%;
    }
  }
</style>
