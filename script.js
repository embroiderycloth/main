document.addEventListener('DOMContentLoaded', function() {
    const gridItems = document.querySelectorAll('.grid-item');
    const popup = document.getElementById('popup');

    gridItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            const author = item.getAttribute('data-author');
            popup.textContent = author;
            popup.style.display = 'block';
            popup.style.left = `${item.getBoundingClientRect().left}px`;
            popup.style.top = `${item.getBoundingClientRect().bottom}px`;
        });

        item.addEventListener('mouseout', function() {
            popup.style.display = 'none';
        });

        item.addEventListener('click', function() {
            const url = item.getAttribute('data-url');
            window.location.href = url;
        });
    });
});
