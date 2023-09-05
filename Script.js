// Ambil elemen-elemen yang dibutuhkan
const dropdownMenu = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');
const content = document.getElementById('content');

// Definisikan konten untuk setiap menu
const menu1Content = '<h1>Ini adalah Menu 1</h1><p>Isi konten Menu 1 di sini.</p>';
const menu2Content = '<h1>Ini adalah Menu 2</h1><p>Isi konten Menu 2 di sini.</p>';
const menu3Content = '<h1>Ini adalah Menu 3</h1><p>Isi konten Menu 3 di sini.</p>';

// Tambahkan event listener untuk setiap menu dropdown
dropdownContent.children[0].addEventListener('click', () => {
    content.innerHTML = menu1Content;
});

dropdownContent.children[1].addEventListener('click', () => {
    content.innerHTML = menu2Content;
});

dropdownContent.children[2].addEventListener('click', () => {
    content.innerHTML = menu3Content;
});
