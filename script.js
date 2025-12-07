const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll down icon functionality
const scrollIcon = document.querySelector('.scroll-down-icon');
if (scrollIcon) {
    scrollIcon.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector('#featured-burgers');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const navMenu = document.querySelector('.nav-menu');

    // Verificar el tamaño de la pantalla y mostrar el menú normalmente en PC
    if (window.innerWidth > 768) {
        navMenu.classList.add('nav-menu-active'); // Asegurar que el menú esté visible en pantallas grandes
        mobileMenuIcon.style.display = 'none'; // Esconder el ícono del menú en pantallas grandes
    } else {
        mobileMenuIcon.style.display = 'block'; // Mostrar el ícono del menú en pantallas móviles
        navMenu.classList.remove('nav-menu-active'); // Ocultar el menú en pantallas pequeñas por defecto
    }

    // Alternar visibilidad del menú al hacer clic en el ícono en dispositivos móviles
    mobileMenuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('nav-menu-active');
    });

    // Cerrar menú si el usuario hace clic fuera del menú o en un enlace
    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !mobileMenuIcon.contains(event.target)) {
            navMenu.classList.remove('nav-menu-active');
        }
    });

    // Reajustar visibilidad del menú si se cambia el tamaño de la pantalla (responsivo)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navMenu.classList.add('nav-menu-active'); // Menú visible en pantallas grandes
            mobileMenuIcon.style.display = 'none'; // Esconder el ícono de menú en pantallas grandes
        } else {
            navMenu.classList.remove('nav-menu-active'); // Menú oculto en pantallas pequeñas
            mobileMenuIcon.style.display = 'block'; // Mostrar el ícono del menú en pantallas pequeñas
        }
    });
});
