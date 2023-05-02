const h1 = document.getElementById("heading");
h1.textContent = "Hello,World!";

const button = document.querySelector(".button");
button.style.color = "red";

const buttonListener = document.querySelector(".button");

buttonListener.addEventListener("click", () => {
  h1.style.display = "none";
});

const buttonShow = document.querySelector("");
