<script lang="ts">
import AppFooter from "$lib/components/Footer.svelte";
import AppTable from "$lib/components/Table.svelte";

const items = [
	{
		isNew: true,
		link: "/chat",
		label: "チャット",
		description:
			"チャット開設しました。<br/>お気軽にコメントしていってください！<br/>キリ番報告もこちらからどうぞ！",
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
	{ isNew: false, label: "リンク集", description: "相互リンク歓迎！" },
];
</script>

<h1>-Inishie-</h1>
<div>
  <div class="table">
    <AppTable {items} />
  </div>
  <div class="back-link">
    <a href={"/"}>戻る</a>
  </div>
</div>
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

  .table {
    display: flex;
    align-items: center;
    justify-content: center;
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
