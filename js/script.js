/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


/*========== sticky navbar ==========*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


/*========== remove menu icon navbar when click navbar link (scroll) ==========*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');



/*========== swiper ==========*/


};

let homeContentToggleState = true;

function toggleHomeContent() {
    const homeImg = document.querySelector('.home-img img');

    if (homeContentToggleState) {
        document.querySelector('.home-content h3').innerText = 'Hello, I am';
        document.querySelector('.home-content h1').innerText = 'Emman Badiang';
        document.querySelector('.home-content p').innerText = '自分を信じて';
        document.querySelector('.home-content .social-media').innerHTML = `
            <a href="https://www.facebook.com/badiang.emmanuel/"><i class='bx bxl-facebook'></i></a>
            <a href="https://www.instagram.com/Syang_u10/"><i class='bx bxl-instagram'></i></a>
            <a href="mailto:emmanuelbadiang10@gmail.com"><i class='bx bxl-gmail'></i></a>
        `;
        homeImg.src = 'images/home1.png';
    } else {
        document.querySelector('.home-content h3').innerText = 'Hello, I am';
        document.querySelector('.home-content h1').innerText = 'Jomari R. Sunogan';
        document.querySelector('.home-content p').innerText = '偉大な人でさえ初心者だった';
        document.querySelector('.home-content .social-media').innerHTML = `
            <a href="https://www.facebook.com/unorthodox78/"><i class='bx bxl-facebook'></i></a>
            <a href="https://www.instagram.com/zzz_zzz6445/"><i class='bx bxl-instagram'></i></a>
            <a href="https://t.me/JomariSunogan"><i class='bx bxl-telegram'></i></a>
            <a href="mailto:jomarisunogan23@gmail.com"><i class='bx bxl-gmail'></i></a>
        `;
        homeImg.src = 'images/home.png';
    }

    homeContentToggleState = !homeContentToggleState;
}

/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};
/*========== Scroll Reveal ==========*/
function initScrollReveal() {
    if (window.innerWidth > 768) {
        ScrollReveal({
            reset: true,
            distance: '80px',
            duration: 2000,
            delay: 200
        });

        ScrollReveal().reveal('.home-content h3, .home-content .social-media, .home-content .btn, .home-content .switch, .heading', {
            origin: 'top',
        });

        ScrollReveal().reveal('.home-img img, .portfolio-box, .testimonial-wrapper, .contact form', {
            origin: 'bottom'
        });

        ScrollReveal().reveal('.home-content h1, .services-container', {
            origin: 'left'
        });

        ScrollReveal().reveal('.home-content h3, .skills-container, .home-content p, .about-content', {
            origin: 'right'
        });
    } else {
        if (ScrollReveal().isSupported()) {
            ScrollReveal().destroy();
        }
    }
}

initScrollReveal();

window.addEventListener('resize', initScrollReveal);


const darkModeToggle = document.querySelector(".dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});
