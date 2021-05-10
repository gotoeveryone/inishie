<script>
  const click = () => alert("お見事！\n掲示板からぜひ報告してね！");
</script>

<footer>
  <div>
    Powered by k2ss.<a href={"javascript:void(0)"} on:click={click}>info</a>
  </div>
</footer>

<style>
  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 30px;
    font-size: 12px;
    color: #fff;
  }
  a {
    color: inherit;
  }
</style>
