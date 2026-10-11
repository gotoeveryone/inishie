import { dev, version } from "$app/env";
import { assets, immutable, prerendered } from "$app/manifest";
import { asset } from "$app/paths";
import { self } from "$app/service-worker";

const cacheName = `inishie-${version}`;
const precache = new Set([
	...assets.map(({ path }) => asset(path)),
	...immutable.map(({ path }) => new URL(path, self.registration.scope).href),
	...prerendered.map(
		({ path }) =>
			new URL(path ? `${path}.html` : "index.html", self.registration.scope)
				.href,
	),
]);

self.addEventListener("install", (event) => {
	if (dev) return;
	event.waitUntil(
		caches.open(cacheName).then((cache) => cache.addAll(precache)),
	);
});

self.addEventListener("activate", (event) => {
	event.waitUntil(
		Promise.all([
			caches
				.keys()
				.then((names) =>
					Promise.all(
						names
							.filter(
								(name) => name.startsWith("inishie-") && name !== cacheName,
							)
							.map((name) => caches.delete(name)),
					),
				),
			self.clients.claim(),
		]),
	);
});

self.addEventListener("fetch", (event) => {
	if (dev) return;
	const { request } = event;
	if (
		request.method !== "GET" ||
		new URL(request.url).origin !== self.location.origin
	)
		return;

	event.respondWith(
		(async () => {
			const cache = await caches.open(cacheName);
			if (request.mode === "navigate") {
				try {
					return await fetch(request);
				} catch {
					const scopePath = new URL(self.registration.scope).pathname;
					const route = new URL(request.url).pathname
						.slice(scopePath.length)
						.replace(/\/$/, "");
					const page = new URL(
						route ? `${route}.html` : "index.html",
						self.registration.scope,
					);
					const cached = await cache.match(page);
					if (cached) return cached;
					throw new Error(`Offline page unavailable: ${request.url}`);
				}
			}
			return (await cache.match(request)) ?? fetch(request);
		})(),
	);
});
