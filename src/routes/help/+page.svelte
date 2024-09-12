<script>
  import Header from "$lib/Header.svelte"
  import Header2 from "$lib/Header2.svelte"
  import Footer from "$lib/Footer.svelte"
  import { isSignedIn } from "$lib/stores"
  import { user } from "$lib/stores"
  import { guidelines } from "$lib/stores"
  import { updateGuidelines } from "$lib/db.js"
  import { removeGuideline } from "$lib/db.js"

  import CollapsibleSection from "$lib/Collapsible.svelte"
  function signOut() {
    $user = "signedOut"
    $isSignedIn = false
  }
  let newGuideline
  function addGuideline() {
    if ($guidelines == undefined) {
      $guidelines = []
    }
    console.dir($guidelines)
    $guidelines = [...$guidelines, newGuideline]
    updateGuidelines(newGuideline)
  }
  function deleteGuideline(item, index) {
    console.dir($guidelines)
    $guidelines = [...$guidelines.slice(0, index), ...$guidelines.slice(index + 1)]
    removeGuideline(item)
  }
</script>

<div class="columns">
  {#if $isSignedIn}
    <Header2 />
  {:else}
    <Header />
  {/if}

  <div class="column">
    <h3>Help</h3>
    <section>
      <CollapsibleSection headerText={"Our System"}>
        <div class="content">1. Students put the items they would like to order on the list.<br /> 2. When the list is complete, they request the order. <br /> 3. The moderators then approve/edit the order.<br /> 4. Once approved by the moderators, the caterers can then confirm they have placed the order with their supplier.<br /> 5. The list can then be cleared, ready for the next order!</div>
      </CollapsibleSection>
      <CollapsibleSection headerText={"How to Use the Website"}>
        <div class="content">
          Navigate the website using the menu in the top left. For additional help or information, check the footer at the bottom of every page, or the help page.
          <img src="navigateHelp.png" alt="" />
          <div class="columns">
            <p class="column">1. Log in with the correct ID. Are you a Student, Matron/Moderator, or Caterer?</p>
            <img class="column" src="loginHelp.png" alt="" />
          </div>
          <div class="columns">
            <p>2. Add an item using the text box input field, then pressing the “ ✅” button.</p>
            <img src="addItemHelp.png" alt="" />
          </div>
          <div class="columns">
            <p>3. To remove an item, press the “🗑” button next to the item you want to remove.</p>
            <img src="removeItemHelp.png" alt="" />
          </div>
          <div class="columns">
            <p>4. To confirm your order, press the green button. To remove all items on the list, press the red “Clear Order” button.</p>
            <img src="buttonHelp.png" alt="" />
          </div>
          <div class="columns">
            <p>5. On mobile, the log out option is located on the help page.</p>
            <img class="usericon" src="mobileHelp.png" alt="" />
          </div>
        </div>
      </CollapsibleSection>
      <CollapsibleSection headerText={"FAQs"}>
        <div class="content">
          <p class="question">Do I need to make an account?</p>
          You don’t need to create a new account to use the app. Currently, all you have to do is select the type of user you are, and you will be directed to the correct page.
          <p class="question">How do I add stuff?</p>
          To add an item, click inside the empty box at the bottom of the list. Then, type in the food item you want to add. Then, press the “ ✅” button.
          <p class="question">How do I remove stuff?</p>
          To remove an item, press the “🗑” button next to the item you want to remove.
          <p class="question">How do I know if the list has been sent through?</p>
          If the list has been sent through, it will display the corresponding message for the user: Student: "Order has been requested by students." Matron: “Order has been approved by moderators.” Caterer: “Order has been placed by caterers.”
        </div>
      </CollapsibleSection>
      <CollapsibleSection headerText={"Get GroceryApp for Your School"}>
        <div class="content">Please contact us if you would like to get Grocery App for your school. The options for this can be found on the “Contact Us” page.</div>
      </CollapsibleSection>
      <CollapsibleSection headerText={"Language"}>
        <div class="content">
          <p>You can translate the content of this page by selecting a language in the select box.</p>
          <div id="google_translate_element"></div>
          <script type="text/javascript">
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({ pageLanguage: "en" }, "google_translate_element")
            }
          </script>

          <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
        </div>
      </CollapsibleSection>
      <CollapsibleSection headerText={"List Guidelines from Moderators"}>
        <div class="content">
          {#await $guidelines}
            <p>Loading...</p>
          {:then $guidelines}
            {#if typeof $guidelines != "undefined"}
              {#each $guidelines as item, index}
                <p>
                  <li>
                    {item}
                    {#if $user == "Matron"}
                      <button
                        on:click={() => {
                          deleteGuideline(item, index)
                        }}>🗑</button
                      >
                    {/if}
                  </li>
                </p>
              {/each}
            {:else}
              <p>No Guidelines Added</p>
            {/if}
          {/await}
        </div>
        {#if $user == "Matron"}
          <p>Edit List Guidelines</p>
          <input bind:value={newGuideline} />
          <button class="itemButton" on:click={addGuideline}>✅</button>
        {/if}
      </CollapsibleSection>
    </section>
  </div>
  {#if $isSignedIn}
    <div class="mobileSignOut">
      <img class="usericon" src="userIcon2.png" alt="" />
      <a on:click={signOut} href="/">Sign Out - {$user}</a>
    </div>
  {/if}
</div>

<Footer />

<style>
  .mobileSignOut {
    visibility: collapse;
    display: none;
  }
  h3 {
    font-weight: bold;
    font-size: 170%;
    color: #000;
    margin: 3%;
  }
  section {
    width: 80%;
    margin-left: 3%;
  }
  .columns:not(:last-child) {
    margin-bottom: 0;
  }
  img {
    width: 50%;
    padding: 3%;
  }

  .content {
    padding: 0.5em;
    font-family: "DM Sans", sans-serif;
    color: #000;
    margin-bottom: 3%;
  }
  .mobileSignOut {
    visibility: collapse;
    display: none;
  }
  .usericon {
    width: 25%;
  }

  @media only screen and (max-width: 600px) {
    a {
      color: black;
      font-family: "DM Sans", sans-serif;
      font-size: 150%;
      padding-top: 2%;
      padding-left: 3%;
    }
    a:hover {
      font-style: italic;
    }
    .mobileSignOut {
      display: flex;
      visibility: visible;
      margin-left: 5%;
      padding-top: 10%;
    }
    .usericon {
      width: 15%;
    }
    .columns:not(:last-child) {
      margin-bottom: 10%;
    }
  }
</style>
