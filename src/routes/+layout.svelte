<script lang="ts">
import { onMount } from "svelte";
import "../app.css";

let stalker: HTMLElement;

onMount(() => {
	document.addEventListener("mousemove", (e) => {
		stalker.style.transform =
			"translate(" + e.clientX + "px, " + e.clientY + "px)";
	});
	document.oncontextmenu = () => {
		alert("\t※※※注意※※※\n★★★右クリック禁止！★★★");
		return false;
	};
	// ServiceWorker の登録
	if ("serviceWorker" in navigator) {
		navigator.serviceWorker
			.register("/serviceWorker.js")
			.then((registration) => {
				if (typeof registration.update == "function") {
					registration.update();
				}
			})
			.catch((error) => {
				console.log("Error Log: " + error);
			});
	}
});
</script>

<main>
  <slot />
</main>
<div class="stalker" bind:this={stalker} />

<style>
  main {
    width: 100%;
    overflow: auto;
    text-align: center;
    margin: 0 auto 30px;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

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
