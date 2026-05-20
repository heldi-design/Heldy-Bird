document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name') || "Produk Pilihan";
    const price = urlParams.get('price') || "0";
    
    const detailElement = document.getElementById('detail');
    const payButton = document.getElementById('btn-pay');
    const box = document.querySelector('.box');

    // Tampilkan detail produk dari URL
    if (detailElement) {
        detailElement.innerText = `Anda akan membeli ${name} seharga Rp ${price}`;
    }

    payButton.addEventListener('click', () => {
        const selectedMethod = document.querySelector('input[name="method"]:checked');
        
        if (selectedMethod) {
            // Efek Transisi Keluar
            box.style.opacity = '0';
            box.style.transform = 'scale(0.9) translateY(20px)';
            
            setTimeout(() => {
                // Mengubah isi Box menjadi Tampilan Sukses
                box.innerHTML = `
                    <div class="success-wrapper">
                        <div class="check-icon">✓</div>
                        <h2 style="margin:0;">Pembayaran Berhasil!</h2>
                        <p style="color:#666;">Terima kasih telah berbelanja di Pixel Bird Market.</p>
                        <div class="receipt-mini">
                            <p style="margin:5px 0;"><strong>Produk:</strong> ${name}</p>
                            <p style="margin:5px 0;"><strong>Metode:</strong> ${selectedMethod.value}</p>
                            <p style="margin:5px 0;"><strong>Total:</strong> Rp ${price}</p>
                        </div>
                        <button onclick="window.location.href='index.html'" class="btn-confirm">Kembali ke Beranda</button>
                    </div>
                `;
                // Efek Transisi Masuk
                box.style.opacity = '1';
                box.style.transform = 'scale(1) translateY(0)';
            }, 500);
        } else {
            alert('Silakan pilih metode pembayaran.');
        }
    });
});