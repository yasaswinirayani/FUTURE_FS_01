// Selecting the interactive mobile elements
// const mobileMenu = document.getElementById('mobileMenu');
// const navLinks = document.getElementById('navLinks');

// // Toggling active structural states on click
// mobileMenu.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
    
//     // Toggle element icon appearance between Hamburger and Close bars
//     const icon = mobileMenu.querySelector('i');
//     if (navLinks.classList.contains('active')) {
//         icon.classList.replace('fa-bars', 'fa-times');
//     } else {
//         icon.classList.replace('fa-times', 'fa-bars');
//     }
// });

// // Auto close mobile drawer layout on standard navigation link select
// document.querySelectorAll('.nav-links a').forEach(link => {
//     link.addEventListener('click', () => {
//         navLinks.classList.remove('active');
//         mobileMenu.querySelector('i').classList.replace('fa-times', 'fa-bars');
//     });
// });
const mobileMenu = document.getElementById('mobileMenu');
const navRightWrapper = document.querySelector('.nav-right-wrapper');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navRightWrapper.classList.toggle('active');
    
    const icon = mobileMenu.querySelector('i');
    if (navRightWrapper.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-times');
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
    }
});

// Auto-close menu wrapper on mobile when an item is selected
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navRightWrapper.classList.remove('active');
        mobileMenu.querySelector('i').classList.replace('fa-times', 'fa-bars');
    });
});
