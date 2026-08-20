document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contact-form");
    const successMessage = document.getElementById("form-success");

    if (!form) {
        console.error("Cream Haven: contact-form not found.");
        return;
    }

    if (!successMessage) {
        console.error("Cream Haven: form-success not found.");
        return;
    }

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        /* Check required fields */
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        /* Hide any previous success message */
        successMessage.classList.remove("is-visible");

        /* Small delay for clean animation */
        setTimeout(function () {

            successMessage.classList.add("is-visible");

            /* Clear entered details */
            form.reset();

            /* Bring success message into view */
            successMessage.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 100);

    });

});

/* =========================================
   BEFORE YOU VISIT FAQ
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const faqItems = document.querySelectorAll(
        ".ch-before-visit__item"
    );

    faqItems.forEach(function (item) {

        const question = item.querySelector(
            ".ch-before-visit__question"
        );

        if (!question) {
            return;
        }

        question.addEventListener("click", function () {

            const isOpen = item.classList.contains("is-open");

            /* Close all other items */

            faqItems.forEach(function (otherItem) {

                otherItem.classList.remove("is-open");

                const otherQuestion =
                    otherItem.querySelector(
                        ".ch-before-visit__question"
                    );

                if (otherQuestion) {
                    otherQuestion.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }

            });


            /* Open selected item */

            if (!isOpen) {

                item.classList.add("is-open");

                question.setAttribute(
                    "aria-expanded",
                    "true"
                );

            }

        });

    });

});
