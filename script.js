/*Get started button*/
function press(){
    window.location.href = "Guest_AboutPage.html";
}

/*Hamburger Menu*/
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.header-right');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open'); /*Preventing the page from scrolling when the menu is open to avoid overlapping issues*/
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        RightHeader.classList.remove("active");
    }));
});

/*Scroll Transition*/
const observer = new IntersectionObserver((entries) =>{
    /*Can observe multiple entries at a time*/
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show'); /*To show the class*/
        } else{ /*To show it multiple times*/
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el)); /*Telling the observer what to observe */

