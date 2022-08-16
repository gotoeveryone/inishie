<script lang="ts">
  import { onMount } from "svelte";
  import AppDescription from "../components/Description.svelte";
  import AppFooter from "../components/Footer.svelte";
  import AppLinks from "../components/Links.svelte";
  import AppTable from "../components/Table.svelte";
  import AccessLogRepository from "../repositories/access_log";

  const repo = new AccessLogRepository();

  const names = ["太郎", "次郎", "三郎"];
  const name = names[Math.floor(Math.random() * names.length)];
  const items = [
    {
      isNew: true,
      link: "/chat",
      label: "チャット",
      description:
        "チャット開設しました。<br/>お気軽にコメントしていってください！",
    },
    {
      isNew: true,
      link: "/bekarazu",
      label: "べからず集",
      description: "はじめにこちらをご覧ください",
    },
    {
      isNew: false,
      label: "メインコンテンツ",
      description: "当サイトのメインコンテンツです",
    },
    {
      isNew: false,
      label: "掲示板",
      description: "キリ番報告はこちらからどうぞ",
    },
    { isNew: false, label: "リンク集", description: "相互リンク歓迎！" },
  ];

  let isShowTable = false;
  const showTable = () => {
    isShowTable = true;
  };
  const hideTable = () => {
    isShowTable = false;
  };

  if (!process.env.DEBUG) {
    onMount(async () => {
      const userAgent = window.navigator.userAgent;
      return repo.create(userAgent).catch(console.error);
    });
  }
</script>

<h1>-Inishie-</h1>
<AppDescription />
<div>前回のキリ番は <span class="highlight">{name}</span> さんでした。</div>
<div class="marquee">
  <div class="marquee-inner">
    Inishie へようこそ！ゆっくりしていってください。
  </div>
</div>
{#if isShowTable}
  <center>
    <AppTable {items} />
  </center>
  <div class="back-link">
    <a href={"javascript:void(0)"} on:click={hideTable}>戻る</a>
  </div>
{:else}
  <AppLinks on:show={showTable} />
{/if}
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

  .back-link {
    margin: 5px auto;
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
