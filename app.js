document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll(".about-header");
    
    headers.forEach(header => {
        header.addEventListener("click", function() {
            const content = this.nextElementSibling; // Get the next sibling element, which is .about-content
            if (content.style.opacity === "1") {
                content.style.opacity = "0";
                content.style.transform = "translateX(-100%)";
            } else {
                content.style.opacity = "1";
                content.style.transform = "translateX(0)";
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.getElementById('hamburger-btn');
    var navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
});
