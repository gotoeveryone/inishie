<script lang="ts">
import { goto } from "$app/navigation";

interface Item {
	isNew: boolean;
	label: string;
	link?: string;
	description: string;
}

export let items: Item[];
const click = (item: Item) => (item.link ? goto(item.link) : alert("工事中！"));
</script>

<table>
  {#each items as item}
    <tr>
      <td>
        <a href={"javascript:void(0)"} on:click={() => click(item)}
          >{item.label}</a
        >
        {#if item.isNew}
          <span class="is-new">NEW!</span>
        {/if}
      </td>
      <td contenteditable="true" bind:innerHTML={item.description} />
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

  a {
    font-weight: bold;
  }

  .is-new {
    color: red;
    font-size: 80%;
  }
</style>
