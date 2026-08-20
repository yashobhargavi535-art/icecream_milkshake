document.addEventListener("DOMContentLoaded", function () {

    /* =================================================
       ELEMENTS
       ================================================= */

    const form =
        document.getElementById("signupForm");

    const firstName =
        document.getElementById("firstName");

    const lastName =
        document.getElementById("lastName");

    const email =
        document.getElementById("signupEmail");

    const phone =
        document.getElementById("phoneNumber");

    const password =
        document.getElementById("signupPassword");

    const confirmPassword =
        document.getElementById("confirmPassword");

    const terms =
        document.getElementById("termsCheck");

    const darkModeToggle =
        document.getElementById("darkModeToggle");

    const rtlToggle =
        document.getElementById("rtlToggle");


    /* =================================================
       DARK MODE
       ================================================= */

    const savedTheme =
        localStorage.getItem("creamHavenTheme");


    if (savedTheme === "dark") {

        document.documentElement.classList.add(
            "dark-mode"
        );

    }


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


    /* =================================================
       RTL
       ================================================= */

    const savedDirection =
        localStorage.getItem(
            "creamHavenDirection"
        );


    document.documentElement.setAttribute(
        "dir",
        savedDirection === "rtl"
            ? "rtl"
            : "ltr"
    );


    rtlToggle.addEventListener(
        "click",
        function () {

            const current =
                document.documentElement.getAttribute(
                    "dir"
                );


            const next =
                current === "rtl"
                    ? "ltr"
                    : "rtl";


            document.documentElement.setAttribute(
                "dir",
                next
            );


            localStorage.setItem(
                "creamHavenDirection",
                next
            );

        }
    );


    /* =================================================
       PASSWORD VISIBILITY
       ================================================= */

    document
        .querySelectorAll(".ch-eye-btn")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    const target =
                        document.getElementById(
                            button.dataset.target
                        );

                    const open =
                        button.querySelector(
                            ".eye-open"
                        );

                    const closed =
                        button.querySelector(
                            ".eye-closed"
                        );


                    if (target.type === "password") {

                        target.type = "text";

                        open.style.display = "none";

                        closed.style.display = "block";

                    } else {

                        target.type = "password";

                        open.style.display = "block";

                        closed.style.display = "none";

                    }

                }
            );

        });


    /* =================================================
       VALIDATION
       ================================================= */

    function validEmail(value) {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
            value
        );

    }


    function validPhone(value) {

        const numbers =
            value.replace(/\D/g, "");

        return numbers.length >= 10 &&
               numbers.length <= 15;

    }


    /* =================================================
       FORM SUBMIT
       ================================================= */

    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const first =
                firstName.value.trim();

            const last =
                lastName.value.trim();

            const mail =
                email.value.trim();

            const phoneValue =
                phone.value.trim();

            const pass =
                password.value;

            const confirm =
                confirmPassword.value;


            if (!first) {

                alert(
                    "Please enter your first name."
                );

                firstName.focus();

                return;
            }


            if (!last) {

                alert(
                    "Please enter your last name."
                );

                lastName.focus();

                return;
            }


            if (!mail) {

                alert(
                    "Please enter your email address."
                );

                email.focus();

                return;
            }


            if (!validEmail(mail)) {

                alert(
                    "Please enter a valid email address."
                );

                email.focus();

                return;
            }


            if (!phoneValue) {

                alert(
                    "Please enter your phone number."
                );

                phone.focus();

                return;
            }


            if (!validPhone(phoneValue)) {

                alert(
                    "Please enter a valid phone number."
                );

                phone.focus();

                return;
            }


            if (!pass) {

                alert(
                    "Please create a password."
                );

                password.focus();

                return;
            }


            if (pass.length < 6) {

                alert(
                    "Password must contain at least 6 characters."
                );

                password.focus();

                return;
            }


            if (!confirm) {

                alert(
                    "Please confirm your password."
                );

                confirmPassword.focus();

                return;
            }


            if (pass !== confirm) {

                alert(
                    "Passwords do not match."
                );

                confirmPassword.focus();

                return;
            }


            if (!terms.checked) {

                alert(
                    "Please agree to the Terms & Conditions and Privacy Policy."
                );

                terms.focus();

                return;
            }


            /* SUCCESS */

            alert(
                "Your Cream Haven account has been created successfully!"
            );


            window.location.href =
                "login.html";

        }
    );


    /* =================================================
       SOCIAL BUTTONS
       ================================================= */

    document
        .querySelectorAll(".ch-social-btn")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    alert(
                        button.dataset.provider +
                        " sign-up will be connected here."
                    );

                }
            );

        });

});