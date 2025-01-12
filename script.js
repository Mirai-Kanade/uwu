function checkLogin() {
    const username = document.getElementById('username').value.trim();
    const loginContainer = document.getElementById('login-container');
    const mainContent = document.getElementById('main-content');
    const backButton = document.getElementById('back-button');

    if (username) {
        loginContainer.style.display = 'none';
        mainContent.style.display = 'flex';
        backButton.style.display = 'block';

        // Update pesan selamat datang
        const welcomeMessage = document.getElementById('welcome-message');
        welcomeMessage.textContent = `Selamat datang, ${username}! 💖`;
    } else {
        alert('Masukkan nama pacarmu dulu, dong!');
    }
}

function showLoveAnimation() {
    const loveAnimation = document.getElementById('love-animation');
    const pacarImg = document.getElementById('pacar-img');

    // Posisi love animation sesuai klik
    const rect = pacarImg.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    loveAnimation.style.left = `${centerX}px`;
    loveAnimation.style.top = `${centerY}px`;

    loveAnimation.style.display = 'block';
    setTimeout(() => {
        loveAnimation.style.display = 'none';
    }, 1000);
}

function goBack() {
    const loginContainer = document.getElementById('login-container');
    const mainContent = document.getElementById('main-content');
    const backButton = document.getElementById('back-button');

    loginContainer.style.display = 'flex';
    mainContent.style.display = 'none';
    backButton.style.display = 'none';

    // Reset input field
    document.getElementById('username').value = '';
}

