const staticAssets = [
  "./",
  "./global.css",
  "./build/bundle.css",
  "./build/bundle.js",
];

// Service Workerの 新規インストール/更新時 のイベント
self.addEventListener("install", async () => {
  const cache = await caches.open("inishie-cache");
  cache.addAll(staticAssets);
});

// 何かしらのリクエストが発生した時のイベント
self.addEventListener("fetch", async e => {
  const req = e.request;

  // respondWith()を使うことで、
  // 既定の fetch ハンドリングを抑止して、
  // 自分で Response用のPromiseを引数で指定できる
  e.respondWith(cacheFirst(req));
});

/**
* 指定のリクエストの結果が
* キャッシュに存在する場合はキャッシュを返し、
* キャッシュに存在しない場合はfetchでリクエストした結果を返す
*
* @param {RequestInfo} req
* @returns {Promise<Response>}
*/
async function cacheFirst(req) {
  const cachedResponse = await caches.match(req)
  return cachedResponse || fetch(req)
}
