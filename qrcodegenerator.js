function generateQRCode() {
    const text = document.getElementById('textInput').value;
    const qrCodeContainer = document.getElementById('qrcode');

    qrCodeContainer.innerHTML = ""; // Hapus QR code sebelumnya

    if (!text) {
        alert('Masukkan teks atau URL!');
        return;
    }

    new QRCode(qrCodeContainer, {
        text: text,
        width: 300,
        height: 300,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}

function downloadQRCode() {
    const qrCanvas = document.querySelector("#qrcode canvas");
    if (!qrCanvas) {
        alert("Harap generate QR Code terlebih dahulu!");
        return;
    }
    const link = document.createElement("a");
    link.href = qrCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    link.download = "qrcode_hd.png";
    link.click();
}