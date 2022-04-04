import { startLoader } from './loader.js';
import { html, body } from './variables.js';

export const showBarcodeSection = () => {
    html.classList.add('overflow_hidden');
    body.classList.add('overflow_hidden');
    startLoader();
}