let burgerMenu = document.querySelector(".menu");
let navList = document.querySelector(".list");

burgerMenu.addEventListener("click", () => {
  navList.classList.add("open");
});

document.addEventListener("click", (event) => {
  if (event.target !== burgerMenu) {
    navList.classList.remove("open");
  }
});
