<script lang="ts">
import { onMount } from "svelte";
import { goto } from "$app/navigation";
import AppDescription from "$lib/components/Description.svelte";
import AppEntrance from "$lib/components/Entrance.svelte";
import AccessLogRepository from "$lib/repositories/access_log";

const repo = new AccessLogRepository();

const moveToHome = () => goto("/home");

onMount(async () => {
	if (!(import.meta as any).env.DEV) {
		const userAgent = window.navigator.userAgent;
		await repo.create(userAgent).catch(console.error);
	}
});
</script>

<h1 class="italic font-bold uppercase leading-normal text-4xl md:text-8xl text-red-500 tracking-[1.2rem]">-Inishie-</h1>
<AppDescription />
<div class="marquee">
  <div class="marquee-inner">
    Inishie へようこそ！ゆっくりしていってください。
  </div>
</div>
<AppEntrance moveToHome={moveToHome} />

<style>
  .marquee {
    margin: 5px auto;
    overflow: hidden;
  }

  .marquee-inner {
    animation-name: marqueeAnimation;
    animation-timing-function: linear;
    animation-duration: 20s;
    animation-iteration-count: infinite;

    margin: 0;
    padding: 0;
    display: block;
    white-space: nowrap;
  }

  @keyframes marqueeAnimation {
    0% {
      transform: translate(65%);
    }
    100% {
      transform: translate(-65%);
    }
  }
</style>
