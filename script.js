// Tombol untuk mengganti bahasa
const languageButton = document.getElementById('languageButton');
const flagImage = document.getElementById('flagImage');
const greeting = document.getElementById('greeting');
const aboutMe = document.getElementById('aboutMe');
const projectsTitle = document.getElementById('projectsTitle');
const soonTitle = document.getElementById('soonTitle');
const soonDescription = document.getElementById('soonDescription');

let isIndonesian = false;

languageButton.addEventListener('click', () => {
    if (!isIndonesian) {
        // Ubah ke bahasa Indonesia
        greeting.textContent = 'Halo, saya VannTakashii';
        aboutMe.innerHTML = `
            Nama: Revan Andrean<br>
            Nama Panggilan: VannTakashi<br>
            Usia: 17<br>
            Negara: Indonesia<br>
            Hobi? gatau<br>
            Channel: @epanntakaci
        `;
        projectsTitle.textContent = 'Proyek yang Saya Dukung'; // Ubah judul menu
        soonTitle.textContent = 'Segera Hadir'; // Ubah judul "Coming Soon"
        soonDescription.textContent = 'Bagian ini sedang dalam pengembangan.'; // Ubah deskripsi "Coming Soon"
        flagImage.src = 'assets/us-flag.png'; // Tampilkan bendera Amerika
        isIndonesian = true;
    } else {
        // Ubah kembali ke bahasa Inggris
        greeting.textContent = 'Hello, I\'m VannTakashi';
        aboutMe.innerHTML = `
            Name: VannTakashi<br>
            Nickname: Revan Andrean<br>
            Age: 17<br>
            Country: Indonesia<br>
            my hobby? idk<br>
            Channel: @epanntakaci
        `;
        projectsTitle.textContent = 'My Supported Projects'; // Kembalikan judul menu ke bahasa Inggris
        soonTitle.textContent = 'Coming Soon'; // Kembalikan judul "Coming Soon" ke bahasa Inggris
        soonDescription.textContent = 'This section is under development.'; // Kembalikan deskripsi "Coming Soon" ke bahasa Inggris
        flagImage.src = 'assets/id-flag.png'; // Tampilkan bendera Indonesia
        isIndonesian = false;
    }
});

// Membuka/menutup menu
const menuButton = document.getElementById('menuButton');
const projectsMenu = document.getElementById('projectsMenu');

menuButton.addEventListener('click', () => {
    projectsMenu.classList.toggle('active'); // Tampilkan/sembunyikan menu
});

// Menutup menu jika klik di luar area menu
document.addEventListener('click', (event) => {
    if (!projectsMenu.contains(event.target) && event.target !== menuButton) {
        projectsMenu.classList.remove('active');
    }
});

// Menu geser GitHub Cloud (kanan)
const githubCloudButton = document.getElementById('githubCloudButton');
const githubSoonMenu = document.getElementById('githubSoonMenu');

githubCloudButton.addEventListener('click', () => {
    githubSoonMenu.classList.toggle('active'); // Tampilkan/sembunyikan menu di kanan
});

// Menutup menu GitHub Cloud jika klik di luar area menu
document.addEventListener('click', (event) => {
    if (!githubSoonMenu.contains(event.target) && event.target !== githubCloudButton) {
        githubSoonMenu.classList.remove('active');
    }
});