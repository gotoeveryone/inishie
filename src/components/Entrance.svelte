<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Hint from "./Hint.svelte";

  const dispatch = createEventDispatcher();

  const max = 10;
  const hitNumber = Math.ceil(Math.random() * max);
  const click = (num: number) => {
    if (hitNumber !== num) {
      alert("はずれ！(>_<)");
      return;
    }
    dispatch("show");
  };
</script>

<div>
  <div>↓のどれかに本当の入口があるよ！</div>
  <div class="entrance">
    {#each [...Array(max).keys()] as _, i}
      <button on:click={() => click(i + 1)} class="entrance-item"
        >{i + 1}</button
      >
    {/each}
  </div>
  <Hint {max} {hitNumber} />
</div>

<style>
  .entrance {
    margin: 5px auto;
    max-width: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .entrance-item {
    flex-basis: 60px;
    display: block;
    margin: 3px;
    border: 1px solid black;
    background-color: transparent;
  }

  .entrance-item:nth-child(even) {
    background-color: #999;
  }
</style>
