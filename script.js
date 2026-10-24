document.addEventListener("DOMContentLoaded", function () {

    // ================= LANGUAGE SYSTEM =================

    const languageSelector = document.getElementById("languageSelector");

    if (languageSelector) {

        languageSelector.addEventListener("change", function () {

            const language = this.value;

            const elements = document.querySelectorAll("[data-en]");

            elements.forEach(function (element) {

                if (language === "en") {
                    element.textContent =
                        element.getAttribute("data-en");
                }

                else if (language === "mr") {
                    element.textContent =
                        element.getAttribute("data-mr");
                }

                else if (language === "hi") {
                    element.textContent =
                        element.getAttribute("data-hi");
                }

            });

            // Change HTML language
            document.documentElement.lang = language;

        });

    }


    // ================= MOBILE MENU =================

    window.toggleMenu = function () {

        const navbar = document.querySelector(".navbar");

        if (navbar) {
            navbar.classList.toggle("active");
        }

    };


    // ================= NAVIGATION =================

    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            const navbar = document.querySelector(".navbar");

            if (navbar) {
                navbar.classList.remove("active");
            }

        });

    });


    // ================= CONSOLE MESSAGE =================

    console.log("Kothare Welding Works website loaded successfully.");

});