<script lang="ts">
  import { onMount } from "svelte";
  import AccessLogRepository from "$lib/repositories/access_log";

  const repo = new AccessLogRepository();

  let count = 0;
  $: counter = count.toString().padStart(6, "0");

  onMount(async () => {
    count = await repo.count();
  });
</script>

<div class="counter">
  {#each counter as i}
    <div class="counter-item">{i}</div>
  {/each}
</div>

<style>
  .counter {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    width: 140px;
    height: 30px;
    background-color: #000;
  }

  .counter-item {
    width: 25px;
    color: rgb(21, 172, 114);
    font-weight: bold;
    font-size: 18px;
  }
</style>
