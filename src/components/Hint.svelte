<script lang="ts">
  export let max;
  export let hitNumber;

  const hintLabel = () => {
    if (hitNumber === max) {
      return "一番大きい数";
    }
    if (hitNumber % 3 === 0) {
      return "3で割れる数字です";
    }
    if (hitNumber % 2 === 0) {
      return "偶数かも…？";
    }
    return "奇数かも…？";
  };
</script>

<div class="hint">
  <h3>↓↓↓ヒント↓↓↓</h3>
  <div class="hint-label">{hintLabel()}</div>
</div>

<style>
  .hint {
    max-width: 400px;
    margin: 5px auto 15px;
  }

  .hint-label {
    margin-top: 100px;
    color: transparent;
  }

  .hint-label::selection {
    background-color: #876;
    color: #ddd;
  }
</style>
