const CACHE = 'external-v2';
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {
  // Paso directo a red; sin caché agresivo para no servir versiones viejas mientras esto está en desarrollo.
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
