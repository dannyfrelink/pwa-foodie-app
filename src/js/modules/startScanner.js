import { barcodeSection, video, videoDiv } from './variables.js';
import { showBarcodeSection } from './showSection.js';
import { stopLoader } from './loader.js';
import { stopScanner } from './stopScanner.js';

export default async function startDetecting() {
    showBarcodeSection();

    const barcodeDetector = new BarcodeDetector();
    let itemsFound = [];
    const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
            facingMode: 'environment'
        }
    });

    let barcodeValue;

    video.srcObject = mediaStream;
    await video.play();

    videoDiv.append(video);

    stopLoader();
    barcodeSection.classList.add('infaden');

    const render = () => {
        barcodeDetector
            .detect(video)
            .then((barcodes) => {
                barcodes.forEach((barcode) => {
                    if (!itemsFound.includes(barcode.rawValue)) {
                        itemsFound.push(barcode.rawValue);
                        barcodeValue = barcode.rawValue;
                        window.location.pathname = `/product/${barcodeValue}`;
                        video.pause();
                        stopScanner();
                    }
                });
            })
            .catch(console.error);
    }

    const renderLoop = () => {
        requestAnimationFrame(renderLoop);
        render();
    }
    renderLoop();
}