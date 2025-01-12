// Navigate to the next page
function goToNextPage() {
    const username = document.getElementById("username").value;
    if (username.trim() === "") {
        alert("Masukkan nama pacar dulu, dong!");
        return;
    }

    document.getElementById("login-container").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    document.getElementById("display-name").textContent = username;
}

// Love animation when the image is clicked
function showLoveAnimation() {
    const loveAnimation = document.getElementById("love-animation");
    const love = document.createElement("div");
    love.classList.add("love");

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    love.style.left = `${x}px`;
    love.style.top = `${y}px`;

    love.textContent = "💖";
    loveAnimation.appendChild(love);

    setTimeout(() => {
        love.remove();
    }, 1500);
}
