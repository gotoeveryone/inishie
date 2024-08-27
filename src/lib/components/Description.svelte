<script lang="ts">
import Counter from "$lib/components/Counter.svelte";

const names = ["太郎", "次郎", "三郎"];
const name = names[Math.floor(Math.random() * names.length)];
</script>

<div>
  <div class="flex items-center justify-center flex-col md:flex-col mx-auto my-2 md:my-4 italic text-black">
    <span>あなたは</span>
    <Counter />
    <span>人目の大事なお客様です。</span>
  </div>
  <div>前回のキリ番は <span class="font-bold italic text-xl text-red-600">{name}</span> さんでした。</div>
</div>
