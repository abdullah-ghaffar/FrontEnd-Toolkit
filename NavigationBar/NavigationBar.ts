document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle') as HTMLElement;
    const menuItems = document.querySelector('.menu-items') as HTMLElement;
    const dropdown = document.querySelector('.dropdown') as HTMLElement;
    const dropbtn = document.querySelector('.dropbtn') as HTMLAnchorElement;

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active'); // Toggle the active class for animation
        menuItems.classList.toggle('active'); // Toggle the visibility of the menu items
    });

    dropbtn.addEventListener('click', (event) => {
        if (dropdown.classList.contains('active')) {
            event.preventDefault();
        }

        dropdown.classList.toggle('active');
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target as Node) && !dropbtn.contains(event.target as Node)) {
            dropdown.classList.remove('active');
        }
    });
});
