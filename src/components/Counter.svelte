<script lang="ts">
  const counter = Array.from(Array(6).keys(), (i) =>
    Math.floor(Math.random() * 10)
  );
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
  }
</style>
