function checkLogin() {
    const username = document.getElementById('username').value.trim();
    const loginContainer = document.getElementById('login-container');
    const mainContent = document.getElementById('main-content');

    if (username) {
        loginContainer.style.display = 'none';
        mainContent.style.display = 'block';

        // Tambahkan nama pacar ke pesan selamat datang
        const welcomeMessage = mainContent.querySelector('h2');
        welcomeMessage.textContent = `Selamat datang, ${username}! 💖`;
    } else {
        alert('Masukkan nama pacarmu dulu, dong!');
    }
}

function showLoveAnimation() {
    const loveAnimation = document.getElementById('love-animation');
    loveAnimation.style.display = 'block';

    // Tambahkan animasi kecil
    setTimeout(() => {
        loveAnimation.style.display = 'none';
    }, 2000);
}


