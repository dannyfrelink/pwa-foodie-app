const html=document.querySelector("html"),body=document.querySelector("body"),barcodeSection=document.querySelector("main>section"),video=document.createElement("video"),videoDiv=document.querySelector("#video"),loader=document.querySelector("#loader"),invalidBarcode=document.querySelector("#invalid_code");
const startLoader=()=>{loader.classList.remove("hidden")},stopLoader=()=>{loader.classList.add("hidden")};
const showBarcodeSection=()=>{html.classList.add("overflow_hidden"),body.classList.add("overflow_hidden"),startLoader()};
const stopDetecting=()=>{html.classList.remove("overflow_hidden"),body.classList.remove("overflow_hidden"),videoDiv.innerHTML="",stopScanner()},stopScanner=()=>{const e=video.srcObject.getTracks();e.forEach(e=>e.stop())};
const startDetecting=async()=>{showBarcodeSection();const e=new BarcodeDetector;let a=[];var o=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});let t;video.srcObject=o,await video.play(),videoDiv.append(video),stopLoader(),barcodeSection.classList.add("infaden");const i=()=>{requestAnimationFrame(i),e.detect(video).then(e=>{e.forEach(e=>{a.includes(e.rawValue)||(a.push(e.rawValue),t=e.rawValue,window.location.pathname="/product/"+t,video.pause(),stopScanner())})}).catch(console.error)};i()};
"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/service-worker.js").then(function(e){return e.update()})}),"/barcode"===window.location.pathname&&startDetecting();