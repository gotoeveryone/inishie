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

<div class="flex items-center justify-center mx-2 bg-black w-[140px] h-[30px]">
  {#each counter as i}
    <div class="text-green-600 font-bold text-lg w-[25px]">{i}</div>
  {/each}
</div>
