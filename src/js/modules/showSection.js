import { startLoader } from './loader.js';
import { html, body, barcodeSection, videoDiv } from './variables.js';

const showBarcodeSection = () => {
    html.classList.add('overflow_hidden');
    body.classList.add('overflow_hidden');
    startLoader();
}

const showProductSection = () => {
    html.classList.add('overflow_hidden');
    body.classList.remove('overflow_hidden');
    videoDiv.innerHTML = '';
    barcodeSection.classList.remove('infaden');
}

export { showBarcodeSection, showProductSection }