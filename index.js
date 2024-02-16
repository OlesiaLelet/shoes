 function addListForBurger() {
   const showNav = document.getElementById("show-burger");
   const hide=document.getElementById("hide-burger")
   const showedNav = document.getElementById("showed-m");
  
   showNav.addEventListener("click", function() {
     console.log(" Hello");
    showedNav.classList.add("burger-menu--show");
    })
    hide.addEventListener("click", function() {
    showedNav.remove("burger-menu--show");

    })  
 }
 addListForBurger() 