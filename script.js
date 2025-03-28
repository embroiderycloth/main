document.addEventListener("DOMContentLoaded", function () {
    const gridItems = document.querySelectorAll(".grid-item");
    const popup = document.getElementById("popup");

    gridItems.forEach(item => {
        // Show popup on hover
        item.addEventListener("mouseenter", function (event) {
            const author = item.getAttribute("data-author"); // Get the author name
            popup.textContent = author;
            popup.style.display = "block";
            popup.style.left = `${event.pageX + 10}px`; // Position near cursor
            popup.style.top = `${event.pageY + 10}px`;
        });

        // Move popup with cursor
        item.addEventListener("mousemove", function (event) {
            popup.style.left = `${event.pageX + 10}px`;
            popup.style.top = `${event.pageY + 10}px`;
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
});
