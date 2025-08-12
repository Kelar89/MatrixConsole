document.addEventListener("DOMContentLoaded", function() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');
    const currentPage = window.location.pathname.split('/').pop(); // Mendapatkan nama file saat ini, misal "inverse.html"

    if (headerPlaceholder) {
        fetch('_header.html')
            .then(response => response.text())
            .then(data => {
                headerPlaceholder.innerHTML = data;
                // Logika untuk menandai link aktif
                const navLinks = document.querySelectorAll('#nav-links a');
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === currentPage) {
                        link.classList.add('is-active');
                    }
                });
            });
    }

    if (footerPlaceholder) {
        fetch('_footer.html')
            .then(response => response.text())
            .then(data => {
                footerPlaceholder.innerHTML = data;
            });
    }
});