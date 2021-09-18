<script>
  import dayjs from "dayjs";
  import timezone from "dayjs/plugin/timezone";
  import { onMount } from "svelte";
  import firebase from "firebase/app";
  import "firebase/database";

  dayjs.extend(timezone);
  dayjs.tz.setDefault("Asia/Tokyo");

  let username = null;
  let content = null;

  const submit = () => {
    if (username == null || username.length === 0) {
      alert("※ユーザー名は必須です！");
      return;
    }
    if (content == null || content.length === 0) {
      alert("※メッセージは必須です！");
      return;
    }
    const ref = firebase.database().ref("messages");
    const timestamp = Date.now();
    return ref
      .push({ username, content, timestamp, sortKey: timestamp * -1 })
      .then(() => {
        // コンテンツは投稿のたびクリアする
        content = null;
      })
      .catch(console.error);
  };

  let messages = {};

  onMount(async () => {
    const messagesRef = await firebase
      .database()
      .ref("messages")
      .orderByChild("sortKey")
      .limitToLast(10);
    messagesRef.on("value", (snapshot) => {
      const r = [];
      snapshot.forEach((c) => {
        r.push(c.val());
      });
      messages = r.slice();
    });
  });
</script>

<div class="container">
  <div class="title">チャットページ</div>
  <form class="form">
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
        <button on:click={submit}>送信</button>
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
    padding-left: 0;
    list-style: none;
  }

  .messages li {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
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
