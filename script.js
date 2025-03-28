document.addEventListener("DOMContentLoaded", function () {
    const gridItems = document.querySelectorAll(".grid-item");
    const popup = document.getElementById("popup"); // Use one popup reference

    // Function to position the popup
    function positionPopup(event) {
        popup.style.top = `${event.clientY + 10}px`; // Position below the cursor
        popup.style.left = `${event.clientX + 10}px`; // Position to the right of the cursor
    }

    gridItems.forEach(item => {
        // Show popup on hover
        item.addEventListener("mouseenter", function (event) {
            const title = item.getAttribute("data-title");  // Get story title
            const author = item.getAttribute("data-author");  // Get author name
            
            // Update popup content
            popup.innerHTML = `<strong>${title}</strong><br><em>by ${author}</em>`;
            popup.style.display = "block"; // Show popup
            positionPopup(event); // Position popup near cursor
        });

        // Move popup with cursor
        item.addEventListener("mousemove", function (event) {
            positionPopup(event);
        });

        // Hide popup when mouse leaves
        item.addEventListener("mouseleave", function () {
            popup.style.display = "none"; // Hide popup
        });

        // Open detailed story page on click
        item.addEventListener("click", function () {
            const url = item.getAttribute("data-url"); // Get the URL from data attribute
            if (url) {
                window.location.href = url; // Redirect to the detailed page
            }
        });
    });
});
