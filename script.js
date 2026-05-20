document.addEventListener('DOMContentLoaded', () => {
    const filterBtn = document.getElementById('price-filter');
    const container = document.getElementById('listings');
    const searchInput = document.getElementById('search-input');
    let lowToHigh = true;

    // Fungsi Pencarian
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const items = document.querySelectorAll('.listing');

        items.forEach(item => {
            const name = item.getAttribute('data-name').toLowerCase();
            if (name.includes(term)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    // Fungsi Sortir Harga
    filterBtn.addEventListener('click', () => {
        const items = Array.from(container.getElementsByClassName('listing'));
        items.sort((a, b) => {
            const priceA = parseInt(a.getAttribute('data-price'));
            const priceB = parseInt(b.getAttribute('data-price'));
            return lowToHigh ? priceA - priceB : priceB - priceA;
        });
        items.forEach(item => container.appendChild(item));
        lowToHigh = !lowToHigh;
        filterBtn.innerText = lowToHigh ? "Harga ▼" : "Harga ▲";
    });
});

// Fungsi Navigasi Pembayaran
function goToPayment(name, price) {
    window.location.href = `pembayaran.html?name=${name}&price=${price}`;
}
