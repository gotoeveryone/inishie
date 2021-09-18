<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Hint from "./Hint.svelte";

  const dispatch = createEventDispatcher();

  const max = 10;
  const hitNumber = Math.ceil(Math.random() * max);
  const click = (num) => {
    if (hitNumber !== num) {
      alert("はずれ！(>_<)");
      return;
    }
    dispatch("show");
  };
</script>

<div>
  <div>↓のどれかに本当の入口があるよ！</div>
  <div class="links">
    {#each [...Array(max).keys()] as _, i}
      <a href={"javascript:void(0)"} on:click={() => click(i + 1)} class="link"
        >{i + 1}</a
      >
    {/each}
  </div>
  <Hint {max} {hitNumber} />
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
