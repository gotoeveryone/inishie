/// <reference lib="webworker" />
import {
	cleanupOutdatedCaches,
	precacheAndRoute,
	type PrecacheEntry,
} from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import {
	CacheFirst,
	NetworkFirst,
	StaleWhileRevalidate,
} from "workbox-strategies";
import { ExpirationPlugin } from "workbox-expiration";
import { clientsClaim } from "workbox-core";

declare let self: ServiceWorkerGlobalScope & {
	__WB_MANIFEST: Array<PrecacheEntry>;
};

clientsClaim();
precacheAndRoute(self.__WB_MANIFEST);
cleanupOutdatedCaches();

// HTML ナビゲーションはネット優先（オフライン時はキャッシュ）
registerRoute(
	({ request }) => request.mode === "navigate",
	new NetworkFirst({
		cacheName: "pages",
		networkTimeoutSeconds: 3,
		plugins: [
			new ExpirationPlugin({
				maxEntries: 50,
				purgeOnQuotaError: true,
			}),
		],
	}),
);

// JS/CSS/ワーカーは stale-while-revalidate
registerRoute(
	({ request }) =>
		request.destination === "script" ||
		request.destination === "style" ||
		request.destination === "worker",
	new StaleWhileRevalidate({
		cacheName: "assets",
	}),
);

// 画像は cache-first
registerRoute(
	({ request }) => request.destination === "image",
	new CacheFirst({
		cacheName: "images",
		plugins: [
			new ExpirationPlugin({
				maxEntries: 100,
				maxAgeSeconds: 60 * 60 * 24 * 30,
				purgeOnQuotaError: true,
			}),
		],
	}),
);
