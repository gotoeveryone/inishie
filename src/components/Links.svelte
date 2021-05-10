<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const max = 10;
  const hitNumber = Math.floor(Math.random() * max);
  const click = (idx) => {
    if (hitNumber !== idx) {
      alert("はずれ！(>_<)");
      return;
    }
    dispatch('show');
  };
</script>

<div>↓のどれかに本当の入口があるよ！</div>
<div class="links">
  {#each [...Array(max).keys()] as _, i}
    <a href={"javascript:void(0)"} on:click={() => click(i)} class="link"> </a>
  {/each}
</div>

<style>
  .links {
    margin: 5px auto;
    max-width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .link {
    display: block;
    margin: 3px;
    width: 20px;
    height: 20px;
    border: 1px solid #00f;
    border-bottom-width: 2px;
  }
</style>
