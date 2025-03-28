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
// Select all images with the class 'story-image'
const images = document.querySelectorAll('.story-image');
const popup = document.querySelector('.popup');

// Function to display the popup
function showPopup(event) {
    // Get the story title and author from data attributes
    const title = event.target.getAttribute('data-title');
    const author = event.target.getAttribute('data-author');

    // Set the content of the popup
    popup.innerHTML = `<strong>${title}</strong><br><em>by ${author}</em>`;
    
    // Position the popup near the image
    popup.style.top = `${event.clientY + 10}px`;
    popup.style.left = `${event.clientX + 10}px`;

    // Show the popup
    popup.style.display = 'block';
}
    
});
