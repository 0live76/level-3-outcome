<script>
  import { user } from "$lib/stores"
</script>

<div class="column">
  <h3>Order Status:</h3>
  <div class="list">
    <h4>Current List</h4>
    <h5>Date:</h5>
    <ul>
      <li>This</li>
      <li>Is</li>
      <li>Placeholder</li>
      <li>Text</li>
    </ul>
  </div>
  <div class="menu">
    {#if $user == "Matron"}
      <button class="cancel">Cancel Order</button>
    {:else if $user == "Student"}
      <button class="cancel">Cancel Order</button>
    {/if}
    <button class="confirm">Confirm Order</button>
  </div>
</div>

<style>
  h3 {
    text-align: center;
    font-weight: bold;
    font-size: 170%;
    padding-top: 3%;
    color: #000;
  }
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
  .menu {
    display: flex;
    align-content: center;
    justify-content: space-around;
    padding-top: 4%;
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
  }
</style>
