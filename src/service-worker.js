const CORE = 'core-cache';
const CORE_FILES = [
    '/css/styles.css',
    'js/app.js'
]

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CORE).then(function (cache) {
            return cache.addAll(CORE_FILES);
        })
    )
    console.log("[serviceWorker] is installed");
})