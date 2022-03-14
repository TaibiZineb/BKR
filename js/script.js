var burgerMenu = document.querySelector(".hamburger");
var Nav = document.querySelector(".nav-m");

var slideIndex = 1;
showSlides(slideIndex);

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    Nav.classList.toggle("active");

})
document.querySelectorAll(".nav-m").forEach(n => n.addEventListener("click", () => 
{
    burgerMenu.classList.remove("active");
    Nav.classList.remove("active");

}))


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("custom-slider");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
