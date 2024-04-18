<script lang="ts">
import BackToHome from "$lib/components/BackToHome.svelte";
</script>

<h1>べからず集</h1>
<div class="catch-copy">
  <pre>
＿人人人人人人人人人人人人人人人人人人人人＿
＞  うそはうそであると見抜ける人でないと  ＜
＞  （掲示板を使うのは）難しい　　　　　  ＜
￣Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^￣</pre>
</div>
<ul>
  <li>
    <span class="important-message">キリ番踏み逃げ禁止！</span
    >管理人までご一報ください
  </li>
  <li>チャット・掲示板の荒らし行為は厳禁です</li>
  <li>ルールやマナーがわからない、守れない場合は半年 ROM りましょう</li>
</ul>
<BackToHome />

<style>
  h1 {
    margin-top: 2rem;
    color: #ff3e00;
    font-style: italic;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 2.8rem;
  }

  .catch-copy {
    margin: auto;
    background-color: #333;
    padding: 0.5rem 0.3rem;
    max-width: 310px;
  }

  .catch-copy pre {
    color: #fff;
    font-size: 0.8rem;
  }

  ul {
    padding-left: 0;
  }

  .important-message {
    color: #f00;
    font-weight: bold;
  }
</style>
