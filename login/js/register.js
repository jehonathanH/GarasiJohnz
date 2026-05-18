document.getElementById("registerForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    try {

        const res = await fetch("https://herisusanta.my.id/javalogin/api/auth.php", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body:
    `action=register&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
});
        const data = await res.json();

        if (data.status === "success") {

            alert("Registrasi berhasil!");
            window.location.href = "signin.html";

        } else {

            alert(data.message || "Registrasi gagal");

        }

    } catch (err) {
        console.error(err);
        alert("Server error");
    }
});
