const html = document.querySelector('html');
const body = document.querySelector('body');

// Scanner part
const barcodeSection = document.querySelector('main>section');
const video = document.createElement('video');
const videoDiv = document.querySelector('#video');
const loader = document.querySelector('#loader');

// Error state part
const invalidBarcode = document.querySelector('#invalid_code');