<script lang="ts">
  import Counter from "@/components/Counter.svelte";

  const names = ["太郎", "次郎", "三郎"];
  const name = names[Math.floor(Math.random() * names.length)];
</script>

<div>
  <div class="description">
    <span>あなたは</span>
    <Counter />
    <span>人目の大事なお客様です。</span>
  </div>
  <div>前回のキリ番は <span class="highlight">{name}</span> さんでした。</div>
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

  .highlight {
    font-weight: bold;
    font-style: italic;
    font-size: 120%;
    color: red;
  }

  @media (max-width: 639px) {
    .description {
      flex-direction: column;
    }
  }
</style>
