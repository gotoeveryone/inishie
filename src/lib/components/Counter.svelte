<script lang="ts">
import { onMount } from "svelte";
import CounterRepository from "$lib/repositories/counter";

const repo = new CounterRepository();

let count = 0;
$: counter = count.toString().padStart(6, "0");

onMount(async () => {
	count = await repo.get();
});
</script>

<div class="flex items-center justify-center mx-2 bg-black w-[140px] h-[30px]" data-itemname="counter">
  {#each counter as i}
    <div class="text-green-600 font-bold text-lg w-[25px]" data-itemname="counter-item">{i}</div>
  {/each}
</div>
