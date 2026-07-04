// Efek perubahan Navbar saat di-scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Penanganan Form Kontak (Simulasi Pengiriman)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Mencegah halaman reload
        
        // Mengambil data input
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simulasi notifikasi sukses
        alert(`Terima kasih, ${name}! Pesan Anda telah berhasil disimulasikan untuk dikirim.`);
        
        // Reset form setelah dikirim
        contactForm.reset();
    });
}