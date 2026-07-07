<script lang="ts">
import { onMount } from "svelte";

let isRecommended = true;

onMount(() => {
	isRecommended = window.navigator.userAgent.includes("MSIE");
});
</script>

<div class="mx-auto my-2 text-xs" data-itemname="recommended-environment">
  <div>このサイトは IE5.5 / 800×600 でご覧ください。</div>
  <div>Sorry, This site is Japanese only.</div>
  {#if !isRecommended}
    <div class="mt-1 text-red-500" data-itemname="recommended-environment-warning">
      ※推奨環境外のブラウザです※
    </div>
  {/if}
</div>
