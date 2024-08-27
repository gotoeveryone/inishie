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

<div class="mx-auto px-4 md:px-2 py-4 max-w-[800px]">
  <h1 class="italic font-bold uppercase leading-normal text-4xl md:text-8xl text-red-500 tracking-[1.2rem]">-Inishie-</h1>
  <div class="mt-4">
    <div class="flex items-center justify-center">
      <AppTable {items} />
    </div>
    <div class="mt-2">
      <a href={"/"}>戻る</a>
    </div>
  </div>
  <AppFooter />
</div>
