document.querySelector('#start_scan').addEventListener('click', () => {
    document.querySelector('#zero_state').classList.add('hidden');
})

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('../service-worker.js')
            .then(function (registration) {
                return registration.update();
            })
    });
}