import { body, html, video, videoDiv } from "./variables.js";

export default function stopDetecting() {
    html.classList.remove('overflow_hidden');
    body.classList.remove('overflow_hidden');
    videoDiv.innerHTML = '';
    stopScanner();
}

export const stopScanner = () => {
    const tracks = video.srcObject.getTracks();
    tracks.forEach(track => track.stop());
}