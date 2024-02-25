

function addListForBurger() {
  const showNav = document.getElementById("show-burger");
  const hide = document.getElementById("hide-burger");
  const showedNav = document.getElementById("showed-m");

  showNav.addEventListener("click", function () {
    showedNav.classList.add("burger-menu--show");
  });
  hide.addEventListener("click", function () {
    showedNav.classList.remove("burger-menu--show");
  });
}

addListForBurger();