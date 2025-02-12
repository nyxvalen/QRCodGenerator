qrcodegenerator.js
function generateQRCode() {
    const text = document.getElementById('textInput').value;
    const qrCodeContainer = document.getElementById('qrcode');

    // Hapus QR code sebelumnya jika ada
    qrCodeContainer.innerHTML = "";

    // Validasi input
    if (!text) {
        alert('Masukkan teks atau URL!');
        return;
    }

    // Buat QR code baru
    new QRCode(qrCodeContainer, {
        text: text,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}