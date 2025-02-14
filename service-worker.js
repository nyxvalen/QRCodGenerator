self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('q-cache').then(function(cache) {
            return cache.addAll([
                './index.html',
                './manifest.json',
                './icon/icon-192x192.png',
                './icon/icon-512x512.png',
                './qrcode.min.js'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});