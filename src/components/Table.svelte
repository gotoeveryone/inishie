<script>
  export let items;
  const click = () => alert("工事中！");
</script>

<table>
  {#each items as item}
    <tr>
      <td><button on:click={click}>{item.label}</button></td>
      <td>{item.description}</td>
    </tr>
  {/each}
</table>

<style>
  table {
    border-collapse: collapse;
    border-spacing: 5px;
    border: 2px solid #000;
  }

  tr,
  td {
    padding: 3px 5px;
    border: 2px solid #000;
  }

  td {
    vertical-align: middle;
  }

  button {
    width: 100%;
  }
</style>
