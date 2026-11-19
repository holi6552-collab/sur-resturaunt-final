
/* Mobile Hamburger Menu */
document.addEventListener("DOMContentLoaded", function () {
    // Find the menu button and navigation
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".site-nav");

    if (!menuButton || !navigation) return;

    // Open and close the menu
    menuButton.addEventListener("click", function () {
        const isOpen = navigation.classList.toggle("is-open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.querySelector(".menu-icon").textContent = isOpen ? "✕" : "☰";
    });

    // Close menu when a link is clicked
    navigation.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navigation.classList.remove("is-open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.querySelector(".menu-icon").textContent = "☰";
        });
    });
});
