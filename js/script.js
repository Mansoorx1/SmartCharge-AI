/* =========================
   MOBILE MENU
========================= */

document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.querySelector(".menu-btn");

    const navbar =
        document.getElementById("navbar") ||
        document.getElementById("mobileMenu");

    if (menuBtn && navbar) {

        menuBtn.addEventListener("click", function () {

            navbar.classList.toggle("active");

        });

    }

});


/* =========================
   CHARGER SELECTION
========================= */

let selectedCharger = null;

const chargerCards = document.querySelectorAll(".charger-card.available");

chargerCards.forEach(function (card) {

    card.addEventListener("click", function () {

        // Remove selection from all chargers
        chargerCards.forEach(function (item) {
            item.classList.remove("selected");
        });

        // Select clicked charger
        card.classList.add("selected");

        // Store charger name
        selectedCharger =
            card.querySelector("h3").textContent;

    });

});


/* =========================
   CONTINUE BOOKING
========================= */

const continueBtn =
    document.querySelector(".continue-btn");

if (continueBtn) {

    continueBtn.addEventListener("click", function () {

        const date =
            document.getElementById("bookingDate").value;

        const time =
            document.getElementById("bookingTime").value;


        if (!selectedCharger) {

            alert("Please select an available charger.");

            return;
        }


        if (!date || !time) {

            alert("Please select a date and time.");

            return;
        }


        alert(
            "Charger selected: " +
            selectedCharger +
            "\nDate: " +
            date +
            "\nTime: " +
            time
        );

    });

}