document.addEventListener("DOMContentLoaded", function () {
    const gridItems = document.querySelectorAll(".grid-item");
    const popup = document.getElementById("popup");

    gridItems.forEach(item => {
        // Show popup on hover
        item.addEventListener("mouseenter", function (event) {
            const description = item.getAttribute("data-author"); // Get description text
            popup.textContent = description;
            popup.style.display = "block";
            positionPopup(event); // Position popup near cursor
        });

        // Move popup with cursor
        item.addEventListener("mousemove", function (event) {
            positionPopup(event);
        });

        // Hide popup when mouse leaves
        item.addEventListener("mouseleave", function () {
            popup.style.display = "none";
        });

        // Open detailed story page on click
        item.addEventListener("click", function () {
            const url = item.getAttribute("data-url"); // Get the URL from data attribute
            if (url) {
                window.location.href = url; // Redirect to the detailed page
            }
        });
    });

    // Function to position the popup dynamically
    function positionPopup(event) {
        popup.style.left = `${event.pageX + 10}px`; // Position near cursor
        popup.style.top = `${event.pageY + 10}px`;
    }
});
