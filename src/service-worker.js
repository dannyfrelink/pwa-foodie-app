const CACHE = 'v1';
const HTML_CACHE = 'v1_html';
const CACHE_FILES = [
    // '/invalid',
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
    if (isHtmlGetRequest(event.request) && !isBarcodePage(event.request)) {
        event.respondWith(
          caches.open(HTML_CACHE)
            .then(cache => cache.match(event.request.url))
            .then(response => response ? response : fetchAndCache(event.request))
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

const fetchAndCache = (request) => {
    return fetch(request)
        .then(response => {
            const clone = response.clone()
            caches.open(HTML_CACHE).then((cache) => {
                if(response.type === 'basic') {
                    cache.put(request, clone)
                }
            })
            return response
        })
}

const isBarcodePage = (request) => {
    return getPathName(request.url) == '/barcode'
}

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