// document.querySelector('#start_scan').addEventListener('click', () => {
//     document.querySelector('#zero_state').classList.add('hidden');
// })

import startDetecting from './modules/startScanner.js';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/service-worker.js')
            .then(function (registration) {
                return registration.update();
            })
    });
}

if (window.location.pathname === '/barcode') {
    startDetecting()
}