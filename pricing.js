document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       SPECIAL OCCASIONS
       Scroll Reveal
       ===================================================== */

    const packages =
        document.querySelectorAll(
            ".ch-party-package"
        );


    if (!packages.length) {
        return;
    }


    const revealObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "party-package-visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );
                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    packages.forEach(function (packageCard) {

        revealObserver.observe(
            packageCard
        );

    });


    /* =====================================================
       CARD IMAGE PARALLAX
       Image responds to entire card hover
       ===================================================== */

    packages.forEach(function (card) {

        const visual =
            card.querySelector(
                ".ch-party-package__visual"
            );

        const image =
            card.querySelector(
                ".ch-party-package__visual img"
            );


        if (!visual || !image) {
            return;
        }


        card.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    (
                        event.clientX -
                        rect.left
                    ) /
                    rect.width;


                const y =
                    (
                        event.clientY -
                        rect.top
                    ) /
                    rect.height;


                const moveX =
                    (x - 0.5) * 7;


                const moveY =
                    (y - 0.5) * 5;


                image.style.transform =
                    `scale(1.13) translate(${moveX}px, ${moveY}px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                image.style.transform =
                    "scale(1.02) translate(0, 0)";

            }
        );

    });


    /* =====================================================
       BUTTON RIPPLE
       ===================================================== */

    const buttons =
        document.querySelectorAll(
            ".ch-party-package__button"
        );


    buttons.forEach(function (button) {

        button.addEventListener(
            "click",
            function (event) {

                const ripple =
                    document.createElement(
                        "span"
                    );


                ripple.className =
                    "party-button-ripple";


                const rect =
                    button.getBoundingClientRect();


                ripple.style.left =
                    `${event.clientX - rect.left}px`;


                ripple.style.top =
                    `${event.clientY - rect.top}px`;


                button.appendChild(
                    ripple
                );


                setTimeout(function () {

                    ripple.remove();

                }, 600);

            }
        );

    });

});

document.addEventListener("DOMContentLoaded", function () {

    const faqItems =
        document.querySelectorAll(
            ".ch-pricing-faq__item"
        );


    if (!faqItems.length) {
        return;
    }


    faqItems.forEach(function (item) {

        const question =
            item.querySelector(
                ".ch-pricing-faq__question"
            );


        if (!question) {
            return;
        }


        question.addEventListener(
            "click",
            function () {

                const currentlyOpen =
                    item.classList.contains(
                        "is-open"
                    );


                /*
                 * Close every other FAQ
                 */

                faqItems.forEach(
                    function (otherItem) {

                        if (
                            otherItem !== item
                        ) {

                            otherItem.classList.remove(
                                "is-open"
                            );


                            const otherQuestion =
                                otherItem.querySelector(
                                    ".ch-pricing-faq__question"
                                );


                            if (otherQuestion) {

                                otherQuestion.setAttribute(
                                    "aria-expanded",
                                    "false"
                                );

                            }

                        }

                    }
                );


                /*
                 * Toggle current FAQ
                 */

                if (currentlyOpen) {

                    item.classList.remove(
                        "is-open"
                    );

                    question.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                } else {

                    item.classList.add(
                        "is-open"
                    );

                    question.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                }

            }
        );

    });

});

document.addEventListener("DOMContentLoaded", function () {

    const form =
        document.getElementById(
            "chNewsletterForm"
        );

    const email =
        document.getElementById(
            "chNewsletterEmail"
        );

    const success =
        document.getElementById(
            "chNewsletterSuccess"
        );


    if (!form || !email || !success) {
        return;
    }


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            if (!email.checkValidity()) {

                email.reportValidity();

                return;
            }


            success.textContent =
                "Welcome to the sweet side!";


            success.classList.add(
                "is-visible"
            );


            form.reset();


            setTimeout(
                function () {

                    success.classList.remove(
                        "is-visible"
                    );

                },
                5000
            );

        }
    );

});