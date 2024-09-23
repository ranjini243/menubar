let qrcode = new QRCode(document.querySelector(".qrcode"));

function generateQR() {
    if (document.querySelector("input").value === "" || document.querySelector("input").value === " ") {
        alert("Input Field Can not be blank!");
    } else {
        qrcode.makeCode(document.querySelector("input").value); // Corrected method name to makeCode
    }
}
