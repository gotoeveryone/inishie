<script lang="ts">
  import { onMount } from "svelte";
  import { push } from "svelte-spa-router";
  import AppDescription from "@/components/Description.svelte";
  import AppFooter from "@/components/Footer.svelte";
  import AppEntrance from "@/components/Entrance.svelte";
  import AccessLogRepository from "@/repositories/access_log";

  const repo = new AccessLogRepository();

  const names = ["太郎", "次郎", "三郎"];
  const name = names[Math.floor(Math.random() * names.length)];

  const moveToHome = () => push("/home");

  if (!(import.meta as any).env.DEV) {
    onMount(async () => {
      const userAgent = window.navigator.userAgent;
      return repo.create(userAgent).catch(console.error);
    });
  }
</script>

<h1>-Inishie-</h1>
<AppDescription />
<div>前回のキリ番は!!! <span class="highlight">{name}</span> さんでした。</div>
<div class="marquee">
  <div class="marquee-inner">
    Inishie へようこそ！ゆっくりしていってください。
  </div>
</div>
<AppEntrance on:show={moveToHome} />
<AppFooter />

<style>
  h1 {
    color: #ff3e00;
    font-style: italic;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 6rem;
    letter-spacing: 1.2rem;
  }

  .highlight {
    font-weight: bold;
    font-style: italic;
    font-size: 120%;
    color: red;
  }

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

  @media (max-width: 639px) {
    h1 {
      font-size: 2rem;
    }
  }
</style>
