// LOGIN SCRIPT (signin.html)

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); 

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const alertBox = document.getElementById("alertbox");

    // Ambil semua user dari localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Cari user yang cocok
    const userFound = users.find(user => 
        user.username === username && user.password === password
    );

    if (userFound) {
        localStorage.setItem("isLogin", "true");
        localStorage.setItem("username", username);
        window.location.href = "../index.html";
    } else {
        alertBox.innerText = "Username atau password salah!";
        alertBox.style.display = "block";
        setTimeout(() => alertBox.style.display = "none", 3000);
    }
});
