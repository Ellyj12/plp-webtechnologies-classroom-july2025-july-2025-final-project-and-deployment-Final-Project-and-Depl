// ================================
// DOMContentLoaded: Wait until the DOM is fully loaded
// ================================
window.addEventListener('DOMContentLoaded', () => {

    // ================================
    // Element References
    // ================================
    const NavToggle = document.getElementById('nav-toggle');
    const Hero = document.getElementById('Hero');
    const header = document.getElementById('header');
    const scrollBtn = document.getElementById('scrollBtn');
    const target = document.getElementById('mainContent');
    const collapsedNavbar = document.getElementById('collapsedNavbar');
    const menuDropdownBtn = document.getElementById('menuDropdownBtn');
    const menuDropdown = document.getElementById('menuDropdown');
    const footerMenuBtn = document.getElementById('footerMenuBtn');
    const collapsedMenuDropdownBtn = document.getElementById('collapsedMenuDropdownBtn');
    const menuItems = document.getElementById('menuItems');

    // ================================
    // Dropdown / Menu Functionality
    // ================================

    // Toggle collapsed menu items in mobile navbar
    collapsedMenuDropdownBtn.addEventListener('click', () => {
        menuItems.classList.toggle('shown');
    });

    // Footer menu button click
    footerMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();  // Prevent document click from closing it immediately
        menuDropdown.classList.toggle('shown');
        collapsedNavbar.classList.toggle('shown');
        NavToggle.classList.toggle('clicked');

        // Add 'shown' class to menuItems after a delay (500ms)
        setTimeout(() => {
            menuItems.classList.add('shown');
        }, 500);
    });

    // Dropdown button inside the menu
    menuDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent click from bubbling
        menuDropdown.classList.toggle('shown');
    });

    // Close dropdown if clicking outside
    document.addEventListener('click', (e) => {
        if (!menuDropdown.contains(e.target) && !menuDropdownBtn.contains(e.target)) {
            menuDropdown.classList.remove('shown');
        }
    });

    // NavToggle for collapsed navbar
    NavToggle.addEventListener('click', () => {
        NavToggle.classList.toggle('clicked');
        collapsedNavbar.classList.toggle('shown');
        menuItems.classList.remove('shown'); // reset menu items
    });

    // ================================
    // Scroll Button Functionality
    // ================================
    scrollBtn.addEventListener('click', () => {
        target.scrollIntoView({ behavior: 'smooth' });
    });

    // Scroll to show scrollBtn at bottom on page load
    window.addEventListener('load', () => {
        const targetRect = scrollBtn.getBoundingClientRect();
        const scrollToY = window.scrollY + targetRect.bottom - window.innerHeight + 10;

        window.scrollTo({
            top: scrollToY,
            behavior: 'smooth'
        });
    });

    // ================================
    // Header Background on Scroll
    // ================================
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY > 80;
        header.style.backgroundColor = scrolled ? 'black' : 'transparent';
        console.log(header)
    });

    // ================================
    // Hero Background Image Slider
    // ================================
    const images = [
        "assets/images/Home-Page/cake_w_logo_1.webp",
        "assets/images/Home-Page/pizza_w_logo_1.webp",
        "assets/images/Home-Page/ravioli_w_logo_1.webp"
    ];

    // Preload images
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    let index = 0;
    const changeBackground = () => {
        Hero.style.backgroundImage = `url(${images[index]})`;
        index = (index + 1) % images.length;
    };

    changeBackground();            // set initial background
    setInterval(changeBackground, 6000); // change every 6 seconds

    // ================================
    // GSAP Animations
    // ================================
    gsap.registerPlugin(ScrollTrigger, SplitText, TextPlugin);

    // Animate text blocks on scroll
    gsap.utils.toArray('.mainContentText').forEach(el => {
        gsap.from(el, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: "top 65%",
                toggleActions: "play none none none"
            }
        });
    });

    // Animate image blocks on scroll
    gsap.utils.toArray('.mainContentImage').forEach(el => {
        gsap.from(el, {
            scale: 0.9,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top 65%",
                toggleActions: "play none none none"
            }
        });
    });

});
