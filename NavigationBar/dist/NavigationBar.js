"use strict";
document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.querySelector('.menu-toggle');
    var menuItems = document.querySelector('.menu-items');
    var dropdown = document.querySelector('.dropdown');
    var dropbtn = document.querySelector('.dropbtn');
    menuToggle.addEventListener('click', function () {
        menuToggle.classList.toggle('active'); // Toggle the active class for animation
        menuItems.classList.toggle('active'); // Toggle the visibility of the menu items
    });
    dropbtn.addEventListener('click', function (event) {
        if (dropdown.classList.contains('active')) {
            event.preventDefault();
        }
        dropdown.classList.toggle('active');
    });


    // Close dropdown if clicked outside
    document.addEventListener('click', function (event) {
        if (!dropdown.contains(event.target) && !dropbtn.contains(event.target)) {
            dropdown.classList.remove('active');
        }
    });

    
});
