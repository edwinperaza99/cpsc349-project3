function gameNav() {
  const mainNav = document.querySelectorAll(".main-nav");
  mainNav.forEach((elem) => elem.classList.add("hidden"));

  const gameNav = document.querySelectorAll(".game-nav");
  gameNav.forEach((elem) => {
    elem.classList.remove("hidden");
    elem.classList.add("flex");
  });

  const exitBtn = document.getElementById("exit-btn");
  exitBtn.classList.remove("hidden");
}

export default function toggleGame() {
  const home = document.getElementById("home");
  const game = document.getElementById("game");
  const footerTxt = document.getElementById("footer-txt");

  home.classList.add("hidden");
  game.classList.remove("hidden");
  game.classList.add("flex");
  footerTxt.classList.add("hidden");

  gameNav();
}
