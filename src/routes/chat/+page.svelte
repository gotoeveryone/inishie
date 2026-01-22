<script lang="ts">
import { onMount } from "svelte";
import BackToHome from "$lib/components/BackToHome.svelte";
import dayjs from "$lib/helpers/dayjs";
import MessageRepository from "$lib/repositories/message";
import type { Message } from "$lib/types/message";

const repo = new MessageRepository();

let username: string = "";
let content: string = "";

const submit = async () => {
	if (username.length === 0) {
		alert("※ユーザー名は必須です！");
		return;
	}
	if (content.length === 0) {
		alert("※メッセージは必須です！");
		return;
	}
	return repo
		.create(username, content)
		.then(async () => {
			// コンテンツは投稿のたびクリアする
			content = "";
		})
		.catch(console.error);
};

let messages = [] as Message[];

onMount(async () => {
	repo.broadcast((data) => {
		console.log("data", data);
		messages = data;
	});
});
</script>

<div class="mb-6 mx-auto px-4 md:px-2 py-4 max-w-[800px]">
  <div class="font-bold text-pink-400 leading-normal text-4xl">Inishie チャットページ</div>
  <form class="flex items-center justify-center flex-col mx-auto" on:submit|preventDefault={submit}>
    <div class="flex items-center justify-center w-full my-2">
      <div class="flex items-start md:items-center flex-col md:flex-row w-full">
        <label class="font-bold w-auto md:w-[150px]" for="username">ユーザー名</label>
        <input class="mb-0 w-full" type="text" id="username" maxlength="20" bind:value={username} />
      </div>
    </div>
    <div class="flex items-center justify-center w-full my-2">
      <div class="flex items-start md:items-center flex-col md:flex-row w-full">
        <label class="font-bold w-auto md:w-[150px]" for="content">メッセージ</label>
        <textarea class="mb-0 w-full h-full" rows="4" id="content" bind:value={content}></textarea>
      </div>
    </div>
    <div class="flex items-center justify-center w-full my-2">
      <div class="flex items-center justify-center md:flex-col w-full">
        <button>送信</button>
      </div>
    </div>
  </form>
  <ul class="list-none">
    {#each Object.values(messages) as message}
      <li class="flex justify-stretch flex-col px-1 border-b-2 border-b-black">
        <div class="flex items-center justify-between border-b px-1 py-2 border-b-slate-400">
          <span class="font-bold">{message.username}</span>
          <time class="text-xs"
            >{dayjs(message.timestamp).format("YYYY-MM-DD HH:mm:ss")}</time
          >
        </div>
        <div class="p-1 text-left">
          {#each message.content.split("\n") as c}
            <div>{c}</div>
          {/each}
        </div>
      </li>
    {/each}
  </ul>
  <BackToHome />
</div>
