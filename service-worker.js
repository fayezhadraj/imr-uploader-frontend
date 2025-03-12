const CACHE_NAME = 'imr-uploader-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
  // Add any additional assets (e.g., CSS, images) you want cached
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
