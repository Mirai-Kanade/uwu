// script.js
function checkLogin() {
    const username = document.getElementById('username').value.toLowerCase();
    const allowedNames = ["halfy", "halfi", "halfy", "halfi"];

    if (allowedNames.includes(username)) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        alert('Nama yang kamu masukkan salah! Coba lagi.');
    }
}

function showLoveAnimation() {
    const loveAnimation = document.getElementById('love-animation');
    loveAnimation.style.display = 'block';

    // Hide the animation after 1 second
    setTimeout(function() {
        loveAnimation.style.display = 'none';
    }, 1000);
}
