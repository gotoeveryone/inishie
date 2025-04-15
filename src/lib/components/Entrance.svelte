<script lang="ts">
import Hint from "$lib/components/Hint.svelte";

const { moveToHome } = $props();

const max = 10;
const hitNumber = Math.ceil(Math.random() * max);
const click = (num: number) => {
	if (hitNumber !== num) {
		alert("はずれ！(>_<)");
		return;
	}
	moveToHome();
};
</script>

<div>
  <div>↓のどれかに本当の入口があるよ！</div>
  <div class="flex items-center justify-center flex-wrap mx-auto my-2 max-w-[350px]">
    {#each [...Array(max).keys()] as _, i}
      <button onclick={() => click(i + 1)} class="block m-1 border border-black bg-transparent w-[60px] even:bg-gray-400" data-itemname="entrance-item"
        >{i + 1}</button
      >
    {/each}
  </div>
  <Hint {max} {hitNumber} />
</div>
