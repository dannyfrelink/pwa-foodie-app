const CACHE = 'v1';
const CACHE_FILES = [
    '/offline',
    '/index.css',
    '/index.js',

];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE)
            .then(cache => {
                cache.addAll(CACHE_FILES)
                    .then(() => self.skipWaiting());
            })
    );
});

// self.addEventListener('activate', (event) => {
//     console.log('activating')
// });

self.addEventListener('fetch', (event) => {
    if (isHtmlGetRequest(event.request)) {
        event.respondWith(
            fetch(event.request)
                .catch(e => {
                    return caches.open(CACHE)
                        .then(cache => cache.match('/offline'))
                })
        )
    }
    else if (isCoreGetRequest(event.request)) {
        event.respondWith(
            caches.open(CACHE)
                .then(cache => cache.match(event.request.url))
        )
    }
});

const isHtmlGetRequest = request => {
    return request.method === 'GET' && (request.headers.get('accept') !== null && request.headers.get('accept').includes('text/html'))
}

const isCoreGetRequest = request => {
    return request.method === 'GET' && CACHE_FILES.includes(getPathName(request.url));
}

const getPathName = requestUrl => {
    const url = new URL(requestUrl);
    return url.pathname;
}