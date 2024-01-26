const _version = "v0.0.1";
const cacheName = "pwa-gallery-cache_" + _version;

const log = (...msg) =>
  console.log(`[Fryfolio ServiceWorker ${_version}]`, ...msg);

self.addEventListener("install", () => {
  log("service worker installed");
  self.skipWaiting();
});
