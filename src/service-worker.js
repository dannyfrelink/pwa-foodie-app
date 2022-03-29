const CORE = 'core-cache';
const CORE_FILES = [
    '/index.css',
    '/index.js',
    '/offline'
]

self.addEventListener('install', function (event) {
    console.log('installing')
});

self.addEventListener('activate', function (event) {
    console.log('activating')
});

self.addEventListener('fetch', function (event) {
    console.log('fetching')
});