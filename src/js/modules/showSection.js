import { startLoader } from './loader.js';
import { html, body, barcodeSection, videoDiv, articleProduct, errorPopup } from './variables.js';

const showBarcodeSection = () => {
    html.classList.add('overflow_hidden');
    body.classList.add('overflow_hidden');
    startLoader();
    articleProduct.classList.add('hidden');
}

const showProductSection = () => {
    html.classList.add('overflow_hidden');
    body.classList.remove('overflow_hidden');
    videoDiv.innerHTML = '';
    barcodeSection.classList.remove('infaden');
    articleProduct.classList.remove('hidden');
    errorPopup.classList.add('hidden');
}

export { showBarcodeSection, showProductSection }