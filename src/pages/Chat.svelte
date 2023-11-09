<script lang="ts">
  import { onMount } from "svelte";
  import BackToHome from "@/components/BackToHome.svelte";
  import dayjs from "@/helpers/dayjs";
  import MessageRepository from "@/repositories/message";
  import type { Message } from "@/types/message";

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
      messages = data;
    });
  });
</script>

<div class="container">
  <div class="title">Inishie チャットページ</div>
  <form class="form" on:submit|preventDefault={submit}>
    <div class="form-row">
      <div class="form-control">
        <label for="username">ユーザー名</label>
        <input type="text" id="username" maxlength="20" bind:value={username} />
      </div>
    </div>
    <div class="form-row">
      <div class="form-control">
        <label for="content">メッセージ</label>
        <textarea id="content" bind:value={content} />
      </div>
    </div>
    <div class="form-row">
      <div class="form-control submit">
        <button>送信</button>
      </div>
    </div>
  </form>
  <ul class="messages">
    {#each Object.values(messages) as message}
      <li>
        <div class="message-header">
          <span class="message-username">{message.username}</span>
          <time class="message-date"
            >{dayjs(message.timestamp).format("YYYY-MM-DD HH:mm:ss")}</time
          >
        </div>
        <div class="message-content">
          {#each message.content.split("\n") as c}
            <div>{c}</div>
          {/each}
        </div>
      </li>
    {/each}
  </ul>
  <BackToHome />
</div>

<style>
  .container {
    padding: 10px 20px;
  }

  .title {
    font-weight: bold;
    color: #f0f;
    font-size: 200%;
  }

  .form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .form-row {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    max-width: 800px;
    margin: 5px 0;
  }

  .form-control {
    display: flex;
    align-items: center;
    width: 100%;
  }

  @media (max-width: 639px) {
    .form-control {
      align-items: flex-start;
      flex-direction: column;
    }
  }

  .form-control label {
    font-weight: bold;
    flex-basis: 150px;
  }

  @media (max-width: 639px) {
    .form-control label {
      flex-basis: auto;
    }
  }

  .form-control input,
  .form-control textarea {
    margin-bottom: 0;
    width: 100%;
  }

  .form-control textarea {
    height: 100px;
  }

  .form-control.submit {
    align-items: center;
    justify-content: center;
  }

  .messages {
    max-width: 800px;
    margin: auto;
    padding-left: 0;
    list-style: none;
  }

  .messages li {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    padding: 0.3rem 0;
    text-align: left;
    border-bottom: 2px solid #000;
  }

  .message-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #999;
    padding: 3px 5px;
  }

  .message-username {
    font-weight: bold;
  }

  .message-date {
    font-size: 80%;
  }

  .message-content {
    padding: 5px 10px;
  }
</style>
