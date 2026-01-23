<script lang="ts">
import { onMount } from "svelte";
import { pwaInfo } from "virtual:pwa-info";
import { registerSW } from "virtual:pwa-register";
import AppFooter from "$lib/components/Footer.svelte";
import "../app.css";

let stalker: HTMLElement;

$: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : "";

onMount(() => {
	registerSW({ immediate: true });
	document.addEventListener("mousemove", (e) => {
		stalker.style.transform =
			"translate(" + e.clientX + "px, " + e.clientY + "px)";
	});
	document.oncontextmenu = () => {
		alert("\t※※※注意※※※\n★★★右クリック禁止！★★★");
		return false;
	};
});
</script>

<svelte:head>
  {@html webManifestLink}
</svelte:head>

<main class="w-full overflow-auto text-center mt-0 mx-auto mb-8">
  <slot />
</main>
<div class="stalker" bind:this={stalker}></div>
<AppFooter />

<style>
  .stalker {
    pointer-events: none;
    position: fixed;
    top: -8px;
    left: -8px;
    width: 16px;
    height: 16px;
    background: rgba(128, 0, 128, 0.5);
    border-radius: 50%;
    transform: translate(0, 0);
    transition: transform 0.2s;
    transition-timing-function: ease-out;
    z-index: 999;
  }
</style>
