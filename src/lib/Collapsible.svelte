<script>
  // based on suggestions from:
  // Inclusive Components by Heydon Pickering https://inclusive-components.design/collapsible-sections/
  export let headerText

  let expanded = false
</script>

<div class="collapsible">
  <h3>
    <button aria-expanded={expanded} on:click={() => (expanded = !expanded)}
      >{headerText}
      <svg viewBox="0 0 20 20" fill="none">
        <path class="vert" d="M10 1V19" stroke="black" stroke-width="2" />
        <path d="M1 10L19 10" stroke="black" stroke-width="2" />
      </svg>
    </button>
  </h3>

  <div class="contents" hidden={!expanded}>
    <slot></slot>
  </div>
</div>

<style>
  .collapsible {
    background-color: none;
  }

  button {
    background-color: rgb(243, 243, 243);
    color: var(--gray-darkest, #282828);
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2%;
    padding: 3%;
    border: none;
    font-size: 110%;
    font-family: "DM Sans", sans-serif;
    border-radius: 4px;
    box-shadow: 1px 1px 3px;
  }

  button[aria-expanded="true"] .vert {
    display: none;
  }

  svg {
    height: 0.7em;
    width: 0.7em;
  }
</style>
