// script.js
function checkLogin() {
    const username = document.getElementById('username').value.trim().toLowerCase(); // Trim untuk menghapus spasi yang tidak diinginkan
    const allowedNames = ["halfy", "halfi"];

    console.log('Nama yang dimasukkan:', username);  // Log untuk memeriksa apa yang dimasukkan

    if (allowedNames.includes(username)) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        alert('Nama yang kamu masukkan salah! Coba lagi.');
    }
}


    // Hide the animation after 1 second
    setTimeout(function() {
        loveAnimation.style.display = 'none';
    }, 1000);
}
