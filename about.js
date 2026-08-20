document.addEventListener("DOMContentLoaded", function () {

    const storySection =
        document.querySelector(".ch-story-section");

    if (!storySection) {
        return;
    }

    const storyObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        storySection.classList.add(
                            "ch-story-visible"
                        );

                        observer.unobserve(
                            storySection
                        );
                    }

                });

            },
            {
                threshold: 0.18
            }
        );

    storyObserver.observe(storySection);

});

/* =========================================================
   CREAM HAVEN — OUR EVOLUTION REVEAL
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const evolutionSection =
        document.querySelector(".ch-evolution-section");

    if (!evolutionSection) {
        return;
    }

    const observer =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        evolutionSection.classList.add(
                            "ch-evolution-visible"
                        );

                        observer.unobserve(
                            evolutionSection
                        );
                    }

                });

            },
            {
                threshold: 0.15
            }
        );

    observer.observe(evolutionSection);

});

/* =========================================================
   CREAM HAVEN
   WHAT MAKES US SPECIAL — REVEAL
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const section =
        document.querySelector("#what-makes-us-special");

    if (!section) {
        return;
    }

    const observer =
        new IntersectionObserver(
            function (entries, observerInstance) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        section.classList.add(
                            "ch-special-active"
                        );

                        observerInstance.unobserve(section);
                    }

                });

            },
            {
                threshold: 0.15
            }
        );

    observer.observe(section);

});

/* =========================================================
   CREAM HAVEN — OUR JOURNEY ANIMATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const journeyElements = document.querySelectorAll(
        ".ch-journey-story, .ch-journey-highlight"
    );

    if (!journeyElements.length) return;


    const journeyObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("ch-visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    journeyElements.forEach((element) => {
        journeyObserver.observe(element);
    });

});

/* =========================================================
   CREAM HAVEN — ABOUT CTA
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const ctaButtons = document.querySelectorAll(".about-cta-btn");

    ctaButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            this.classList.add("cta-clicked");

            setTimeout(() => {
                this.classList.remove("cta-clicked");
            }, 300);

        });

    });

});

// =========================================================
// CREAM HAVEN — ABOUT HERO
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    const heroButtons = document.querySelectorAll(".about-hero-btn");

    heroButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            this.classList.add("hero-button-active");

            setTimeout(function () {
                button.classList.remove("hero-button-active");
            }, 250);

        });

    });

});

/* =========================================================
   CREAM HAVEN — DARK MODE + RTL
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const darkModeButton = document.getElementById("darkModeToggle");
    const rtlButton = document.getElementById("rtlToggle");

    const html = document.documentElement;


    /* =====================================================
       DARK MODE
    ===================================================== */

    const savedTheme = localStorage.getItem("creamHavenTheme");

    if (savedTheme === "dark") {
        html.classList.add("dark-mode");
    }


    if (darkModeButton) {

        darkModeButton.addEventListener("click", function () {

            html.classList.toggle("dark-mode");

            const isDark =
                html.classList.contains("dark-mode");

            localStorage.setItem(
                "creamHavenTheme",
                isDark ? "dark" : "light"
            );

            darkModeButton.setAttribute(
                "aria-pressed",
                isDark ? "true" : "false"
            );
        });

    }

});


/* =====================================================
   CREAM HAVEN - RTL TOGGLE
   ===================================================== */

const html = document.documentElement;
const rtlButton = document.getElementById("rtlToggle");

/* -----------------------------------------------------
   Load saved direction
   ----------------------------------------------------- */

const savedDirection =
    localStorage.getItem("creamHavenDirection");

if (savedDirection === "rtl") {

    html.setAttribute("dir", "rtl");

} else {

    html.setAttribute("dir", "ltr");

}


/* -----------------------------------------------------
   RTL Button
   ----------------------------------------------------- */

if (rtlButton) {

    /* Set correct button state when page loads */
    rtlButton.setAttribute(
        "aria-pressed",
        html.getAttribute("dir") === "rtl"
            ? "true"
            : "false"
    );


    /* Toggle RTL / LTR */
    rtlButton.addEventListener("click", function () {

        const currentDirection =
            html.getAttribute("dir");


        const newDirection =
            currentDirection === "rtl"
                ? "ltr"
                : "rtl";


        /* Apply new direction */
        html.setAttribute(
            "dir",
            newDirection
        );


        /* Save preference */
        localStorage.setItem(
            "creamHavenDirection",
            newDirection
        );


        /* Update accessibility state */
        rtlButton.setAttribute(
            "aria-pressed",
            newDirection === "rtl"
                ? "true"
                : "false"
        );

    });

}

/* =========================================================
   OUR CRAFT - CLICK TO REVEAL
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const craftCards =
        document.querySelectorAll(
            ".ch-craft-gallery-card"
        );

    craftCards.forEach(function (card) {

        const imageButton =
            card.querySelector(
                ".ch-craft-gallery-image"
            );

        if (!imageButton) {
            return;
        }

        imageButton.addEventListener(
            "click",
            function () {

                const isActive =
                    card.classList.contains(
                        "is-active"
                    );


                /* Close every other card */

                craftCards.forEach(function (otherCard) {

                    otherCard.classList.remove(
                        "is-active"
                    );

                    const otherButton =
                        otherCard.querySelector(
                            ".ch-craft-gallery-image"
                        );

                    if (otherButton) {

                        otherButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                });


                /* Open selected card */

                if (!isActive) {

                    card.classList.add(
                        "is-active"
                    );

                    imageButton.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                }

            }
        );

    });

});