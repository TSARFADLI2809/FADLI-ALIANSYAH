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

const words = ["Fadli Aliansyah"];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");

    function loopTyping() {
        if (word.length > 0) {
            document.querySelector(".typing").innerHTML += word.shift();
            timer = setTimeout(loopTyping, 100);
        } else {
            setTimeout(deletingEffect, 2000);
        }
    }

    loopTyping();
}

function deletingEffect() {
    let text = document.querySelector(".typing").innerHTML.split("");

    function loopDeleting() {
        if (text.length > 0) {
            text.pop();
            document.querySelector(".typing").innerHTML = text.join("");
            setTimeout(loopDeleting, 60);
        } else {
            setTimeout(typingEffect, 500);
        }
    }

    loopDeleting();
}

document.addEventListener("DOMContentLoaded", typingEffect);

//Mengubah background Navbar saat di-scroll//
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});