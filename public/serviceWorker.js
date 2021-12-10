// キャッシュに保存するアセットファイル一覧
const staticAssets = [
  "./",
  "./global.css",
  "./build/bundle.css",
  "./build/bundle.js",
];

// リクエスト発生時のイベント
self.addEventListener("fetch", async event => {
  // GET リクエスト以外は処理しない
  if (event.request.method != "GET") {
    return;
  }

  const { request } = event;

  // 自前の処理を行いたいので respondWith() を使う
  event.respondWith(() => {
    const cache = await caches.open("inishie-cache");
    const cachedResponse = await caches.match(request)

    // キャッシュが存在した場合は更新しておく
    if (cachedResponse) {
      event.waitUntil(cache.add(event.request));
      return cachedResponse;
    }

    // キャッシュが存在しなかった場合はリソースを取得
    return fetch(request)
  });
});
