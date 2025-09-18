

window.addEventListener('DOMContentLoaded', () => {
    const NavToggle = document.getElementById('nav-toggle');
    const Hero = document.getElementById('Hero');
    const header = document.getElementById('header');
    const scrollBtn = document.getElementById('scrollBtn')
    const target = document.getElementById('section2')
    const collapsedNavbar = document.getElementById('collapsedNavbar')



    scrollBtn.addEventListener('click', () => {
        console.log('clicked');
        target.scrollIntoView({ behavior: 'smooth' })
    })
    const images = [
        "assets/images/Home-Page/cake_w_logo_1.webp",
        "assets/images/Home-Page/pizza_w_logo_1.webp",
        "assets/images/Home-Page/ravioli_w_logo_1.webp"
    ];
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    let index = 0;
    const changeBackground = () => {
        Hero.style.backgroundImage = `url(${images[index]})`;
        index = (index + 1) % images.length;
    };

    changeBackground();
    setInterval(changeBackground, 6000);

    NavToggle.addEventListener('click', () => {
        NavToggle.classList.toggle('clicked');
        collapsedNavbar.classList.toggle('shown');
    })

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY > 80;
        Object.assign(header.style, {
            backgroundColor: scrolled ? 'black' : 'transparent',
        });



    });
    window.addEventListener('load', () => {
        const target = document.getElementById('scrollBtn'); // element you want at bottom
        const viewportHeight = window.innerHeight;             // visible height of the screen
        const targetRect = target.getBoundingClientRect();     // position relative to viewport
        const currentScroll = window.scrollY;                 // current scroll position

        // Calculate scroll needed so the element's bottom aligns with viewport bottom
        const scrollToY = currentScroll + targetRect.bottom - viewportHeight + 10;

        window.scrollTo({
            top: scrollToY,
            behavior: 'smooth'
        });
    });


});
