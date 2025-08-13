// Cek autentikasi awal
if (sessionStorage.getItem('amu-authenticated') !== 'true') {
    window.location.href = 'login.html'; 
}

// --- Logika Baru untuk Timeout Otomatis ---

let timeoutDetik; // Variabel untuk menampung timer

// Fungsi untuk "logout"
function logout() {
    sessionStorage.removeItem('amu-authenticated'); // Hapus kunci autentikasi
    alert("Sesi Anda telah berakhir karena tidak ada aktivitas. Silakan login kembali.");
    window.location.href = 'login.html'; // Arahkan ke halaman login
}

// Fungsi untuk mereset timer
function resetTimer() {
    clearTimeout(timeoutDetik); // Hapus timer yang lama
    // Atur timer baru selama 5 menit (300,000 milidetik)
    timeoutDetik = setTimeout(logout, 5 * 60 * 1000); 
}

// Jalankan reset timer saat halaman pertama kali dimuat
document.addEventListener('DOMContentLoaded', resetTimer);

// Reset timer setiap kali ada aktivitas dari pengguna
document.addEventListener('mousemove', resetTimer);
document.addEventListener('keydown', resetTimer);
document.addEventListener('click', resetTimer);