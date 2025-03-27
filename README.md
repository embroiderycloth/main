<header>

<!--
  <<< Author notes: Course header >>>
  Include a 1280×640 image, course title in sentence case, and a concise description in emphasis.
  In your repository settings: enable template repository, add your 1280×640 social image, auto delete head branches.
  Add your open source license, GitHub uses MIT license.
-->

# GitHub Pages

_Create a site or blog from your GitHub repositories with GitHub Pages._

</header>

## New Feature: 3x3 Image Grid with Author Descriptions and Story Links

### Overview

This repository now includes a feature to display a 3x3 grid of images on the website. When you hover over an image, a pop-up will display the description of the authors attributed to that image. Clicking on the image will navigate to a page with stories by those authors.

### Implementation

1. **HTML Structure**: The grid layout is built using a simple HTML structure.
2. **CSS Styling**: The grid and hover effects are styled using CSS.
3. **JavaScript Functionality**: JavaScript handles the hover and click events.

### Instructions

#### Step 1: Set up the HTML structure

Create a file named `index.html` with the following content:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Grid</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="grid-container">
        <div class="grid-item" data-author="Author 1" data-url="story1.html"><img src="image1.jpg" alt="Image 1"></div>
        <div class="grid-item" data-author="Author 2" data-url="story2.html"><img src="image2.jpg" alt="Image 2"></div>
        <div class="grid-item" data-author="Author 3" data-url="story3.html"><img src="image3.jpg" alt="Image 3"></div>
        <div class="grid-item" data-author="Author 4" data-url="story4.html"><img src="image4.jpg" alt="Image 4"></div>
        <div class="grid-item" data-author="Author 5" data-url="story5.html"><img src="image5.jpg" alt="Image 5"></div>
        <div class="grid-item" data-author="Author 6" data-url="story6.html"><img src="image6.jpg" alt="Image 6"></div>
        <div class="grid-item" data-author="Author 7" data-url="story7.html"><img src="image7.jpg" alt="Image 7"></div>
        <div class="grid-item" data-author="Author 8" data-url="story8.html"><img src="image8.jpg" alt="Image 8"></div>
        <div class="grid-item" data-author="Author 9" data-url="story9.html"><img src="image9.jpg" alt="Image 9"></div>
    </div>
    <div id="popup" class="popup"></div>
    <script src="scripts.js"></script>
</body>
</html>
