<script>
  import AppDescription from "./components/Description.svelte";
  import AppFooter from "./components/Footer.svelte";
  import AppTable from "./components/Table.svelte";
  const names = ["太郎", "次郎", "三郎"];
  const name = names[Math.floor(Math.random() * names.length)];
  const items = [
    { label: "べからず集", description: "はじめにこちらをご覧ください" },
    {
      label: "メインコンテンツ",
      description: "当サイトのメインコンテンツです",
    },
    { label: "掲示板", description: "キリ番報告はこちらからどうぞ" },
    { label: "リンク集", description: "相互リンク歓迎！" },
  ];

  let stalker;

  document.addEventListener("mousemove", (e) => {
    stalker.style.transform =
      "translate(" + e.clientX + "px, " + e.clientY + "px)";
  });
</script>

<main>
  <h1>Welcome to My website!</h1>
  <AppDescription />
  <div>前回のキリ番は{name}さんでした。</div>
  <center>
    <AppTable {items} />
  </center>
  <AppFooter />
  <div class="stalker" bind:this={stalker} />
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, #3c3d3c, #cde027, #1038bd);
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    font-style: italic;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 5rem;
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

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  @media (max-width: 639px) {
    h1 {
      font-size: 2rem;
    }
  }
</style>
