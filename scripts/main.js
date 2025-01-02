document.addEventListener("DOMContentLoaded", function() {
    // Zvýraznění položek menu při najetí myší
    const menuItems = document.querySelectorAll("nav ul li a");

    menuItems.forEach(item => {
        item.addEventListener("mouseenter", function() {
            item.style.color = "#333";
            item.style.backgroundColor = "#64ff6c";
        });

        item.addEventListener("mouseleave", function() {
            item.style.color = "white";
            item.style.backgroundColor = "";
        });
    });

    // Nastavení aktuálního roku v patičce
    const currentYearElement = document.getElementById("current-year");
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;

    // Přepínání tmavého režimu
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    darkModeToggle.addEventListener("click", function() {
        body.classList.toggle("dark-mode");

        // Uložení režimu do localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });

    // Načtení režimu při startu
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
    }
});