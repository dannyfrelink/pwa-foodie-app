const stopDetecting = () => {
    html.classList.remove('overflow_hidden');
    body.classList.remove('overflow_hidden');
    videoDiv.innerHTML = '';
    stopScanner();
}

const stopScanner = () => {
    const tracks = video.srcObject.getTracks();
    tracks.forEach(track => track.stop());
}