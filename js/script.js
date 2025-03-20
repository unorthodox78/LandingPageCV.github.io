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


/*========== dark light mode ==========*/


/*========== scroll reveal ==========*/

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
        document.querySelector('.home-content p').innerText = '人生はつらい';
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

