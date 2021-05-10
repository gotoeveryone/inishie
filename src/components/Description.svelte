<script>
  import Counter from "./Counter.svelte";
</script>

<div>
  <div class="description">
    <span>あなたは</span>
    <Counter />
    <span>人目の大事なお客様です。</span>
  </div>
</div>

<style>
  .description {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px auto;
    color: #000;
    font-style: italic;
  }

  @media (max-width: 639px) {
    .description {
      flex-direction: column;
    }
  }
</style>
