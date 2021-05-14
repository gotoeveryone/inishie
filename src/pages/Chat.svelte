<script>
  import { onMount } from "svelte";
  import firebase from "firebase/app";
  import "firebase/database";

  let username = null;
  let content = null;

  const submit = () => {
    const ref = firebase.database().ref('messages');
    ref.push({ username, content, timestamp: Date.now() }).then(() => {
      // コンテンツは投稿のたびクリアする
      content = null;
    }).catch(console.error);
  };

  let messages = {};

  onMount(async () => {
    const messagesRef = await firebase.database().ref('messages').orderByChild('timestamp');
    messagesRef.on('value', (snapshot) => {
      messages = snapshot.val() || [];
    });
  });
</script>

<div class="container">
  <div>チャットページ</div>
  <form class="form">
    <div class="form-control">
      <input type="text" maxlength="20" placeholder="ユーザー名" bind:value="{username}">
    </div>
    <div class="form-control">
      <input type="text" maxlength="100" placeholder="メッセージ" bind:value="{content}">
    </div>
    <div class="form-control">
      <button on:click="{submit}">送信</button>
    </div>
  </form>
  <ul class="messages">
    {#each Object.values(messages) as message}
    <li>
      <span>
        {message.username}: {message.content || ''} <time>{message.timestamp || ''}</time>
      </span>
    </li>
    {/each}
  </ul>
</div>

<style>
  .container {
    padding: 10px 20px;
  }

  .form {
    display: flex;
    align-items: center;
  }

  .form-control:not(:first-child) {
    display: flex;
    align-items: center;
    margin-left: 5px;
  }

  .form-control input {
    margin-bottom: 0;
  }

  .messages {
    padding-left: 0;
    list-style: none;
  }

  .messages li {
    padding: 5px 0;
    border-bottom: 2px solid #999;
    text-align: left;
  }
</style>
