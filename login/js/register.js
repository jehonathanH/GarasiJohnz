// REGISTER SCRIPT (signup.html)

document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Ambil user lama
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Cek apakah username sudah dipakai
    const userExist = users.find(user => user.username === username);

    if (userExist) {
        alert("Username sudah digunakan!");
        return;
    }

    // Simpan user baru
    const newUser = { username, password };
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registrasi berhasil! Silakan login.");
    window.location.href = "signin.html";
});
