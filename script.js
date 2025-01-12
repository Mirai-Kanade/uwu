function checkLogin() {
    const username = document.getElementById('username').value.trim();
    const loginContainer = document.getElementById('login-container');
    const mainContent = document.getElementById('main-content');

    if (username) {
        loginContainer.style.display = 'none';
        mainContent.style.display = 'flex';

        // Update pesan selamat datang
        const welcomeMessage = document.getElementById('welcome-message');
        welcomeMessage.textContent = `Selamat datang, ${username}! 💖`;
    } else {
        alert('Masukkan nama pacarmu dulu, dong!');
    }
}

function showLoveAnimation() {
    const loveAnimation = document.getElementById('love-animation');
    loveAnimation.style.display = 'block';

    setTimeout(() => {
        loveAnimation.style.display = 'none';
    }, 2000);
}

function goBack() {
    const loginContainer = document.getElementById('login-container');
    const mainContent = document.getElementById('main-content');

    loginContainer.style.display = 'flex';
    mainContent.style.display = 'none';

    // Reset input field
    document.getElementById('username').value = '';
}
