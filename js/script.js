var burgerMenu = document.querySelector(".hamburger");
var Nav = document.querySelector(".nav-m");


burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    Nav.classList.toggle("active");

})
document.querySelectorAll(".nav-m").forEach(n => n.addEventListener("click", () => 
{
    burgerMenu.classList.remove("active");
    Nav.classList.remove("active");

}))