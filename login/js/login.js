document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");
    const alertBox = document.getElementById("alertbox");

    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        // validasi input
        if (!username || !password) {
            showAlert("Username dan password wajib diisi!");
            return;
        }

        try {

            // request ke API seperti Vcame
            const response = await fetch(
                "https://herisusanta.my.id/javalogin/api/auth.php",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/x-www-form-urlencoded",
                    },
                    body:
                        `action=login&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
                }
            );

            const data = await response.json();

            console.log(data);

            // login berhasil
            if (data.status === "success") {

                // simpan status login
                localStorage.setItem("isLogin", "true");
                localStorage.setItem("username", username);

                // redirect
                window.location.href = "../index.html";

            } else {

                // login gagal
                showAlert(
                    data.message ||
                    "Username atau password salah!"
                );
            }

        } catch (error) {

            console.error(error);

            showAlert(
                "Tidak dapat terhubung ke server!"
            );
        }
    });

    // fungsi alert
    function showAlert(message) {

        if (!alertBox) {
            alert(message);
            return;
        }

        alertBox.innerText = message;
        alertBox.style.display = "block";

        setTimeout(() => {
            alertBox.style.display = "none";
        }, 3000);
    }

});
