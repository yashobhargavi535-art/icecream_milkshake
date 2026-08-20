/* =========================================================
   CREAM HAVEN
   ACHIEVEMENT COUNTER
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const achievementSection =
        document.querySelector("#our-achievements");

    const counters =
        document.querySelectorAll(
            ".ch-achievements__number"
        );

    if (!achievementSection || !counters.length) {
        return;
    }


    let hasAnimated = false;


    function animateCounters() {

        if (hasAnimated) {
            return;
        }

        hasAnimated = true;


        counters.forEach(function (counter) {

            const target =
                Number(counter.dataset.count);

            const suffix =
                counter.dataset.suffix || "";

            const duration = 1800;

            const startTime = performance.now();


            function updateCounter(currentTime) {

                const elapsed =
                    currentTime - startTime;

                const progress =
                    Math.min(
                        elapsed / duration,
                        1
                    );


                /* Smooth ease-out */

                const eased =
                    1 - Math.pow(1 - progress, 3);


                const currentValue =
                    Math.floor(
                        target * eased
                    );


                counter.textContent =
                    currentValue.toLocaleString() +
                    suffix;


                if (progress < 1) {

                    requestAnimationFrame(
                        updateCounter
                    );

                } else {

                    counter.textContent =
                        target.toLocaleString() +
                        suffix;
                }
            }


            requestAnimationFrame(
                updateCounter
            );

        });

    }


    /* =====================================================
       START COUNT WHEN SECTION ENTERS VIEW
    ====================================================== */

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        animateCounters();

                        observer.unobserve(
                            achievementSection
                        );

                    }

                });

            },
            {
                threshold: 0.25
            }
        );


    observer.observe(
        achievementSection
    );

});