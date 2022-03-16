var burgerMenu = document.querySelector(".hamburger");
var Nav = document.querySelector(".nav-m");
var visibleDiv = 0;

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    Nav.classList.toggle("active");

})
document.querySelectorAll(".nav-m").forEach(n => n.addEventListener("click", () => 
{
    burgerMenu.classList.remove("active");
    Nav.classList.remove("active");

}))
    function showDiv()
    {
      $(".grid").hide();
      $(".grid:eq("+ visibleDiv +")").show();
    }
    showDiv()
  
  function showNext()
  {
    if(visibleDiv== $(".grid").length-1)
    {
      visibleDiv = 0;
    }
    else {
      visibleDiv ++;
    }
    showDiv();
  }
  
  
  function showPrev()
  {
    if (visibleDiv == 0)
    {
      visibleDiv= $(".grid").length-1
    }
    else {
      visibleDiv --;
    }
    showDiv();
  }
  



