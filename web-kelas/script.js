// ================================
// LOADER
// ================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.style.display = "none";

        },500);

    },1200);

});

// ================================
// BACK TO TOP
// ================================

const backTop = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        backTop.style.display="flex";

    }else{

        backTop.style.display="none";

    }

});

backTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ================================
// LIGHTBOX GALERI
// ================================

const galleryItems = document.querySelectorAll(".gallery-item img");

const lightbox = document.querySelector(".lightbox");

const lightboxImage = document.getElementById("lightbox-image");

const closeLightbox = document.querySelector(".close-lightbox");

galleryItems.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightboxImage.src=img.src;

    });

});

closeLightbox.addEventListener("click",()=>{

    lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

});

// ================================
// NAVBAR EFFECT
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.style.background="rgba(0,0,0,.75)";

        header.style.backdropFilter="blur(20px)";

    }else{

        header.style.background="rgba(0,0,0,.35)";

    }

});

// ================================
// SCROLL ANIMATION
// ================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

// ================================
// HAMBURGER MENU
// ================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (navLinks.classList.contains("active")) {

            icon.classList.remove("ri-menu-3-line");
            icon.classList.add("ri-close-line");

        } else {

            icon.classList.remove("ri-close-line");
            icon.classList.add("ri-menu-3-line");

        }

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("ri-close-line");
            icon.classList.add("ri-menu-3-line");

        });

    });

}

// ================================
// ACTIVE MENU
// ================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active-link");

        }

    });

});

// ================================
// SMOOTH SCROLL
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ================================
// HERO PARALLAX
// ================================

const heroImage = document.querySelector(".hero-bg");

window.addEventListener("scroll", () => {

    if (heroImage) {

        heroImage.style.transform =
            `translateY(${window.scrollY * 0.3}px) scale(1.05)`;

    }

});

// ================================
// COUNTER ANIMATION
// ================================

const counters = document.querySelectorAll(".card h1");

const runCounter = (counter) => {

    const target = parseInt(counter.innerText);

    let count = 0;

    const speed = target / 70;

    const update = () => {

        count += speed;

        if (count < target) {

            counter.innerText = Math.floor(count);

            requestAnimationFrame(update);

        } else {

            counter.innerText = target;

        }

    };

    update();

};

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            runCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

// ================================
// RIPPLE BUTTON EFFECT
// ================================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

// ================================
// CURRENT YEAR
// ================================

const year = document.querySelector("#year");

if (year) {

    year.textContent = new Date().getFullYear();

}