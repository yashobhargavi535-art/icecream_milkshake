/* =========================================
   CREAM HAVEN LOGIN PAGE
   COMPLETE JAVASCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =========================================
       ELEMENTS
       ========================================= */

    const loginForm =
        document.getElementById("loginForm");

    const emailInput =
        document.getElementById("loginEmail");

    const passwordInput =
        document.getElementById("loginPassword");

    const rememberMe =
        document.getElementById("rememberMe");

    const passwordToggle =
        document.getElementById("passwordToggle");

    const rtlToggle =
        document.getElementById("rtlToggle");

    const darkModeToggle =
        document.getElementById("darkModeToggle");


    /* =========================================
       PASSWORD VISIBILITY
       ========================================= */

    if (passwordToggle && passwordInput) {

        passwordToggle.addEventListener("click", function () {

            const isPassword =
                passwordInput.type === "password";


            if (isPassword) {

                passwordInput.type = "text";

                passwordToggle.setAttribute(
                    "aria-label",
                    "Hide password"
                );

                passwordToggle.setAttribute(
                    "title",
                    "Hide password"
                );

            } else {

                passwordInput.type = "password";

                passwordToggle.setAttribute(
                    "aria-label",
                    "Show password"
                );

                passwordToggle.setAttribute(
                    "title",
                    "Show password"
                );

            }


            const eyeOpen =
                passwordToggle.querySelector(
                    ".ch-eye-open"
                );

            const eyeClosed =
                passwordToggle.querySelector(
                    ".ch-eye-closed"
                );


            if (eyeOpen && eyeClosed) {

                if (isPassword) {

                    eyeOpen.style.display = "none";
                    eyeClosed.style.display = "block";

                } else {

                    eyeOpen.style.display = "block";
                    eyeClosed.style.display = "none";

                }

            }

        });

    }


    /* =========================================
       DARK MODE
       ========================================= */

    const savedTheme =
        localStorage.getItem(
            "creamHavenTheme"
        );


    if (savedTheme === "dark") {

        document.documentElement.classList.add(
            "dark-mode"
        );

    }


    if (darkModeToggle) {

        darkModeToggle.addEventListener(
            "click",
            function () {

                document.documentElement.classList.toggle(
                    "dark-mode"
                );


                const isDark =
                    document.documentElement.classList.contains(
                        "dark-mode"
                    );


                localStorage.setItem(
                    "creamHavenTheme",
                    isDark ? "dark" : "light"
                );

            }
        );

    }


    /* =========================================
       RTL
       ========================================= */

    const savedDirection =
        localStorage.getItem(
            "creamHavenDirection"
        );


    if (savedDirection === "rtl") {

        document.documentElement.setAttribute(
            "dir",
            "rtl"
        );

    } else {

        document.documentElement.setAttribute(
            "dir",
            "ltr"
        );

    }


    if (rtlToggle) {

        rtlToggle.addEventListener(
            "click",
            function () {

                const currentDirection =
                    document.documentElement.getAttribute(
                        "dir"
                    );


                const newDirection =
                    currentDirection === "rtl"
                        ? "ltr"
                        : "rtl";


                document.documentElement.setAttribute(
                    "dir",
                    newDirection
                );


                localStorage.setItem(
                    "creamHavenDirection",
                    newDirection
                );

            }
        );

    }


    /* =========================================
       REMEMBER ME
       ========================================= */

    const savedEmail =
        localStorage.getItem(
            "creamHavenRememberedEmail"
        );


    if (savedEmail && emailInput) {

        emailInput.value = savedEmail;

        if (rememberMe) {
            rememberMe.checked = true;
        }

    }


    /* =========================================
       EMAIL VALIDATION
       ========================================= */

    function isValidEmail(email) {

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

        return emailPattern.test(email);

    }


    /* =========================================
       LOGIN FORM VALIDATION
       ========================================= */

    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                /* -----------------------------
                   GET VALUES
                   ----------------------------- */

                const email =
                    emailInput.value.trim();

                const password =
                    passwordInput.value.trim();


                /* -----------------------------
                   EMPTY EMAIL
                   ----------------------------- */

                if (email === "") {

                    alert(
                        "Please enter your email address."
                    );

                    emailInput.focus();

                    return;

                }


                /* -----------------------------
                   EMAIL FORMAT
                   ----------------------------- */

                if (!isValidEmail(email)) {

                    alert(
                        "Please enter a valid email address."
                    );

                    emailInput.focus();

                    return;

                }


                /* -----------------------------
                   EMPTY PASSWORD
                   ----------------------------- */

                if (password === "") {

                    alert(
                        "Please enter your password."
                    );

                    passwordInput.focus();

                    return;

                }


                /* -----------------------------
                   PASSWORD LENGTH
                   ----------------------------- */

                if (password.length < 6) {

                    alert(
                        "Password must contain at least 6 characters."
                    );

                    passwordInput.focus();

                    return;

                }


                /* -----------------------------
                   REMEMBER ME
                   ----------------------------- */

                if (rememberMe && rememberMe.checked) {

                    localStorage.setItem(
                        "creamHavenRememberedEmail",
                        email
                    );

                } else {

                    localStorage.removeItem(
                        "creamHavenRememberedEmail"
                    );

                }


                /* -----------------------------
                   SUCCESS MESSAGE
                   ----------------------------- */

                alert(
                    "Login successful! Welcome back to Cream Haven."
                );


                /* -----------------------------
                   REDIRECT
                   ----------------------------- */

                window.location.href =
                    "dashboard.html";

            }
        );

    }


    /* =========================================
       SOCIAL LOGIN BUTTONS
       ========================================= */

    const socialButtons =
        document.querySelectorAll(
            ".ch-social-btn"
        );


    socialButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const buttonText =
                    button
                        .querySelector("span")
                        ?.textContent
                        .trim();


                if (buttonText === "Google") {

                    alert(
                        "Google sign-in will be connected here."
                    );

                } else if (buttonText === "Apple") {

                    alert(
                        "Apple sign-in will be connected here."
                    );

                } else if (buttonText === "Facebook") {

                    alert(
                        "Facebook sign-in will be connected here."
                    );

                }

            }
        );

    });

});