document.addEventListener("DOMContentLoaded", () => {


// ============================
// SCROLL REVEAL
// ============================

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("active");
}

});

});

reveals.forEach(el => observer.observe(el));


// ============================
// HAMBURGER MENU
// ============================

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if(hamburger && navLinks){

hamburger.addEventListener("click", () => {

navLinks.classList.toggle("active");

});

}


// ============================
// CLOSE MENU WHEN LINK CLICKED
// ============================

document.querySelectorAll(".nav-links a").forEach(link => {

link.addEventListener("click", () => {

navLinks.classList.remove("active");

});

});


// ============================
// ACTIVE NAV LINK ON SCROLL
// ============================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop;

if(pageYOffset >= sectionTop - 200){
current = section.getAttribute("id");
}

});

document.querySelectorAll(".nav-links a").forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){
link.classList.add("active");
}

});

});


// ============================
// CURSOR LIGHT
// ============================

const light = document.querySelector(".cursor-light");

if(light){

document.addEventListener("mousemove", (e) => {

light.style.left = e.clientX + "px";
light.style.top = e.clientY + "px";

});

}

});