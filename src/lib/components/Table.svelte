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

<table class="border-collapse border-spacing-3 border-2 border-black">
  {#each items as item}
    <tr class="border-2 border-black">
      <td class="p-1 border-2 border-black align-middle">
        <a class="font-bold" href={"javascript:void(0)"} on:click={() => click(item)}
          >{item.label}</a
        >
        {#if item.isNew}
          <span class="text-red-600 text-xs">NEW!</span>
        {/if}
      </td>
      <td class="p-1 border-2 border-black align-middle" contenteditable="true" bind:innerHTML={item.description} />
    </tr>
  {/each}
</table>
