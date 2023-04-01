<script lang="ts">
  import { link } from "svelte-spa-router";
</script>

<div class="back-link">
  <a href={"javascript:void(0)"} use:link={"/home"}>戻る</a>
</div>

<style>
  .back-link {
    margin: 5px auto;
  }
</style>
