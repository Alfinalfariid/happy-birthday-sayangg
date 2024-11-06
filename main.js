// Dapatkan elemen pop-up
var popup = document.getElementById("popup");

// Dapatkan tombol Play
var playBtn = document.querySelector(".btn");

// Dapatkan elemen close
var closeBtn = document.getElementsByClassName("close")[0];

// Ketika tombol Play diklik, tampilkan pop-up
// Ketika tombol Play diklik, tampilkan pop-up dengan animasi
playBtn.onclick = function () {
    popup.style.display = "block";
    // Tunggu sebentar sebelum menambahkan class show untuk memulai animasi
    setTimeout(() => {
        popup.classList.add("show");
    }, 10);
}

function openPopup() {
    document.getElementById('popup').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closePopup() {
    document.getElementById('popup').classList.remove('show');
    document.body.style.overflow = 'auto';
}


// Ketika tombol close diklik, sembunyikan pop-up dengan animasi
closeBtn.onclick = function () {
    popup.classList.remove("show");
    // Tunggu animasi selesai sebelum menyembunyikan popup
    setTimeout(() => {
        popup.style.display = "none";
    }, 300); // Waktu harus sama dengan durasi transition di CSS
}

// Ketika user mengklik di luar pop-up
window.onclick = function (event) {
    if (event.target == popup) {
        popup.classList.remove("show");
        setTimeout(() => {
            popup.style.display = "none";
        }, 300);
    }
}

