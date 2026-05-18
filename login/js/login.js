document.getElementById("loginForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    try {
        const res = await fetch("https://domainkamu.com/api/auth.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body:
                `action=login&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
        });

        const data = await res.json();

        if (data.status === "success") {

            localStorage.setItem("isLogin", "true");
            localStorage.setItem("username", data.username);

            window.location.href = "../index.html";

        } else {

            const alertBox = document.getElementById("alertbox");
            alertBox.innerText = "Username atau password salah!";
            alertBox.style.display = "block";

            setTimeout(() => {
                alertBox.style.display = "none";
            }, 3000);
        }

    } catch (err) {
        console.error(err);
        alert("Server error");
    }
});
